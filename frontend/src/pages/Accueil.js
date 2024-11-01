
import React from 'react';
import Hero from '../components/home/Hero';
import Pays from '../components/home/Pays';
import Annonces from '../components/home/Annonces';
import ProjetsImmobiliers from '../components/home/ProjetsImmobiliers';

const Accueil = () => (
  <div>
    <Hero />
    <Pays/>
    <Annonces/>
    <ProjetsImmobiliers/>
  </div>
);

export default Accueil;
