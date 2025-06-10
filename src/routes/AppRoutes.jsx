import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Dashboard from '../pages/Dashboard';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import EventDetail from '../components/events/EventDetail';
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import About from '../pages/About'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      
      {/* Private route wrapper: Ensure PrivateRoute uses <Outlet /> inside */}
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
