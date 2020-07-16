namespace :db do
  desc "update user kudos to 3"
  task reset_user_kudos: :environment do
    User.update_all("kudos = 3")
  end

end
