const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("qoute");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating...";
    author.innerText = "Updating...";
    const response = await fetch(apiURL);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;
    console.log(data);
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An erroe happend ,Try again letter";
    authorEl.innerText = "An erroe happend ";
    btnEl.innerText = "Get a Quote";
    btnEl.disabled = false;
  }
}
getQuote();
btnEl.addEventListener("click", getQuote);
