import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/globalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link if using React Router

const HotelCardItem = ({ item }) => {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.avif'); 

  useEffect(() => {
    if (item) {
      GetPlacePhoto();
    }
  }, [item]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: item?.name,
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
    <Link 
      to={'https://www.google.com/maps/search/?api=1&query=' + item?.address} 
      target='_blank'
    >
<div className='border p-4 rounded-lg shadow-md hover:scale-105 transition-all cursor-pointer h-[400px] flex flex-col justify-between'>
  <img
    src={photoUrl || '/placeholder.avif'} 
    alt={item?.placeName || 'Placeholder Image'}
    className='rounded-lg w-full h-[180px] object-cover'
  />
  <div className='my-2 flex-grow'>
    <h3 className='font-medium text-lg mt-3 truncate'>🏨 {item?.name}</h3>
    <p className='text-sm text-gray-500 truncate'>📍 {item?.address}</p>
    <p className='text-md text-gray-700 mt-2'>💰 {item?.price}</p>
    <p className='text-md text-gray-700 mt-2'>⭐ {item?.rating} stars</p>
  </div>
</div>
    </Link>
  );
};

export default HotelCardItem;
