import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://forbesafrique.com/wp-content/uploads/2024/03/Immobilier%C2%A9shutterstock-Forbes-Afrique-Forbes-Afrique-Site-Web.jpg" 
          alt="Modern living room" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Right side form */}
      <div className="w-full lg:w-1/2 px-8 py-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-8">
            {isLogin ? 'Se connecter' : 'Créer un compte'}
          </h1>
          
          <div className="mb-6 text-sm">
            {isLogin ? (
              <p>
                Vous n'avez pas de compte ?{' '}
                <button 
                  onClick={() => setIsLogin(false)}
                  className="text-red-600 underline font-medium"
                >
                  Créer un compte
                </button>
              </p>
            ) : (
              <p>
                Vous avez déjà un compte ?{' '}
                <button 
                  onClick={() => setIsLogin(true)}
                  className="text-red-600 underline font-medium"
                >
                  Se connecter
                </button>
              </p>
            )}
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Votre e-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Votre mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
            
            {!isLogin && (
              <div className="space-y-2 text-sm text-gray-600">
                <p>Le mot de passe doit contenir :</p>
                <ul className="space-y-1">
                  <li>✗ 8 caractères minimum</li>
                  <li>✗ 1 majuscule</li>
                  <li>✗ 1 minuscule</li>
                  <li>✗ 1 chiffre</li>
                </ul>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              {isLogin ? 'Se connecter' : 'Créer un compte'}
            </button>
            
            {isLogin && (
              <div className="text-center">
                <Link to="/forgot-password" className="text-sm text-red-600 underline">
                  Mot de passe oublié ?
                </Link>
              </div>
            )}
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">ou</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img 
                  src="https://cdn.svgporn.com/logos/google-icon.svg" 
                  alt="Google logo" 
                  className="w-5 h-5 mr-3"
                />
                {isLogin ? 'Se connecter avec Google' : "S'inscrire avec Google"}
              </button>
              
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <img
                  src="https://cdn.svgporn.com/logos/apple.svg " 
                  alt="Apple logo" 
                  className="w-5 h-5 mr-3"
                />
                {isLogin ? 'Se connecter avec Apple' : "S'inscrire avec Apple"}
              </button>
            </div>
          </form>
          
          {!isLogin && (
            <p className="mt-6 text-sm text-gray-600">
              En cliquant sur "Créer un compte", vous acceptez nos{' '}
              <Link to="/terms" className="text-red-600 underline">
                conditions d'utilisation
              </Link>
            </p>
          )}
          
          {isLogin && (
            <p className="mt-6 text-sm text-gray-600">
              MIALUX procède au traitement de vos données afin de gérer votre compte.{' '}
              <Link to="/privacy" className="text-red-600 underline">
                Pour en savoir plus et exercer vos droits, cliquez ici.
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPages;