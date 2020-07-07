// Your code goes here
console.log(`It's Alive!`)

const funnybus = document.querySelector('.intro')
console.log(funnybus)

funnybus.addEventListener('mouseover', (it) =>{
    it.target.style.color = 'green'
    it.target.style.background = 'orange'
})

funnybus.addEventListener('mouseleave', (it) =>{
    it.target.textContent = 'This is now a secret.'
    it.target.style.fontSize = '5rem'
    it.target.style.textAlign = 'center'
})


const logoHeading = document.querySelector('.logo-heading')
const imgContent = document.querySelector('.img-content img')

document.addEventListener('keydown', (it) =>{
    if(it.key === 'Escape'){
        logoHeading.textContent = 'No escape'
        logoHeading.style.fontSize = '8rem'
        logoHeading.style.backgroundPosition = 'cover'
    }
})

imgContent.addEventListener('dblclick', (it) =>{
    it.target.style.boxShadow = '10px 10px',
    it.target.style.color = 'green'
})

const text = document.querySelector('.text-content')

document.addEventListener('keyup', (it) =>{
    if(it.key === 'Escape'){
        text.style.background = 'black'
    }
})

document.addEventListener('contextmenu', (it) =>{
    it.target.style.background = 'black'
})

const button = document.querySelector('.btn')

button.addEventListener('click', (it) =>{
    it.target.style.color = 'pink'
})

button.addEventListener('mousemove', (it) =>{
    it.target.style.background = 'black'
})

button.addEventListener('mouseout', (it) =>{
    it.target.textContent = "Stop it"
})

const footer = document.querySelector('footer')

footer.addEventListener('mousedown', (it) =>{
    it.target.style.background = "purple"
})

const navbar = document.querySelectorAll('nav a')
console.log(navbar)

navbar.forEach(it =>{
    it.addEventListener('click', (those) =>{
        those.preventDefault()
    })
})

text.addEventListener('dblclick', (it) =>{
    it.target.style.background = "pink"
})

const textp = document.querySelector('.text-content p')
console.log(textp)

textp.addEventListener('dblclick', (it) =>{
    it.target.style.background = "green"
    it.stopPropagation()
})