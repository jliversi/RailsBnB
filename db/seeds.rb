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
  first_name: "Host", last_name: "Supreme",
  bio: "Hi, my name is Host Supreme and I host every spot in this seed file.
  Thanks so much for considering my many spots for your stay.")

spotDescription = "I am a description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    iatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum."

pricesArr = (20..100).to_a
num_thingsArr = (4..8).to_a
num_guestsArr = (1..5).to_a
latDiff = 40.764296 - 40.746278
latStart = 40.746278
lngDiff = 73.995409 - 73.972428
lngStart = -73.995409

latDiffBk = 40.686974 - 40.673194
latStartBk = 40.673194
lngDiffBk = 73.991466 - 73.968396
lngStartBk = -73.991466

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStart + (lngDiff * (rand))), lat: (latStart + (latDiff * (rand))),
  title: "Sweet office space", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Manhattan", rules: "These are some seed rules",
  description: spotDescription)

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStart + (lngDiff * (rand))), lat: (latStart + (latDiff * (rand))),
  title: "Another office space", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Manhattan", rules: "These are some seed rules",
  description: spotDescription)

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStart + (lngDiff * (rand))), lat: (latStart + (latDiff * (rand))),
  title: "Yet another office space", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Manhattan", rules: "These are some seed rules",
  description: spotDescription)

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStartBk + (lngDiffBk * (rand))), lat: (latStartBk + (latDiffBk * (rand))),
  title: "I'm running out of names for office spaces", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Brooklyn", rules: "These are some seed rules",
  description: spotDescription)

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStartBk + (lngDiffBk * (rand))), lat: (latStartBk + (latDiffBk * (rand))),
  title: "Is this another office space? Yes", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Brooklyn", rules: "These are some seed rules",
  description: spotDescription)

Spot.create(address: "22 W 38th St, New York, NY 10018", 
  lng: (lngStartBk + (lngDiffBk * (rand))), lat: (latStartBk + (latDiffBk * (rand))),
  title: "Last office space I swear", price: pricesArr.sample,
  num_rooms: num_thingsArr.sample, num_guests: num_guestsArr.sample, 
  num_bathrooms: num_thingsArr.sample, num_beds: num_thingsArr.sample, 
  host_id: User.last.id, spot_type: "Office", 
  location: "Brooklyn", rules: "These are some seed rules",
  description: spotDescription)

Amenity.create(name: "Wifi", sym: "wifi")
Amenity.create(name: "Kitchen", sym: "kitchen")
Amenity.create(name: "Coffee Maker", sym: "free_breakfast")
Amenity.create(name: "Air Conditioning", sym: "ac_unit")

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.first.id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.first.id)

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.all[1].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.all[1].id)

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.all[2].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.all[2].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.all[2].id)

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.all[3].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.all[3].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.all[3].id)

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.all[4].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.all[4].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[2].id, spot_id: Spot.all[4].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.all[4].id)

SpotsAmenitiesJoin.create(amenity_id: Amenity.all[0].id, spot_id: Spot.all[5].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[1].id, spot_id: Spot.all[5].id)
SpotsAmenitiesJoin.create(amenity_id: Amenity.all[3].id, spot_id: Spot.all[5].id)

possibleStartDates1 = [
  "2/2/2019",
  "3/2/2019",
  "4/2/2019",
  "5/2/2019",
  "6/2/2019",
  "7/2/2019",
  "8/2/2019"
]

possibleEndDates1 = [
  "10/2/2019",
  "11/2/2019",
  "12/2/2019",
  "13/2/2019",
  "14/2/2019"
]

possibleStartDates2 = [
  "15/2/2019",
  "16/2/2019",
  "17/2/2019",
  "18/2/2019"
]

possibleEndDates2 = [
  "20/2/2019",
  "22/2/2019",
  "23/2/2019",
  "24/2/2019"
]

possibleStartDatesOld1 = [
  "2/11/2018",
  "3/11/2018",
  "4/11/2018",
  "5/11/2018",
  "6/11/2018",
  "7/11/2018",
  "8/11/2018",
]

possibleEndDatesOld1 = [
  "10/11/2018",
  "11/11/2018",
  "12/11/2018",
  "13/11/2018",
  "14/11/2018",
]

possibleStartDatesOld2 = [
  "15/12/2018",
  "16/12/2018",
  "17/12/2018",
  "18/12/2018"
]

possibleEndDatesOld2 = [
  "20/12/2018",
  "22/12/2018",
  "23/12/2018",
  "24/12/2018"
]

numGuestsArr = (1..4).to_a

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.all[1].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.all[1].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.all[2].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.all[2].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.all[3].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.all[3].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.all[4].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.all[4].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDates1.sample, 
  end_date: possibleEndDates1.sample, spot_id: Spot.all[5].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDates2.sample, 
  end_date: possibleEndDates2.sample, spot_id: Spot.all[5].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.first.id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.all[1].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.all[1].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.all[2].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.all[2].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.all[3].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.all[3].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.all[4].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.all[4].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

Booking.create(status: true, start_date: possibleStartDatesOld1.sample, 
  end_date: possibleEndDatesOld1.sample, spot_id: Spot.all[5].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)
Booking.create(status: true, start_date: possibleStartDatesOld2.sample, 
  end_date: possibleEndDatesOld2.sample, spot_id: Spot.all[5].id,
  user_id: User.first.id, num_guests: numGuestsArr.sample)

possibleBookingsIdsSorted = Booking.all[11..23].map {|booking| booking.id }
possibleBookingsIds = possibleBookingsIdsSorted.shuffle


ratingsArr = (1..5).to_a
reviewBodyArr = [
  "Great office, elevators were broken though",
  "Perfect office, two working elevators!",
  "It's an office",
  "This is a seed review"
]


Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)

Review.create(body: reviewBodyArr.sample,
  booking_id: possibleBookingsIds.pop, author_id: User.first.id,
  accuracy: ratingsArr.sample, communication: ratingsArr.sample, cleanliness: ratingsArr.sample,
  location: ratingsArr.sample, check_in: ratingsArr.sample, value: ratingsArr.sample)


captionsArr = [
  "I am a photo",
  "I am another photo",
  "This is the caption for a photo",
  "This is also a caption",
  "Look at this photo!"
]
urlsArr = [
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p1.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p2.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p3.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p4.jpg",
  "https://s3.amazonaws.com/railsbnb-pub/spot1_p5.jpg"
]

Photo.create(url: urlsArr[0], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[1], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[2], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[3], spot_id: Spot.first.id, caption: captionsArr.sample)
Photo.create(url: urlsArr[4], spot_id: Spot.first.id, caption: captionsArr.sample)

Photo.create(url: urlsArr.rotate(1)[0], spot_id: Spot.all[1].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(1)[1], spot_id: Spot.all[1].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(1)[2], spot_id: Spot.all[1].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(1)[3], spot_id: Spot.all[1].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(1)[4], spot_id: Spot.all[1].id, caption: captionsArr.sample)
  
Photo.create(url: urlsArr.rotate(2)[0], spot_id: Spot.all[2].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(2)[1], spot_id: Spot.all[2].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(2)[2], spot_id: Spot.all[2].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(2)[3], spot_id: Spot.all[2].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(2)[4], spot_id: Spot.all[2].id, caption: captionsArr.sample)
  
Photo.create(url: urlsArr.rotate(3)[0], spot_id: Spot.all[3].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(3)[1], spot_id: Spot.all[3].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(3)[2], spot_id: Spot.all[3].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(3)[3], spot_id: Spot.all[3].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(3)[4], spot_id: Spot.all[3].id, caption: captionsArr.sample)
  
Photo.create(url: urlsArr.rotate(4)[0], spot_id: Spot.all[4].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(4)[1], spot_id: Spot.all[4].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(4)[2], spot_id: Spot.all[4].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(4)[3], spot_id: Spot.all[4].id, caption: captionsArr.sample)
Photo.create(url: urlsArr.rotate(4)[4], spot_id: Spot.all[4].id, caption: captionsArr.sample)

urlsArrShuffled = urlsArr.shuffle
Photo.create(url: urlsArrShuffled[0], spot_id: Spot.all[5].id, caption: captionsArr.sample)
Photo.create(url: urlsArrShuffled[1], spot_id: Spot.all[5].id, caption: captionsArr.sample)
Photo.create(url: urlsArrShuffled[2], spot_id: Spot.all[5].id, caption: captionsArr.sample)
Photo.create(url: urlsArrShuffled[3], spot_id: Spot.all[5].id, caption: captionsArr.sample)
Photo.create(url: urlsArrShuffled[4], spot_id: Spot.all[5].id, caption: captionsArr.sample)
  