import { Routes, Route } from 'react-router-dom';
import { Sidebar, Topbar, NowPlaying } from 'src/Layout';
import { Search } from 'src/components/Search';
import { Homepage } from './pages/Homepage';
import { Searchpage } from './pages/Searchpage';

import 'normalize.css';
import 'src/App.css';

function App() {
  return (
    <div className="App">
      <div className="side-bar">
        <Sidebar />
      </div>
      <div className="top-bar">
        <Topbar />
      </div>
      <div className="now-playing">
        <NowPlaying />
      </div>
      <div className="main-view">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/search" element={<Searchpage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
