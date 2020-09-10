import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { LoginComponent } from './components/Login';
import { RegisterComponent } from './components/Register';

const App =()=>{
    const companyName = "Pega Systems";
    return <div>
        <Header title={companyName}/>
        <LoginComponent/>
        <RegisterComponent/>
        <Footer />
    </div>;
};

export default App;