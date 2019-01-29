monthsArr = [
  nil,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]


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
    json.reviews do
      json.array! @spot.reviews.map {|review| review.id}
    end 
    json.avg_accuracy @spot.avg_accuracy
    json.avg_communication @spot.avg_communication
    json.avg_cleanliness @spot.avg_cleanliness
    json.avg_location @spot.avg_location
    json.avg_check_in @spot.avg_check_in
    json.avg_value @spot.avg_value
    json.host do
      json.extract! @spot.host, :id, :first_name, :last_name, :bio
      json.join_month monthsArr[@spot.host.created_at.month]
      json.join_year @spot.host.created_at.year
      json.num_reviews @spot.host.num_reviews
    end
  end
end

json.reviews do 
  @spot.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :accuracy, :communication, :cleanliness, :location, :check_in, :value, :body, :author_id, :booking_id 
      json.author_name review.author.first_name
      json.month monthsArr[review.booking.end_date.month]
      json.year review.booking.end_date.year
    end
  end 
end 

json.bookings do 
  @spot.bookings.each do |booking|
    json.set! booking.id do 
      json.extract! booking, :id, :status, :start_date, :end_date, :spot_id, :user_id, :num_guests
    end
  end 
end 

json.amenities do
  @spot.amenities.each do |amenity|
    json.set! amenity.id do
      json.extract! amenity, :name, :sym
    end 
  end 
end

json.photos do
  @spot.photos.each do |photo|
    json.set! photo.id do
      json.extract! photo, :id, :url
    end 
  end 
end 

json.host do
  json.extract! @spot.host, :id, :first_name, :last_name, :bio
  json.join_month monthsArr[@spot.host.created_at.month]
  json.join_year @spot.host.created_at.year
  json.num_reviews @spot.host.num_reviews
end



