import * as C from './styles'

type SectionProps ={
    title:string,
    children?: JSX.Element|JSX.Element[]
}

export const Section = ({ title, children }:SectionProps)=>{
    return(
        <C.Container>
            <h2>{title}</h2>
            {children} {/* VER SE ISSO VAI MUDAR COMO O TITLE */}
        </C.Container>
    )
}