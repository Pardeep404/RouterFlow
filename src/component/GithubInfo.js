// GithubInfo.js
export async function GithubInfo() {
  const res = await fetch("https://api.github.com/users/Pardeep404");
  return res.json();
}
