import NotificationButton from "./componentes/Notification/NotificationButton"
import Header from './componentes/Header/header'
import Sales from './componentes/Sales/Sales'

function App() {
  return (
    <>
      <h1>ola mundo</h1>
      <Header />
      <section id="seles">
        <div className="dsmetas-catainer">
           <Sales/>
        </div>
      </section>

    </>
  )
}


export default App
