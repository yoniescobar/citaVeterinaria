import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'
import Headers from './components/Header'

const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => { // se ejecuta cuando el componente se carga por primera vez
    const obtenerLS = () => {

    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')); 
    // Detecta si hay algo en el LocalStorage  y lo convierte en un array de objetos (JSON.parse)  o si no hay nada, devuelve un array vacío (?? []) 
    if (pacientesLS?.length > 0) { 
      // Si hay algo en el LocalStorage, lo asigna a pacientes
      setPacientes(pacientesLS); // 
    }

    }
    obtenerLS();
  }, []);

  
  useEffect(() => { // detecta cuando hay cambios en pacientes y lo guarda en el LocalStorage 
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-6 '>
      <Headers />
      <div className='mt-6 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App