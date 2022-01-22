import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type AddAreaProps = {
  onEnter: (taskName: string) => void
}

const AddArea = ({ onEnter }: AddAreaProps) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText) {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <C.Container>
      <div className="image">&#x2795;</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  )
}

export default AddArea
