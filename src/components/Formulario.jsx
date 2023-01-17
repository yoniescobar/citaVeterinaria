import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]) //useEffect se ejecuta cuando el componente se carga por primera vez


  const generarId = () => {  //generar un id aleatorio para cada paciente
    const random = Math.random().toString(36).substr(2);   //genera un numero aleatorio
    const fecha = Date.now().toString(36); //genera la fecha actual
    return random + fecha; //retorna el numero aleatorio + la fecha actual
  }


  const handleSubmit = (e) => { //e es el evento que se ejecuta cuando se envia el formulario
    //handleSubmit es el nombre de la funcion que se ejecuta cuando se envia el formulario
    e.preventDefault();

    //validar formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay un campo vacio');
      setError(true);
      return;
    }
    setError(false);

    //crear un objeto con los datos del formulario 
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      
    }
    if (paciente.id) { //si el paciente tiene un id, es porque se esta editando
      //actualizar el paciente
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState);
      
      setPacientes(pacientesActualizados);
      setPaciente({}); //reiniciar el paciente
      
    } else { //si el paciente no tiene un id, es porque se esta creando
      //crear un nuevo paciente
      objetoPaciente.id= generarId()
      setPacientes([...pacientes, objetoPaciente]);
    }

    //console.log(objetoPaciente);

    //reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');


  }


  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className='text-indigo-600 font-bold'>Administrarlos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
      >
        {error ? <Error><p>Todos los campos son obligatorios</p></Error> : null}



        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //e.target.value es el valor que se escribe en el input  
          //callback: es una funcion que se ejecuta cuando algo sucede en el componente 
          />

        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder='Email Contado Propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-md'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className='border-2 w-full p-3 mt-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent rounded-md'
            placeholder='Descripción de los Síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-shadow rounded-md'
          value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario
