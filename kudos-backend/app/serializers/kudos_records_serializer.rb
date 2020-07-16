class KudosRecordsController < ActiveModel::Serializer
    attributes :id,:giver, :receiver,:time,:comment,:num_of_kudos
  end
  