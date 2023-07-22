import { createGlobalStyle } from "styled-components"
import TodosForm from "./components/TodosForm"
import TodosList from "./components/TodosList"
import {styled} from "styled-components"

function App() {

  const Global = createGlobalStyle`
  *{
    padding:0px;
    margin:0px;
    box-sizing:border-box;
  }
  `
  const Wrapper = styled.div`
    max-width:1000px;
    margin: 0 auto;

  `
  return (
    <>
      <Global/>
      <Wrapper>
      <TodosForm/>
      <TodosList/>
      </Wrapper>
      </>
  )
}

export default App
