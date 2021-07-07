import React, { useState } from "react";
import * as S from './Form.style';
import api from "../../service/Api";
import Select from "../Select";
const Form = () => {


    const [nome, setNome] = useState('');
    const [tipoexame, setTipoexame] = useState('');
    const [nomeexame, setNomeexame] = useState('');
    const [laboratorio, setLaboratorio] = useState('');
    const [mesanoexame, setMesanoexame] = useState('');


    const CriarUsuario = async (e) => {
        e.preventDefault();
        setNome('');
        setNomeexame('');
        setMesanoexame('');
        setLaboratorio('');
        setTipoexame('');
        await api.post('/exames', {
            nome: nome,
            tipoexame: tipoexame,
            nomeexame: nomeexame,
            mesanoexame: mesanoexame,
            laboratorio: laboratorio,

        })
            .then(() => {
                alert('Exame cadastrado com sucesso!');
            })
            .catch(() => alert('Falha ao cadastrar Exame!'));
    }

    return (
        <>
            <S.Title> <S.Cadas>Cadastro Exames</S.Cadas> </S.Title>
            <S.Form
                onSubmit={CriarUsuario}
            >
                <S.Input
                    type="text"
                    required
                    placeholder="Escreva seu nome "
                    id="nome"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                <Select
                    titulo={'Tipos de exame'}
                    opcao1={'Admissional'}
                    opcao2={'Periódico'}
                    opcao3={'Demissional'}
                    value={tipoexame}
                    setValue={setTipoexame}
                />

                <Select
                    titulo={'Nome do Exame'}
                    opcao1={'Hemograma Completo'}
                    opcao2={'Audiometria'}
                    opcao3={'Acuidade Visual'}
                    value={nomeexame}
                    setValue={setNomeexame}
                />
                <Select
                    titulo={'Laboratórios'}
                    opcao1={'Lab Funcional'}
                    opcao2={'Lab Medicina'}
                    opcao3={'Demissional'}
                    value={laboratorio}
                    setValue={setLaboratorio}
                />
                <label>Data do exame:</label>
                <S.Input
                    type="date"
                    required
                    id="mesanoexame"
                    placeholder="Escreva mesanoexame"
                    name="mesanoexame"
                    value={mesanoexame}
                    onChange={(e) => setMesanoexame(e.target.value)} />

                <S.Button type='submit' variant='contained' >Inserir</S.Button>
            </S.Form>
        </>
    );
};

export default Form;
