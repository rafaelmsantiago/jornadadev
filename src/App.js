import "./App.css";
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={20}
          messages={200}
          shares={300}
          name="Rafael"
          description="Gato"
          music="Uma musica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=d1a44acd-bef3-4b18-bafe-92fa0b26828a"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Jeremias"
          description="Gato palminha"
          music="Bate palma"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />        
      </div>
    </div>
  );
}

export default App;
