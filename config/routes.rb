Rails.application.routes.draw do
  
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :create, :update, :destroy] do
      resources :amenities, only: [:create, :destroy]
    end
    resources :photos, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
    resources :bookings, only: [:create, :update, :destroy]
  end
end
