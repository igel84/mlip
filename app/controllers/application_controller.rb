class ApplicationController < ActionController::Base  
  protect_from_forgery

  before_filter :service_menu

  private
  	def service_menu
  		@article_services = Article.find_by_slug('uslugi')
  	end
end
