import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateTrip from './create-trip/index.jsx';
import Header from './components/custom/Header.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/index.jsx';
import Footer from './view-trip/components/Footer.jsx';
import MyTrips from './my-trips/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-trip',
    element: <CreateTrip/>,
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip/>,
  },
  {
    path: '/my-trips',
    element: <MyTrips/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
    <ToastContainer />

    </GoogleOAuthProvider>

  </StrictMode>
);
