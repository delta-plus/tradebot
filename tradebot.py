from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.PhantomJS()
driver.set_window_size(1120, 550)

while True:
  with open('tradelist.txt') as trades:
    for line in trades:
      driver.get(line)
      WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, 'html/body/main/div/div/div/div[2]/a[1]'))
      )
      driver.find_element_by_xpath('html/body/main/div/div/div/div[2]/a[1]').click()
      WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, './/*[@id=\'rlg-addTradeForm\']/div[2]/input'))
      )
      driver.find_element_by_xpath('.//*[@id=\'rlg-addTradeForm\']/div[2]/input').click()
    time.sleep(905) # Extra five seconds just to be safe. Edit if you want. 
