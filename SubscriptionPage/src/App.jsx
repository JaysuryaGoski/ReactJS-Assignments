import './App.css'
import Subscription from './components/Subscription'
import MySubscription from './components/MySubscription'
import { useState } from 'react'

function App() {
  const [showMySubscription, setShowMySubscription] = useState(false);

  //a function to toggle between Subscription and MySubscription components
  const handleShowSubscription = ()=>{
    setShowMySubscription(true);
  }
  return (
    <>
      {
        showMySubscription ? (
          <MySubscription />
        ) : (
          <Subscription onRegister = {handleShowSubscription}/>
        )
      }
      
    </>
  )
}

export default App
