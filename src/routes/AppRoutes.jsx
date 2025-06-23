import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Dashboard from '../pages/Dashboard';
import EventCreate from '../components/events/EventCreate';
import EventDetail from '../components/events/EventDetail';
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Testimonials from '../components/ui/Testimonials';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout'; // Fixed import (was pointing to Login before)
import Register from '../components/auth/Register';

function AppRoutes({ setIsAuthenticated }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route 
        path="/login" 
        element={<Login setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route 
        path="/logout" 
        element={<Logout setIsAuthenticated={setIsAuthenticated} />} 
      />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-event" element={<EventCreate />} />
        <Route path="/events/new" element={<EventCreate />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;