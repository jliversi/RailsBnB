class AddCaptionToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :caption, :string
  end
end
