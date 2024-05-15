import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 컴포넌트
import Navbar from './components/navbar/navbar';
import { Login, Signin, ModifyProfile, ChangePw, Main, Post, ReadPost } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="/info" element={<ModifyProfile/>}/>
          <Route path="/pw" element={<ChangePw/>}/>
          <Route path="post" element={<Post/>}/>
          <Route path="readPost" element={<ReadPost/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
