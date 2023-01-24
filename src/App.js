import './App.css';
import { Admin } from './components/Admin/Admin';
import { Client } from './components/Client/Client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Admin />} />
                    <Route path='/client' element={<Client />} />
                    <Route path='*' element={<h1>Oops!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
