import { useState } from 'react'
import './FormModule.css'

const Form = ({setUser}) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSumbit = (e) => {
        e.preventDefault()

        if(name === "" || password === ""){
            setError(true)
            return
        }
        setError(false)
        setUser([name])
    }
    console.log(name);
    console.log(password);
    console.log(error);
    return (
        <section>
            <h1>login</h1>

            <form className='formulario'>
                <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
                <button>Inciar sesión</button>
            </form>
            {error && <p>Todos los campos son obligatiorios</p>}
        </section>
    )
}

export default Form