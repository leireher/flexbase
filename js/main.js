import { db } from "./datubasea.js";

const base = 'https://covers.openlibrary.org/b/id/'

let i=0

let aldatu = () => {
    let irudia = document.querySelector('#irudia')

    let tempi = ((i % db.length) + db.length) % db.length
    console.log(tempi)

    irudia.src = base + db[tempi].filename

    let titulo = document.querySelector('#izenburua')
    titulo.value = db[tempi].izenburua

    let egile = document.querySelector('#egilea')
    egile.value = db[tempi].egilea

    let urte = document.querySelector('#urtea')
    urte.value = db[tempi].data

    let isbn = document.querySelector('#isbn')
    isbn.value = db[tempi].isbn
}

let botoia = document.querySelector('#botoia')
botoia.onclick = () => {
    i++
    aldatu()
}

let botoia2 = document.querySelector('#atzera')
botoia2.onclick = () => {
    i--
    aldatu()
}

aldatu()



