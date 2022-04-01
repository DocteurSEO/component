import {style} from './style.js'
function setStyle(){

    const template = document.createElement('template')
    template.innerHTML = style
    return template
}
const localStyle = setStyle()
document.querySelector('body').appendChild(localStyle.content)



export function Button (texte, className) {
    
    const button = document.createElement('button');
    button.classList.add('easyJS-'+className);
    button.textContent =  texte
 return button 
}