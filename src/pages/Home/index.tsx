import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import * as C from './styles'
import { FiPlus } from 'react-icons/fi'
import { Input } from '../../components/Input'

import { FiSearch } from 'react-icons/fi'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'


export const Home = ()=>{
    return(
        <C.Container>
            <C.Brand>
                <h1>RocketNotes</h1>
            </C.Brand>

            <Header />

            <C.Menu>
                <li>
                    <ButtonText title='Todos' isActive={true}/> {/* SE DER ERADO É PQ COLOQUEI ISACTIVE JA COMO TRUE  */}
                </li>

                <li>
                    <ButtonText title='ReactJS'/>
                </li>

                <li>
                    <ButtonText title='Node'/>
                </li>
            </C.Menu>

            <C.Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
            </C.Search>

            <C.Content>
                <Section title='Minhas notas' />
                <Note data={{
                    title: 'React',
                    tags: [
                        { id: '1', name: 'react' },
                        { id: '2', name: 'rocketseat' }
                    ]
                }}
                />
            </C.Content>

            <C.NewNote to='/new'>
                <FiPlus />
                Criar nota
            </C.NewNote>
        </C.Container>
    )
}