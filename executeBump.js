function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

getElementByXpath('html/body/main/div/div/div/div[2]/a[1]').click();
