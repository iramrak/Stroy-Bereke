import './App.scss'
import { Main , About, FirstBanner, Assortment, SecondBanner} from '../shared/components';

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <FirstBanner />
      <Assortment />
      <SecondBanner />
    </div>
  )
}

export default App
