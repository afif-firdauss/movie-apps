import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterDetail } from '../../config/api';
import Loader from '../../components/Loader';

const CharacterDetail = () => {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState();
  let { id } = useParams();

  useEffect(() => {
    setLoading(true)
    getCharacterDetail(id)
      .then(res => {
      setCharacter(res.data);
      setLoading(false)
    })
      .catch(err => {
        console.log('error', err)
        setLoading(false)
    });
  }, [id]);

  useEffect(() => {
    document.title = 'SWAPI-Movie - Characters';
  })

  return (
    <div className="container flex-grow-1 py-4">
      <div className="row">
        <div className="col">
          {
            !loading ? (
              <div>
                <h4><b>{character?.name}</b></h4>
                <p className='mb-0'>Gender: {character?.gender}</p>
                <p className='mb-0'>Eye Color: {character?.eye_color}</p>
              </div>
            ) : (
              <Loader/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail;