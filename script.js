let button = document.querySelector("#searchButton")


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
    verse.innerText = res.verses[0].verse
})
.catch(err => {
    console.log("error!", err)
})
}

button.addEventListener("click", getData)
// chapter.addEventListener("click", ())
// verse.addEventListener("click", ())