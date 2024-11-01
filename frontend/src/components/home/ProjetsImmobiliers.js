import React from 'react'
import {  Link  } from "react-router-dom"

const Card = ({ children, className, ...props }) => (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>{children}</div>
  )
  
const CardContent = ({ children, className, ...props }) => (
    <div className={`p-4 ${className}`} {...props}>{children}</div>
  )

  const projetsImmobiliers = [
    { titre: "Votre projet immobilier", lien: "/projet-immobilier", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Je me prépare", lien: "/preparation", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Mon Guide", lien: "/guide", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Bien acheter", lien: "/bien-acheter", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Mesures fiscales", lien: "/mesures-fiscales", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Apprendre à les maîtriser", lien: "/maitrise", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Mon budget", lien: "/budget", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Combien emprunter ?", lien: "/emprunt", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Prix du mètre carré", lien: "/prix-metre-carre", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Les vrais prix de l'immobilier", lien: "/vrais-prix", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Je boucle mon financement", lien: "/financement", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Prêt", lien: "/pret", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Trouver le bon crédit immobilier", lien: "/credit-immobilier", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Assurance Emprunteur", lien: "/assurance-emprunteur", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Les clés pour comprendre, avec Cardif", lien: "/cles-cardif", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Investissement", lien: "/investissement", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Simuler mon épargne", lien: "/simulation-epargne", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Rénovation énergétique", lien: "/renovation-energetique", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Simuler vos travaux et estimer les aides", lien: "/simulation-travaux", image: "/placeholder.svg?height=150&width=200" },
    { titre: "C'est parti, je déménage !", lien: "/demenagement", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Ma checklist", lien: "/checklist", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Préparer mon déménagement", lien: "/preparation-demenagement", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Planifier", lien: "/planification", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Déménager serein", lien: "/demenagement-serein", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Énergie", lien: "/energie", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Découvrez les offres ENGIE", lien: "/offres-engie", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Prêt travaux", lien: "/pret-travaux", image: "/placeholder.svg?height=150&width=200" },
    { titre: "Simuler votre projet de rénovation", lien: "/simulation-renovation", image: "/placeholder.svg?height=150&width=200" },
  ]
  
function ProjetsImmobiliers() {
    return (
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Projets immobiliers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projetsImmobiliers.map((projet) => (
            <Card key={projet.titre} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <Link to={projet.lien} className="group">
                <CardContent className="p-4">
                  <div className="relative aspect-video mb-4">
                    <img
                      src={projet.image}
                      alt={projet.titre}
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary group-hover:underline">{projet.titre}</h3>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    )
  }

export default ProjetsImmobiliers