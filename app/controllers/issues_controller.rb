class IssuesController < ApplicationController
  before_action :authenticate_user!
  before_action :validate_pagination_params, only: [:index]

  def index
    render json: GithubApiClient.new(current_user).repo_issues(params[:page], params[:per_page], params[:repository_id])
  end
end
