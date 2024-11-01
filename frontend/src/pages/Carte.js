import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const countries = [
  { id: 1, name: "Senegal", capital: "Dakar", coordinates: [14.7167, -17.4677] },
  { id: 2, name: "Congo RDC", capital: "Kinshasa", coordinates: [-4.4419, 15.2663] },
  { id: 3, name: "Gabon", capital: "Libreville", coordinates: [0.4162, 9.4673] },
  { id: 4, name: "Côte d'Ivoire", capital: "Yamoussoukro", coordinates: [6.8276, -5.2893] },
  { id: 5, name: "Maroc", capital: "Rabat", coordinates: [34.0209, -6.8416] },
  { id: 6, name: "Afrique du Sud", capital: "Pretoria", coordinates: [-25.7479, 28.2293] },
  { id: 7, name: "RCA", capital: "Bangui", coordinates: [4.3947, 18.5582] },
  { id: 8, name: "Nigeria", capital: "Abuja", coordinates: [9.0765, 7.3986] }
];

const AfricaMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.capital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Modifier ma recherche"
            className="w-full p-4 rounded-lg border border-gray-300 shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative bg-blue-50 h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/api/placeholder/1200/600" 
              alt="Map Placeholder"
              className="w-full h-full object-cover"
            />
            {filteredCountries.map((country) => (
              <div
                key={country.id}
                className="absolute"
                style={{
                  left: `${(country.coordinates[1] + 180) * (100 / 360)}%`,
                  top: `${(90 - country.coordinates[0]) * (100 / 180)}%`
                }}
              >
                <MapPin
                  className="text-red-500 cursor-pointer hover:text-red-600 transition-colors"
                  size={24}
                  onClick={() => setSelectedCountry(country)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Country List */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Pays Africains</h2>
            <button className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
              Vue liste
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCountries.map((country) => (
              <a
                key={country.id}
                href={`#${country.name}`}
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-medium text-gray-900">{country.name}</h3>
                <p className="text-sm text-gray-600">Capitale: {country.capital}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Button */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors shadow-lg flex items-center space-x-2">
          <span className="text-lg">Activez l'alerte</span>
        </button>
      </div>
    </div>
  );
};

export default AfricaMap;