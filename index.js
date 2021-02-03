
const getdog = document.getElementById('dogbutton')

function dogpic() {
    fetch(`https://random.dog/woof.json`)
    .then(res => res.json())
    .then(d => {
        const picdiv = document.createElement("img")
        const placement = document.getElementById("helicopter-parent")
        picdiv.src = d.url
       picdiv.width = "500"
       picdiv.height = "500"
       
        placement.append(picdiv)
    
    })
}

getdog.addEventListener('click',dogpic)

const getcat = document.getElementById('catbutton')

function catfax() {
    fetch(`https://cat-fact.herokuapp.com/facts`)
    .then(res => res.json())
    .then(c => {
       
        const placement = document.getElementById("comments-container")
        placement.innerHTML = ""
        c.forEach(element => {
           const fax = element.text
           const faxdiv = document.createElement("p")
           faxdiv.innerText = fax
           placement.append(faxdiv)
            
        });
        
    })
}
getcat.addEventListener('click',catfax)