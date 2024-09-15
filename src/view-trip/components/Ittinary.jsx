import React from 'react';
import PlaceCard from './PlaceCard';

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Places to Visit</h2>
      <div className='mt-3'>
        {trip?.tripData?.itinerary?.length > 0 ? (
          trip?.tripData?.itinerary.map((item, index) => (
            <div key={index} className='my-4 mt-5'>
              {/* Display the day (e.g., Day 1, Day 2, etc.) */}
              <h2 className='font-bold text-lg'>{item?.day}</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {item?.plan?.map((places, index) => (
                <div key={index} className='ml-4 my-3 hover:scale-105 transition-all cursor-pointer'>
                  <p className='font-medium text-sm text-orange-600'>{places?.time}</p>
                  <PlaceCard places={places}/>
                </div>
              ))}
              </div>
            </div>
          ))
        ) : (
          <p>No itinerary data available.</p>
        )}
      </div>
    </div>
  );
};

export default PlacesToVisit;
