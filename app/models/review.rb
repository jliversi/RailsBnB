# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  rating     :integer          not null
#  body       :text             not null
#  booking_id :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :rating, :booking_id, :author_id, presence: true
  validates :rating, numericality: { greater_than: 0, less_than: 6 }

  belongs_to :booking
  has_one :spot,
    through: :booking
  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  


end 
