import './scss/style.scss'
import { card } from './render/cards'
import { content } from './handlers/content'



const div = document.createElement('div')
div.classList.add('picture')
document.body.appendChild(div)

content.map((el) => { card(el) })


