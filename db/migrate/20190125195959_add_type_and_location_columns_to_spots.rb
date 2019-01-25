class AddTypeAndLocationColumnsToSpots < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :type, :string, null: false
    add_column :spots, :location, :string, null: false
  end
end
