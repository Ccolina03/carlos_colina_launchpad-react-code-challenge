import React from "react";

const UniversityCard = ({university}) => {
    return(
        <div className="flex justify-center">
        <div class="p-10">  
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{university.name}</div>
            <p class="text-gray-700 text-base">
              {university.web_pages}
            </p>
            {university.domains.map(domain => (
                <p key={domain}>{domain}</p>
            ))}
            <p>{university.alpha_two_code}</p>
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
export default UniversityCard;