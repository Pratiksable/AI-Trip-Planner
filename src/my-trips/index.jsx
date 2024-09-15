import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTripCard from './components/UserTripCard';

const MyTrips = () => {
  const [trips, setTrips] = useState([]); // State to store trips
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    getUserTrips();
  }, []);

  const getUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user')); // Parse the user object
    if (!user || !user.email) {
      navigate('/'); // Redirect if user is not found or email is missing
      return;
    }

    const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
    const querySnapshot = await getDocs(q);

    const tripsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    setTrips(tripsData); // Set trips to state
    console.log(tripsData); // Log trips data
  };

  return (
    <div className='sm:px-10 md:px-12 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>
      <div className='grid grid-cols-2 md:grid-col-3 gap-5 mt-10 mb-10'>
        {trips.map((trip, index) => (
          <UserTripCard key={trip.id} trip={trip} /> // Added key prop
        ))}
      </div>
    </div>
  );
};

export default MyTrips;
