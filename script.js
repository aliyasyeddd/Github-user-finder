const btn = document.getElementById("btn")

btn.addEventListener("click", ()=> {
    console.log("button clicked")
})

async function fetchRandomGitHubUsers(count = 10) {
 
  const randomSince = Math.floor(Math.random() * 1000000); // adjust upper bound if needed
  const url = `https://api.github.com/users?since=${randomSince}&per_page=${count}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.status);
    }
    const users = await response.json();
    console.log('Random GitHub Users:', users);

    // Optional: show only login names
    users.forEach(user => console.log(user.login));
  } catch (error) {
    console.error('Error fetching random users:', error);
  }
}

// Fetch 10 random users
fetchRandomGitHubUsers(10);
