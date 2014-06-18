require "json"
require "selenium-webdriver"
require "rspec"

require "rubygems"
require "mongo"
require "time"

require File.dirname(__FILE__) + "/create_driver"

include Mongo
include RSpec::Expectations

include CreateDriver 
describe "sample app" do

	before(:each) do
		url = 'http://localhost:9000'
		if (ENV['browser']=='ipad')
			create_ipad_driver(url)
		elsif (ENV['browser']=='headless')
			create_headless_driver(url)
		else
			create_firefox_driver(url)
		end
		# @mongo_client = MongoClient.new("localhost", 27017);
	end
	$i = 0
	after(:each) do
		if example.exception != nil
			path = "../screen-shots/tests#{$i}.png"
			@driver.save_screenshot(File.expand_path(path,__FILE__))
		end
		$i+=1

		@driver.quit
		@verification_errors.should == []
	end


	describe "home page" do
		it "tests button game" do
			#@driver.manage.window.resize_to(500, 500)
			sleep 2
			# note here that xpath arrays start at 1 not the typical 0, but not in IE
			expect(@driver.find_element(:xpath, "//div[contains(@class,'we')][1]/p[1]").text).to include "Play a button"
			scoreDisplay = @driver.find_element(:id, 'scoreDisplay')
			expect(scoreDisplay.text).to eq "0"
			for i in 1..10
				click_score()
				expect(scoreDisplay.text).to eq "#{i}"
			end
			@driver.navigate().refresh()
			sleep 1
			#must get elements again after a page refresh
			scoreDisplay = @driver.find_element(:id, 'scoreDisplay')
			expect(scoreDisplay.text).to eq '10'
			sleep 3
		end

		it "tests using javascript on button" do
			sleep 3
			# @driver.manage.window.resize_to(500, 500)
			@driver.execute_script("document.querySelector('div.body-content > div:nth-child(1) > button').scrollIntoView(false)")
			sleep 2
			@driver.execute_script("$('button')[1].click()")
			sleep 3
			@driver.execute_script("$('button')[1].click()")
			sleep 3
			#expect(@driver.find_element(:css, "css=button:contains('me')").attribute("title")).to eq "OH NO YOU DIDN'T"
		end
		it "tests the list on the page with arrays" do
			sleep 1
			expect(@driver.find_elements(:tag_name, 'li')[3].text()).to include "Async local"
		end
	end
	describe "extra page" do
		it "can select a radio button" do
			@driver.find_element(:css, "a[href='#quiz']").click
			sleep 1
			@driver.find_element(:id, 'r3').click
			@driver.find_element(:id, 'c1').click
			@driver.find_element(:id, 'c3').click
			sleep 1
			@driver.find_element(:tag_name, 'textarea').send_keys "I want extra peanut butter cups"
			sleep 4
			@driver.find_element(:css, ".btn-primary").click
			!5.times{ break if (@driver.find_element(:id, "info").text != "" rescue false); puts 'waiting'; sleep 1 }
			sleep 4
			expect(@driver.find_element(:id, "info").text).to eq "Strawberry Ice Cream\nWith toppings: Peanut Butter Cups\nCheesecake Chunks\nExtra instructions: I want extra peanut butter cups"
		end
	end
	def click_score
		scoreBtn = @driver.find_element(:id, 'scoreBtn')
		scoreBtn.click
	end
end
