async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const user = await response.json();
    console.log(`User: ${user.name}`);
  } catch (error) {
    console.error(`Fetch error: ${error}`);
  }
}

fetchUserData();
// Output: User: Leanne Graham (or another user from the placeholder API)
