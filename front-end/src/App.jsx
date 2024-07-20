import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/registro/RegisterPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/inicio" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  );
}

export default App;
