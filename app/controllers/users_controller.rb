class UsersController < ApplicationController

  def index
    render json: User.all, status: :ok
  end

  # def show
  #   user = find_user
  #   render json: user, status: :ok
  # end

  def show
    user = User.find_by(id: session[:user_id])
    if user
        render json:user, status: :ok
    else
        render json: { error: "Not authorized" }, status: :unauthorized
    end
end

  # def create
  #   user = User.create!(user_params)
  #   render json: user, status: :created
  # end

#   def create
#     # byebug
#     new_user = User.create!(user_params)
#     session[:user_id] = new_user.id
#     # byebug
#     render json: new_user, status: :created
# end

def create
  user = User.create!(user_params)
  if user.valid?
    session[:user_id] = user.id
  # byebug
    render json: user, status: :created
  end
end

  def destroy
    user = find_user
    user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

  def find_user
    User.find(params[:id])
  end
end

# def create
#   user = User.create(
#     username: params[:username],
#     email: params[:email],
#     password: params[:password],
#     password_confirmation: params[:password_confirmation])
#   # session[:user_id] = user.id
#   byebug
#   render json: user, status: :created
# end