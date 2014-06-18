require "rubygems"
require "rspec"
require 'rake'
require 'rspec/core/rake_task'

task :default => :'firefox'

desc("Run all tests on firefox.")
RSpec::Core::RakeTask.new("firefox") do |t|
ENV['browser']='firefox'
t.rspec_opts = "--tag firefox"
end  

desc("Run all tests on ipad.")
RSpec::Core::RakeTask.new("ipad") do |t|
ENV['browser']='ipad'
end  

desc("Run all tests headless.")
RSpec::Core::RakeTask.new("headless") do |t|
ENV['browser']='headless'
end 