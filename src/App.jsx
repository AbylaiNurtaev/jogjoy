import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import { useEffect } from 'react';
import GetStartedPage from './pages/GetStartedPage';

function App() {
  useEffect(() => {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
  }, []);

  return (
    <div className="App flex flex-col justify-start items-center w-[100%]" style={{ height: "100vh" }}>
      <Routes>
        <Route path='/' element={<StartPage />} index />
        <Route path='/getStarted' element={<GetStartedPage />} />
      </Routes>
    </div>
  );
}

export default App;
