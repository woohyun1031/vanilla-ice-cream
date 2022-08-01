const isball = document.getElementById("ball")
// (0) 브라우저 자체적으로 제공하는이미지나 요소에 대한 드래그 앤 드롭 비활성화
isball.ondragstart = function () {
  return false
}

isball.addEventListener("mousedown", (event) => {
  //getBoundingClientRect => isball element의 위치를 알아내기위한
  let shiftX = event.clientX - isball.getBoundingClientRect().left
  let shiftY = event.clientY - isball.getBoundingClientRect().top
  let currentDroppable = null

  // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
  const moveAt = (pageX, pageY) => {
    isball.style.left = pageX - shiftX + "px"
    isball.style.top = pageY - shiftY + "px"
  }
  const enterDroppable = (elem) => {
    console.log(elem)
    elem.style.background = "pink"
  }
  const leaveDroppable = (elem) => {
    console.log(elem)
    elem.style.background = ""
  }

  const mouseMove = (event) => {
    moveAt(event.pageX, event.pageY)

    isball.hidden = true
    //현재 isball아래 Point element 지정
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
    isball.hidden = false
    //선택된 element가 없으면=> pointer가 윈도우 밖에 있으면 그냥 return
    if (!elemBelow) return
    //선택된 element가 있으면 그 element와 가장 가까운, 즉 자신이 droppable(골대)인지 혹은 아닌지 체크
    //보통을 body를 가르키고있지만 골대에 가면 droppable선택자를 갖고있는 img태그가 지정됨
    let droppableBelow = elemBelow.closest(".droppable")
    //현재 elemBelow, 즉 올려놓고있는 위치가 droppable(골대)이면
    //current와 droppable이 둘 다 img로 같은 경우 넘어가지만

    //currentDroppable과 droppable이 달라지는 순간,
    //즉 droppableBelow가 img태그에서 body로 바뀌는 경우

    if (currentDroppable != droppableBelow) {
      //droppableBelow가 img태그면 current는 droppableBelow로 바꾼다.
      //droppableBelow가 null이면(즉 img태그 밖으로 나가면)
      if (currentDroppable) {
        //img밖으로 나간경우 => 즉 current는 남아있지만 droppable이 body로 바꼈을 때, null일때
        //색을 빼주고 current를 null로 바꿔준다
        leaveDroppable(currentDroppable)
      }
      currentDroppable = droppableBelow
      if (currentDroppable) {
        enterDroppable(currentDroppable)
      }
    }
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
