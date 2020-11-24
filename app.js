
const closeAnnBtn = document.querySelector(`.fa-times`)
const annBanner = document.querySelector(`.ann`)
closeAnnBtn.onclick = (e)=>{
    console.log("1")
    annBanner.remove();
    e.preventDefault();
}
console.log("Hello")