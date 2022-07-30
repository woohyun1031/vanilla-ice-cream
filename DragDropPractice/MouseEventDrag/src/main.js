const ball = document.querySelector("#ball")

ball.addEventListener("mousedown", (event) => {
  // (0) 브라우저 자체적으로 제공하는이미지나 요소에 대한 드래그 앤 드롭 비활성화
  ball.addEventListener("dragstart", () => {
    return false
  })
  // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
  const moveAt = (pageX, pageY) => {
    ball.style.left = pageX - ball.offsetWidth / 2 + "px"
    console.log(pageX - ball.offsetWidth / 2 + "px")
    ball.style.top = pageY - ball.offsetHeight / 2 + "px"
    console.log(pageY - ball.offsetHeight / 2 + "px")
  }
  const mouseMove = (event) => {
    moveAt(event.pageX, event.pageY)
  }

  // (1) absolute 속성과 zIndex 프로퍼티를 수정해 공이 제일 위에서 움직이기 위한 준비를 합니다.
  ball.style.position = "absolute"
  ball.style.zIndex = 1000

  // 현재 위치한 부모에서 body로 직접 이동하여
  // body를 기준으로 위치를 지정합니다.
  document.body.append(ball)

  moveAt(event.pageX, event.pageY)

  ball.addEventListener("mousemove", mouseMove)

  ball.addEventListener("mouseup", () => {
    ball.removeEventListener("mousemove", mouseMove)
  })
})
