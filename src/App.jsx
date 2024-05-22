import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import FunctionBar from './components/FunctionBar/FunctionBar';
import MoreProducts from './components/MoreProducts/MoreProducts';
import NavBar from './components/NavBar/NavBar';
import TopBar from './components/TopBar/TopBar';
import NotFound from './components/NotFound';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const loadWithDelay = (importFunc) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(importFunc()), 1000);
  });
};
const Product = lazy(() => loadWithDelay(() => import('./components/Product/Product')));

function App() {

  return (
    <Router>
      <TopBar />
      <FunctionBar />
      <NavBar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <MoreProducts />
      <Footer />
    </Router>
  );
}

export default App;
