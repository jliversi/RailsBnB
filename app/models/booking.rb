# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  status     :boolean          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  spot_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# IMPORTANT
# DATES COMING AS STRING MUST BE FORMATTED AS
  # DAY/MONTH/YEAR

class Booking < ApplicationRecord
  validates :status, :start_date, :end_date, :spot_id, :user_id, :num_guests, presence: true

  belongs_to :spot,
    class_name: "Spot",
    foreign_key: :spot_id

  belongs_to :user,
    class_name: "User",
    foreign_key: :user_id

  has_one :review

end 
