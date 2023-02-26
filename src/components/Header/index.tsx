import * as C from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export const Header= ()=>{
    return(
        <C.Container>
            <C.Profile to='/profile'>
                <img 
                src="https://github.com/pdro-h0.png" 
                alt="Foto do Usuário" />

                <div>
                    <span>Bem Vindo!</span>
                    <strong>Pedro Henrique</strong>
                </div>
            </C.Profile>

            <C.LogOut>
                <RiShutDownLine />
            </C.LogOut>
        </C.Container>
    )
}