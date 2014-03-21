require "json"
require "selenium-webdriver"
require "rspec"

include RSpec::Expectations

describe "sample app" do

	before(:each) do
		@driver = Selenium::WebDriver.for :firefox
		@base_url = "http://localhost"
		@accept_next_alert = true
		@driver.manage.timeouts.implicit_wait = 3
		@verification_errors = []
	end
	before(:each) do
		@driver.get(@base_url + ":9000")
	end

	after(:each) do
		@driver.save_screenshot(File.expand_path("../screen-shots/home.png",__FILE__))
		@driver.quit
		@verification_errors.should == []
	end



	it "tests contact button" do
		sleep 3
		@driver.find_element(:css, "a[href='#contact']").click
		sleep 3
		expect(@driver.find_element(:xpath, "//div[@class='well'][1]/p[1]").text).to include "Play a button"
		scoreBtn = @driver.find_element(:id, 'scoreBtn')
		scoreDisplay = @driver.find_element(:id, 'scoreDisplay')
		expect(scoreDisplay.text).to eq "0"
		for i in 1..3
			scoreBtn.click
			expect(scoreDisplay.text).to eq "#{i}"
		end
		@driver.navigate().refresh()
		sleep 1
		#must get elements again after a page refresh
		scoreDisplay = @driver.find_element(:id, 'scoreDisplay')
		expect(scoreDisplay.text).to eq '3'
	end
end
