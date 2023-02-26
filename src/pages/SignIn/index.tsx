import { Input } from '../../components/Input'
import * as C from './styles'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const SignIn = ()=>{
    return(
        <C.Container>
            <C.Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça Login</h2>

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

                <Button title='Entrar' />

                <Link to='/register'>Criar Conta</Link>
    
            </C.Form>

            <C.Background />
        </C.Container>
    )
}