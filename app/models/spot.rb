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




  
  

  
end 
