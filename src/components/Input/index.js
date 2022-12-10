import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} placeholder="Adicione a URL a partir do nome de usuário"/>
    </InputContainer>
  )
}

export default Input
