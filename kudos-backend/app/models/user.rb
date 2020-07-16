class User < ApplicationRecord
  has_secure_password
  belongs_to :organization

  has_many :kudos_records, foreign_key: "receiver_id", dependent: :destroy

  has_many :receivers, through: :kudos_records, source: :receiver

  has_many :reverse_kudos_records, foreign_key: "giver_id",
                                   class_name: "KudosRecord",
                                   dependent: :destroy

  has_many :givers, through: :reverse_kudos_records, source: :giver

  validates :username, uniqueness: { case_sensitive: false }

  
end
