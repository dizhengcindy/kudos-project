# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

KudosRecord.destroy_all
Organization.destroy_all
User.destroy_all

kutos_num=[1,2,3]

3.times do 
 Organization.create(name:Faker::Company.name, industry:Faker::Company.industry)
end

15.times do 
    User.create(username:Faker::Artist.unique.name, email:Faker::Internet.unique.email, kudos:3, password_digest:BCrypt::Password.create(Faker::IDNumber.chilean_id), organization_id:Organization.order(Arel.sql('Random()')).first.id  )
end
u1_organization_id = Organization.order(Arel.sql('Random()')).first.id
u2_organization_id = Organization.order(Arel.sql('Random()')).first.id
while (u1_organization_id==u2_organization_id)
    u2_organization_id = Organization.order(Arel.sql('Random()')).first.id
end
u1 = User.create(username:"Dan", email:Faker::Internet.unique.email, kudos:3, password_digest:BCrypt::Password.create("123"), organization_id:u1_organization_id  )
u2 = User.create(username:"Jenni", email:Faker::Internet.unique.email, kudos:3, password_digest:BCrypt::Password.create("123"), organization_id:u2_organization_id  )


45.times do 
    fake_giver_id = User.order(Arel.sql('Random()')).first.id
    fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    
   while fake_giver_id==fake_receiver_id
        fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    end

    KudosRecord.create(giver_id:fake_giver_id, receiver_id:fake_receiver_id, time:Faker::Time.between(from: DateTime.now - 30, to: DateTime.now, format: :default), comment:Faker::TvShows::GameOfThrones.quote, num_of_kudos: kutos_num.sample)
end

5.times do 
    fake_giver_id = u1.id
    fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    
   while fake_giver_id==fake_receiver_id
        fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    end

    KudosRecord.create(giver_id:fake_giver_id, receiver_id:fake_receiver_id, time:Faker::Time.between(from: DateTime.now - 30, to: DateTime.now, format: :default), comment:Faker::TvShows::GameOfThrones.quote, num_of_kudos: kutos_num.sample)
end

5.times do 
    fake_giver_id = u2.id
    fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    
   while fake_giver_id==fake_receiver_id
        fake_receiver_id=User.order(Arel.sql('Random()')).first.id
    end

    KudosRecord.create(giver_id:fake_giver_id, receiver_id:fake_receiver_id, time:Faker::Time.between(from: DateTime.now - 30, to: DateTime.now, format: :default), comment:Faker::TvShows::GameOfThrones.quote, num_of_kudos: kutos_num.sample)
end
