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
      <p3>
        <div>Paste a link to a Discord-hosted image into the input below.</div>
       <div>If your image was backed up, a url to the catbox image will appear</div>

        <div>For example, try pasting this into the input: https://cdn.discordapp.com/attachments/1049916667997724682/1110085703058067466/dddyb.png</div>

      </p3>
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
