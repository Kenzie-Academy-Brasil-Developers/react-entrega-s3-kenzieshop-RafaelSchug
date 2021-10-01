import './App.css';
import Header from './components/Header';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='dark'/>
      <Header/>
      <Routes></Routes>
    </div>
  );
}

export default App;
