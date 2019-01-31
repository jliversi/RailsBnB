# == Schema Information
#
# Table name: spots
#
#  id            :bigint(8)        not null, primary key
#  address       :string           not null
#  lng           :float            not null
#  lat           :float            not null
#  title         :string           not null
#  description   :text
#  price         :integer          not null
#  num_rooms     :integer          not null
#  num_guests    :integer          not null
#  num_bathrooms :integer          not null
#  host_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'date'

class Spot < ApplicationRecord 
  validates :lng, :lat, :num_rooms, :num_guests, :num_bathrooms, :num_beds, :host_id, :address, presence: true
  validates :title, presence: true, uniqueness: true 

  has_many :bookings,
    class_name: "Booking",
    foreign_key: :spot_id

  has_many :spots_amenities_joins,
    class_name: "SpotsAmenitiesJoin",
    foreign_key: :spot_id

  has_many :amenities,
    through: :spots_amenities_joins

  has_many :reviews,
    class_name: "Review",
    through: :bookings

 has_many :photos,
    class_name: "Photo",
    foreign_key: :spot_id


  belongs_to :host,
    class_name: "User",
    foreign_key: :host_id 

  

  def average_rating
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.average_rating)
    end 
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_accuracy
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.accuracy)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_communication
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.communication)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_cleanliness
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.cleanliness)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_location
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.location)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_check_in
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.check_in)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def avg_value
    ratings = []
    self.reviews.each do |review|
      ratings.push(review.value)
    end
    return (ratings.sum / ratings.length.to_f)
  end 

  def Spot.parse_date_object(date)
    y = date.year
    m = date.month
    d = date.day
    Date.new(y,m,d)
  end

  def Spot.parse_date_string(date_string)
    just_date = date_string.split("T")[0]
    vals_arr = just_date.split("-").map {|num| num.to_i}
    Date.new(vals_arr[0], vals_arr[1], vals_arr[2])
  end


  def Spot.date_range(start_date, end_date)
    s = Spot.parse_date_object(start_date)
    e = Spot.parse_date_object(end_date)
    result = [s]
    i = 1
    while i < (e - s).to_i
      result << (s + i)
      i += 1
    end 
    result 
  end 

  def unavailable_dates 
    today = Date.today
    result = []
    self.bookings.each do |b|
      if Spot.parse_date_object(b.end_date) > today
        result += Spot.date_range(b.start_date, b.end_date)
      end 
    end
    result
  end

  def dates_available?(dates_arr)
    parsed_arr = dates_arr.map { |date| Spot.parse_date_object(date) }
    unavailable = self.unavailable_dates
    parsed_arr.each do |d|
      return false if unavailable.include?(d)
    end 
    true 
  end 


  
  

  
end 
