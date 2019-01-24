class FixLatColumnInSpots < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :last, :lat
  end
end
