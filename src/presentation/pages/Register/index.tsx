import React, { useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import { CreateUser } from './../../../domain/usecases'
import Input from './../../components/Input'
import Button from './../../components/Button'
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import {Container, Content, AnimationContainer} from './styles'

interface UserFormData {
  name: string
  email: string
  cpf: string  
  phone: string
}

interface Props {
  createUser: CreateUser
}

const Register: React.FC<Props> = ({createUser}: Props) => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();        

  const handleSubmit = useCallback(
    async (data: UserFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.number().min(10, 'No mínimo 10 caracteres'),
          cpf: Yup.number().min(11, 'No mínimo 11 caracteres'),
        });

        console.log(data)
        await schema.validate(data, {
          abortEarly: false,
        });

        await createUser.create(data)
        history.push('/');
        alert('Cadastro realizado!')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(err);
          return;
        }
        alert(err)
      }
    },
    [createUser, history],
  );  

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Cadastre o usuário</h1>
            <Input name="name" placeholder="Nome" />
            <Input name="email" placeholder="E-mail" />
            <Input
              name="cpf"
              type="number"
              placeholder="CPF"
            />
            <Input
              name="phone"
              type="number"
              placeholder="Telefoneyarn "
            />            
            <Button type="submit">Cadastrar</Button>            
          </Form>
          <Link to="/list">
            Voltar para a lista de usuários
          </Link>          
        </AnimationContainer>
      </Content>
    </Container>   
  )
}

export default Register;