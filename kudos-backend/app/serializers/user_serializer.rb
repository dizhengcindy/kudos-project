class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :organization_id,:organization_name,:kudos, :kudosRecords, :reverseKudosRecords
end

def kudosRecords

  arr =[]

  self.kudos_records.map{|kr|

   giver= User.find(kr.giver_id)
   receiver=User.find(kr.receiver_id)
  arr.push({giver_name:giver.username,receiver_name:receiver.username, time:kr.time,comment:kr.comment,num_of_kudos:kr.num_of_kudos})}
 
  return arr
end

def reverseKudosRecords

  arr =[]

  self.reverse_kudos_records.map{|kr|

   giver= User.find(kr.giver_id)
   receiver=User.find(kr.receiver_id)
  arr.push({giver_name:giver.username,receiver_name:receiver.username, time:kr.time,comment:kr.comment,num_of_kudos:kr.num_of_kudos})}
 
  return arr
end

def organization_name
  # byebug
  return Organization.all.find(self.organization_id).name
end