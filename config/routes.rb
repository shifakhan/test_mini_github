Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  resources :repositories, only: [:index] do
    resources :issues, only: [:index]
  end

  get "*page", to: "home#index", constraints: -> (req) do
    !req.xhr? && req.format.html?
  end

  root to: "home#index"
end
