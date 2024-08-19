import React, { useEffect } from 'react'
import PantallaBuenLogueo from '../auth/pantallaBuenLogueo/pantallaBuenLogueo';


function Bienvenida({cargarNavBar}) {
  useEffect(() => {
      cargarNavBar(true);
  },[cargarNavBar]);
  
  return (
    <div>
        <PantallaBuenLogueo/>
    </div>
  )
}

export default Bienvenida