class GithubApiClient
  API_ENDPOINT = 'https://api.github.com'.freeze
  TIMEOUT = 60.freeze

  attr_reader :token

  def initialize(user)
    @token = user.github_auth_token
    @username = user.github_username
  end

  def user_repos(page, per_page)
    request("user/repos", { page: page, per_page: per_page })
  end

  def repo_issues(page, per_page, repo)
    request("repos/#{@username}/#{repo}/issues", { page: page, per_page: per_page })
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
end
