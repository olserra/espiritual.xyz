document.addEventListener("DOMContentLoaded", function () {
  const extractButton = document.getElementById("extractButton");
  const resultDiv = document.getElementById("result");

  extractButton.addEventListener("click", function () {
    // Send a message to the content script to extract data from the webpage
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "extractData" },
        function (response) {
          if (response && response.data) {
            // Display the extracted data in the popup
            resultDiv.innerText = JSON.stringify(response.data, null, 2);
          }
        }
      );
    });
  });
});
