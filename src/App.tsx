import { Main , About, FirstBanner, Assortment, SecondBanner, Footer} from '../shared/components';
import { StickyHead } from '../shared/ui';

function App() {
  return (
    <div className="container">
    <StickyHead />
    <Main />
    <About />
    <FirstBanner />
    <Assortment />
    <SecondBanner />
    <Footer />
  </div>
  );
}

export default App
