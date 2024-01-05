const arrows = document.querySelectorAll('.main_arrows_container')
const title = document.querySelector('.main_title')
const paragraph = document.querySelector('.main_paragraph')
const img = document.querySelector('.main_hero')

const content = [
    {
        title: "Discover innovative ways to decorate",
        paragraph: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        image: "url(../images/desktop-image-hero-1.jpg)"
    },
    {
        title:"We are available all across the globe",
        paragraph:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        image: "url(../images/desktop-image-hero-2.jpg)"
    },
    {
        title:"Manufactured with the best materials",
        paragraph:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        image: "url(../images/desktop-image-hero-3.jpg)"
    }
]

info = 0
changeInfo()

arrows[0].addEventListener('click', (e) => {
    e.preventDefault()
    info = info + 1
    if (info > 2) 
        info = 0

    changeInfo()
})

arrows[1].addEventListener('click', (e) => {
    e.preventDefault()
    info = info + 1
    if (info > 2) 
        info = 0

    changeInfo()
})

function changeInfo(){
    if (info == 0){
        title.innerHTML = content[0].title
        paragraph.innerHTML = content[0].paragraph
        img.style.backgroundImage = content[0].image;
    }
    else if (info == 1){
        title.innerHTML = content[1].title
        paragraph.innerHTML = content[1].paragraph
        img.style.backgroundImage = content[1].image;
    }
    else if (info == 2){
        title.innerHTML = content[2].title
        paragraph.innerHTML = content[2].paragraph
        img.style.backgroundImage = content[2].image;
    }
}

