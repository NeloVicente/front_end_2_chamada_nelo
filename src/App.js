import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from "./Componets/Button/index";
import Form from './Componets/Form';
import * as S from './App.styles';
import api from "./service/Api";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => MostrarUsuarios(), [usuarios]);

  async function MostrarUsuarios() {
    await api.get("/exames").then((response) => {
      setUsuarios(response.data);
    });
  }

  async function deletarUsuario(id) {
    await api
      .delete(`exames/${id}`)
      .then(() => {
        alert('Exame Deletado')
      })
      .catch(() => {
        alert("Não foi possível deletar o Exame");
      });
  }

 
 
  const history = useHistory();
  const goTotal = () => history.push('/total');

  return (
    <S.Container>
      <S.Header>
        <S.Title> Exames</S.Title>
        <S.Figure>
          <S.Image src={'https://image.freepik.com/vetores-gratis/doutor-ilustracao-clinica_1270-69.jpg'} alt="exames" />
        </S.Figure>
      </S.Header>
      <S.Box>
        <Form
          MostrarUsuarios={MostrarUsuarios}
        />
      </S.Box>
      <S.Table >
        < tbody >
          <tr>
            <th>Nome</th>
            <th>Tipo Exame</th>
            <th>Nome do exame</th>
            <th>Mes do exame</th>
            <th>Laboratorio</th>
            <th>Deletar</th>
          </tr>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td> {usuario.nome}</td>
              <td>{usuario.tipoexame}</td>
              <td>{usuario.nomeexame}</td>
              <td>{usuario.mesanoexame}</td>
              <td>{usuario.laboratorio}</td>
              <td><Button  background ={'#DF0101'} onClick={() => deletarUsuario(usuario.id)}>Excluir</Button></td>
            </tr>
          ))}
        </tbody >
      </S.Table>
      <Button  background ={'#089'} onClick={() => goTotal()}>Totais</Button>
    </S.Container >
  );
}

export default App;
