import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
// import Library from "./pages/Library/Library";
// import Store from "./pages/Store/Store";
// import Game from "./pages/Game/Game";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        {/* <Route path="/library" element={<Library />}/>
        <Route path="/store" element={<Store />}/>
        <Route path="/game" element={<Game />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;