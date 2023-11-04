import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import CreateTicket from './routes/CreateTicket';
import BrowseTickets from './routes/BrowseTickets';

export const LocationDisplay = () => {
  const location = useLocation();

  return (<div data-testid="location-display">{location.pathname}</div>)
};

const NoMatch = () => {
  return (
    <div>
      <h2>No match for this route</h2>
    </div>
  );
}

const App = (): JSX.Element => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateTicket />} />
        <Route path="/tickets" element={<BrowseTickets />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      <LocationDisplay />
    </div>
  );
}

export default App;
