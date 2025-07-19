import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function RegisterForm() {
    const [form, setForm] = useState ({
        name: '',
        email:'',
        password:'',
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post ('/auth/register', form)
            alert(res.data.msg)
            navigate('/login')
        } catch (err){
            alert(err.response?.data?.msg || 'Erro ao cadastrar')
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite seu nome"
            value={form.name}
            onChange={(e) => setForm ({...form, name: e.target.value})}
            />
            <input type="email"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={(e) => setForm ({...form, email: e.target.value})}
            />
            <input type="password"
            placeholder="Digite sua senha"
            value={form.password}
            onChange={(e) => setForm ({...form, name: e.target.password})}
            />
            <button type="submit">Cadastrar</button>

        </form>
        </>
    )
}