import React, { useEffect } from 'react';
import { Films } from '../../components';

const Homepage = () => {
  useEffect(() => {
    document.title = 'SWAPI-Movie - Films';
  })

  return (
    <div className="container flex-grow-1 py-4">
      <div className="row">
        <div className="col">
          <Films />
        </div>
      </div>
    </div>
  )
}

export default Homepage;
