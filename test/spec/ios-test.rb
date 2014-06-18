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
  'app' => absolute_app_path
}

server_url = "http://127.0.0.1:4723/wd/hub"


describe "Computation" do
  before :all do
    #@driver = Selenium::WebDriver.for(:remote, :desired_capabilities => desired_caps, :url => server_url)
    @driver = Selenium::WebDriver.for :phantomjs
    @driver.manage.timeouts.implicit_wait = 3 # seconds
   # webview = @driver.window_handles.last 
   # @driver.switch_to.window(webview)
   end

  after :all do
    #@driver.execute_script("mobile: leaveWebView")
    @driver.quit
  end

  it "should do stuff" do
    #@driver.navigate.to('http://localhost:8080/PreconceptionCare/reprohealth/')
    @driver.navigate.to("http://google.com")
    element = @driver.find_element(:xpath, '//*[@id="hplogo"]')
    puts element.attribute('id')
    puts @driver.title

    #@driver.get('http://localhost:8080/PreconceptionCare/reprohealth/')
    #@driver.execute_script("document.querySelector('#accept-btn').scrollIntoView(false)")
    
    # @driver.find_element(:id, 'scoreBtn').click()
    #@driver.find_element(:xpath, '//*[@id="accept-btn"]').click()
    
  end

end
