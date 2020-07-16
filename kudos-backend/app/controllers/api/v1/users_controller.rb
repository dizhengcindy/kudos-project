class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

   def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create user' }, status: :not_acceptable
    end
  end

  def give_kudos
    # @user = User.find_by(username: user_params[:username])
   @user=current_user

    if  @user.update(kudos: user_params[:kudos])
  
      render json:{ user: UserSerializer.new(@user) }, status: :accepted
    else
      render json: { error: 'failed to give kudos' }, status: :not_acceptable
    end

  end

  def allUsers

    users = User.where("organization_id = ?",params[:id])
    render json: users
  end
     
  private
      def user_params
        params.require(:user).permit(:username, :email, :password,:password_confirmation,:organization_id,:kudos)
      end
end
