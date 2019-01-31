class Api::SpotsController < ApplicationController

  def index
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