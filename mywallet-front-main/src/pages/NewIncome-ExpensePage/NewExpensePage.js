import { Container } from "./styled";
import api from "../../services/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function NewExpensePage(){
    const {user} = useContext(UserContext)
    const[formData, setFormData] = useState({value: '', description:''});
    const[loading, setLoading] = useState(false)
    
    const navigate = useNavigate()

    function handleChange(e){
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)

        function dateToday(){
            let date = new Date(),
            day  = date.getDate().toString(),
            month  = (date.getMonth()+1).toString(),
            monthF = (month.length == 1) ? '0'+month : month,
            yearF = date.getFullYear();

            return monthF+"-"+day+"-"+yearF;  
        }

        const body = {
            value: Number(formData.value),
            description: formData.description,
            type: "expense",
            date: dateToday()
        }

        api.postTransactions(body, user.token)
            .then(res => {
                setLoading(false)
                navigate("/home")
            })
            .catch(err => {
                alert(`Ocorreu um erro: ${err.response.data}`)
                setLoading(false)
            })
    }

    return(
        <Container>
            <h1>Nova saída</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />

                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    disabled={loading}
                    required
                />

                <button>Salvar saída</button>
            </form>
        </Container>
    )
}