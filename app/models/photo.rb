# == Schema Information
#
# Table name: photos
#
#  id      :bigint(8)        not null, primary key
#  url     :string           not null
#  spot_id :integer          not null
#

class Photo < ApplicationRecord
  validates :url, :spot_id, presence: true

  belongs_to :spot


end 
