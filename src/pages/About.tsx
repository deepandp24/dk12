import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Users, Target, Shield, ArrowRight, Code, CheckCircle2, FileText } from 'lucide-react';
import FadeIn from '../components/ui/FadeIn';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About DG Technix | Custom Software & Engineering Partner</title>
        <meta 
          name="description" 
          content="DG Technix is a software engineering firm focused on solving operational challenges through custom web applications, APIs, and modern cloud architecture." 
        />
      </Helmet>
      
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden border-b-4 border-accent-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A] opacity-95 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#FF8F1C]/15 to-[#FD4A00]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none">
          <img src="/icon-white.svg" alt="" className="w-80 md:w-96 h-auto" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <span className="text-accent-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Digital • Marketing • Technology
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-6 leading-tight tracking-tight">
              Software Engineering Built Around Business Realities.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto">
              We are a focused technology company designing and developing custom software, robust web applications, and connected backend systems for businesses that need dependable execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview & Capabilities */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Engineering Depth Over Volume Outsourcing.
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Too many businesses get burned by large outsourcing agencies where projects are handed off to anonymous juniors, scopes are misunderstood, and communication breaks down across timezones.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                At DG Technix, we operate with a deliberate focus: we take on a selective number of client engagements where we can provide direct technical leadership, rigorous written documentation, and direct access to the engineers actually building your product.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                  <div className="text-accent-600 font-bold text-lg mb-1">Tailored Delivery</div>
                  <div className="text-sm text-gray-600">Dedicated focus per project rather than high-volume outsourcing queues.</div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-200 shadow-sm">
                  <div className="text-accent-600 font-bold text-lg mb-1">Direct Collaboration</div>
                  <div className="text-sm text-gray-600">Direct technical communication without bureaucratic layers of account management.</div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="bg-navy-900 rounded-sm overflow-hidden p-8 md:p-12 text-white shadow-xl border border-navy-800">
                <Globe className="w-12 h-12 text-accent-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">International Collaboration</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  Operating from India, our delivery schedules are engineered to provide seamless daily communication overlap with businesses in Europe, the United Kingdom, the Middle East, and Australia.
                </p>
                <div className="space-y-3 border-t border-navy-800 pt-6 text-sm">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" />
                    <span>UK & Europe: 3.5 to 4.5 hours daily business overlap</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" />
                    <span>Middle East (GCC): Substantial afternoon overlap</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 mr-2 flex-shrink-0" />
                    <span>Australia: Structured morning standups and handovers</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Engineering & QA Process */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-600 font-bold uppercase text-xs tracking-widest mb-2 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Our Engineering & QA Methodology</h2>
            <p className="text-lg text-gray-600">From initial requirements discovery to post-launch maintenance, we prioritize predictability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-sm bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">1. Requirements Discovery</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We begin by translating business objectives into technical specifications. We map user workflows, define database schemas, and identify third-party API dependencies before development starts.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-200 pt-3">
                <li>• Functional Scope Document</li>
                <li>• User Flow Diagrams</li>
                <li>• Architecture Blueprint</li>
              </ul>
            </div>

            <div className="p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-sm bg-accent-100 text-accent-700 flex items-center justify-center font-bold text-lg mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">2. Agile Development & Review</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We work in bi-weekly sprint cycles. Every feature branch undergoes peer code review, type checking, and automated unit testing before merging to staging for your preview.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-200 pt-3">
                <li>• 2-Week Milestone Sprints</li>
                <li>• GitHub PR Reviews & Linting</li>
                <li>• Interactive Staging Previews</li>
              </ul>
            </div>

            <div className="p-8 rounded-sm bg-gray-50 border border-gray-200">
              <div className="w-12 h-12 rounded-sm bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">3. QA, Launch & Handover</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We test cross-browser responsiveness, security permissions, and error handling. We launch to production cloud environments and supply thorough handover documentation.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-200 pt-3">
                <li>• Cross-Browser & Mobile QA</li>
                <li>• Documented Deployment Manuals</li>
                <li>• Post-Launch Support Windows</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Working Values */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Our Principles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">The standards that guide how we engineer software and communicate with clients.</p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-sm bg-white border border-gray-200 h-full text-left">
                <div className="w-12 h-12 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Engineering Integrity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We don't take shortcuts that compromise maintainability. We write typed, clean, self-documenting code that your internal engineers can easily understand and evolve.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-sm bg-white border border-gray-200 h-full text-left">
                <div className="w-12 h-12 rounded-sm bg-accent-50 text-accent-600 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Written Clarity</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe in explicit definitions. Scope, architecture diagrams, delivery dates, and handover instructions are communicated clearly in writing to prevent ambiguity.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="p-8 rounded-sm bg-white border border-gray-200 h-full text-left">
                <div className="w-12 h-12 rounded-sm bg-green-50 text-green-600 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Business-First Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Technology exists to solve operational bottlenecks. We recommend modern tools when appropriate, but never introduce unnecessary complexity for its own sake.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-900 text-white text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-medium mb-6">Ready to discuss your software requirements?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Speak directly with an engineering lead to review your project scope, technical feasibility, and delivery timeline.
            </p>
            <Link to="/contact" className="btn btn-primary inline-flex items-center text-base px-8 py-4">
              Discuss Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default About;
