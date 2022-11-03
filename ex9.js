
for (let index = 0; index < 22; index++){
    let two = document.querySelector('#two')
    two.innerHTML =[index]
    if (index==13){break}
    document.write(index)
}

function kareAl(sayi){
    sayi = document.querySelector(`${namem}`)
    let sonuc = sayi*sayi
    document.write(sonuc)
}

let karem = document.querySelector('#kok')
karem.addEventListener("click", kareAl)
console.log(karem)