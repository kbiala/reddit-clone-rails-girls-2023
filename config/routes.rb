Rails.application.routes.draw do
  resources :entries do
    get 'increase_score', on: :member
    get 'descrease_score', on: :member 
  end
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "entries#index"
end
