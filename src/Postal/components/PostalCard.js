import React from "react";

const PostalCard = ({onPostalData}) => {
    if (!onPostalData || onPostalData.length === 0) {
        return(
            <div>
                Try another postal code
            </div>
        )
    }
    return(
        <div className="flex justify-center">
        <div class="p-10">  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{onPostalData["post code"]}</div>
            <p class="text-gray-700 text-base">
              {onPostalData.country}
            </p>
            <ul>
        {onPostalData.places.map((place, index) => (
          <li key={index}>
            <p>Place Name: {place["place name"]}</p>
            <p>Longitude: {place.longitude}</p>
            <p>State: {place.state}</p>
            <p>State Abbreviation: {place["state abbreviation"]}</p>
            <p>Latitude: {place.latitude}</p>
          </li>
        ))}
      </ul>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#university</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#education</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#students</span>
          </div>
        </div>
      </div>
      </div>
    )
}
export default PostalCard;