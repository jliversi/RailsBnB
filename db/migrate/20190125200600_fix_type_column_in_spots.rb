class FixTypeColumnInSpots < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :type
    add_column :spots, :spot_type, :string, null: false
  end
end
