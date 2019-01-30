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

captionsArr = [
  "I am a photo",
  "I am another photo",
  "This is the caption for a photo",
  "This is also a caption",
  "Look at this photo!"
]

User.create(email: "demo@demo.com", password: "demo123", 
  first_name: "Demo", last_name: "Demo")
User.create(email: "host@host.com", password: "host123", 
  first_name: "Host", last_name: "Supreme",
  bio: "Hi, my name is Host Supreme and I host every spot in this seed file.
  Thanks so much for considering my many spots for your stay.")

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: -73.983934, lat: 40.751452,
  title: "Sweet office space", price: 20,
  num_rooms: 4, num_guests: 8, 
  num_bathrooms: 2, num_beds: 2, 
  host_id: User.last.id, spot_type: "Office", 
  location: "New York", rules: "These are some seed rules",
  description: "I am a description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    iatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.")

Spot.create(address: "22 W 42nd St, New York, NY 10036", 
  lng: -73.981809, lat: 40.753839,
  title: "Another office space", price: 20,
  num_rooms: 4, num_guests: 8, 
  num_bathrooms: 2, num_beds: 2, 
  host_id: User.last.id, spot_type: "Office", 
  location: "New York", rules: "These are some seed rules",
  description: "I am a description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    iatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.")

Amenity.create(name: "Wifi", sym: "wifi")
Amenity.create(name: "Kitchen", sym: "kitchen")
Amenity.create(name: "Coffee Maker", sym: "free_breakfast")
Amenity.create(name: "Air Conditioning", sym: "ac_unit")

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.last.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.last.id)

Booking.create(status: true, start_date: "12/11/2018", 
  end_date: "20/11/2018", spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: 3)
Booking.create(status: true, start_date: "12/12/2018", 
  end_date: "20/12/2018", spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: 3)
Booking.create(status: true, start_date: "12/2/2019", 
  end_date: "20/2/2019", spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: 3)

Booking.create(status: true, start_date: "12/11/2017", 
  end_date: "20/11/2017", spot_id: Spot.last.id,
  user_id: User.first.id, num_guests: 3)
Booking.create(status: true, start_date: "12/12/2017", 
  end_date: "20/12/2017", spot_id: Spot.last.id,
  user_id: User.first.id, num_guests: 3)

Review.create(body: "Great office, elevators were broken though",
  booking_id: Booking.all[0].id, author_id: User.first.id,
  accuracy: 5, communication: 5, cleanliness: 1,
  location: 3, check_in: 5, value: 2)
Review.create(body: "Perfect office, two working elevators!",
  booking_id: Booking.all[1].id, author_id: User.first.id,
  accuracy: 5, communication: 3, cleanliness: 5,
  location: 3, check_in: 3, value: 4)
Review.create(body: "It's an office",
  booking_id: Booking.all[3].id, author_id: User.first.id,
  accuracy: 3, communication: 3, cleanliness: 3,
  location: 1, check_in: 2, value: 4)
Review.create(body: "This is a seed review",
  booking_id: Booking.all[4].id, author_id: User.first.id,
  accuracy: 5, communication: 4, cleanliness: 3,
  location: 2, check_in: 3, value: 2)

urlsArr = [
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p1.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p2.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p3.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p4.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p5.jpg"
]

urlsArr2 = urlsArr.rotate(1)

Photo.create(url: urlsArr[0], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[1], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[2], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[3], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[4], spot_id: Spot.first.id, caption: captionsArr.sample)

Photo.create(url: urlsArr2[0], spot_id: Spot.last.id, caption: captionsArr.sample)
Photo.create(url: urlsArr2[1], spot_id: Spot.last.id, caption: captionsArr.sample)
Photo.create(url: urlsArr2[2], spot_id: Spot.last.id, caption: captionsArr.sample)
Photo.create(url: urlsArr2[3], spot_id: Spot.last.id, caption: captionsArr.sample)
Photo.create(url: urlsArr2[4], spot_id: Spot.last.id, caption: captionsArr.sample)
  