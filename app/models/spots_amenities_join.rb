# == Schema Information
#
# Table name: spots_amenities_joins
#
#  id         :bigint(8)        not null, primary key
#  amenity_id :integer          not null
#  spot_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SpotsAmenitiesJoin < ApplicationRecord

  belongs_to :spot
  belongs_to :amenity 

end 
