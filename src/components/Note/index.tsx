import { Tag } from "../Tag";
import * as C from "./styles";

type NoteProps={
    data:{
        title:string,
        tags:{
            id: string | number,
            name: string
        }[]
    }
}

export const Note = ({ data, ...rest }:NoteProps) => {
  return (
    <C.Container {...rest} >
    <h1>{data.title}</h1>
    {
      data.tags && 
      <footer>
        {
        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
        }
      </footer>
    }
  </C.Container>
  );
};
