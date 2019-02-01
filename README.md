# RailsBnB

RailsBnB is a full-stack, single-page-application clone of AirBnB. Users can view a list of spots and filter the results with search. Each spot has a show page with all the relevant details and reviews. 

[Live demo](http://railsbnb-aa.herokuapp.com)

## Technologies Used

### Backend

* PostgreSQL 
* Ruby on Rails

### Frontend

* React
* Redux

### Packages/Apis

* [Google Maps](https://developers.google.com/maps/documentation/javascript/tutorial)
* [React-dates](https://github.com/airbnb/react-dates)
* [React-modal](https://github.com/reactjs/react-modal)
* AWS for image hosting

## Features

* Full user authentication (sign-up, login, logout) with security
* Spots index display and individual spot show display
* Search functionality, filtered by location, available dates, and number of guests

## Splash page and search
Users can search all spots based on location, available dates, and number of guests. Spots will only display if location matches, dates are available, and the max number of guests is greater than or equal to the number searched. 
![splash-search](https://media.giphy.com/media/QfIFnP3hFMNUnqm1AU/giphy.gif)

## Index page and index search
![index-search](https://media.giphy.com/media/9ryCqApg8N6OicGgpV/giphy.gif)

Searches from the index don't necessarily include all fields (location, dates, and num_guests), so the backend only queries depending on which params are passed through. Dates also need to be parsed between ruby and javascript formats. 

```ruby
   if params[:params]
      tempSpots = nil
      if search_params[:location]
        loc = search_params[:location].capitalize
        tempSpots = Spot.where("location = ?", loc)
      end
      if search_params[:numGuests] && tempSpots
        tempSpots = tempSpots.where("num_guests >= ?", search_params[:numGuests])
      elsif search_params[:numGuests]
        tempSpots = Spot.where("num_guests >= ?", search_params[:numGuests])
      end
      if search_params[:startDate]
        start_date = Spot.parse_date_string(search_params[:startDate])
        end_date = Spot.parse_date_string(search_params[:endDate])
        dates = Spot.date_range(start_date, end_date)
        if tempSpots
          tempSpots = tempSpots.select {|spot| spot.dates_available?(dates)}
        else
          tempSpots = Spot.all.select {|spot| spot.dates_available?(dates)}
        end
      end
      @spots = tempSpots
    else
      @spots = Spot.all.includes(:reviews, :photos)
    end 
```

## Spot show page
Shows all the relevant details for a spot along with a form to submit booking requests. Photos are displayed at the top and in a modal on click. Users can see ratings (averaged from all reviews on the spot) and which dates are unavailable on the availability calendar. 

![spot-show](https://media.giphy.com/media/WvSpDFHIBiuvrY9Lwf/giphy.gif)

## Future Implementations
* Submit booking requests
* Submit reviews for passed bookings
* Hosting, including spot creation and image upload
