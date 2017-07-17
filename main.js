let container = document.querySelector("#container");

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/trschmitt");
request.addEventListener("load", githubInfo);
request.send();

function businessCard() {
  let data = JSON.parse(this.responseText)
  let template = `
  <header id="name">
  <h1>${data.name}</h1>
  </header>
  <section id="the-basics">
    <h2>The Basics</h2>
    <ul>
      <li>${data.name}</li>
      <li>${data.html_url}</li>
      <li>${data.company}</li>
      <li>${data.blog}</li>
    </ul>
  </section>
  <section id="the-story">
    <h2>The Story</h2>
    <p>bio</p>
    <img src="" alt="">
  </section>
  `
}
