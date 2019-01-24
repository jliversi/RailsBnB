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
  validates :lng, :lat, :num_rooms, :num_guests, :num_bathrooms, :host_id, presence: true
  validates :title, :address, presence: true, uniqueness: true 

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
      ratings.push(review.rating)
    end 
    return (ratings.sum / ratings.length.to_f)
  end 

  
  

  
end 
