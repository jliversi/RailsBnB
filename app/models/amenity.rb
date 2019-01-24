# == Schema Information
#
# Table name: amenities
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Amenity < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :spots_amenities_joins,
    class_name: "SpotsAmenitiesJoin",
    foreign_key: :amenity_id

  has_many :spots,
    through: :spots_amenities_joins

end 
