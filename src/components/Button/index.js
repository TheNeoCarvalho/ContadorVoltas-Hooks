import React from "react"
import "./style.css"

function Button({ texto, estilo, onClick }) {
  return(
    <button onClick={onClick} className={estilo}>{texto}</button>
  )
}

export default Button