class CreateRemainingTables < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :url, null: false
      t.integer :spot_id, null: false, index: true
    end

    create_table :bookings do |t|
      t.boolean :status, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :spot_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end

    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :booking_id, null: false, index: true
      t.integer :author_id, null: false, index: true

      t.timestamps
    end

    create_table :amenities do |t|
      t.string :name, null: false

      t.timestamps
    end

    create_table :spots_amenities_join do |t|
      t.integer :amenity_id, null: false, index: true
      t.integer :spot_id, null: false, index: true

      t.timestamps 
    end
  end
end
