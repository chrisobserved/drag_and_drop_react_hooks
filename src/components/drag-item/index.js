import React, { useState, useRef } from "react"
import useDrag from "../../hooks/useDrag"
import View from "./view"

import "../../styles.css"

export default ({ dragEffect, data, key, id }) => {
  const dragRef = useRef()
  const [classValue, setClassValue] = useState("grab")
  const { dragState } = useDrag({
    id,
    effect: dragEffect,
    ref: dragRef,
    onDragStart: () => setClassValue("grabbing"),
    onDragEnd: () => {
      setClassValue("grab")
    }
  })
  return <View ref={dragRef} data={data} classValue={classValue} />
}
