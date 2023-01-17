import Board from './components/Board';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
