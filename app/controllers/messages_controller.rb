class MessagesController < ApplicationController

  def index
    @message = Message.new
    @group = Group.find(params[:group_id])
  end

  def new
    @message = Message.new
  end

  def create
    Message.create(body: message_params[:body])
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end

end
