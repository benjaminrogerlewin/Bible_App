let button = document.querySelector("#searchButton")
let landingButton =document.querySelector("#landingButton")
let bibleApp = document.querySelector(".bibleApp")
let landing = document.querySelector(".landing")
let body = document.querySelector(".body")

async function getData(event) {
let textInput = document.querySelector("#inputBar").value
const url = `https://bible-api.com/${textInput}?translation=kjv`

fetch(url)
.then(res => {
    return res.json()
})
.then(res => {
    console.log("success!", res)
    let verseName = document.querySelector("#verseName")
    verseName.innerText = res.verses[0].book_name
    let verseText = document.querySelector("#verseText")
    verseText.innerText = res.text
    let chapter = document.querySelector("#chapter")
    chapter.innerText = res.verses[0].chapter
    let verse = document.querySelector("#verse")
    verse.innerText = res.reference.slice(7)
})
.catch(err => {
    console.log("error!", err)
})
}

// function enterPage() {
//     bibleApp.removeAttribute("hidden");
//     landing.style.visibility = "hidden"
// }

//test


const btn = document.getElementById("btn");
const content = document.getElementById("content");
let expanded = false;

landingButton.addEventListener("click", () => {
  if (expanded) {
    bibleApp.classList.remove("expanded");
    bibleApp.classList.add("exiting");
    setTimeout(() => {
      bibleApp.classList.remove("exiting");
      bibleApp.setAttribute("hidden", true);
    }, 500);
  } else {
    bibleApp.classList.add("expanded");
    bibleApp.removeAttribute("hidden");
  }

  expanded = !expanded;
  landing.style.visibility = "hidden"
});

//end test


button.addEventListener("click", getData)
// landingButton.addEventListener("click", enterPage)
