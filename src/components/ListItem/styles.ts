import styled from 'styled-components'

type ContainerProps = {
  done: boolean
}

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    ` 
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px; 

  label {
    display: flex;
    align-items: center;
    width: 100%;
    color: #ccc;
    text-decoration: ${done === true ? 'line-through' : 'initial'}  ;
    cursor: pointer;

    input {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }
`
)
