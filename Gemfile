source "https://rubygems.org"

require 'json'
require 'open-uri'

# Jekyll environment in sync with GitHub Pages
# see: <https://github.com/github/pages-gem> or <https://pages.github.com/versions/>
ghversion = JSON.parse(open('https://pages.github.com/versions.json').read) rescue ">0"

gem 'jekyll', ghversion['jekyll']

group :jekyll_plugins do
  gem 'jemoji', ghversion['jemoji'] # :+1:
  gem 'jekyll-feed', ghversion['jekyll-feed'] # {% feed_meta %} and /feed.xml
  gem 'jekyll-paginate', ghversion['jekyll-paginate']
  gem 'jekyll-sitemap', ghversion['jekyll-sitemap'] # /robots.txt and sitemap.xml
  gem 'jekyll-seo-tag', ghversion['jekyll-seo-tag'] # {% seo %}
  gem 'jekyll-redirect-from', ghversion['jekyll-redirect-from']
  gem 'jekyll-relative-links', ghversion['jekyll-relative-links']
end
