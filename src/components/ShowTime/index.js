import React from "react"

import "./style.css"

function ShowTime({ tempo, texto }) {
  const time = tempo
  const minutes = Math.round(time / 60)
  const seconds = time % 60

  const minutesStr = minutes < 10 ? "0" + minutes: minutes
  const secondsStr = seconds < 10 ? "0" + seconds: seconds

  return(
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <p className="tempo">{ `${minutesStr}:${secondsStr}` }</p>
        <label>
          <p>{texto}</p>
          </label>
      </div>
      <div className="col-4"></div>
    </div>
  )

}

export default ShowTime