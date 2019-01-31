class Api::SpotsController < ApplicationController

  def index
    debugger
    if params[:params]
      debugger
      tempSpots = nil
      if search_params[:location]
        debugger
        loc = search_params[:location].capitalize
        tempSpots = Spot.where("location = ?", loc)
      end
      if search_params[:numGuests] && tempSpots
        debugger
        tempSpots = tempSpots.where("num_guests >= ?", search_params[:numGuests])
      elsif search_params[:numGuests]
        debugger
        tempSpots = Spot.where("num_guests >= ?", search_params[:numGuests])
      end
      if search_params[:startDate]
        debugger
        start_date = Spot.parse_date_string(search_params[:startDate])
        end_date = Spot.parse_date_string(search_params[:endDate])
        dates = Spot.date_range(start_date, end_date)
        if tempSpots
          debugger
          tempSpots = tempSpots.select {|spot| spot.dates_available?(dates)}
        else
          debugger
          tempSpots = Spot.all.select {|spot| spot.dates_available?(dates)}
        end
      end
      debugger
      @spots = tempSpots  
    else
      @spots = Spot.all.includes(:reviews, :photos)
    end 
    render :index 
  end 

  def show
    @spot = Spot.find(params[:id])
    render :show 
  end 

  def create
  end 

  def update
  end 

  def destroy
  end 

  private

  def search_params
    params.require(:params).permit(:location, :startDate, :endDate, :numGuests)
  end 
  
end 