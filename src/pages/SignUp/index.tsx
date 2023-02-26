import { Input } from '../../components/Input'
import * as C from './styles'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const SignUp = ()=>{
    return(
        <C.Container>
            <C.Background />

            <C.Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Crie sua Conta</h2>

                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input 
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input 
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Cadastar' />

                <Link to='/'>Voltar para login</Link>
    
            </C.Form>
        </C.Container>
    )
}