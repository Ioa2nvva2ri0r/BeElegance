import React from 'react';
// Components
import Each from './Each';
import Hero from './Hero';
import Important from './Important';
import Collection from './Сollection';

const Home = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Important />
      <Each />
    </>
  );
};

export default Home;
