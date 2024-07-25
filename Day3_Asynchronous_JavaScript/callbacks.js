function fetchDataCallback(url, callback) {
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log(`Processing: ${data}`);
}

fetchDataCallback("https://jsonplaceholder.typicode.com/users", processData);
// Output after 2 seconds: Processing: Data from https://jsonplaceholder.typicode.com/users
