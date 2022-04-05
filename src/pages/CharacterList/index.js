import React, { useEffect } from 'react';
import { Characters } from '../../components';

const CharacterList = () => {
  useEffect(() => {
    document.title = 'SWAPI-Movie - Characters';
  })

  return (
    <div className="container flex-grow-1 py-4">
      <div className="row">
        <div className="col">
          <Characters />
        </div>
      </div>
    </div>
  )
}

export default CharacterList;