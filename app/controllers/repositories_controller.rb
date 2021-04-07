class RepositoriesController < ApplicationController
  before_action :authenticate_user!
  before_action :validate_pagination_params, only: [:index]

  def index
    render json: GithubApiClient.new(current_user).user_repos(params[:page], params[:per_page])
  end
end
