class CreateSpotsAmenitiesJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :spots_amenities_joins do |t|
      t.integer :amenity_id, null: false, index: true
      t.integer :spot_id, null: false, index: true

      t.timestamps 
    end
    drop_table :spots_amenities_join
  end
end
