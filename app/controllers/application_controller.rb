class ApplicationController < ActionController::Base
  MAX_PER_PAGE = 20.freeze

  def render_error_invalid_params
    render json: { error: "Invalid Params"}
  end

  def validate_pagination_params
    params[:page] ||= 1
    params[:per_page] ||= MAX_PER_PAGE
    return if params[:page].to_i > 0 && params[:per_page].to_i.between?(1, MAX_PER_PAGE)
    render_error_invalid_params
  end
end
