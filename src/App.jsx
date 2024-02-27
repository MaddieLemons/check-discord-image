import './App.css';
import discord_files from './discord_files';
import { useState } from 'react';


function App() {

  const [currentMessage, setCurrentMessage] = useState('Please enter a Discord Image Link to check if it was backed up');


  const checkChange = e => {
    const currentUrl = e.target.value;
    if(discord_files[currentUrl]){
      setCurrentMessage(discord_files[currentUrl]);
    } else {
      setCurrentMessage('That url was not backed up')
    }
  }

  return (
    <>
      <h1>Check for a Discord Link</h1>
      <div className="card">
        <input onChange={e => checkChange(e)}>
        </input>
        <hr/>
        <div>
          {currentMessage}
        </div>
      </div>
    </>
  )
}

export default App
