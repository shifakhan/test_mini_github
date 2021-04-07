Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root to: "repositories#index"
  resources :repositories, only: [:index] do
    resources :issues, only: [:index]
  end
  # resources :issues, only: [:show]
end
