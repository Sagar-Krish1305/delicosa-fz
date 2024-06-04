import React from 'react'
import ContactUsForm from './Components/Contact Us Form/ContactUsForm'
import ProductPage from './Pages/Our_Products/OurProductsPage'
import ProductPageIntroduction from './Components/Our_Product_Introduction/ProductIntroduction'
function App() {
  return (
    <div style={{backgroundColor: '#1F603C', height: '100%'}}>
      <ProductPage selected={"Yellow"} />
    </div>
  )
}

export default App
