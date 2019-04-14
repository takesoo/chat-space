class UsersController < ApplicationController
  def edit

  end

  def update

  end

  def user_params
    params.require(:user).permit(:name, :email)
  end

end
