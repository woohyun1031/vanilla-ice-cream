const isball = document.getElementById("ball")
// (0) 브라우저 자체적으로 제공하는이미지나 요소에 대한 드래그 앤 드롭 비활성화
isball.ondragstart = function () {
  return false
}

isball.addEventListener("mousedown", (event) => {
  //getBoundingClientRect => isball element의 위치를 알아내기위한
  let shiftX = event.clientX - isball.getBoundingClientRect().left
  let shiftY = event.clientY - isball.getBoundingClientRect().top

  // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
  const moveAt = (pageX, pageY) => {
    isball.style.left = pageX - shiftX + "px"
    isball.style.top = pageY - shiftY + "px"
  }
  const mouseMove = (event) => {
    moveAt(event.pageX, event.pageY)
  }

  // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
  isball.style.position = "absolute"
  isball.style.zIndex = 1000

  // 현재 위치한 부모에서 body로 직접 이동하여
  // body를 기준으로 위치를 지정합니다.
  document.body.append(isball)

  moveAt(event.pageX, event.pageY)

  isball.addEventListener("mousemove", mouseMove)

  isball.addEventListener("mouseup", () => {
    isball.removeEventListener("mousemove", mouseMove)
  })
})
