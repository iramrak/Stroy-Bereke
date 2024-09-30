import './App.scss'
import { Main , About, FirstBanner, Assortment, SecondBanner, Footer} from '../shared/components';

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <FirstBanner />
      <Assortment />
      <SecondBanner />
      <Footer />
    </div>
  )
}

export default App
