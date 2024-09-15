import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/globalApi';
import React, { useEffect, useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';



const InformationSection = ({ trip }) => {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.avif'); // Default placeholder image

  useEffect(() => {
    if (trip) {
      GetPlacePhoto();
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: trip?.userSelection?.location?.label,
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
    <div>
      <img className="h-[300px] w-full object-cover rounded-xl" src={photoUrl} alt="Place" />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{trip?.userSelection?.location?.label}</h2>
          <div className="flex gap-5">
            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              Budget: {trip?.userSelection?.budget}💰
            </h2>
            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              Number of Travelers: {trip?.userSelection?.traveler}🧑🏿‍🤝‍🧑🏻
            </h2>
            <h2 className="px-3 p-1 bg-gray-200 rounded-full text-gray-500 text-sm md:text-md">
              Total Number of Days: {trip?.userSelection?.noofDays} 📅
            </h2>
          </div>
        </div>
        <Button>
          <FaShareAlt />
        </Button>
      </div>
    </div>
  );
};

export default InformationSection;
