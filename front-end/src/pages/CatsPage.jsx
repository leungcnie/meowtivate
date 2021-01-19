import React from 'react';
import GalleryContainer from '../components/GalleryContainer';
import NavBar from '../components/NavBar';

export default function CatsPage(props) {
  const { state } = props;
  return (
    <div className="Cats">
      <NavBar/>
      <GalleryContainer items={state.collections}/>
    </div>
  )
};