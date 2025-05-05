import './App.css'
import Enigme from './Enigme'
import { useState } from 'react'
import Logo from './assets/logo.png'

function App() {
  const [jouer, setJouer] = useState(false);

  const retourMenu = () => {
    setJouer(false);
  }

  return (
  <div>
      {!jouer && (
        <div className='logo'>
          <img src={Logo} alt="" width={800}/>
        </div>
      )}

    <div>
        { jouer && <button onClick={() => setJouer(false)} className='btn-return'> Retour </button>}
    
    {
      !jouer ? ( <button onClick={()=> setJouer(true)} className='btn-play'> Jouer </button> ) : (<Enigme retourMenu={retourMenu} />)
    }
    </div>
  </div>
  )
}

export default App
