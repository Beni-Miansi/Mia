import React, { useState } from 'react';
import Carte from './Carte';  
const SearchForm = () => {
  const [selectedTab, setSelectedTab] = useState('louer');
  const [selectedType, setSelectedType] = useState(['maison', 'appartement']);
  const [currency, setCurrency] = useState('EUR'); // Suivi de la devise
  const [budget, setBudget] = useState(''); // Suivi du budget

  // Fonction pour formater l'entrée du prix avec des séparateurs de milliers
  const formatPrice = (value) => {
    const number = value.replace(/\D/g, ''); // Supprime tout ce qui n'est pas un chiffre
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Ajoute des virgules comme séparateurs de milliers
  };

  // Gestionnaire de changement pour le budget
  const handleBudgetChange = (e) => {
    const formattedBudget = formatPrice(e.target.value);
    setBudget(formattedBudget);
  };

  const handleTypeChange = (type) => {
    if (selectedType.includes(type)) {
      setSelectedType(selectedType.filter(t => t !== type));
    } else {
      setSelectedType([...selectedType, type]);
    }
  };

  // Composant pour le formulaire de recherche (Louer/Acheter)
  const SearchContent = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Dans quelle ville ? Quartier ?"
          className="w-full p-2 border rounded"
        />
        <div className="flex">
          <input
            type="text"
            value={budget}
            onChange={handleBudgetChange} // Utilise la fonction de gestion du changement
            placeholder="Votre budget max ?"
            className="w-full p-2 border rounded-l"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)} // Changement de devise
            className="bg-gray-100 p-2 border border-l-0 rounded-r"
          >
            <option value="EUR">€ EUR</option>
            <option value="USD">$ USD</option>
            <option value="XOF">CFA XOF</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-4 text-blue-600">
        <a href="/" className="flex items-center">
          <span className="mr-1">⏱</span>
          Par temps de trajet
        </a>
        <a href="./Carte" className="flex items-center">
          <span className="mr-1">✏️</span>
          Dessin sur la carte
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Type de bien (boutons de sélection) */}
        {[
          { id: 'maison', label: 'Maison' },
          { id: 'appartement', label: 'Appartement' },
          { id: 'terrain', label: 'Terrain' },
          { id: 'parking', label: 'Parking / Box' },
          { id: 'loft', label: 'Loft' },
          { id: 'hotel', label: 'Hôtel particulier' },
          { id: 'chateau', label: 'Chateau' },
          { id: 'batiment', label: 'Bâtiment' },
          { id: 'immeuble', label: 'Immeuble' },
          { id: 'boutique', label: 'Boutique' },
          { id: 'commercial', label: 'Local commercial' },
          { id: 'bureau', label: 'Bureau' }
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => handleTypeChange(type.id)}
            className={`p-2 border rounded text-left ${
              selectedType.includes(type.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <button className="text-gray-600">
          <span>↑</span>
        </button>
        <a href="/" className=" bg-gray-400 text-white">
          Recherche avancée
        </a>
      </div>
      
      <div className="text-center">
        <a href="./Annonce" className=" bg-gray-400 text-white ">
          Propriétaire ? Déposez votre annonce
        </a>
      </div>
      
      <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-full hover:bg-gray-700">
        Rechercher
      </button>
    </div>
  );

  // Composant pour l'estimation
  const EstimateContent = () => (
    <div className="relative">
      {/* Cercle rouge à gauche */}
      <div className="absolute -left-32 top-12 w-40 h-40 bg-gray-600 rounded-full flex flex-col items-center justify-center text-white text-center p-4">
        <span className="text-lg">Estimez gratuitement votre bien</span>
        <span className="mt-2">↓</span>
      </div>

      {/* Tour Eiffel rouge à droite */}
      <div className="absolute -right-32 top-0 w-48 h-64 bg-gray-600/90">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkB4vovgDuNByVXUP-WgRuhML48Qz7eXJQ6A&s"
          alt="Tour Eiffel"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Estimez gratuitement votre bien
        </h2>
        
        <div className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Votre adresse ?"
            className="w-full p-3 border rounded mb-6"
          />
          
          <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-full hover:bg-gray-700">
            Continuer
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      {/* Arrière-plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://forbesafrique.com/wp-content/uploads/2024/03/Immobilier%C2%A9Image-Generee-Par-IA-Forbes-Afrique-Forbes-Afrique-Site-Web.jpg')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white/95 rounded-lg shadow-xl overflow-hidden">
          <h1 className="text-3xl font-bold text-center pt-6">Quel est votre projet ?</h1>
          
          {/* Onglets */}
          <div className="grid grid-cols-3 mb-6 mt-6">
            <button
              onClick={() => setSelectedTab('louer')}
              className={`py-2 px-4 ${
                selectedTab === 'louer'
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Louer
            </button>
            <button
              onClick={() => setSelectedTab('acheter')}
              className={`py-2 px-4 ${
                selectedTab === 'acheter'
                  ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Acheter
            </button>
            <button
              onClick={() => setSelectedTab('estimer')}
              className={`py-2 px-4 ${
                selectedTab === 'estimer'
                 ? 'bg-gray-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Estimer
            </button>
          </div>
          
          {/* Contenu conditionnel */}
          <div className="p-6">
            {selectedTab === 'estimer' ? <EstimateContent /> : <SearchContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
