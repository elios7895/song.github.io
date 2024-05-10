// *** touches
const pads = document.querySelectorAll(".pad")
// *** Boucle (parcourir les touches)
pads.forEach( (pad, i) => {
    console.log(pad, i)
    pad.addEventListener("click", () => {
        new Audio(`songs/song${i + 1}.wav`).play()
    })
})

const letterToNumber = {
    a: 1,
    z: 2,
    e: 3,
    r: 4,
    t: 5,
    q: 6, 
    s: 7, 
    d: 8,
    f: 9,
    g: 10,
    w: 11,
    x: 12,
    c: 13,
    v: 14,
    b: 15,
    n: 16

}
addEventListener("keypress", (event) => {
  const number = letterToNumber[event.key]
  new Audio(`songs/song${number}.wav`).play()
  pads[number - 1].classList.add("press")
})

addEventListener("keypress", (event) => {
    const number = letterToNumber[event.key]
    new Audio(`songs/song${number}.wav`).play()
    pads[number - 1].classList.remove("press")
  })
  
  
