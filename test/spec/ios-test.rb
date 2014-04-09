require 'rspec'
require 'selenium-webdriver'


APP_PATH = '../../../iphoneapps/PreconCare.app'


def absolute_app_path
    file = File.join(File.dirname(__FILE__), APP_PATH)
    raise "App doesn't exist #{file}" unless File.exist? file
    file
end

desired_caps = {
  # 'browserName' => 'iOS', #what is this for?
  # 'platform' => 'Mac',
  'device' => 'iPhone Simulator',
  # 'version' => '7.1',
  'app' => 'safari'
}

server_url = "http://127.0.0.1:4723/wd/hub"


describe "Computation" do
  before :all do
    @driver = Selenium::WebDriver.for(:remote, :desired_capabilities => desired_caps, :url => server_url)
    @driver.manage.timeouts.implicit_wait = 10 # seconds
   end

  after :all do
    @driver.quit
  end

  it "should do stuff" do
    @driver.get('http://localhost:9000')
    sleep 10
    @driver.find_element(:id, 'scoreBtn').click()
    sleep 10
  end

end
