let container = document.querySelector("#container");

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/trschmitt");
request.addEventListener("load", businessCard);
request.send();

function businessCard() {

  let data = JSON.parse(this.responseText);

  let template = `
  <header id="name">
    <h1>${data.name}</h1>
  </header>
  <section id="the-basics">
    <div>
      <h2>The Basics</h2>
    </div>
    <ul>
      <li>${data.name}</li>
      <li>${data.html_url}</li>
      <li>${data.company}</li>
      <li>${data.blog}</li>
    </ul>
  </section>
  <section id="the-story">
    <h2>The Story</h2>
    <div>
      <p>${data.bio}</p>
    </div>
    <div id="picture">
      <img src=${data.avatar_url} alt="pro_picture">
    </div>
  </section>
  `
  container.innerHTML = template;
}
