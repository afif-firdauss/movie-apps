import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllCharacters } from '../../config/api';
import Loader from '../Loader';
import './characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    getAllCharacters()
      .then(res => {
      setCharacters(res.data.results);
      setLoading(false)
    })
      .catch(err => {
        console.log('error', err)
        setLoading(false)
    });
  }, []);

  return (
    <div className='card-wrapper'>
      {
        !loading ? (
          characters?.map((item, idx) => {
            return (
              <div key={idx} className="card-characters" onClick={() => navigate(`/character-details/${idx+1}`)}>
                <div className="card-characters-container">
                  <h4><b>{item?.name}</b></h4>
                  <p>Gender: {item?.gender}</p>
                  <p>Hair Color: {item?.hair_color}</p>
                </div>
              </div>
            )
          })
        ) : (
          <Loader/>
        )
      }
    </div>
  )
}

export default Characters