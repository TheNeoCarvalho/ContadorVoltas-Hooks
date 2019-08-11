import React from "react"
import "./style.css"

function ShowRounds({ voltas }) {
  return(
    <div className="row">
      <div className="col-4"/>
      <div className="col-4">
        <p className="numVoltas">{voltas}</p>
        <p className="voltas">Voltas</p>
      </div>
      <div className="col-4"/>
    </div>
  ) 

}

export default ShowRounds