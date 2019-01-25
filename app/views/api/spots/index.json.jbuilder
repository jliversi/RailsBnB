

json.spots do
  @spots.each do |spot|
    json.set! spot.id do 
      json.partial! 'api/spots/spot', spot: spot
      json.photos do
        json.array! spot.photos.map {|photo| photo.id }
      end
      json.avg_rating spot.average_rating
    end
  end
end

json.photos do
  @spots.each do |spot|
    spot.photos.each do |photo|
      json.set! photo.id do 
        json.extract! photo, :id, :url, :spot_id
      end
    end
  end
end 