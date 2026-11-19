import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe, Shield, Cpu, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchModal from './SearchModal';
import { asset } from '../../lib/asset';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [globalOpen, setGlobalOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-100/60'}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={asset('/logo.svg')} alt="DG Technix" className="h-8 md:h-9 w-auto" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-gray-800 hover:text-accent-500 transition-colors">
                Solutions <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-xl overflow-hidden py-2 border border-gray-100"
                  >
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Product Engineering</Link>
                    <Link to="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Digital Marketing & Ads</Link>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">AI & Automation</Link>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Cloud & DevOps</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link to="/services/dedicated-team" className="block px-4 py-2 text-sm font-bold text-accent-500 hover:bg-gray-50 flex items-center">
                      <Users className="w-4 h-4 mr-2" /> Dedicated Team
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-gray-800 hover:text-accent-500 transition-colors">
                Industries <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-xl overflow-hidden py-2 border border-gray-100"
                  >
                    <Link to="/industries/fintech" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">FinTech</Link>
                    <Link to="/industries/healthcare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Healthcare</Link>
                    <Link to="/industries/agriculture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Agriculture</Link>
                    <Link to="/industries/e-commerce" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">E-commerce</Link>
                    <Link to="/industries/logistics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Logistics</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Company Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-gray-800 hover:text-accent-500 transition-colors">
                Company <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-xl overflow-hidden py-2 border border-gray-100"
                  >
                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">About DG Technix</Link>
                    <Link to="/work" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Case Studies</Link>
                    <Link to="/insights" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Insights & Blog</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <Link to="/engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium flex items-center">
                      <Cpu className="w-4 h-4 mr-2 text-blue-500" /> Architecture
                    </Link>
                    <Link to="/security" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-green-500" /> Security & Privacy
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Global Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setGlobalOpen(true)}
              onMouseLeave={() => setGlobalOpen(false)}
            >
              <button className="flex items-center text-sm font-bold text-neutral-900 hover:text-accent-500 transition-colors">
                <Globe className="w-4 h-4 mr-1 text-accent-500" /> Regions
              </button>
              <AnimatePresence>
                {globalOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden py-2 border border-gray-100"
                  >
                    <Link to="/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">UK & Europe</Link>
                    <Link to="/middle-east" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Middle East</Link>
                    <Link to="/australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-500 font-medium">Australia & APAC</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={() => setSearchOpen(true)} className="text-gray-500 hover:text-accent-500 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/contact" className="btn btn-primary text-sm font-semibold px-5 py-2.5 rounded-sm">
              Discuss Your Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={() => setSearchOpen(true)} className="text-gray-500 hover:text-accent-500 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-neutral-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl absolute left-0 right-0 top-[100%]"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col max-h-[75vh] overflow-y-auto">
                
                <MobileAccordion title="Solutions">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Product Engineering</Link>
                  <Link to="/services/digital-marketing" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Digital Marketing & Ads</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">AI & Automation</Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Cloud & DevOps</Link>
                  <Link to="/services/dedicated-team" onClick={() => setMobileMenuOpen(false)} className="text-accent-500 font-bold flex items-center">
                    <Users className="w-4 h-4 mr-2" /> Dedicated Team
                  </Link>
                </MobileAccordion>

                <MobileAccordion title="Industries">
                  <Link to="/industries/fintech" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">FinTech</Link>
                  <Link to="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Healthcare</Link>
                  <Link to="/industries/agriculture" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Agriculture</Link>
                  <Link to="/industries/e-commerce" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">E-commerce</Link>
                  <Link to="/industries/logistics" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Logistics</Link>
                </MobileAccordion>

                <MobileAccordion title="Company">
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">About DG Technix</Link>
                  <Link to="/work" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium">Case Studies</Link>
                  <Link to="/engineering" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium flex items-center">
                    <Cpu className="w-4 h-4 mr-2 text-blue-500" /> Architecture
                  </Link>
                  <Link to="/security" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-500" /> Security & Privacy
                  </Link>
                </MobileAccordion>

                <MobileAccordion title="Global Delivery">
                  <Link to="/europe" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-accent-500" /> UK & Europe
                  </Link>
                  <Link to="/middle-east" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-accent-500" /> Middle East
                  </Link>
                  <Link to="/australia" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 font-medium flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-accent-500" /> Australia & APAC
                  </Link>
                </MobileAccordion>

                <div className="mt-8 pb-8">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full btn btn-primary px-5 py-4 rounded-sm text-center font-bold shadow-md">
                    Discuss Your Project
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

// Extracted accordion for mobile menu to keep state clean
const MobileAccordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 py-2">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-3 text-lg font-bold text-neutral-900"
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col space-y-4 pb-4 pt-2 pl-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
