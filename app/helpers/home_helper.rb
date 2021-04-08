module HomeHelper
  def current_user_props(user)
    if user
      {
        logged_in: true,
        username: user.github_username,
        name: user.name,
      }
    else
      { logged_in: false }
    end
  end
end
