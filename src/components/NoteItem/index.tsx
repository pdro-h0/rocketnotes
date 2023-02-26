import * as C from './styles'
import { FiPlus, FiX } from 'react-icons/fi'

type NoteItemProps={
    isNew:boolean,
    value?:string,
    onClick?: ()=>void,
    placeholder?:string
}

export const NoteItem = ({ isNew, value, onClick, ...rest }:NoteItemProps)=>{
    return(
        <C.Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest} />

            <button 
            onClick={onClick}
            type='button'
            className={isNew ? 'button-add' : 'button-delete'}>
                {isNew ? <FiPlus /> : <FiX />}
            </button>

        </C.Container>
    )
}