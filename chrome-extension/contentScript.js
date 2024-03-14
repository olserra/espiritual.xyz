// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extractData") {
    const inputData = extractDataFromPage(); // Function to extract user input data
    sendResponse({ data: inputData });
  }
});

function extractDataFromPage() {
  // Your logic to extract user input data from the webpage
  // For example, find the input field and extract its value
  const inputElement = document.getElementById("userInput");
  const userInput = inputElement ? inputElement.value : "";

  // Convert the user input into JSON format
  const jsonData = { userInput };

  return jsonData;
}
