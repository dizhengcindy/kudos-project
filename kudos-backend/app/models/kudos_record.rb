class KudosRecord < ApplicationRecord
    belongs_to :giver, class_name: "User", foreign_key: :giver_id
    belongs_to :receiver, class_name: "User", foreign_key: :receiver_id

    validates :giver_id, presence: true
    validates :receiver_id, presence: true
   
end
