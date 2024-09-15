import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/globalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserTripCard = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.avif'); // Default placeholder image

  useEffect(() => {
    if (trip && trip.userSelection && trip.userSelection.location) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: trip.userSelection.location.label,
      };
      const result = await GetPlaceDetails(data);
      const photoName = result?.data?.places[0]?.photos[3]?.name;
      if (photoName) {
        const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
        setPhotoUrl(newPhotoUrl); // Update state with the new photo URL
      } else {
        console.warn('No photo available for this place');
      }
    } catch (error) {
      console.error('Error fetching place photo:', error);
    }
  };

  return (
    <Link to={'/view-trip/'+trip.id}>
    <div className="trip-card hover:scale-105 transition-all cursor-pointer">
      <img 
        className="rounded-lg w-full h-[280px] object-cover"
        src={photoUrl} // Use photoUrl directly
        alt={trip?.userSelection?.location?.label || 'Trip Photo'} // Fallback alt text
      />
      <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label || 'Location Label'}</h2>
      <h2 className='text-sm text-gray-500'>
        {trip?.userSelection?.noofDays || 'N/A'} Day's trip with {trip?.userSelection?.budget || 'N/A'} Budget
      </h2>
      <p>{trip?.userSelection?.location?.value?.description || 'No description available'}</p>
    </div>
    </Link>
  );
};

export default UserTripCard;
