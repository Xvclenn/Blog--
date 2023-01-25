import "./App.css";
import { Admin } from "./components/Admin/Admin";
import { Client } from "./components/Client/Client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./components/Blogs/Blogs";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Admin />} />
                    <Route path="/client" element={<Client />} />
                    <Route path="*" element={<h1>Oops!</h1>} />
                    <Route path="/blogs" element={<Blogs />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
