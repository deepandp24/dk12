import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import FadeIn from '../../components/ui/FadeIn';
import { ArrowRight, ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';

type FilterCategory = 'all' | 'client' | 'product' | 'concept';

const Work = () => {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filtered = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter);

  const getStatusBadge = (category: string, status: string) => {
    if (category === 'client') {
      return (
        <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm bg-accent-600 text-white shadow-sm">
          <CheckCircle2 className="w-3 h-3 mr-1" />
          {status}
        </span>
      );
    }
    if (category === 'product') {
      return (
        <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm bg-emerald-700 text-white shadow-sm">
          <Sparkles className="w-3 h-3 mr-1" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm bg-gray-800 text-amber-300 border border-gray-700 shadow-sm">
        <Clock className="w-3 h-3 mr-1" />
        {status}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>Portfolio & Products | DG Technix</title>
        <meta 
          name="description" 
          content="Explore DG Technix's client work, in-house SaaS products, and engineering concepts across web applications, API integrations, and digital platforms." 
        />
      </Helmet>
      
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 border-b-4 border-accent-500 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#FF8F1C]/15 to-[#FD4A00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <span className="text-accent-400 font-bold uppercase text-xs tracking-widest mb-3 block">Portfolio & Product Showcase</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6">Our Work, Products & Concepts</h1>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-gray-300 mb-4 font-light leading-relaxed">
              We present our work with complete transparency—clearly distinguishing live client projects, our own in-house SaaS products, and active development concepts.
            </p>
            <p className="text-sm text-gray-400">
              No fabricated performance metrics or exaggerated statistics. Every showcase reflects genuine software architecture, design execution, and problem solving.
            </p>
          </div>
        </div>
      </div>
      
      {/* Category Tabs and Grid */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="flex flex-wrap gap-2.5 mb-12 border-b border-gray-200 pb-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              filter === 'all' 
                ? 'bg-navy-900 text-white shadow-sm' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Work ({caseStudies.length})
          </button>
          <button 
            onClick={() => setFilter('client')}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              filter === 'client' 
                ? 'bg-accent-600 text-white shadow-sm' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Client Projects ({caseStudies.filter(c => c.category === 'client').length})
          </button>
          <button 
            onClick={() => setFilter('product')}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              filter === 'product' 
                ? 'bg-emerald-700 text-white shadow-sm' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Products by DG Technix ({caseStudies.filter(c => c.category === 'product').length})
          </button>
          <button 
            onClick={() => setFilter('concept')}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              filter === 'concept' 
                ? 'bg-gray-800 text-amber-300 shadow-sm' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Concepts & In Development ({caseStudies.filter(c => c.category === 'concept').length})
          </button>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((cs, idx) => (
            <FadeIn key={cs.slug} delay={idx * 0.06}>
              <div className="bg-white rounded-sm border border-gray-200 hover:border-accent-500 transition-all flex flex-col h-full shadow-sm hover:shadow-md">
                
                {/* Visual */}
                <div className="relative aspect-[16/10] bg-gray-100 border-b border-gray-200 overflow-hidden group">
                  <img 
                    src={cs.heroImage} 
                    alt={cs.clientName} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {getStatusBadge(cs.category, cs.status)}
                  </div>
                  {cs.liveUrl && (
                    <a 
                      href={cs.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="absolute top-4 right-4 bg-navy-900/90 hover:bg-navy-900 text-white text-xs px-2.5 py-1 rounded-sm shadow-md flex items-center gap-1 backdrop-blur-xs transition-colors"
                      title={`Visit ${cs.clientName} live website`}
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    <span>{cs.categoryLabel}</span>
                    <span>{cs.industry}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-navy-900 mb-3 hover:text-accent-600 transition-colors">
                    <Link to={`/work/${cs.slug}`}>
                      {cs.clientName}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">
                    {cs.summary}
                  </p>

                  {/* DG Technix Role Callout */}
                  <div className="mb-5 bg-gray-50 p-3.5 rounded-sm border-l-2 border-accent-500 text-xs text-gray-700 leading-relaxed">
                    <span className="font-bold text-navy-900 block mb-0.5">DG Technix's Role:</span>
                    {cs.companyRole}
                  </div>

                  {/* Outcomes / Metrics if available */}
                  {cs.results && cs.results.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-5 bg-navy-900 text-white p-3 rounded-sm">
                      {cs.results.map((res, i) => (
                        <div key={i}>
                          <div className="text-xs font-bold text-accent-400 uppercase tracking-wider">{res.metric}</div>
                          <div className="text-xs text-gray-300 leading-tight mt-0.5">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cs.techStack.map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <Link 
                      to={`/work/${cs.slug}`} 
                      className="text-accent-600 font-semibold text-sm hover:text-accent-700 inline-flex items-center"
                    >
                      Case Study Details <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                    {cs.liveUrl ? (
                      <a 
                        href={cs.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-gray-600 hover:text-accent-600 inline-flex items-center font-medium"
                      >
                        Visit Link <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium">{cs.timeline}</span>
                    )}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 bg-navy-900 text-white rounded-sm text-center">
          <h3 className="text-2xl font-heading font-medium mb-3">Have a project or technical challenge in mind?</h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
            We review requirements, assess technical feasibility, and provide written scopes with milestones before any development begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary text-sm px-6 py-3 font-semibold">
              Discuss Your Project
            </Link>
            <a href="mailto:support@dgtechnix.com" className="btn btn-secondary text-sm px-6 py-3 font-semibold">Email Support Desk</a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Work;
