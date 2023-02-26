import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { Link } from 'react-router-dom'
import * as C from './styles'


{/* SE DER ERRADO É PQ COLOQUE COMO FALSE DIRETO */}

export const New = ()=>{
    return(
        <C.Container>
            <Header />

            <main>
                <C.Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>

                    <Input placeholder='Título' />
                    <TextArea placeholder='Observações' />

                    <Section title='Links úteis'>
                        <NoteItem isNew={false} value='https://google.com'/> 
                        <NoteItem isNew={true} placeholder='Novo link'/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className="tags">
                            <NoteItem isNew={false} value='React'/>
                            <NoteItem isNew={true} placeholder='Nova Tag'/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </C.Form>
            </main>
        </C.Container>
    )
}