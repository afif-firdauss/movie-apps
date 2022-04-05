import React, { useEffect, useState } from 'react';
import { getAllFilms } from '../../config/api';
import Loader from '../Loader';
import './films.css';

const Films = () => {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    getAllFilms()
      .then(res => {
      setFilm(res.data.results);
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
          film?.map((item, idx) => {
            return (
              <div key={idx} className="card-film">
                <div className="card-film-container">
                  <h4><b>{item?.title}</b></h4>
                  <p>Release Date: {item?.release_date}</p>
                  <p>Director: {item?.director}</p>
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

export default Films