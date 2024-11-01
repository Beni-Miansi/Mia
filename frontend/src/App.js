import React, { useState } from "react"
import { BrowserRouter as Router,Routes, Route, Link, useLocation,  } from "react-router-dom"
import { Menu, X, Facebook, Instagram, Linkedin, Twitter,User  } from "lucide-react"
import { FaWhatsapp } from 'react-icons/fa'; 
import Accueil from './pages/Accueil';

import Group from './pages/Group';
import Account from './pages/Account';
import Annonce from './pages/Annonce';
import Project from './pages/Project';
import Career from './pages/Career';


const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
)



const Sheet = ({ children, isOpen, onClose }) => (
  isOpen ? (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 p-4" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null
)

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "Projet", href: "/Project" },
  { name: "Carrière", href: "/Career" },
  { name: "Le groupe", href: "/Group" },
  { name: "Annonce", href: "/Annonce" },
  { name: "Mon Compte", href: "Account" },
]




function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="..//img/MIALUX.png?height=500&width=500"
                alt="Logo"
                className="w-8 h-8 mr-2"
              />
              <span className="font-bold text-xl">MIALUX</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.href
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Account link with icon */}
            <Link
              to="/Account"
              className={`flex flex-col items-center px-3 py-1 rounded-md text-xs font-medium ${
                location.pathname === "/Account"
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <User className="h-5 w-5 mb-1" />
              <span>Mon compte</span>
            </Link>
          </div>
          <div className="md:hidden">
            <Button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <nav className="mt-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.href
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </Sheet>
    </nav>
  )
}



function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Découvrez dès à présent</h3>
          <p className="mb-4 text-gray-300">
            Le prix des maisons vendues et l'historique des ventes immobilières.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">MiaLux c'est aussi</h3>
          <ul className="space-y-2">
            <li><Link to="/construire" className="text-gray-300 hover:text-white hover:underline">Construire</Link></li>
            <li><Link to="/neuf" className="text-gray-300 hover:text-white hover:underline">Louer</Link></li>
            <li><Link to="/bureaux-commerces" className="text-gray-300 hover:text-white hover:underline">SeLoger Bureaux & Commerces</Link></li>
            <li><Link to="/belles-demeures" className="text-gray-300 hover:text-white hover:underline">Belles Demeures</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">L'entreprise</h3>
          <ul className="space-y-2">
            <li><Link to="/qui-sommes-nous" className="text-gray-300 hover:text-white hover:underline">Qui sommes-nous ?</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-white hover:underline">Nous contacter</Link></li>
            <li><Link to="/recrutement" className="text-gray-300 hover:text-white hover:underline">Nous recrutons</Link></li>
            <li><Link to="/presse" className="text-gray-300 hover:text-white hover:underline">Notre espace presse</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Services Pro</h3>
          <ul className="space-y-2">
            <li><Link to="/services-pro" className="text-gray-300 hover:text-white hover:underline">Tous nos services pro</Link></li>
            <li><Link to="/acces-client" className="text-gray-300 hover:text-white hover:underline">Accès client</Link></li>
          </ul>
          <h3 className="font-bold text-lg mt-6 mb-4">À Découvrir</h3>
          <ul className="space-y-2">
            <li><Link to="/annuaire-professionnels" className="text-gray-300 hover:text-white hover:underline">Annuaire des professionnels</Link></li>
            <li><Link to="/tout-immobilier" className="text-gray-300 hover:text-white hover:underline">Tout l'immobilier</Link></li>
            <li><Link to="/toutes-villes" className="text-gray-300 hover:text-white hover:underline">Toutes les villes</Link></li>
            <li><Link to="/tous-departements" className="text-gray-300 hover:text-white hover:underline">Tous les départements</Link></li>
            {/* <li><Link to="/toutes-regions" className="text-gray-300 hover:text-white hover:underline">Toutes les régions</Link></li> */}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" className="text-gray-300 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.whatsapp.com" className="text-gray-300 hover:text-white">
              <span className="sr-only">WhatsApp</span>
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://www.twitter.com" className="text-gray-300 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 MiaLux. Tous droits réservés.</p>
      </div>
    </footer>
  )
}




export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <navBar/>
      <Routes>
         <Route path="/" element={<Accueil />} /> 
        <Route path="Project" element={<Project />} />
        <Route path="Career" element={<Career />} />
        <Route path="Group" element={<Group />} />
        <Route path="Annonce" element={<Annonce />} />
        <Route path="Account" element={<Account />} />
      </Routes>
        {/* <main>
        <Hero/>
        <ProjetsImmobiliers/>
        <Pays/>
        <Annonces/>
        </main> */}
        <Footer />
      </div>
    </Router>
  )
}









































// const pays = [
//   { nom: "Sénegal", images: "/photo.jpg?height=200&width=300", lien: "/france" },
//   { nom: "Congo", image: "/placeholder.svg?height=200&width=300", lien: "/espagne" },
//   { nom: "Gabon", image: "/placeholder.svg?height=200&width=300", lien: "/italie" },
//   { nom: "Côte d'Ivoire", image: "/placeholder.svg?height=200&width=300", lien: "/allemagne" },
//   { nom: "Maroc", image: "/placeholder.svg?height=200&width=300", lien: "/royaume-uni" },
//   { nom: "Afrique du sud", image: "/placeholder.svg?height=200&width=300", lien: "/portugal" },
//   { nom: "RCA", image: "/placeholder.svg?height=200&width=300", lien: "/grece" },
//   { nom: "Nigeria", image: "/placeholder.svg?height=200&width=300", lien: "/suisse" },
// ]

// const projetsImmobiliers = [
//   { titre: "Votre projet immobilier", lien: "/projet-immobilier", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Je me prépare", lien: "/preparation", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Mon Guide", lien: "/guide", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Bien acheter", lien: "/bien-acheter", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Mesures fiscales", lien: "/mesures-fiscales", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Apprendre à les maîtriser", lien: "/maitrise", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Mon budget", lien: "/budget", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Combien emprunter ?", lien: "/emprunt", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Prix du mètre carré", lien: "/prix-metre-carre", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Les vrais prix de l'immobilier", lien: "/vrais-prix", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Je boucle mon financement", lien: "/financement", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Prêt", lien: "/pret", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Trouver le bon crédit immobilier", lien: "/credit-immobilier", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Assurance Emprunteur", lien: "/assurance-emprunteur", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Les clés pour comprendre, avec Cardif", lien: "/cles-cardif", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Investissement", lien: "/investissement", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Simuler mon épargne", lien: "/simulation-epargne", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Rénovation énergétique", lien: "/renovation-energetique", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Simuler vos travaux et estimer les aides", lien: "/simulation-travaux", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "C'est parti, je déménage !", lien: "/demenagement", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Ma checklist", lien: "/checklist", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Préparer mon déménagement", lien: "/preparation-demenagement", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Planifier", lien: "/planification", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Déménager serein", lien: "/demenagement-serein", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Énergie", lien: "/energie", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Découvrez les offres ENGIE", lien: "/offres-engie", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Prêt travaux", lien: "/pret-travaux", image: "/placeholder.svg?height=150&width=200" },
//   { titre: "Simuler votre projet de rénovation", lien: "/simulation-renovation", image: "/placeholder.svg?height=150&width=200" },
// ]

// const annonces = {
//   "Ventes de maisons": [
//     { titre: "Vente maison Angers", lien: "/vente-maison-angers" },
//     { titre: "Vente maison Paris", lien: "/vente-maison-paris" },
//     { titre: "Vente maison Le Havre", lien: "/vente-maison-le-havre" },
//     { titre: "Vente maison Rennes", lien: "/vente-maison-rennes" },
//     { titre: "Vente maison Marseille", lien: "/vente-maison-marseille" },
//     { titre: "Vente maison Nancy", lien: "/vente-maison-nancy" },
//     { titre: "Vente maison Nantes", lien: "/vente-maison-nantes" },
//     { titre: "Vente maison Nice", lien: "/vente-maison-nice" },
//   ],
//   "Ventes d'appartements": [
//     { titre: "Vente appartement Paris", lien: "/vente-appartement-paris" },
//     { titre: "Vente appartement Bordeaux", lien: "/vente-appartement-bordeaux" },
//     { titre: "Vente appartement Lille", lien: "/vente-appartement-lille" },
//     { titre: "Vente appartement Marseille", lien: "/vente-appartement-marseille" },
//     { titre: "Vente appartement Montpellier", lien: "/vente-appartement-montpellier" },
//     { titre: "Vente appartement Nantes", lien: "/vente-appartement-nantes" },
//     { titre: "Vente Studio Paris", lien: "/vente-studio-paris" },
//   ],
//   "Locations d'appartements": [
//     { titre: "Location appartement Paris", lien: "/location-appartement-paris" },
//     { titre: "Location appartement Grenoble", lien: "/location-appartement-grenoble" },
//     { titre: "Location appartement Lyon", lien: "/location-appartement-lyon" },
//     { titre: "Location appartement Marseille", lien: "/location-appartement-marseille" },
//     { titre: "Location appartement Metz", lien: "/location-appartement-metz" },
//     { titre: "Location appartement Angers", lien: "/location-appartement-angers" },
//   ],
//   "Prix de vente au m2": [
//     { titre: "Prix mètre carré Nantes", lien: "/prix-metre-carre-nantes" },
//     { titre: "Prix mètre carré Reims", lien: "/prix-metre-carre-reims" },
//     { titre: "Prix mètre carré Annecy", lien: "/prix-metre-carre-annecy" },
//     { titre: "Prix mètre carré Saint-Malo", lien: "/prix-metre-carre-saint-malo" },
//     { titre: "Prix mètre carré Talence", lien: "/prix-metre-carre-talence" },
//     { titre: "Prix mètre carré Pantin", lien: "/prix-metre-carre-pantin" },
//     { titre: "Prix mètre carré Calais", lien: "/prix-metre-carre-calais" },
//     { titre: "Prix mètre carré Bagneux", lien: "/prix-metre-carre-bagneux" },
//   ],
// }












// function Pays() {
//   return (
//     <section  className="py-16 px-8 bg-gray-300">
//       <h2 className="text-3xl font-bold text-center mb-12">Découvrez nos opportunités immobilières par pays</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {pays.map((pays) => (
//           <Card key={pays.nom} className="overflow-hidden transition-transform duration-300 hover:scale-105">
//             <Link to={pays.lien} className="group">
//               <CardContent className="p-0">
//                 <div className="relative aspect-video">
//                   <img
//                     src={pays.image}
//                     alt={`Immobilier en ${pays.nom}`}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50" />
//                   <div className="absolute bottom-0 left-0 right-0 p-4">
//                     <h3 className="text-xl font-semibold text-white">{pays.nom}</h3>
//                   </div>
//                 </div>
//               </CardContent>
//             </Link>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }

// function ProjetsImmobiliers() {
//   return (
//     <section className="py-16 px-8 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-12">Projets immobiliers</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {projetsImmobiliers.map((projet) => (
//           <Card key={projet.titre} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
//             <Link to={projet.lien} className="group">
//               <CardContent className="p-4">
//                 <div className="relative aspect-video mb-4">
//                   <img
//                     src={projet.image}
//                     alt={projet.titre}
//                     className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
//                   />
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary group-hover:underline">{projet.titre}</h3>
//               </CardContent>
//             </Link>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }

// function Annonces() {
//   return (
//     <section className="py-16 px-8 bg-gray-200">
//       <h2 className="text-3xl font-bold text-center mb-12">Annonces immobilières</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {Object.entries(annonces).map(([categorie, items]) => (
//           <Card key={categorie} className="overflow-hidden">
//             <CardContent className="p-6">
//               <h3 className="text-xl font-semibold mb-4 text-primary">{categorie}</h3>
//               <ul className="space-y-2">
//                 {items.map((item) => (
//                   <li key={item.titre}>
//                     <Link to={item.lien} className="text-gray-600 hover:text-primary hover:underline flex items-center">
//                       <ChevronRight className="h-4 w-4 mr-2" />
//                       {item.titre}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </section>
//   )
// }



















































