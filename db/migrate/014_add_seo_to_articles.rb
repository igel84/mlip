class AddSeoToArticles < ActiveRecord::Migration
  def change
  	add_column :articles, :seo_description, :string
  	add_column :articles, :seo_keywords, :string
  	add_column :articles, :seo_title, :string
  end
 end