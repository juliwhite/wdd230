const baseURL = "https://juliwhite.github.io/wdd230/";

const linksURL = "https://juliwhite.github.io/wdd230/data/links.json";

//const lists = document.querySelector("#links")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    //displayLinks(data.lessons);
  }
  
getLinks();

/*const displayLinks = (lessons) => {
    lessons.forEach((week) => {
        let list = document.createElement('li');
        let a = document.createElement('a');

        list.textContent = `Week ${week.url} ${week.title}`;

        lists.appendChild(list);
    });
}*/