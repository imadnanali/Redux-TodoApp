import './App.css'
import { store } from './app/store'
import Todo from './component/Todo'
import { Provider } from "react-redux"

function App() {

  return (
    <>
    <Provider store={store}>
     <Todo />
    </Provider>
    </>
  )
}

export default App
