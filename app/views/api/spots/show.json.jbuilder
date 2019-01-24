
json.spot do
  json.set! @spot.id do 
    json.partial! "api/spots/spot", spot: @spot
    json.amenities do
      json.array! @spot.amenities.map {|amenity| amenity.id }
    end
    json.bookings do
      json.array! @spot.bookings.map {|booking| booking.id }
    end 
    json.photos do
      json.array! @spot.photos.map {|photo| photo.id }
    end 
  end
end

json.reviews do 
  @spot.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :author_id, :booking_id 
    end
  end 
end 

json.bookings do 
  @spot.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :status, :start_date, :end_date, :spot_id, :user_id
    end
  end 
end 

json.amenities do
  @spot.amenities.each do |amenity|
    json.set! amenity.id do
      json.extract! amenity, :name
    end 
  end 
end

json.host do
  json.extract! @spot.host, :id, :first_name, :last_name, :bio
end

json.photos do
  @spot.photos do |photo|
    json.extract photo, :id, :url
  end 
end 





