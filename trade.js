function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var url = window.location.href;
async function trade() {
  if (url.indexOf('https://rocket-league.com/trade/') != -1 && url.indexOf('edit') == -1) {
    await sleep(905000);
    getElementByXpath('html/body/main/div/div/div/div[2]/a[1]').click();
    getElementByXpath('html/body/main/div/div/div/div[2]/a[1]').click();  
  } else if (url.indexOf('https://rocket-league.com/trade/edit') != -1) {
    getElementByXpath('.//*[@id=\'rlg-addTradeForm\']/div[2]/input').click();
  }
}

trade();
