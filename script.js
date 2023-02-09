let button = document.querySelector("#searchButton")
let landingButton =document.querySelector("#landingButton")
let bibleApp = document.querySelector(".bibleApp")
let landing = document.querySelector(".landing")
let body = document.querySelector(".body")
let expanded = false

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
    let endVerse = res.verses[res.verses.length - 1].verse
    if (res.verses.length == 1) {
        verse.innerText = res.verses[0].verse
    } else {
    verse.innerText = `${res.verses[0].verse} - ${endVerse}`
    }
})
.catch(err => {
    console.log("error!", err)
})
}

//The code below was created with help from Johan Runesson on whatabout.dev

landingButton.addEventListener("click", () => {
  if (expanded) {
    bibleApp.classList.remove("expanded");
    bibleApp.classList.add("exiting");
    setTimeout(() => {
      bibleApp.classList.remove("exiting");
      bibleApp.setAttribute("hidden", true);
    }, 9000);
  } else {
    bibleApp.classList.add("expanded");
    bibleApp.removeAttribute("hidden");
  }
  expanded = !expanded;
  landing.style.visibility = "hidden"
});

button.addEventListener("click", getData)
