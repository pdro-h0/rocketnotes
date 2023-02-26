import { IconType } from 'react-icons'
import * as C from './styles'

type InputProps={
    icon?:IconType,
    rest?:any,
    placeholder?:string,
    type?:string
}

export const Input = ({ icon:Icon, ...rest }:InputProps)=>{
    return(
        <C.Container>
            {Icon && <Icon size={20}/>}
            <input {...rest} />
        </C.Container>
    )
}