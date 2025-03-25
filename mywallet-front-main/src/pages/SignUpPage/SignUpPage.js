import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { SignUpLayout } from "./styled";
import { LinkStyle } from "../../components/LinkStyle";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (confirmPassword === formData.password) {
      api
        .SignUp({ ...formData })
        .then(() => {
          alert("Cadastro concluído :)!");
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          alert(`Ocorreu um erro: ${err.response.data}`);
          setLoading(false);
        });
    } else {
      alert("As senhas informadas não se coincidem");
      setLoading(false);
    }
  }

  return (
    <SignUpLayout>
      <h1>My Wallet</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={loading}
          required
        />

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

        <input
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={loading}
          required
        />

        <button disabled={loading}>Cadastrar</button>
      </form>

      <LinkStyle to="/">Já tem uma conta? Entre agora!</LinkStyle>
    </SignUpLayout>
  );
}
