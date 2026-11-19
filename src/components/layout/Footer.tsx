import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { asset } from '../../lib/asset';

const Footer = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand & Global Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={asset('/logo-color-on-dark.svg')} alt="DG Technix" className="h-10 md:h-12 w-auto" />
            </Link>
            <p className="text-accent-400 mb-2 font-bold tracking-wider uppercase text-xs">Digital • Marketing • Technology</p>
            <p className="text-gray-400 mb-6 max-w-sm text-sm leading-relaxed">
              Engineering solutions built around your business. We design and build custom software, web applications, and integrated backend systems with predictable execution.
            </p>
            
            <div className="mb-6 space-y-1 text-sm text-gray-400">
              <div>
                <span className="text-gray-500">Email: </span>
                <a href="mailto:support@dgtechnix.com" className="hover:text-accent-400 transition-colors">support@dgtechnix.com</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-2 flex items-center text-sm">
                <Globe className="w-4 h-4 mr-2 text-accent-500" />
                Delivery Timezone Overlap
              </h4>
              <p className="text-gray-400 text-xs flex flex-wrap gap-2">
                <span>India Hub</span>
                <span className="text-gray-600">|</span>
                <Link to="/europe" className="hover:text-accent-500 transition-colors">UK & Europe</Link>
                <span className="text-gray-600">|</span>
                <Link to="/middle-east" className="hover:text-accent-500 transition-colors">Middle East</Link>
                <span className="text-gray-600">|</span>
                <Link to="/australia" className="hover:text-accent-500 transition-colors">Australia</Link>
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white font-heading">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-gray-400 hover:text-accent-500 transition-colors">Custom Software</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent-500 transition-colors">Web Applications</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-400 hover:text-accent-500 transition-colors">Digital Marketing & Ads</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent-500 transition-colors">Backend & APIs</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-accent-500 transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services/dedicated-team" className="text-gray-400 hover:text-accent-500 transition-colors">Dedicated Teams</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white font-heading">Industries</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/industries/fintech" className="text-gray-400 hover:text-accent-500 transition-colors">FinTech</Link></li>
              <li><Link to="/industries/healthcare" className="text-gray-400 hover:text-accent-500 transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/agriculture" className="text-gray-400 hover:text-accent-500 transition-colors">Agriculture</Link></li>
              <li><Link to="/industries/e-commerce" className="text-gray-400 hover:text-accent-500 transition-colors">E-commerce</Link></li>
              <li><Link to="/industries/logistics" className="text-gray-400 hover:text-accent-500 transition-colors">Logistics</Link></li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white font-heading">Company</h4>
            <ul className="space-y-3 mb-6 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-accent-500 transition-colors">About DG Technix</Link></li>
              <li><Link to="/work" className="text-gray-400 hover:text-accent-500 transition-colors">Our Work & Blueprints</Link></li>
              <li><Link to="/services/dedicated-team" className="text-gray-400 hover:text-accent-500 transition-colors">Dedicated Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-accent-500 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent-500 transition-colors">Contact</Link></li>
            </ul>
            
            <h4 className="text-base font-bold mb-4 text-white font-heading">Architecture</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/engineering" className="text-gray-400 hover:text-accent-500 transition-colors">System Architecture</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-accent-500 transition-colors">Security & Privacy</Link></li>
              <li><Link to="/insights" className="text-gray-400 hover:text-accent-500 transition-colors">Technical Insights</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-bold mb-6 text-white font-heading">Connect</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a 
                href="https://www.linkedin.com/company/dg-technix" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-400 hover:text-accent-400 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a 
                href="https://github.com/dineshjadeja08" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-400 hover:text-accent-400 transition-colors"
              >
                <ArrowRight className="w-4 h-4 mr-2" /> GitHub
              </a>
              <a 
                href="mailto:support@dgtechnix.com" 
                className="flex items-center text-gray-400 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" /> Direct Support Email
              </a>
            </div>
            
            <div className="mt-8">
              <label htmlFor="region-select" className="sr-only">Select Region</label>
              <select 
                id="region-select"
                onChange={handleLanguageChange}
                defaultValue={i18n.language}
                className="bg-neutral-800 text-gray-300 border border-neutral-700 rounded-sm px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-accent-500 w-full"
              >
                <option value="en">Global (English)</option>
                <option value="en-GB">UK & Europe</option>
                <option value="en-AU">Australia & APAC</option>
                <option value="en-AE">Middle East</option>
              </select>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DG Technix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-accent-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-accent-500 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-accent-500 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
