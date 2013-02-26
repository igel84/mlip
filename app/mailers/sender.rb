#encoding: utf-8
class Sender < ActionMailer::Base
  default :from => "igel.yulian@gmail.com"

  def salt_question(email, name, phone, message)
    @title = 'вопрос на сайте'
    @email = email
    @name = name
    @phone = phone
    @message = message
    @sender_name = name
    mail :to => 'igel.yulian@gmail.com', :subject => @title #, :body => @message
    #render 'salt_account/email_friend'
  end
end