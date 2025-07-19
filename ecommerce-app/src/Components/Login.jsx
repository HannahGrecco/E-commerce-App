import { useState } from "react";
import { useNavigate } from 'react-react-dom'
import axios from "axios";

export default function Login (){
    const [form, setForm] = useState ({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('/auth/login', form)
            localStorage.setItem('token', res.data.token)
            alert(res.data.msg)
            navigate('/ecommerce')
        } catch (err) {
            alert(err.response?.data?.msg || 'Erro ao fazer login')
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Digite seu e-mail"
            value={form.email}
            onChange={(e) => setForm({...form, email: e.target.value})}
            />
             <input type="password"
            placeholder="Digite sua senha"
            value={form.password}
            onChange={(e) => setForm({...form, password: e.target.value})}
            />
            <button type="submit">Entrar</button>
        </form>
    )
}