let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count//on click  increment button the count  increases by 1 and change h2
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr//on click  save button print  count  in Previous entries
    countEl.textContent = 0
    count = 0 //retern count and h2 to 0
}
console.log("Let's count people on the subway!")