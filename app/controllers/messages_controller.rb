class MessagesController < ApplicationController

  def index
    @message = Message.new
  end

  def new
    @message = Message.new
  end

  def create
    Message.create
  end

  # private
  # def message_params
  #   params.require(:message).permit(:text)
  # end

end
