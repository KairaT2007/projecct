import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import { Provider } from 'react-redux';
import { store } from './Auth/auth2';
import Detail from './pages/Detail/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <Slider />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/:id" element={<Detail/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </Provider>
);