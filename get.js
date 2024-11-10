function displayData() {
  var userInput = document.getElementById("userInput").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var fileData = this.responseText;
      var dataDisplay = document.getElementById("dataDisplay");

    
      if (fileData.includes(userInput)) {
        dataDisplay.innerHTML = fileData;
      } else {
        dataDisplay.innerHTML = "没有找到";
      }
    }
  };
  xhttp.open("GET", "身份证.txt", true);
  xhttp.send();
}