import React, { useState, useEffect } from 'react'
import "./App.css"
import Header from "./components/Header"
import ShowRounds from "./components/ShowRounds"
import ShowTime from "./components/ShowTime"
import Button from "./components/Button"

function App() {

  const [numVoltas, setNumVoltas] = useState(1)
  const [tempo, setTempo] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timer = null
    if(running){
      timer = setInterval(()=> {
        setTempo(old => old+1)
      }, 1000)
    }
    return () => {
      if(timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  const toggleRunning = () => {
    setRunning(!running)
  }

  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  const decrement = () => {
    if(numVoltas > 0){
      setNumVoltas(numVoltas - 1)
    }
  }

  const Reset = () =>{
    setNumVoltas(0)
    setTempo(0)
    setRunning(false)
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-12">

          <Header />
          <ShowRounds voltas={numVoltas} />
          <Button texto=" - " estilo="btn btn-warning" onClick={decrement} />
          <Button texto=" + " estilo="btn btn-success" onClick={increment} />
          {
            numVoltas > 0 &&
            <ShowTime tempo={Math.round(tempo/numVoltas)} texto="Tempo médio por voltas

            " />
          }
          <ShowTime tempo={tempo} texto="Tempo"/>
          <Button texto={ running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} estilo="btn btn-outline-primary"/>
          <Button texto="Reiniciar" onClick={Reset} estilo="btn btn-outline-danger"/>

        </div>
      </div>

    </div>
  );
}

export default App;
