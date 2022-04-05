import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer, Navbar } from '../../components';
import { Homepage, CharacterList, CharacterDetail, NotFound } from '../../pages';

const Navigation = () => {
  return (
    <Router>
      <div className="homepage">
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="character-details/:id" element={<CharacterDetail/>}/>
            <Route exact path="characters" element={<CharacterList/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default Navigation;