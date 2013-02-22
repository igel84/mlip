class ApplicationController < ActionController::Base  
  protect_from_forgery

  before_filter :service_menu, :top_article, :top_menu, :article_menu
  before_filter :check_article

  private

  	def top_menu
  		@top_menu = []
  		@top_menu << Article.find(1)
  		@top_menu << Article.find_by_slug('uslugi')
      @top_menu << Article.find_by_slug('portfolio')
  		@top_menu << Article.find_by_slug('kontakty')
  	end

  	def service_menu
  		@service_articles = Article.find_by_slug('uslugi').children
  	end

  	def article_menu
  		@menu_articles = Article.find_by_slug('stati').children.limit(6).shuffle!
  	end

  	def top_article
  		@top_article = Article.where('parent_id IS NOT NULL').shuffle!.first
  	end

  	def check_article
  		if params[:id]
  			@article = Article.find(params[:id])
  		else
  			@article = Article.first
  		end
  	end

end
