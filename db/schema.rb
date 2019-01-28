# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_28_193553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sym"
  end

  create_table "bookings", force: :cascade do |t|
    t.boolean "status", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.integer "spot_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_guests"
    t.index ["spot_id"], name: "index_bookings_on_spot_id"
    t.index ["user_id"], name: "index_bookings_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "url", null: false
    t.integer "spot_id", null: false
    t.index ["spot_id"], name: "index_photos_on_spot_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "booking_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "accuracy"
    t.integer "communication"
    t.integer "cleanliness"
    t.integer "location"
    t.integer "check_in"
    t.integer "value"
    t.index ["author_id"], name: "index_reviews_on_author_id"
    t.index ["booking_id"], name: "index_reviews_on_booking_id"
  end

  create_table "spots", force: :cascade do |t|
    t.string "address", null: false
    t.float "lng", null: false
    t.float "lat", null: false
    t.string "title", null: false
    t.text "description"
    t.integer "price", null: false
    t.integer "num_rooms", null: false
    t.integer "num_guests", null: false
    t.integer "num_bathrooms", null: false
    t.integer "host_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "location", null: false
    t.string "spot_type", null: false
    t.text "rules"
    t.integer "num_beds"
    t.index ["host_id"], name: "index_spots_on_host_id"
  end

  create_table "spots_amenities_joins", force: :cascade do |t|
    t.integer "amenity_id", null: false
    t.integer "spot_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["amenity_id"], name: "index_spots_amenities_joins_on_amenity_id"
    t.index ["spot_id"], name: "index_spots_amenities_joins_on_spot_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "bio"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
