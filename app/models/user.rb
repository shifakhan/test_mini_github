class User < ApplicationRecord
  devise :database_authenticatable, :omniauthable, omniauth_providers: %i[github]

  def self.from_omniauth(auth)
    user = find_or_initialize_by(provider: auth.provider, uid: auth.uid)
    user.email = auth.info.email
    user.password = Devise.friendly_token[0, 20]
    user.name = auth.info.name
    user.github_auth_token = auth.credentials.token
    user.github_username = auth.info.nickname
    user.save
    user
  end
end
