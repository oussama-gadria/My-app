
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import React, { Suspense } from 'react';
const Products = React.lazy(()=> import('./composants/Products'))
const NotFound = React.lazy(()=> import('.//composants/NotFound'))
const NavBarComponent = React.lazy(()=> import('./composants/NavBarComponent'))
const ProductDetails = React.lazy(()=> import('./composants/ProductDetails'))
function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Chargement ...</p>}>
      <NavBarComponent/>
 <Routes>
 <Route  path='/products'>
<Route index  element={<Products/>}/>
  <Route path=':name' element={<ProductDetails/>}/>
 </Route>
<Route  path='*' element={<NotFound/>}/>

 </Routes>
 </Suspense>
</div>
  )
}

export default App;
