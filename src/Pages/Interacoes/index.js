import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from "../../Componets/Button";
import * as S from './Interacaoes.styles';
import api from "../../service/Api";

const Interacoes = () => {
  const [exames, setExames] = useState([]);

  const history = useHistory();
  useEffect(() => MostrarUsuarios(), []);

  async function MostrarUsuarios() {
    await api.get("/exames").then((response) => {
      setExames(response.data);
    });
  };
  const goHome = () => history.push('/');



  
  const admissional = exames.filter((exame) => {
    return exame.tipoexame === 'Admissional';
  })
  const periodico = exames.filter((exame) => {
    return exame.tipoexame === 'Periódico';
  })
  
  const demissional = exames.filter((exame) => {
    return exame.tipoexame === 'Demissional';
  })
  
  const labMedicina = exames.filter((exame) => {
    return exame.laboratorio === 'Lab Medicina';
  })
  
  const labFuncional = exames.filter((exame) => {
    return exame.laboratorio === 'Lab Funcional';
  })
  
  const hemograma  = exames.filter((exame) => {
    return exame.nomeexame === 'Hemograma Completo';
  })
  
  const audiometria = exames.filter((exame) => {
    return exame.nomeexame === 'Audiometria';
  })
  
  const acuidade = exames.filter((exame) => {
    return exame.nomeexame === 'Acuidade Visual';
  })
  
  return (
    <S.Container>
      <S.Header>
        <S.Title>Total</S.Title>
      </S.Header>
      <S.Box>
      </S.Box>
      <S.Table >
        < tbody >
          <tr>
           <th>Quantidade Exames de Lab Funcional </th>
           <th>Quantidade Exames de Lab Medicina </th>
          </tr>
            <tr >
              <td> {labFuncional.length}</td>
              <td> {labMedicina.length}</td>

            </tr>
        </tbody >
      </S.Table>
      <S.Table >
        < tbody >
          <tr>
           <th>Quantidade Exames de Admissão</th>
           <th>Quantidade Exames de Periódico  </th>
           <th>Quantidade Exames de Demissional </th>
          </tr>
            <tr >
              <td> {admissional.length}</td>
              <td> {periodico.length}</td>
              <td> {demissional.length}</td>
            </tr>
        </tbody >
      </S.Table>
      <S.Table >
        < tbody >
          <tr>
           <th>Quantidade Exames de Hemograma Completo</th>
           <th>Quantidade Exames de Audiometria  </th>
           <th>Quantidade Exames de Acuidade Visual</th>
          </tr>
            <tr >
              <td> {hemograma.length}</td>
              <td> {audiometria.length}</td>
              <td> {acuidade.length}</td>
            </tr>
        </tbody >
      </S.Table>

      <Button  background ={'#089'} onClick={() => goHome()}>Home</Button>
    </S.Container >
  );
}

export default Interacoes;
