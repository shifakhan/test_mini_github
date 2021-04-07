class AddGithubAuthTokenToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :github_auth_token, :string
  end
end
