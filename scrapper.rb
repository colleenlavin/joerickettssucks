# TwitterTrends1.rb
require 'rubygems'
require 'rest_client'
 
url = 'http://archive.is/http://laist.com/%2A'
 
response = RestClient.get(url)
 
puts response.body
