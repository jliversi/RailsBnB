json.array! @spots do |spot|
  json.spot do
    json.partial! 'api/spots/spot', spot: spot
    json.photos do
      json.array! spot.photos.map {|photo| photo.id }
    end
    json.avg_rating spot.average_rating
  end 

  json.photos do 
    spot.photos.each do |photo|
      json.set! photo.id do 
        json.extract! photo, :url, :spot_id
      end
    end
  end 


end 