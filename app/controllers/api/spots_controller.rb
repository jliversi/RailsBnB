class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all.includes(:reviews, :photos)
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

end 