import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNavbar from './components/TopNavbar'
import SideNavbar from './components/SideNavbar';
import Login from './pages/Login';
function App(){

const [items, setItems]= useState([{ title: "Pro Web", description:"Clases"}]);
return(
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={
                <div>
                    <TopNavbar/>
                    <SideNavbar/>
                    <div style={{marginLeft:'300px', marginTop:'56px', padding: '20px'}}
                    <Routes>
                        <Route path='/' element={<Home items={items}/>} />
                    </Routes>
                </div>
            }/>
        </Routes>
    </Router>
    
    );
}
export default App;