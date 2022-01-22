import { useState } from 'react'
import { Item } from './types/Item'
import './App.css'
import * as C from './App.styles'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: newList.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  const changeDone = (id: number) => {
    list.forEach(i => {
      if (id === i.id) {
        i.done = !i.done
        return i
      }
    })
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((i, k) => (
          <ListItem key={k} data={i} changeDone={changeDone} />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App
