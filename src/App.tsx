import './App.scss'
import { Main , About, FirstBanner, Assortment} from '../shared/components';

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <FirstBanner />
      <Assortment />
    </div>
  )
}

export default App
