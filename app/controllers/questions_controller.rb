class QuestionsController < ApplicationController  
  def create
    Sender.salt_question(params[:email], params[:name], params[:phone], params[:message]).deliver
    render :nothing => true
    #  flash[:success] = 'сообщение отправлено'
    #  redirect_to params[:page]
    #else
    #  render 'new', :layout=>false
    #end
  end
end