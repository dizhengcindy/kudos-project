class CreateKudosRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :kudos_records do |t|
      t.integer :giver_id
      t.integer :receiver_id
      t.datetime :time
      t.string :comment
      t.integer :num_of_kudos

      t.timestamps
    end

    add_index :kudos_records, :giver_id
    add_index :kudos_records, :receiver_id
  end
end
