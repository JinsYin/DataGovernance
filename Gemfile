source "https://rubygems.org"

require 'json'
require 'open-uri'

# Jekyll environment in sync with GitHub Pages
# see: <https://github.com/github/pages-gem> or <https://pages.github.com/versions/>
ghversion = JSON.parse(open('https://pages.github.com/versions.json').read) rescue ">0"

gem 'jekyll', ghversion['jekyll']

group :jekyll_plugins do
  gem 'jekyll-paginate', ghversion['jekyll-paginate']
end
