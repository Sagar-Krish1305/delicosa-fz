import { useState } from 'react'
import ContactUsForm from './Components/Contact Us Form/ContactUsForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{backgroundColor: '#1F603C', height: '800vh'}}>
      <ContactUsForm></ContactUsForm>
    </div>
  )
}

export default App
