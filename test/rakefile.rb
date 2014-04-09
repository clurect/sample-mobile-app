require "rubygems"
require "rspec"
require 'rake'
require 'rspec/core/rake_task'

task :default => :'firefox'

desc("Run all tests.")
RSpec::Core::RakeTask.new("firefox") do |t|
ENV['browser']='firefox'
end  

desc("Run all tests on ipad.")
RSpec::Core::RakeTask.new("ipad") do |t|
ENV['browser']='ipad'
end  