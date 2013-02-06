#encoding: utf-8
module ApplicationHelper
	def title
		@article.seo_title || 'Студия веб-дизайна ARTLevelDesign Воронеж'
	end
	def seo_keywords
		@article.seo_keywords || 'студия веб-дизайна ARTLevelDesign Воронеж разработка сайтов'
	end
end
