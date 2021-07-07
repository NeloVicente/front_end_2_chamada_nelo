import React from 'react';
import * as S from './Select.style';


const Select = (props) => {
    const {titulo, opcao1, opcao2, opcao3,value,setValue} = props
    return (
        <S.Label>
            {titulo}:
            <S.Selec value={value} onChange={(e) => setValue(e.target.value)}>
                <option value={0}>Selecionar</option>
                <option value={opcao1}>{opcao1}</option>
                <option value={opcao2}>{opcao2}</option>
                <option value={opcao3}>{opcao3}</option>
            </S.Selec>
        </S.Label>
    );
}
export default Select;




