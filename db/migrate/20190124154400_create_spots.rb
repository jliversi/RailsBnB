class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
        t.string :address, null: false
        t.float :lng, null: false
        t.float :last, null: false
        t.string :title, null: false
        t.text :description
        t.integer :price, null: false
        t.integer :num_rooms, null: false
        t.integer :num_guests, null: false
        t.integer :num_bathrooms, null: false
        t.integer :host_id, index: true, null: false

        t.timestamps
    end
  end
end
