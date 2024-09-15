import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/globalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PlaceCard = ({places}) => {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.avif'); // Default placeholder image

  useEffect(() => {
    if (places) {
      GetPlacePhoto();
    }
  }, [places]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: places?.placeName,
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
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + places?.placeName } target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5'>
      <img 
      className='w-[200px] h-[200px] rounded-xl '
      src={photoUrl}/>
      <div>
        <h2 className='text-lg font-bold'>{places?.placeName}</h2>
        <p className='text-sm text-gray-400'>{places?.placeDetails}</p>
        <p className='mt-2'>🕛Time To Travel: {places?.timeToTravel}</p>
        {/* <Button size = "sm" ><FaLocationDot /></Button> */}
      </div>
    </div>
    </Link>
  )
}

export default PlaceCard