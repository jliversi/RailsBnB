# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  bio             :text
#


class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true
  validates :birth_year, numericality: {less_than: (Time.new.year - 17) }, allow_nil: true


  attr_reader :password
  attr_accessor :birth_year 

  after_initialize :ensure_session_token

  has_many :bookings,
    class_name: "Booking",
    foreign_key: :user_id

  has_many :reviews,
    class_name: "Review",
    foreign_key: :author_id

  has_many :spots,
    class_name: "Spot",
    foreign_key: :host_id


  def User.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user == nil
    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)  
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16) 
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    return self.session_token
  end


end

