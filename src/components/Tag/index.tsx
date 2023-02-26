import * as C from './styles'

type TagProps={
    title:string;
    rest?:any[]
}
export const Tag = ({ title, ...rest }:TagProps)=>{
    return(
        <C.Container {...rest}>
            {title}
        </C.Container>
    )
}