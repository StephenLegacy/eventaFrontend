import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Dashboard from '../pages/Dashboard';
import EventDetail from '../components/events/EventDetail';
import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Testimonials from '../components/ui/Testimonials';
import Login from '../components/auth/Login'
import Register from '../components/auth/Login'

function AppRoutes({ setIsAuthenticated }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      {/* <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials />} />

      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
