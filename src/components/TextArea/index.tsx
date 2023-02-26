import * as C from './styles'

type TextAreaProps={
    value?:string,
    placeholder:string,
    rest?:any[]
}

export const TextArea = ({ value, ...rest }:TextAreaProps)=>{
    return(
        <C.Container {...rest}>
            {value}
        </C.Container>
    )
}