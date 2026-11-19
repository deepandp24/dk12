import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  ExternalLink, 
  Code, 
  Database, 
  Shield, 
  Layers, 
  CheckCircle2, 
  MessageSquare, 
  Wrench, 
  Sparkles, 
  Globe, 
  ShoppingBag, 
  Cpu, 
  Users, 
  Bot, 
  Check, 
  Clock,
  ArrowUpRight,
  Megaphone,
  TrendingUp,
  Target,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/ui/FadeIn';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DG Technix | Custom Software & Digital Engineering</title>
        <meta 
          name="description" 
          content="DG Technix designs and develops business websites, e-commerce platforms and custom software that help businesses improve operations and turn ideas into practical digital products." 
        />
      </Helmet>

      {/* =========================================================================
          SECTION 1: HERO
          ========================================================================= */}
      <section className="bg-navy-900 text-white pt-32 pb-24 md:pt-40 md:pb-32 border-b-4 border-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A] opacity-95" />
        {/* Soft branded background glow and oversized G mark per Brand Guidelines */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[450px] h-[450px] md:w-[650px] md:h-[650px] bg-gradient-to-br from-[#FF8F1C]/15 to-[#FD4A00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-16 -bottom-16 opacity-5 pointer-events-none select-none">
          <img src="/icon-white.svg" alt="" className="w-96 md:w-[480px] h-auto" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Digital • Marketing • Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">
              Engineering Solutions Built Around Your Business.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl font-normal">
              DG Technix designs and develops business websites, e-commerce platforms, and custom software that help businesses improve operations, drive conversions, and turn ideas into practical digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn btn-primary text-base font-semibold px-8 py-4 inline-flex items-center justify-center shadow-lg"
              >
                Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/work" 
                className="inline-flex items-center justify-center font-semibold text-white border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 transition-colors px-8 py-4 rounded-sm"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CAPABILITIES & WORKING PRINCIPLES
          ========================================================================= */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-sm bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Custom Software & Web</h3>
                <p className="text-sm text-gray-600 leading-relaxed">High-performance platforms tailored to business workflows.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-sm bg-orange-50 border border-orange-100 flex items-center justify-center text-accent-500 flex-shrink-0">
                <Megaphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Performance Paid Ads</h3>
                <p className="text-sm text-gray-600 leading-relaxed">High-ROI Meta, Google, GPT & LinkedIn ad campaigns.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-sm bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-700 flex-shrink-0">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Social Media & Branding</h3>
                <p className="text-sm text-gray-600 leading-relaxed">End-to-end channel handling & iconic visual identity.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-sm bg-green-50 border border-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-navy-900 mb-1">Commercial Growth</h3>
                <p className="text-sm text-gray-600 leading-relaxed">CAPI attribution, server tracking & measurable ROAS.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SELECTED CLIENT WORK
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-accent-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                Category 1: Client Engagements
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy-900 tracking-tight">
                Selected Client Work
              </h2>
            </div>
            <Link 
              to="/work" 
              className="mt-4 md:mt-0 text-sm font-semibold text-accent-600 hover:text-accent-700 inline-flex items-center"
            >
              View all portfolio projects <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1: Purple Squad */}
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-sm border border-gray-200 hover:border-accent-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden group">
                  <img 
                    src="/portfolio/Purple_Squad.png" 
                    alt="Purple Squad Platform Experience" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-accent-600 text-white shadow-sm">
                      Live Client Delivery
                    </span>
                  </div>
                  <a 
                    href="https://purplesquad.in/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute top-4 right-4 bg-navy-900/90 hover:bg-navy-900 text-white text-xs px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1 backdrop-blur-xs transition-colors"
                  >
                    <span>purplesquad.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Home Services & On-Demand Booking • Chennai, India
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Purple Squad Home Services
                  </h3>
                  <div className="space-y-3 mb-6 text-sm text-gray-600 leading-relaxed flex-grow">
                    <p>
                      <strong className="text-gray-900">Problem:</strong> Customers faced friction discovering specific repair services and understanding upfront costs without lengthy back-and-forth phone calls.
                    </p>
                    <p>
                      <strong className="text-gray-900">Solution:</strong> DG Technix built a mobile-responsive web platform featuring an intuitive 15+ category visual catalog, transparent tier-based pricing packages, and slot-based scheduling.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link to="/work/purple-squad" className="text-accent-600 font-semibold text-sm hover:text-accent-700 inline-flex items-center">
                      Case Study Details <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    <a 
                      href="https://purplesquad.in/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-gray-600 hover:text-accent-600 inline-flex items-center font-medium"
                    >
                      Visit Live Site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Project 2: Organivaa */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-sm border border-gray-200 hover:border-accent-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden group">
                  <img 
                    src="/portfolio/Organivaa.png" 
                    alt="Organivaa Natural Wellness Storefront" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-accent-600 text-white shadow-sm">
                      Live Client Delivery
                    </span>
                  </div>
                  <a 
                    href="https://organivaa.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute top-4 right-4 bg-navy-900/90 hover:bg-navy-900 text-white text-xs px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1 backdrop-blur-xs transition-colors"
                  >
                    <span>organivaa.netlify.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Natural Wellness & E-Commerce • India / Global
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    Organivaa Botanical Wellness
                  </h3>
                  <div className="space-y-3 mb-6 text-sm text-gray-600 leading-relaxed flex-grow">
                    <p>
                      <strong className="text-gray-900">Problem:</strong> Natural wellness brands need a reassuring, pure digital presence that articulates organic benefits while keeping shopping frictionless.
                    </p>
                    <p>
                      <strong className="text-gray-900">Solution:</strong> DG Technix engineered a calming botanical e-commerce storefront with high-fidelity product cards, categorization, and seamless cart/checkout flows.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link to="/work/organivaa" className="text-accent-600 font-semibold text-sm hover:text-accent-700 inline-flex items-center">
                      Case Study Details <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    <a 
                      href="https://organivaa.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-gray-600 hover:text-accent-600 inline-flex items-center font-medium"
                    >
                      Visit Live Site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Project 3: GRF Growths */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-sm border border-gray-200 hover:border-accent-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1200&q=80" 
                    alt="GRF Growths Agricultural Platform" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-accent-600 text-white shadow-sm">
                      Live Client Delivery
                    </span>
                  </div>
                  <a 
                    href="https://grfgrowths.netlify.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="absolute top-4 right-4 bg-navy-900/90 hover:bg-navy-900 text-white text-xs px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1 backdrop-blur-xs transition-colors"
                  >
                    <span>grfgrowths.netlify.app</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Poultry & Agriculture • Tamil Nadu, India
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">
                    GRF Growths Farm & Breed Portal
                  </h3>
                  <div className="space-y-3 mb-6 text-sm text-gray-600 leading-relaxed flex-grow">
                    <p>
                      <strong className="text-gray-900">Problem:</strong> Agricultural producers often struggle to present livestock health, standards, and catalogue options professionally to commercial buyers.
                    </p>
                    <p>
                      <strong className="text-gray-900">Solution:</strong> Designed and engineered a lightweight, mobile-first breed catalogue and farm standards portal with direct WhatsApp commercial enquiry funnels.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link to="/work/grf-growths" className="text-accent-600 font-semibold text-sm hover:text-accent-700 inline-flex items-center">
                      Case Study Details <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    <a 
                      href="https://grfgrowths.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-gray-600 hover:text-accent-600 inline-flex items-center font-medium"
                    >
                      Visit Live Site <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PRODUCTS BY DG TECHNIX (In-House Digital Products)
          ========================================================================= */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-14">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2 block">
              Category 2: In-House SaaS & Engineering Labs
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy-900 mb-4 tracking-tight">
              Products by DG Technix
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              In addition to delivering client solutions, DG Technix engineers its own digital platforms and developer tools. This continuous product development refines our software architecture and deployment practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1: LinkSync */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-colors shadow-xs group">
              <div>
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden">
                  <img 
                    src="/portfolio/LinkSync.png" 
                    alt="LinkSync - Bio-Link & Creator Hub" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm bg-emerald-600 text-white shadow-xs">
                      Live Product MVP
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-navy-900">LinkSync</h3>
                    <a 
                      href="https://linksynk.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 hover:text-emerald-700"
                      title="Visit LinkSync Live"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Bio-Link & Creator Hub</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A high-speed bio-link SaaS allowing creators, founders, and small businesses to host branded social landing hubs with dynamic link ordering and lead capture.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <Link to="/work/linksync" className="text-accent-600 hover:text-accent-700">
                    Case Study
                  </Link>
                  <a 
                    href="https://linksynk.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-emerald-700 hover:text-emerald-800 inline-flex items-center"
                  >
                    Live App <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Product 2: BillNow / DG Bill */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-colors shadow-xs group">
              <div>
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden">
                  <img 
                    src="/portfolio/BillNow_DG Bill.png" 
                    alt="BillNow / DG Bill - Billing & Inventory Software" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm bg-blue-600 text-white shadow-xs">
                      Active Beta
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">BillNow / DG Bill</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Billing & Inventory SaaS</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Designed for Indian & global MSMEs to streamline GST invoicing, inventory tracking, customer accounts, and automated overdue payment reminders.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <Link to="/work/dgbill" className="text-accent-600 hover:text-accent-700">
                    Product Details
                  </Link>
                  <span className="text-gray-400">Roadmap Phase 1</span>
                </div>
              </div>
            </div>

            {/* Product 3: DG Staff */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-colors shadow-xs group">
              <div>
                <div className="relative aspect-[16/10] bg-gradient-to-br from-navy-900 to-navy-800 border-b border-gray-200 flex items-center justify-center p-6 text-center">
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-sm bg-accent-600/20 text-accent-400 mx-auto flex items-center justify-center font-bold text-lg border border-accent-500/30">
                      XS
                    </div>
                    <div className="text-xs font-bold text-white tracking-wide uppercase">DG Staff Console</div>
                    <div className="text-[11px] text-gray-300">HRMS & Attendance Hub</div>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm bg-gray-800 text-amber-300 border border-gray-700 shadow-xs">
                      In Development
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">DG Staff</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">HRMS & Attendance Hub</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A streamlined employee management platform designed for distributed teams—featuring self-service leave requests, attendance logs, and role-based permissions.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <Link to="/work/dgstaff" className="text-accent-600 hover:text-accent-700">
                    Product Details
                  </Link>
                  <span className="text-gray-400">Roadmap Phase 1</span>
                </div>
              </div>
            </div>

            {/* Product 4: Zylinn AI */}
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between hover:border-emerald-600 transition-colors shadow-xs group">
              <div>
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden">
                  <img 
                    src="/portfolio/Zylinn_AI.png" 
                    alt="Zylinn AI - Multilingual AI Voice Agents" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-sm bg-purple-700 text-white shadow-xs">
                      Active Beta
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Zylinn AI</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Multilingual Voice Agents</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AI-powered multilingual voice agents for customer support, lead qualification, appointment booking, and workflow automation in Tamil, English, and Hindi.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <Link to="/work/zylinn-ai" className="text-accent-600 hover:text-accent-700">
                    Voice Agent Details
                  </Link>
                  <span className="text-purple-700 font-medium">Tamil • Eng • Hindi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CORE DELIVERABLES & SERVICES
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <span className="text-accent-600 font-bold text-xs uppercase tracking-widest mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy-900 mb-4 tracking-tight">
              Digital • Marketing • Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              From mission-critical software engineering to high-converting performance ads, social media handling, and brand identity systems, we build every digital touchpoint for commercial impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Business Websites & E-Commerce */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 hover:border-accent-500 transition-colors flex flex-col justify-between">
              <div>
                <Globe className="w-8 h-8 text-navy-900 mb-5" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">Business Websites & E-Commerce</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Fast, responsive corporate websites and online storefronts engineered to communicate value clearly, rank organically, and convert qualified prospects.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Sub-second Core Web Vitals</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Payment gateways & cart checkout</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Structured metadata & search SEO</li>
                </ul>
              </div>
              <Link to="/services/web-development" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Service 2: Custom Web Applications & SaaS */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 hover:border-accent-500 transition-colors flex flex-col justify-between">
              <div>
                <Code className="w-8 h-8 text-navy-900 mb-5" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">Custom Web Apps & SaaS</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Bespoke interactive software tailored to unique operational workflows, replacing rigid off-the-shelf templates and fragmented spreadsheets.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> React & TypeScript frontends</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Multi-tenant SaaS architecture</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Role-based access & permissions</li>
                </ul>
              </div>
              <Link to="/services/custom-software" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Service 3: APIs, Cloud & Practical AI */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-8 hover:border-accent-500 transition-colors flex flex-col justify-between">
              <div>
                <Bot className="w-8 h-8 text-navy-900 mb-5" />
                <h3 className="text-xl font-bold text-navy-900 mb-3">APIs, Cloud & Practical AI</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Connecting external systems with custom backend APIs, plus pragmatic AI capabilities such as intelligent document parsing and automated triage.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> RESTful APIs & webhook synchronization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Secure cloud infrastructure setup</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Practical LLM integration without hype</li>
                </ul>
              </div>
              <Link to="/services/api-integrations" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Learn more <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Service 4: Meta & Google Ads (Performance PPC) */}
            <div className="bg-white border-2 border-accent-500/40 hover:border-accent-500 rounded-sm p-8 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <Megaphone className="w-8 h-8 text-accent-500 mb-5" />
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-navy-900">Meta & Google Ads</h3>
                  <span className="text-[10px] uppercase font-bold bg-accent-500 text-white px-2 py-0.5 rounded-sm">High ROAS</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  High-converting performance marketing across Facebook, Instagram, Google Search, Performance Max, and YouTube video ads.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Meta CAPI server-side iOS tracking</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> High-intent Google Search & PMax</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Dynamic creative testing & retargeting</li>
                </ul>
              </div>
              <Link to="/services/digital-marketing" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Explore Paid Ads <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Service 5: GPT Ads & LinkedIn B2B Marketing */}
            <div className="bg-white border-2 border-accent-500/40 hover:border-accent-500 rounded-sm p-8 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <Target className="w-8 h-8 text-accent-500 mb-5" />
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-navy-900">GPT Ads & LinkedIn B2B</h3>
                  <span className="text-[10px] uppercase font-bold bg-navy-900 text-white px-2 py-0.5 rounded-sm">Next-Gen</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Next-generation AI advertising (SearchGPT & conversational prompts) paired with precision LinkedIn Account-Based Marketing (ABM) for enterprise deals.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Conversational AI search ad placement</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Decision-maker targeting (CXOs, Directors)</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Lead Gen Forms with instant CRM sync</li>
                </ul>
              </div>
              <Link to="/services/digital-marketing" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Explore B2B & AI Ads <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            {/* Service 6: Social Media Handling & Brand Identity */}
            <div className="bg-white border-2 border-accent-500/40 hover:border-accent-500 rounded-sm p-8 transition-colors flex flex-col justify-between shadow-xs">
              <div>
                <Share2 className="w-8 h-8 text-accent-500 mb-5" />
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-navy-900">Social Media & Branding</h3>
                  <span className="text-[10px] uppercase font-bold bg-accent-500 text-white px-2 py-0.5 rounded-sm">All-In-One</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  End-to-end channel management (content creation, Reels scripting, community inbox triage) and iconic visual brand design systems.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 mb-6">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Daily/weekly social calendar & Reels</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Vector Logo kits & Brand Guidelines</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" /> Commercial stationery, decks & collateral</li>
                </ul>
              </div>
              <Link to="/services/digital-marketing" className="text-accent-600 font-semibold text-xs hover:text-accent-700 inline-flex items-center">
                Explore Social & Branding <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK
          ========================================================================= */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <span className="text-accent-400 font-bold uppercase text-xs tracking-widest block mb-2">
              Delivery Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 tracking-tight">
              How DG Technix Delivers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl font-light">
              Clear scope, honest expectations, and direct collaboration. No sales intermediaries or ambiguous contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-accent-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Understand & Scope</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We review your operational challenges, discuss technical feasibility, and prepare an explicit written scope with milestones and fixed cost estimates before writing a line of code.
              </p>
              <div className="text-xs text-accent-400 font-medium">Deliverable: Architecture & Scope Document</div>
            </div>

            <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-accent-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Build & Iterate</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We develop in structured iterations with regular working demonstrations on live staging URLs. You communicate directly with the engineers implementing your system.
              </p>
              <div className="text-xs text-accent-400 font-medium">Deliverable: Bi-weekly demos & staging builds</div>
            </div>

            <div className="bg-navy-800/80 border border-navy-700 p-8 rounded-sm">
              <div className="w-12 h-12 rounded-sm bg-accent-600 text-white flex items-center justify-center font-bold text-lg mb-6">
                03
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Deliver & Support</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Following thorough QA and user verification, we deploy to your cloud infrastructure, transfer 100% intellectual property, provide clear documentation, and offer ongoing support.
              </p>
              <div className="text-xs text-accent-400 font-medium">Deliverable: Full code repo & operational guide</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: WHY DG TECHNIX
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16">
            <span className="text-accent-600 font-bold text-xs uppercase tracking-widest mb-2 block">
              Working Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-navy-900 mb-4 tracking-tight">
              Why Businesses Choose DG Technix
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              We operate as a focused engineering studio, prioritizing direct relationships and reliable software delivery over corporate ceremony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <Users className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Direct Access to Engineers</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You work directly with the developers writing your code. No non-technical account handlers or lost context between design and implementation.
              </p>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <Cpu className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Pragmatic Architecture</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We select proven, modern stacks suited to your budget and growth stage. We never introduce unnecessary complexity or fragile microservice bloat.
              </p>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <Shield className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Full IP Ownership</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                You own 100% of all custom source code, documentation, and digital assets. No vendor lock-in, proprietary licensing, or hidden dependencies.
              </p>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <MessageSquare className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Honest Communication</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                If a feature is technically unfeasible or adds unnecessary expense, we tell you early. We focus on pragmatic business ROI rather than billing hours.
              </p>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <CheckCircle2 className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">Disciplined Delivery</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Agreed milestone deadlines, predictable sprint schedules, and written acceptance criteria guarantee that projects finish on scope and on budget.
              </p>
            </div>

            <div className="border border-gray-200 rounded-sm p-6 hover:border-gray-400 transition-colors">
              <Clock className="w-7 h-7 text-navy-900 mb-4" />
              <h3 className="text-lg font-bold text-navy-900 mb-2">International Overlap</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Operating out of India, we provide convenient timezone overlap with the UK/Europe (3.5–4.5 hours), the UAE/Middle East (5 hours), and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TESTIMONIAL & VERIFIED CLIENT LOGOS
          ========================================================================= */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Verified Testimonial */}
          <div className="bg-navy-900 text-white p-8 md:p-12 rounded-sm border-l-4 border-accent-500 shadow-md mb-16">
            <span className="text-xs font-bold text-accent-400 uppercase tracking-widest block mb-4">
              Verified Client Feedback
            </span>
            <blockquote className="text-lg md:text-xl font-light italic leading-relaxed text-gray-200 mb-6">
              "DG Technix structured our service catalog and booking flow with remarkable clarity. Customers now understand our maintenance packages and pricing immediately, saving our team hours of back-and-forth consultation."
            </blockquote>
            <div className="flex items-center justify-between border-t border-navy-800 pt-4">
              <div>
                <div className="font-bold text-white text-base">Operational Lead</div>
                <div className="text-accent-400 text-sm">Purple Squad Home Services (Chennai, India)</div>
              </div>
              <a 
                href="https://purplesquad.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1"
              >
                purplesquad.in <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Client Logos (Verified only: Purple Squad, GRF Growths, GAD Growths - No DG Bill/BillNow) */}
          <div className="text-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">
              Verified Client Collaborations
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
              <a 
                href="https://purplesquad.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-sm hover:border-accent-500 transition-colors shadow-xs"
                title="Purple Squad"
              >
                <img src="/purplesquad.png" alt="Purple Squad" className="h-9 md:h-10 w-auto object-contain" />
              </a>

              <a 
                href="https://grfgrowths.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-sm hover:border-accent-500 transition-colors shadow-xs"
                title="GRF Growths"
              >
                <span className="text-base font-heading font-bold text-navy-900 tracking-tight">
                  GRF <span className="text-accent-600">Growths</span>
                </span>
              </a>

              <div 
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-sm hover:border-accent-500 transition-colors shadow-xs"
                title="GAD Growths"
              >
                <img src="/gadgrowths.png" alt="GAD Growths" className="h-9 md:h-10 w-auto object-contain" />
              </div>

              <a 
                href="https://organivaa.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-sm hover:border-accent-500 transition-colors shadow-xs"
                title="Organivaa"
              >
                <span className="text-base font-heading font-bold text-emerald-800 tracking-tight flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                  Organivaa
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-bold text-xs uppercase tracking-widest mb-2 block">
              Got Questions?
            </span>
            <h2 className="text-3xl font-heading font-semibold text-navy-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Clear answers regarding our engagement models, timezone collaboration, and security practices.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: 'How does DG Technix approach security and data privacy?', 
                a: 'We design software with data minimization and GDPR awareness by default. Applications use HTTPS/TLS in transit, standard database encryption at rest, environment variable isolation for credentials, and role-based access control. Specific controls are defined per project requirements.' 
              },
              { 
                q: 'What is your working hours overlap for international clients?', 
                a: 'Operating from India (UTC+5:30), our standard engineering schedule provides 3.5 to 4.5 hours of daily overlap with the UK/Europe, up to 5 hours with the UAE and Middle East, and convenient early-morning syncs for Australian businesses.' 
              },
              { 
                q: 'Do you work on fixed-cost milestones or monthly capacity?', 
                a: 'Both. For projects with defined requirements, we provide fixed-scope milestones with clear deliverables. For ongoing product development or continuous iterations, we offer monthly developer pods.' 
              },
              { 
                q: 'Who owns the intellectual property and source code?', 
                a: 'You do. Upon milestone payment completion, all custom code, design files, configurations, and documentation are 100% your intellectual property with zero licensing royalties.' 
              },
              { 
                q: 'What happens after the project is deployed?', 
                a: 'Every delivery concludes with documentation and a recorded handover session. We offer optional ongoing maintenance agreements covering security updates, bug fixes, and incremental feature additions.' 
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-sm p-6 hover:border-gray-300 transition-colors">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FINAL CONVERSION CTA
          ========================================================================= */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 tracking-tight">
            Ready to Build or Upgrade Your Digital Solution?
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 font-light">
            Tell us about your project requirements or operational bottlenecks. We evaluate feasibility and provide written architecture proposals with zero sales pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="btn btn-primary text-base px-8 py-4 font-semibold shadow-lg inline-flex items-center justify-center"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a 
              href="mailto:support@dgtechnix.com" 
              className="btn btn-secondary text-base px-8 py-4 font-semibold inline-flex items-center justify-center"
            >
              Email Support Desk
            </a>
          </div>
          <div className="mt-8 text-xs text-gray-400">
            Direct email: <a href="mailto:support@dgtechnix.com" className="text-accent-400 underline">support@dgtechnix.com</a> • Typical proposal turnaround: 24–48 hours
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
