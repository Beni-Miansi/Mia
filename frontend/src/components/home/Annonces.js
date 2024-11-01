import React from 'react'
import {Link } from "react-router-dom"
// import { ChevronRight } from 'react-icons/fa';
 import { FaChevronRight } from 'react-icons/fa';



const Card = ({ children, className, ...props }) => (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>{children}</div>
  )
  
const CardContent = ({ children, className, ...props }) => (
    <div className={`p-4 ${className}`} {...props}>{children}</div>
  )

const annonces = {
    "Ventes de maisons": [
      { titre: "Vente maison Angers", lien: "/vente-maison-angers" },
      { titre: "Vente maison Paris", lien: "/vente-maison-paris" },
      { titre: "Vente maison Le Havre", lien: "/vente-maison-le-havre" },
      { titre: "Vente maison Rennes", lien: "/vente-maison-rennes" },
      { titre: "Vente maison Marseille", lien: "/vente-maison-marseille" },
      { titre: "Vente maison Nancy", lien: "/vente-maison-nancy" },
      { titre: "Vente maison Nantes", lien: "/vente-maison-nantes" },
      { titre: "Vente maison Nice", lien: "/vente-maison-nice" },
    ],
    "Ventes d'appartements": [
      { titre: "Vente appartement Paris", lien: "/vente-appartement-paris" },
      { titre: "Vente appartement Bordeaux", lien: "/vente-appartement-bordeaux" },
      { titre: "Vente appartement Lille", lien: "/vente-appartement-lille" },
      { titre: "Vente appartement Marseille", lien: "/vente-appartement-marseille" },
      { titre: "Vente appartement Montpellier", lien: "/vente-appartement-montpellier" },
      { titre: "Vente appartement Nantes", lien: "/vente-appartement-nantes" },
      { titre: "Vente Studio Paris", lien: "/vente-studio-paris" },
    ],
    "Locations d'appartements": [
      { titre: "Location appartement Paris", lien: "/location-appartement-paris" },
      { titre: "Location appartement Grenoble", lien: "/location-appartement-grenoble" },
      { titre: "Location appartement Lyon", lien: "/location-appartement-lyon" },
      { titre: "Location appartement Marseille", lien: "/location-appartement-marseille" },
      { titre: "Location appartement Metz", lien: "/location-appartement-metz" },
      { titre: "Location appartement Angers", lien: "/location-appartement-angers" },
    ],
    "Prix de vente au m2": [
      { titre: "Prix mètre carré Nantes", lien: "/prix-metre-carre-nantes" },
      { titre: "Prix mètre carré Reims", lien: "/prix-metre-carre-reims" },
      { titre: "Prix mètre carré Annecy", lien: "/prix-metre-carre-annecy" },
      { titre: "Prix mètre carré Saint-Malo", lien: "/prix-metre-carre-saint-malo" },
      { titre: "Prix mètre carré Talence", lien: "/prix-metre-carre-talence" },
      { titre: "Prix mètre carré Pantin", lien: "/prix-metre-carre-pantin" },
      { titre: "Prix mètre carré Calais", lien: "/prix-metre-carre-calais" },
      { titre: "Prix mètre carré Bagneux", lien: "/prix-metre-carre-bagneux" },
    ],
  }

  function Annonces() {
    return (
      <section className="py-16 px-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-12">Annonces immobilières</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(annonces).map(([categorie, items]) => (
            <Card key={categorie} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">{categorie}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.titre}>
                      <Link to={item.lien} className="text-gray-600 hover:text-primary hover:underline flex items-center">
                        <FaChevronRight className="h-4 w-4 mr-2" />
                        {item.titre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }

export default Annonces