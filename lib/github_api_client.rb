class GithubApiClient
  API_ENDPOINT = 'https://api.github.com'.freeze
  TIMEOUT = 60.freeze

  attr_reader :token

  def initialize(user)
    @token = user.github_auth_token
    @username = user.github_username
  end

  def user_repos(page, per_page)
    pagination_params = { page: page, per_page: per_page }
    format_response(
      request("user/repos", pagination_params),
      pagination_params
    )
  end

  def repo_issues(page, per_page, repo)
    pagination_params = { page: page, per_page: per_page }
    format_response(
      request("repos/#{@username}/#{repo}/issues", pagination_params),
      pagination_params
    )
  end

  private

  def request(path, query_params)
    HTTParty.get(
      "#{API_ENDPOINT}/#{path}",
      headers: {
        "Accept" => "application/vnd.github.v3+json",
        "Authorization" => "Bearer #{@token}"
      },
      query: query_params,
      timeout: TIMEOUT
    ).parsed_response
  end

  def format_response(data, pagination_params = {})
    pagination_params.merge(
      success: true,
      data: data
    )
  end
end
