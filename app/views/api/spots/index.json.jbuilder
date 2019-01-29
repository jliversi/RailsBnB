

json.spots do
  @spots.each do |spot|
    json.set! spot.id do 
      json.partial! 'api/spots/spot', spot: spot
      json.photos do
        json.array! spot.photos.map {|photo| photo.id }
      end
      json.bookings do
        json.array! spot.bookings.map {|booking| booking.id}
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

json.bookings do
  @spots.each do |spot|
    spot.bookings.each do |booking|
      json.set! booking.id do 
        json.extract! booking, :id, :start_date, :end_date
      end
    end
  end
end 