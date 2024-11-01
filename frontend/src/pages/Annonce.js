import React, { useState } from 'react';
import { BellRing, ChevronDown, ChevronUp, Info, Heart } from 'lucide-react';

const FilterSection = ({ title, children, count }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <div 
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="font-medium">{title}</span>
          {count && (
            <span className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {count}
            </span>
          )}
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </div>
      {isOpen && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </div>
  );
};

const HousingSearch = () => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [surfaceMin, setSurfaceMin] = useState('0');
  const [surfaceMax, setSurfaceMax] = useState('');
  const [duration, setDuration] = useState('0');
  const [isIndefinite, setIsIndefinite] = useState(false);

  const listings = [
    {
      id: 1,
      type: "Colocation",
      title: "COLOCATION MIXTE TOUT COMPRIS",
      price: "560€",
      specs: "70m² - 2 chambres - Meublé - Parking",
      description: "Colocation 3 Chambres dans un super appartement à proximité",
      availability: "Disponible immédiatement",
      immediate: true,
      image: "/api/placeholder/400/300",
      is360: true,
      isRoomBookable: true
    },
    {
      id: 2,
      type: "Colocation",
      title: "CHAMBRE DANS UNE COLOCATION",
      price: "460€",
      specs: "49m² - 1 chambre - Meublé",
      description: "Une chambre disponible en colocation dans ce T4 situé au 4em",
      availability: "Disponible à partir du 1 nov. 2024",
      immediate: false,
      image: "/api/placeholder/400/300",
      isRoomBookable: true
    },
    {
      id: 3,
      type: "Logement T2",
      title: "t2 de 40m2",
      price: "770€",
      specs: "40m² - 1 chambre",
      description: "Type 2 en triplex, très original. Beaucoup de cachet avec ses",
      availability: "Disponible à partir du 10 déc. 2024",
      immediate: false,
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      type: "Colocation",
      title: "COLOCATION MIXTE TOUT COMPRIS",
      price: "560€",
      specs: "70m² - 2 chambres - Meublé - Parking",
      description: "Colocation 3 Chambres dans un super appartement à proximité",
      availability: "Disponible immédiatement",
      immediate: true,
      image: "/api/placeholder/400/300",
      is360: true,
      isRoomBookable: true
    },
    {
      id: 5,
      type: "Colocation",
      title: "CHAMBRE DANS UNE COLOCATION",
      price: "460€",
      specs: "49m² - 1 chambre - Meublé",
      description: "Une chambre disponible en colocation dans ce T4 situé au 4em",
      availability: "Disponible à partir du 1 nov. 2024",
      immediate: false,
      image: "/api/placeholder/400/300",
      isRoomBookable: true
    },
    {
      id: 6,
      type: "Logement T2",
      title: "t2 de 40m2",
      price: "770€",
      specs: "40m² - 1 chambre",
      description: "Type 2 en triplex, très original. Beaucoup de cachet avec ses",
      availability: "Disponible à partir du 10 déc. 2024",
      immediate: false,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className="w-64 flex-shrink-0 rounded-md bg-gray-100 shadow-md ">
          <h2 className="text-lg font-medium">Tous les filtres</h2>
          
          <a 
            href="#alert-registration" 
            className="flex items-center justify-center gap-2 bg-red-700 text-white rounded-lg px-4 py-2 hover:bg-gray-600 transition-colors my-4"
          >
            <BellRing className="w-4 h-4" />
            Enregistrer mon alerte
          </a>

          <FilterSection title="Type de logement" >
            <div className="flex flex-col gap-3">
              {[
                'Logement entier',
                'Chambre dans une colocation',
                'Chambre chez l\'habitant',
                'Logement contre services'
              ].map((type, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox text-blue-600" />
                  <span>{type}</span>
                  <Info className="w-4 h-4 text-gray-400" />
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Surface et pièces">
            <div className="space-y-4">
              <div>
                <label className="text-blue-700 mb-2 block">Surface min.</label>
                <div className="flex gap-2 items-center">
                  <input 
                    type="number" 
                    value={surfaceMin}
                    onChange={(e) => setSurfaceMin(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-50"
                    placeholder="0"
                  />
                  <span>m²</span>
                </div>
              </div>
              <div>
                <label className="text-blue-700 mb-2 block">Surface max.</label>
                <div className="flex gap-2 items-center">
                  <input 
                    type="number"
                    value={surfaceMax}
                    onChange={(e) => setSurfaceMax(e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-50"
                    placeholder="Surface max."
                  />
                  <span>m²</span>
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Nombre de pièce</p>
                <div className="flex gap-2 flex-wrap">
                  {['Studio', '2p.', '3p.', '4 et +'].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-1 rounded-full border hover:bg-gray-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium mb-2">Nombre de chambre</p>
                <div className="flex gap-2 flex-wrap">
                  {['1p.', '2p.', '3p.', '4 et +', '5 et +'].map((rooms) => (
                    <button
                      key={rooms}
                      className="px-4 py-1 rounded-full border hover:bg-gray-50"
                    >
                      {rooms}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Durée de location" >
            <div className="space-y-4">
              <div>
                <div className="flex gap-2 items-center bg-gray-50 rounded-lg p-2">
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-16 bg-transparent"
                  />
                  <span className="text-blue-700">Mois</span>
                  <button className="px-2">-</button>
                  <button className="px-2">+</button>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {['6 mois', '12 mois', '24 mois'].map((duration) => (
                  <button
                    key={duration}
                    className="px-4 py-1 rounded-full border hover:bg-gray-50"
                  >
                    {duration}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isIndefinite}
                  onChange={(e) => setIsIndefinite(e.target.checked)}
                  className="form-checkbox"
                />
                <span>Je prévois de rester pour une durée indéterminée</span>
              </label>
            </div>
          </FilterSection>

          <FilterSection title="Autres critères">
            <div className="flex flex-col gap-3">
              {[
                'Meublés uniquement',
                'Avec parking uniquement',
                'Logements éligibles aux aides',
                'Réservation sans visite uniquement',
                'J\'ai un garant résidant en France',
                'Je suis un jeune actif',
                'Adaptés aux personnes à mobilité réduite uniquement'
              ].map((criteria, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{criteria}</span>
                  {index > 1 && <Info className="w-4 h-4 text-gray-400" />}
                </label>
              ))}
            </div>
          </FilterSection>

          <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 transition-colors mt-4 w-full">
            Appliquer
          </button>
        </div>

        {/* Listings Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <div key={listing.id} className="rounded-lg overflow-hidden shadow-lg">
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  {listing.is360 && (
                    <span className="absolute top-4 left-4 bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                      360°
                    </span>
                  )}
                  {listing.isRoomBookable && (
                    <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
                      Réservable à la chambre
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm text-gray-600">{listing.type}</p>
                      <h3 className="font-bold">{listing.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{listing.price}</p>
                      <p className="text-sm text-gray-600">/ mois</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{listing.specs}</p>
                  <p className="text-sm text-blue-600 mb-2">{listing.description}</p>
                  
                  <div className={`flex items-center gap-2 text-sm ${
                    listing.immediate ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      listing.immediate ? 'bg-green-600' : 'bg-blue-600'
                    }`} />
                    {listing.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousingSearch;