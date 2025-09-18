/* import './styles.css'  -> forma padrão de importar */
import { useRef } from 'react'
import api from '../../services/api'
import {Input, InputLabel, Form, ConteinerInputs, Container } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackgroud'
import { useNavigate } from 'react-router-dom'
import { Title } from '../../components/Tittle/styles'


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Container>
      <TopBackground />
      <Form>
      <Title>Cadastrar Usuários</Title>

        <ConteinerInputs>
          <div>
            <InputLabel>Nome <span> *</span></InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={inputName}></Input>
          </div>

          <div>
            <InputLabel>Idade <span> *</span></InputLabel>
            <Input type='Number' placeholder='Idade do Usuário' ref={inputAge}></Input>
          </div>
        </ConteinerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>E-mail <span> *</span></InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail}></Input>
        </div>

        <Button type='button' onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>
      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>Ver Lista de Usuários</Button>
    </Container>
  )
}

export default Home

/*
exportar padrão -> uma coisa só por pagina
apenas exportar -> exportar varias coisas "export" na frente de cada função.

  return (
      <Container>
        <Title>OK React</Title>
      </Container>
    
  )
*/