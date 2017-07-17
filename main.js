let container = document.querySelector("#container");

let request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/trschmitt");
request.addEventListener("load", businessCard);
request.send();

function businessCard() {

  let data = JSON.parse(this.responseText);

  let template = `
  <header>
    <h1>${data.name}</h1>
  </header>
  <div class="content">
    <section id="the-basics">
      <div>
        <h2>The Basics</h2>
      </div>
      <ul>
        <li><span>Name: </span>${data.name}</li>
        <li><span>URL: </span>${data.html_url}</li>
        <li><span>Company: </span>${data.company}</li>
        <li><span>Website: </span>${data.blog}</li>
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
  </div>
  `
  container.innerHTML = template;
}
