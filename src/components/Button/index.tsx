import * as C from './styles'

type ButtonProps={
    title?:string,
    loading?:boolean,
    rest?:string[],
}

export const Button = ({ title, loading = false, ...rest }:ButtonProps)=>{
    return(
        <C.Container 
        type='button'
        disabled={loading}>
            {loading ? 'CARREGANDO...' : title}
        </C.Container>
    )
}