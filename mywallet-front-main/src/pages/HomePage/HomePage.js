import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import {
  HomeLayout,
  Header,
  RegisterScreen,
  Footer,
  Value,
  Total,
  TotalValue,
} from "./styled";
import api from "../../services/api";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(listTransactions, []);

  function listTransactions() {
    api
      .getTransactions(user.token)
      .then((res) => {
        const datas = res.data;
        setTransactions(datas);
        console.log(datas);
      })
      .catch((err) => {
        alert(`Ocorreu um erro: ${err.response.data}`);
      });
  }

  const total = transactions.reduce((acc, cur) => {
    return cur.type === "income"
      ? acc + parseFloat(cur.value)
      : acc - parseFloat(cur.value);
  }, 0);

  return (
    <HomeLayout>
      <Header>
        <h1>Olá, {user.name}</h1>

        <Link to="/">
          <ion-icon name="exit-outline"></ion-icon>
        </Link>
      </Header>

      <RegisterScreen>
        {Array.isArray(transactions) && transactions.length === 0 ? (
          <h2>
            Não há registros de <br />
            entrada ou saida
          </h2>
        ) : (
          transactions.map((item) => (
            <div>
              <div>
                <p>{item.date.replace("-", "/").replace("-", "/")}</p>
                <p>{item.description}</p>
              </div>

              <Value color={item.type === "expense" ? "#C70000" : "#03AC00"}>
                <p>{item.value.toFixed(2).replace(".", ",")}</p>
              </Value>
            </div>
          ))
        )}

        <Total>
          <h3>SALDO</h3>

          <TotalValue color={total <= 0 ? "#C70000" : "#03AC00"}>
            {total.toFixed(2).replace(".", ",")}
          </TotalValue>
        </Total>
      </RegisterScreen>

      <Footer>
        <Link to="/nova-entrada">
          <div>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              entrada
            </p>
          </div>
        </Link>

        <Link to="/nova-saida">
          <div>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              saída
            </p>
          </div>
        </Link>
      </Footer>
    </HomeLayout>
  );
}
