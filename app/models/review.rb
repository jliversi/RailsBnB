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
  validates :body, :booking_id, :author_id, presence: true
  validates :accuracy, :communication, :cleanliness, :location, :check_in, :value, numericality: { greater_than: 0, less_than: 6 }
  validates :accuracy, :communication, :cleanliness, :location, :check_in, :value, presence: true
  belongs_to :booking
  has_one :spot,
    through: :booking
  belongs_to :author,
    class_name: "User",
    foreign_key: :author_id

  def average_rating
    total = self.accuracy + self.communication + self.cleanliness + self.location + self.check_in + self.value
    return total/6.0
  end 


end 
