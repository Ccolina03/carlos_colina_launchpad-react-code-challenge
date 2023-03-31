import { useState, useEffect } from 'react';
import UniversityCard from './UniversityCard';

const UniversityList = ({ country }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (country) {
      fetch(`http://universities.hipolabs.com/search?country=${country}`)
        .then((response) => response.json())
        .then((data) => setUniversities(data));
    }
  }, [country]);

  return (
    <div>
      {universities.map((university) => (
       <UniversityCard university={university}/>
      ))}
    </div>
  );
};

export default UniversityList;