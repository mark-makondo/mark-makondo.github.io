import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AppState from '../context/AppState';
import CommonLayout from '../components/layout/CommonLayout';
import Navigation from './Navigation';
import NotFound from '../pages/NotFound';
const App = () => {
    return (
        <AppState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CommonLayout />}>
                        {Navigation.UnsignedRoutes.map((r, i) => (
                            <Route key={i} path={r.path} element={r.component} />
                        ))}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppState>
    );
};
export default App;
