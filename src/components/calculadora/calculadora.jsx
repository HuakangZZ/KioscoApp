import React, { useEffect } from 'react'
import './calculadora.css'

function Calculadora({cargarNavBar}) {
    useEffect(()=>{
        cargarNavBar(true)
    },[cargarNavBar])

  return (
    <div>
        
    </div>
  )
}

export default Calculadora