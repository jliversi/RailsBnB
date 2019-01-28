class AddColumnsReviewsBookingsSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :rules, :text
    add_column :spots, :num_beds, :integer
    add_column :bookings, :num_guests, :integer

    add_column :reviews, :accuracy, :integer
    add_column :reviews, :communication, :integer
    add_column :reviews, :cleanliness, :integer
    add_column :reviews, :location, :integer
    add_column :reviews, :check_in, :integer
    add_column :reviews, :value, :integer
    remove_column :reviews, :rating 
  end
end
