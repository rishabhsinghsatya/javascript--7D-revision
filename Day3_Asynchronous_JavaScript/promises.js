function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 2000);
  });
}

fetchDataPromise("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(`Processing: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
// Output after 2 seconds: Processing: Data from https://jsonplaceholder.typicode.com/users