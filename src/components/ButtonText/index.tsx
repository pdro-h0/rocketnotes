import * as C from './styles'

type ButtonTextProps={
title:string;
isActive?:boolean;
rest?:string[];
}

export const ButtonText = ({title,  ...rest}:ButtonTextProps)=>{
    return(
        <C.Container
        type='button'
        {...rest}>
            {title}
        </C.Container>
    )
}