class KudosRecordsController < ApplicationController
   def create
        giver =current_user
        receiver = User.find_by(username:params[:receiver_name])

        if(giver.id!=receiver.id && giver.kudos>0)
            record = KudosRecord.new(
            giver_id:giver.id,
            receiver_id:receiver.id,
            time: params[:time], 
            comment:params[:comment],
            num_of_kudos:params[:num_of_kudos])
            if record.save
                render json: record
            else
                render json: {error: "Fail to give kudo."}
            end

        else
            render json: {error: "Sorry, you cannot give kudos to yourself."}
        end
   end

#    def gave
#     records = current_user.kudos_records
#     render json: records
#    end

#    def received
#     records = current_user.reverse_kudos_records
#     render json: records
#    end

#    private
#    def kudos_record_params
#        params.require(:kudos_record).permit(:receiver_name,:time,:comment,:num_of_kudos)
#    end
end
