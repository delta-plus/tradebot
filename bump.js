<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
$(document).ready(function() {
  function bump() {
    document.getElementById('bump').style.backgroundColor = 'blue';
    chrome.tabs.executeScript({
      file: 'executeBump.js'
    }); 
  document.getElementById('bump').addEventListener('click', bump);
}
