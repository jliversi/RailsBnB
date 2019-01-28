class AddSymbolsToAmenities < ActiveRecord::Migration[5.2]
  def change
    add_column :amenities, :sym, :string
  end
end
