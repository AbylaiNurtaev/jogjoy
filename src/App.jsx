import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import { useEffect } from 'react';
import GetStartedPage from './pages/GetStartedPage';

import GetFreeAccount from './pages/GetFreeAccount';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Main from './pages/Main';
import VideoPage from './pages/VideoPage';
import Layout from './pages/Layout';
import Cabinet from './pages/Cabinet';
import Support from './pages/Support';
import Feedback from './pages/Feedback';
import Notifications from './pages/Notifications';
import Payment from './pages/Payment';
import Uploading from './pages/Uploading';
import Stats from './pages/Stats';
import Workout from './pages/Workout';
import Ananlysis from './pages/Ananlysis';
import FullMetric from './pages/FullMetric';

function App() {
  useEffect(() => {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
  }, []);

  return (
    <div className="App flex flex-col justify-start items-center w-[100%] h-[100%]" style={{ height: "100vh" }}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/main' element={<Main />} />
          <Route path='/support' element={<Support />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/video' element={<VideoPage />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/workout' element={<Workout />} />
          <Route path='/analysis' element={<Ananlysis />} />
          <Route path='/fullMetric' element={<FullMetric />} />
          <Route path='/uploading' element={<Uploading />} />
          <Route path='/cabinet' element={<Cabinet />} />
        </Route>
        <Route path='/payment' element={<Payment />} />
        <Route path='/' element={<StartPage />} index />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/getStarted' element={<GetStartedPage />} />
        <Route path='/getFreeAccount' element={<GetFreeAccount />} />
      </Routes>
    </div>
  );
}

export default App;
