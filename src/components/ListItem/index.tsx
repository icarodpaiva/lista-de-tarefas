import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type ListItemProps = {
  data: Item
  changeDone: (id: number) => void
}

const ListItem = ({ data, changeDone }: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(data.done)

  const onChangeDone = () => {
    setIsChecked(!isChecked)
    changeDone(data.id)
  }

  return (
    <C.Container done={isChecked}>
      <label onChange={onChangeDone}>
        <input type="checkbox" defaultChecked={isChecked} />
        {data.name} - {data.done.toString()}
      </label>
    </C.Container>
  )
}

export default ListItem
