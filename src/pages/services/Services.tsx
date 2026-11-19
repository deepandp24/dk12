import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import { servicesData } from '../../data/services';
import { ArrowRight, Code, Database, Smartphone, Layers, Wrench, Shield, Search, Workflow, Megaphone } from 'lucide-react';

const getServiceIcon = (id: string) => {
  switch(id) {
    case 'web-development': return <Layers className="w-8 h-8 text-navy-900 mb-5" />;
    case 'custom-software': return <Code className="w-8 h-8 text-navy-900 mb-5" />;
    case 'mobile-apps': return <Smartphone className="w-8 h-8 text-navy-900 mb-5" />;
    case 'api-integrations': return <Database className="w-8 h-8 text-navy-900 mb-5" />;
    case 'automation': return <Workflow className="w-8 h-8 text-navy-900 mb-5" />;
    case 'ui-ux-design': return <Layers className="w-8 h-8 text-navy-900 mb-5" />;
    case 'maintenance': return <Shield className="w-8 h-8 text-navy-900 mb-5" />;
    case 'digital-marketing': return <Megaphone className="w-8 h-8 text-accent-500 mb-5" />;
    default: return <Wrench className="w-8 h-8 text-navy-900 mb-5" />;
  }
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Services & Deliverables | DG Technix</title>
        <meta 
          name="description" 
          content="Explore DG Technix's core software engineering services: custom software, web applications, API integrations, and cloud infrastructure." 
        />
      </Helmet>
      
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-24 border-b-4 border-accent-500 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#FF8F1C]/15 to-[#FD4A00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs mb-3 block">
              Core Engineering Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 tracking-tight">
              Software Solutions Designed for Business Operations
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed font-light">
              We design, build, and maintain mission-critical web applications, APIs, and custom operational software. Every service is defined with written scopes, explicit deliverables, and predictable timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-14">
            <h2 className="text-3xl font-heading font-semibold text-navy-900 mb-3 tracking-tight">
              Detailed Service Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl text-base">
              Click any service to view the complete scope, typical customer problems, technical capabilities, and sample deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <FadeIn key={service.id} delay={idx * 0.05}>
                <Link 
                  to={`/services/${service.id}`} 
                  className="block bg-white border border-gray-200 p-8 rounded-sm hover:border-accent-500 transition-colors group h-full shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {getServiceIcon(service.id)}
                    <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.tagline}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex items-center text-accent-600 font-semibold text-sm group-hover:text-accent-700">
                    <span>View deliverables & scope</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Team Banner */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-navy-900 text-white rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-accent-400 font-bold uppercase text-xs tracking-wider mb-2 block">
                Ongoing Capacity
              </span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 tracking-tight">
                Need dedicated developers instead of a fixed-scope project?
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                We provide dedicated developer pods (frontend, backend, QA) that integrate directly into your Jira workflows and sprint ceremonies with convenient timezone alignment.
              </p>
            </div>
            <div>
              <Link to="/services/dedicated-team" className="btn btn-primary text-base font-semibold px-8 py-4 whitespace-nowrap inline-block">
                Explore Dedicated Teams
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;