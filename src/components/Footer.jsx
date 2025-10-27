import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">BrainSpace</h3>
            <p className="text-sm leading-relaxed">
              Empowering minds through quality education for NECTA and Cambridge curricula.
              Providing comprehensive resources for academic excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-sm hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/necta" className="text-sm hover:text-white transition">
                  NECTA
                </Link>
              </li>
              <li>
                <Link to="/cambridge" className="text-sm hover:text-white transition">
                  Cambridge
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                brainspace25@gmail.com
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +255 750 229 200
              
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Tanzania
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 BrainSpace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

