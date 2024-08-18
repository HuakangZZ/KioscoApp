import React, { useEffect } from 'react'
import PantallaBuenLogueo from '../auth/pantallaBuenLogueo/pantallaBuenLogueo';
import PantallaMalLogueo from '../auth/pantallaMalLogue/pantallaMalLogueo';


function pantalla(boolean){
  if (boolean) {
    return <PantallaBuenLogueo/>
  }
  else{
    return <PantallaMalLogueo/>
  }
}


function Bienvenida({cargarNavBar, valor}) {
  useEffect(() => {
    if (valor) {
      cargarNavBar(true);
    }
  },[cargarNavBar]);
  
  return (
    <div>
        {pantalla(valor)}
    </div>
  )
}

export default Bienvenida