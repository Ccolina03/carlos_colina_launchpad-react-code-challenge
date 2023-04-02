import { useState, useEffect } from 'react';
import UniversityCard from './UniversityCard';
import { getUniversities } from '../server/api';

const UniversityList = ({ country }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    if (country) {
      getUniversities(country).then((data) => setUniversities(data)).catch(error => console.log(error));
    }
  }, [country]);

  return (
    <div>
      {universities && universities.map((university) => (
       <UniversityCard university={university}/>
      ))}
    </div>
  );
};

export default UniversityList;