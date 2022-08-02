import { useState } from "react"

const Item = () => {
  const [color, setColor] = useState("pink")

  const style = {
    display: "flex",
    width: "100px",
    height: "100px",
    border: "1px solid black",
    background: color,
    justifyContent: "center",
    alignItems: "center",
    cursor: "move",
  }

  const onMouseHover = () => {
    setColor("#be8f98")
  }
  const onMouseLeave = () => {
    setColor("pink")
  }

  const dragStartHandler = (e) => {
    console.log("drag start")
  }
  const dragHandler = (e) => {
    console.log("drag ing")
  }
  const dragEndHandler = (e) => {
    console.log("drag end")
  }

  return (
    <div
      style={style}
      onMouseOver={onMouseHover}
      onMouseLeave={onMouseLeave}
      onDragStart={dragStartHandler}
      onDrag={dragHandler}
      onDragEnd={dragEndHandler}
    >
      Item입니다.
    </div>
  )
}

export default Item
