/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from './context/appContext.jsx';
import RouteContext from './context/routeContext.jsx';
import OrderContext from './context/orderContext.jsx';
import PayContext from './context/payContext.jsx';

import { initialAppState } from './utils/initialAppState.js';
import { initialRouteState } from './utils/initialRouteState.js';
import { initialOrderState } from './utils/initialOrderState.js';
import { initialPayState } from './utils/initialPayState.js';

import StartPage from './pages/StartPage/StartPage.jsx';
import OrderPage from './pages/OrderPage/OrderPage.jsx';
import SeatsPage from './pages/SeatsPage/SeatsPage.jsx';
import PassengersPage from './pages/PassengersPage/PassengersPage.jsx';
import PaymentPage from './pages/PaymentPage/PaymentPage.jsx';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage.jsx';
import FinishPage from './pages/FinishPage/FinishPage.jsx';

import './App.css';

function App() {
  const [appState, setAppState] = useState(initialAppState);
  const [routeState, setRouteState] = useState(initialRouteState);
  const [orderState, setOrderState] = useState(initialOrderState);
  const [payState, setPayState] = useState(initialPayState);

  return (
    <div className="app">
      <AppContext.Provider value={{ appState, setAppState }}>
        <RouteContext.Provider value={{ routeState, setRouteState }}>
          <OrderContext.Provider value={{ orderState, setOrderState }}>
            <PayContext.Provider value={{ payState, setPayState }}>
              <Routes>
                <Route path="/fe-diploma" element={<StartPage />} />
                <Route path="/fe-diploma/order" element={<OrderPage />} />
                <Route path="/fe-diploma/order/seats" element={<SeatsPage />} />
                <Route path="/fe-diploma/order/passengers" element={<PassengersPage />} />
                <Route path="/fe-diploma/order/payment" element={<PaymentPage />} />
                <Route path="/fe-diploma/order/confirm" element={<ConfirmPage />} />
                <Route path="/fe-diploma/finish" element={<FinishPage />} />
              </Routes>
            </PayContext.Provider>
          </OrderContext.Provider>
        </RouteContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;