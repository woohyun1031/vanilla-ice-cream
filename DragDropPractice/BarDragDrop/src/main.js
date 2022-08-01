const isthumb = document.getElementById("thumb")
const isslider = document.getElementById("slider")

// (0) 브라우저 자체적으로 제공하는이미지나 요소에 대한 드래그 앤 드롭 비활성화
isthumb.ondragstart = function () {
  return false
}

isthumb.addEventListener("mousedown", (event) => {
  event.preventDefault()

  //pointer의 pick 위치
  let shiftX = event.clientX - isthumb.getBoundingClientRect().left

  const onmouseMove = (event) => {
    //클릭한부분으로부터 남은 slider길이
    let newLeft = event.clientX - shiftX - isslider.getBoundingClientRect().left
    console.log(
      `event.clientX: ${
        event.clientX
      }, shiftX: ${shiftX}, isslider.getBoundingClientRect().left: ${
        isslider.getBoundingClientRect().left
      }`
    )
    if (newLeft < 0) {
      console.log(newLeft, "newleft < 0")
      newLeft = 0
    }
    let rightEdge = isslider.offsetWidth - isthumb.offsetWidth
    if (newLeft > rightEdge) {
      console.log(rightEdge, "newleft > rightEdge")
      newLeft = rightEdge
    }
    console.log(newLeft, "thumb left px")
    isthumb.style.left = newLeft + "px"
  }

  const onmouseUp = () => {
    document.removeEventListener("mouseup", onmouseUp)
    document.removeEventListener("mousemove", onmouseMove)
  }

  //mousedown과 동시에 addEventlistener로 등록
  document.addEventListener("mousemove", onmouseMove)
  document.addEventListener("mouseup", onmouseUp)
})
