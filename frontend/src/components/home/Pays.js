import React from 'react'
import {  Link  } from "react-router-dom"

const Card = ({ children, className, ...props }) => (
    <div className={`bg-white shadow-md rounded-lg ${className}`} {...props}>{children}</div>
  )
  
const CardContent = ({ children, className, ...props }) => (
    <div className={`p-4 ${className}`} {...props}>{children}</div>
  )

const pays = [
    { nom: "Sénegal", images: "/photo.jpg?height=200&width=300", lien: "/france" },
    { nom: "Congo", image: "/placeholder.svg?height=200&width=300", lien: "/espagne" },
    { nom: "Gabon", image: "/placeholder.svg?height=200&width=300", lien: "/italie" },
    { nom: "Côte d'Ivoire", image: "/placeholder.svg?height=200&width=300", lien: "/allemagne" },
    { nom: "Maroc", image: "/placeholder.svg?height=200&width=300", lien: "/royaume-uni" },
    { nom: "Afrique du sud", image: "/placeholder.svg?height=200&width=300", lien: "/portugal" },
    { nom: "RCA", image: "/placeholder.svg?height=200&width=300", lien: "/grece" },
    { nom: "Nigeria", image: "/placeholder.svg?height=200&width=300", lien: "/suisse" },
 ]

function Pays() {
    return (
      <section  className="py-16 px-8 bg-gray-300">
        <h2 className="text-3xl font-bold text-center mb-12">Découvrez nos opportunités immobilières par pays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pays.map((pays) => (
            <Card key={pays.nom} className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <Link to={pays.lien} className="group">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={pays.image}
                      alt={`Immobilier en ${pays.nom}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-semibold text-white">{pays.nom}</h3>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    )
  }
  
  

export default Pays