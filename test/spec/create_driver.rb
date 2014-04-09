require "selenium-webdriver"


module CreateDriver

  def driver
    return @driver
  end

  def create_ipad_driver(url)
    desired_caps = {
      # 'browserName' => 'iOS', #what is this for?
      # 'platform' => 'Mac',
      'device' => 'iPad Simulator',
      # 'version' => '7.1',
      'app' => 'safari'
    }
    server_url = "http://127.0.0.1:4723/wd/hub"
    @driver = @driver = Selenium::WebDriver.for(:remote, :desired_capabilities => desired_caps, :url => server_url)
    general_setup(url)
  end
  def create_firefox_driver(url)
    @driver = Selenium::WebDriver.for :firefox
    general_setup(url)
  end
  def create_chrome_driver(url)
    @driver = Selenium::WebDriver.for :chrome
    general_setup(url)
  end
  def general_setup(url)
    @base_url = "http://localhost:9000"
    @accept_next_alert = true
    # wait to find an element
    @driver.manage.timeouts.implicit_wait = 3
    @verification_errors = []
    @driver.get(@base_url)
  end
end