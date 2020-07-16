# README
## Ruby version: 

- Ruby 2.6.1
- Rails 6.0.3.2


## Instruction for running server
- rails db:create
- rails db:migrate
- rails db:seed
- rails s

## Added gem:

- gem install whenever

- gem install faker

## Tech hight light
- used JWT Auth 
- Serializer

## Need improve
- Used whenever to setup rake task for update user's kudos to 3 every week. I was not able to test it successfully due to some postgresql issue.

See file: 
- lib/tasks/db.rake
- config/schedule.rb
- log/cron.log (load results for rake task)