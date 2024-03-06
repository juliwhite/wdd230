const baseURL = "https://juliwhite.github.io/wdd230/";

const linksURL = "https://juliwhite.github.io/wdd230/data/links.json";

const lists = document.querySelector("#links")

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
  }
  
getLinks();

/*const displayLinks = (lessons) => {
    lessons.forEach((weeks) => {

        //Create li element
        const list = document.createElement('li');

        //Create anchor tag.
        const anchorTag = document.createElement('a');
        

        list.textContent = `Week ${weeks.lesson}: `; //;${week.links}`;
       
        anchorTag.href = `#${weeks.url} | ${weeks.title}`;

        anchorTag.textContent = weeks;

        //apend the anchor tag to the li.
        list.appendChild(anchorTag);
        
        lists.appendChild(list);
    });
}*/

const displayLinks = (lessons) => {
    lessons.forEach((weeks) => {
        const list = document.createElement('li');
        list.textContent = `Week ${weeks.lesson}: `;

        weeks.links.forEach(week => {
            const anchorTag = document.createElement('a');
            anchorTag.href = `${week.url}`;
            anchorTag.textContent = `${week.title} `;

            //append anchor to li
            list.appendChild(anchorTag);      
        });
        //append the li to the lists
        lists.appendChild(list);
    });
}