function fetchDataPromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const data = await fetchDataPromise(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(`Processing: ${data}`);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

processData();
// Output after 2 seconds: Processing: Data from https://jsonplaceholder.typicode.com/users
