require "json"
require "selenium-webdriver"
require "rspec"

include RSpec::Expectations

describe "Launchpad" do

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
    @driver.save_screenshot("./homeFailure.png")
    @driver.quit
    @verification_errors.should == []
  end



  it "tests contact button" do

    @driver.find_element(:css, "a[href='#contact']").click
    sleep 3


  end
end
