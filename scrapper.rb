# TwitterTrends1.rb
require 'rubygems'
require 'rest_client'
require "uri"

def getPage(page)
  offset = (50 * page).to_s
  url = 'http://archive.is/offset=' + offset + '/http://laist.com/*'
  RestClient.get(url)
end

 
page = getPage(0)


for url in URI.extract(page)
  if url.include? 'laist'
    puts url
  end
end
# => ["http://foo.example.org/bla", "mailto:test@example.com"]

