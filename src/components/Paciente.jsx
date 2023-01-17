
const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas,id} = paciente;

    const handleEliminar = () => {
        const respuesta  = confirm('¿Estas seguro de eliminar este paciente?');

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return (
        <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type='button'
                    className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded uppercase cursor-pointer'
                    onClick={() => setPaciente(paciente)} // el evento onClick llama a la función setPaciente y le pasa el paciente
                >Editar</button>

                <button
                    type='button'
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded uppercase cursor-pointer '
                    onClick={handleEliminar} // el evento onClick llama a la función eliminarPaciente y le pasa el id del paciente a eliminar
                >Eliminar</button>

            </div>
        </div>
    )
}

export default Paciente
