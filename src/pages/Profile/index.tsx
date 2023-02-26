import * as C from './styles'
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const Profile = ()=>{
    return(
        <C.Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft />
                </Link>
            </header>

            <C.Form>
                <C.Avatar>
                    <img src="https://github.com/pdro-h0.png" alt="Foto do Usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id='avatar' type='file' />
                    </label>
                </C.Avatar>
                <Input 
                placeholder='Nome'
                type='text'
                icon={FiUser}/>

                <Input 
                placeholder='E-mail'
                type='text'
                icon={FiMail}/>

                <Input 
                placeholder='Senha atual'
                type='password'
                icon={FiLock}/>

                <Input 
                placeholder='Nova senha'
                type='password'
                icon={FiLock}/>

                <Button title='Salvar' />
            </C.Form>
        </C.Container>
    )
}