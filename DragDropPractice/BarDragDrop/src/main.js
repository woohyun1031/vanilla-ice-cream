const isthumb = document.getElementById("thumb")
const isslider = document.getElementById("slider")

isthumb.ondragstart = function () {
  return false
}

isthumb.addEventListener("mousedown", (event) => {
  event.preventDefault()

  let shiftX = event.clientX - isthumb.getBoundingClientRect().left

  const onmouseMove = (event) => {
    console.log(shiftX)
    let newLeft = event.clientX - shiftX - isslider.getBoundingClientRect().left
    if (newLeft < 0) newLeft = 0
    let rightEdge = isslider.offsetWidth - isthumb.offsetWidth
    if (newLeft > rightEdge) newLeft = rightEdge
    isthumb.style.left = newLeft + "px"
  }

  const onmouseUp = () => {
    document.removeEventListener("mouseup", onmouseUp)
    document.removeEventListener("mousemove", onmouseMove)
  }

  document.addEventListener("mousemove", onmouseMove)
  document.addEventListener("mouseup", onmouseUp)
})
