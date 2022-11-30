import { useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

function App() {
  return (
    <ReactMediaRecorder
      
      audio

      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status}</p>
          <button onClick={startRecording}>Start Recording Audio</button>
          <button onClick={stopRecording}>Stop Recording Audio</button>
          <audio src={mediaBlobUrl} autoplay loop controls ></audio>
        </div>
      )}
    />
  );
}

export default App;
