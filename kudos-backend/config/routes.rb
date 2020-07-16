Rails.application.routes.draw do
  resources :kudos_records
  resources :users
  resources :organizations

  get '/currentuser/gave', to: 'kudos_records#gave'
  get '/currentuser/received', to: 'kudos_records#received'
  
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      get'/users/:id', to: 'users#allUsers' 
      patch '/givekudos', to: 'users#give_kudos'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
