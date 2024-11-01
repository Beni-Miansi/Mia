import React from 'react'
import {ChevronRight } from "lucide-react"


const Button = ({ children, className, ...props }) => (
    <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
  )

function Hero() {
    return (
      <section className="relative flex items-end justify-start h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://fnpimaroc.net/wp-content/uploads/2022/06/Immobilier-1.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 p-8 text-white max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">L'importance de l'immobilier</h1>
          <p className="text-lg mb-6">
            L'immobilier est un pilier essentiel de notre économie et de nos vies. Il offre non seulement un toit
            au-dessus de nos têtes, mais aussi des opportunités d'investissement durables. Nos priorités incluent :
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Offrir des logements abordables et de qualité</li>
            <li>Promouvoir des pratiques de construction durables</li>
            <li>Faciliter  l'accès à la propriété</li>
            <li>Développer des communautés vivantes et inclusives</li>
          </ul>
          <Button className="bg-gray-800 hover:bg-primary/90 text-white">
            En savoir plus
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    )
  }
  

export default Hero