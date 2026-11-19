import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { caseStudies } from '../../data/caseStudies';
import { ArrowLeft, ArrowRight, Layers, Calendar, MapPin, Tag, ExternalLink, CheckCircle2, Clock, Sparkles } from 'lucide-react';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find(cs => cs.slug === slug)
    || (slug === 'xenbill' ? caseStudies.find(cs => cs.slug === 'dgbill') : undefined)
    || (slug === 'xenstaff' ? caseStudies.find(cs => cs.slug === 'dgstaff') : undefined)
    || (slug === 'dglabs-ai' || slug === 'xenlabs-ai' ? caseStudies.find(cs => cs.slug === 'zylinn-ai') : undefined)
    || (slug === 'cavve' ? caseStudies.find(cs => cs.slug === 'organivaa') : undefined);

  if (!study) return <Navigate to="/404" />;

  const relatedStudies = caseStudies.filter(cs => 
    study.relatedCaseStudies.includes(cs.slug)
  );

  const getStatusBadge = (category: string, status: string) => {
    if (category === 'client') {
      return (
        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-sm bg-accent-600 text-white shadow-sm">
          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
          {status}
        </span>
      );
    }
    if (category === 'product') {
      return (
        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-sm bg-emerald-700 text-white shadow-sm">
          <Sparkles className="w-3.5 h-3.5 mr-1.5" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-sm bg-gray-800 text-amber-300 border border-gray-700 shadow-sm">
        <Clock className="w-3.5 h-3.5 mr-1.5" />
        {status}
      </span>
    );
  };

  return (
    <>
      <Helmet>
        <title>{study.clientName} | {study.categoryLabel} | DG Technix</title>
        <meta name="description" content={study.summary} />
      </Helmet>
      
      {/* Hero */}
      <div className="relative min-h-[460px] bg-navy-900 flex items-center pt-28 pb-16 border-b-4 border-accent-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('${study.heroImage}')` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/70" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <Link to="/work" className="inline-flex items-center text-gray-300 mb-6 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all work & products
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {getStatusBadge(study.category, study.status)}
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-300 bg-navy-800/80 px-2.5 py-1 rounded-sm border border-navy-700">
              {study.categoryLabel}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              {study.industry}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-medium text-white mb-6 tracking-tight max-w-4xl">
            {study.clientName}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light leading-relaxed mb-8">
            {study.summary}
          </p>

          {study.liveUrl && (
            <a 
              href={study.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm shadow-md"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-14">
            
            {/* Primary Showcase Visual */}
            <div className="rounded-sm overflow-hidden border border-gray-200 shadow-sm bg-gray-100 aspect-[16/9]">
              <img 
                src={study.heroImage} 
                alt={`${study.clientName} Showcase Platform`} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* The Challenge */}
            <section>
              <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Context & Objective</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 tracking-tight">The Challenge</h2>
              <div className="text-base text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-sm border border-gray-200">
                {study.challenge}
              </div>
            </section>

            {/* DG Technix Role & Ownership */}
            <section>
              <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Responsibility & Scope</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 tracking-tight">DG Technix's Role & Engineering Scope</h2>
              <div className="bg-navy-900 text-gray-100 p-6 rounded-sm border-l-4 border-accent-500 text-sm md:text-base leading-relaxed">
                {study.companyRole}
              </div>
            </section>

            {/* Features Delivered */}
            <section>
              <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Delivered Capabilities</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-4 tracking-tight">
                {study.category === 'concept' ? 'Core Architecture Components' : 'Implemented Features'}
              </h2>
              <div className="bg-white rounded-sm border border-gray-200 divide-y divide-gray-100">
                {study.featuresDelivered.map((feat, idx) => (
                  <div key={idx} className="p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Planned Features (if applicable) */}
            {study.plannedFeatures && study.plannedFeatures.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-700 font-bold uppercase text-xs tracking-widest block">Roadmap & Iterations</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm font-semibold">Active Engineering</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4 tracking-tight">Upcoming & Planned Milestones</h2>
                <div className="bg-amber-50/50 rounded-sm border border-amber-200 divide-y divide-amber-100">
                  {study.plannedFeatures.map((feat, idx) => (
                    <div key={idx} className="p-4 flex items-start gap-3">
                      <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800 text-sm leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Our Technical Approach */}
            <section>
              <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Technical Execution</span>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6 tracking-tight">Architectural & Design Approach</h2>
              <div className="space-y-4">
                {study.approach.map((step, idx) => (
                  <div key={idx} className="flex items-start bg-white p-6 rounded-sm border border-gray-200 shadow-xs">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-sm bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-1.5 text-navy-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial if present */}
            {study.testimonial && (
              <section>
                <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Client Feedback</span>
                <div className="bg-navy-900 text-white p-8 md:p-10 rounded-sm border-l-4 border-accent-500 relative">
                  <blockquote className="text-lg md:text-xl font-light italic leading-relaxed mb-6 text-gray-200">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-navy-800 pt-4">
                    <div className="font-bold text-base text-white">{study.testimonial.author}</div>
                    <div className="text-accent-400 text-sm">{study.testimonial.role}</div>
                  </div>
                </div>
              </section>
            )}

            {/* Visual Gallery if present */}
            {study.gallery && study.gallery.length > 0 && (
              <section>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Project Preview Visuals</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.gallery.map((imgUrl, i) => (
                    <div key={i} className="aspect-[16/10] bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
                      <img src={imgUrl} alt={`${study.clientName} preview ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 sticky top-24 space-y-6">
              <h3 className="font-bold text-navy-900 border-b border-gray-200 pb-3 text-lg">Project Summary</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                    <Tag className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Category & Status
                  </div>
                  <div className="font-medium text-navy-900">
                    {study.categoryLabel} — <span className="text-accent-700">{study.status}</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Region
                  </div>
                  <div className="font-medium text-navy-900">{study.region}</div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Delivery Status
                  </div>
                  <div className="font-medium text-navy-900">{study.timeline}</div>
                </div>

                {study.liveUrl && (
                  <div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1 flex items-center">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Live Website
                    </div>
                    <a 
                      href={study.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent-600 hover:text-accent-700 font-semibold break-all text-xs inline-flex items-center gap-1"
                    >
                      {study.liveUrl}
                      <ExternalLink className="w-3 h-3 flex-shrink-0" />
                    </a>
                  </div>
                )}

                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 flex items-center">
                    <Layers className="w-3.5 h-3.5 mr-1.5 text-accent-600" /> Technology Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map(t => (
                      <span key={t} className="text-xs bg-white text-gray-700 px-2.5 py-1 rounded-sm border border-gray-200 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {study.results && study.results.length > 0 && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-3">Key Focus & Outcomes</h4>
                  <div className="space-y-3">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="bg-white p-3.5 rounded-sm border border-gray-200">
                        <div className="text-xs font-bold text-accent-700 uppercase tracking-wider mb-0.5">{res.metric}</div>
                        <div className="text-xs text-gray-600 leading-snug">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Link 
                  to="/contact" 
                  className="w-full btn btn-primary text-center block text-sm font-semibold py-3"
                >
                  Discuss a Similar Project
                </Link>
                <a href="mailto:support@dgtechnix.com" className="w-full btn btn-secondary text-center block text-xs font-semibold py-2.5">Email Support Desk</a>
              </div>

            </div>
          </div>

        </div>

        {/* Related Projects */}
        {relatedStudies.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-accent-600 font-bold uppercase text-xs tracking-widest block mb-1">More Work</span>
                <h3 className="text-2xl font-bold text-navy-900">Related Projects & Products</h3>
              </div>
              <Link to="/work" className="text-sm font-semibold text-accent-600 hover:text-accent-700 inline-flex items-center">
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map(rel => (
                <Link 
                  key={rel.slug} 
                  to={`/work/${rel.slug}`} 
                  className="bg-white border border-gray-200 rounded-sm p-6 hover:border-accent-500 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      <span>{rel.categoryLabel}</span>
                      <span className="text-accent-700">{rel.status}</span>
                    </div>
                    <h4 className="text-xl font-bold text-navy-900 group-hover:text-accent-600 transition-colors mb-2">
                      {rel.clientName}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-accent-600 inline-flex items-center pt-3 border-t border-gray-100">
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
};

export default CaseStudyDetail;
