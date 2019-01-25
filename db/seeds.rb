# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all
Amenity.destroy_all
Booking.destroy_all
Review.destroy_all
SpotsAmenitiesJoin.destroy_all 
Photo.destroy_all

User.create(email: "demo@demo.com", password: "demo123", 
  first_name: "Demo", last_name: "Demo")
User.create(email: "host@host.com", password: "host123", 
  first_name: "Host", last_name: "Supreme")

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: -73.949749, lat: 40.708803,
  title: "Sweet office space", price: 20,
  num_rooms: 4, num_guests: 8, 
  num_bathrooms: 2, host_id: User.last.id,
  spot_type: "Office", location: "New York")

Spot.create(address: "22 W 42nd St, New York, NY 10036", 
  lng: -73.997656, lat: 40.732697,
  title: "Another office space", price: 20,
  num_rooms: 4, num_guests: 8, 
  num_bathrooms: 2, host_id: User.last.id,
  spot_type: "Office", location: "New York")


Amenity.create(name: "Wifi")
Amenity.create(name: "Kitchen")
Amenity.create(name: "Coffee Maker")

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.last.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.last.id)

Booking.create(status: true, start_date: "12/11/2018", 
  end_date: "20/11/2018", spot_id: Spot.first.id,
  user_id: User.first.id)
Booking.create(status: true, start_date: "12/12/2018", 
  end_date: "20/12/2018", spot_id: Spot.first.id,
  user_id: User.first.id)
Booking.create(status: true, start_date: "12/12/2019", 
  end_date: "20/12/2019", spot_id: Spot.first.id,
  user_id: User.first.id)

Booking.create(status: true, start_date: "12/11/2017", 
  end_date: "20/11/2017", spot_id: Spot.last.id,
  user_id: User.first.id)
Booking.create(status: true, start_date: "12/12/2017", 
  end_date: "20/12/2017", spot_id: Spot.last.id,
  user_id: User.first.id)

Review.create(rating: 4, body: "Great office, elevators were broken though",
  booking_id: Booking.all[0].id, author_id: User.first.id)
Review.create(rating: 5, body: "Perfect office, two working elevators!",
  booking_id: Booking.all[1].id, author_id: User.first.id)
Review.create(rating: 3, body: "It's an office",
  booking_id: Booking.all[3].id, author_id: User.first.id)
Review.create(rating: 5, body: "This is a seed review",
  booking_id: Booking.all[4].id, author_id: User.first.id)

Photo.create(url: "https://s3.amazonaws.com/railsbnb-pub/spot1_p1.jpg", spot_id: Spot.first.id)
Photo.create(url: "https://s3.amazonaws.com/railsbnb-pub/spot1_p2.jpg", spot_id: Spot.first.id)
Photo.create(url: "https://s3.amazonaws.com/railsbnb-pub/spot1_p3.jpg", spot_id: Spot.last.id)
  