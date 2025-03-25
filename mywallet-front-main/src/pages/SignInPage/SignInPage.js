import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useContext, useState } from "react";

import { SignInLayout } from "./styled"
import { LinkStyle } from "../../components/LinkStyle"
import { UserContext } from "../../contexts/UserContext";

export default function SignInPage(){
    const[formData, setFormData] = useState({email: '', password:''});
    const[loading, setLoading] = useState(false)
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        api.SignIn(formData)
            .then(res => {
                setLoading(false)
                const {name, token} = res.data
                setUser({name, token})
                localStorage.setItem("user", JSON.stringify({name, token}))
                navigate("/home")
            })
            .catch(err => {
                alert(`Ocorreu um erro: ${err.response.data}`)
                setLoading(false)
            })
    }

    return(
        <SignInLayout>
            <h1>My Wallet</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />

                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />

                <button>Entrar</button>
            </form>
            <LinkStyle to="/cadastro">Primeira vez? Cadastre-se!</LinkStyle>
        </SignInLayout>
    )
}