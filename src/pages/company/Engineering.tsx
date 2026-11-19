import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/ui/FadeIn';
import { ArrowDown, Database, Cloud, Server, Shield, Cpu, Lock, Workflow, Zap, Globe, ArrowRight } from 'lucide-react';

const Engineering = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Architecture | DG Technix</title>
        <meta name="description" content="How DG Technix engineers design and scale production AI systems, cloud infrastructure, and enterprise architectures." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden border-b-4 border-accent-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">This is how we build.</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We don't just write code; we design resilient systems. Explore our standard architectural blueprints for deploying scalable enterprise and AI applications globally.
            </p>
          </div>
        </div>
      </section>

      {/* AI Agents Architecture */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-2 block">Reference Architecture</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Enterprise AI Agents</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our approach to building autonomous RAG (Retrieval-Augmented Generation) agents that securely interact with your business data without compromising privacy.
              </p>
            </div>
            
            {/* The Diagram */}
            <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-sm shadow-xl border border-gray-100 relative">
              <div className="flex flex-col items-center">
                
                {/* User */}
                <div className="w-32 py-4 bg-navy-50 rounded-sm border border-navy-100 flex flex-col items-center shadow-sm">
                  <div className="w-10 h-10 bg-navy-900 text-white rounded-sm flex items-center justify-center mb-2">User</div>
                  <span className="text-xs font-semibold text-navy-600 uppercase tracking-wider">Input</span>
                </div>
                
                <ArrowDown className="w-6 h-6 text-gray-300 my-4" />
                
                {/* AI Agent Core */}
                <div className="w-full md:w-2/3 bg-accent-50 rounded-sm border border-accent-200 p-6 flex flex-col items-center shadow-inner">
                  <Cpu className="w-8 h-8 text-accent-600 mb-2" />
                  <h3 className="text-xl font-bold text-navy-900">LLM Reasoning Engine</h3>
                  <p className="text-sm text-gray-500 mb-4">Orchestration (LangChain / LlamaIndex)</p>
                  
                  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <div className="font-bold text-sm">Guardrails</div>
                        <div className="text-xs text-gray-500">Input/Output Validation</div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-sm border border-gray-200 shadow-sm flex items-center">
                      <Zap className="w-5 h-5 text-amber-500 mr-3" />
                      <div>
                        <div className="font-bold text-sm">Tool Calling</div>
                        <div className="text-xs text-gray-500">Action Execution</div>
                      </div>
                    </div>
                  </div>
                </div>

                <ArrowDown className="w-6 h-6 text-gray-300 my-4" />

                {/* Systems Integration */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-navy-900 text-white p-6 rounded-sm text-center shadow-md hover:-translate-y-1 transition-transform">
                    <Database className="w-6 h-6 mx-auto mb-2 text-accent-400" />
                    <div className="font-bold text-sm">Vector DB</div>
                    <div className="text-xs text-gray-400 mt-1">Pinecone / Qdrant</div>
                  </div>
                  <div className="bg-navy-900 text-white p-6 rounded-sm text-center shadow-md hover:-translate-y-1 transition-transform">
                    <Workflow className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="font-bold text-sm">CRM API</div>
                    <div className="text-xs text-gray-400 mt-1">Salesforce / HubSpot</div>
                  </div>
                  <div className="bg-navy-900 text-white p-6 rounded-sm text-center shadow-md hover:-translate-y-1 transition-transform">
                    <Server className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    <div className="font-bold text-sm">Internal ERP</div>
                    <div className="text-xs text-gray-400 mt-1">PostgreSQL DB</div>
                  </div>
                  <div className="bg-navy-900 text-white p-6 rounded-sm text-center shadow-md hover:-translate-y-1 transition-transform">
                    <Lock className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <div className="font-bold text-sm">Auth Authz</div>
                    <div className="text-xs text-gray-400 mt-1">Role-based access</div>
                  </div>
                </div>
                
                <ArrowDown className="w-6 h-6 text-gray-300 my-4" />
                
                {/* Output */}
                <div className="w-48 py-4 bg-green-50 rounded-sm border border-green-200 flex flex-col items-center shadow-sm">
                  <div className="font-bold text-green-700">Business Action</div>
                  <span className="text-xs text-green-600 mt-1">Secure Execution</span>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cloud & DevOps Architecture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mb-16 text-center">
              <span className="text-accent-600 font-bold tracking-widest uppercase text-sm mb-2 block">Reference Architecture</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">Cloud & DevOps (High Availability)</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Our standard blueprint for deploying zero-downtime microservices capable of handling millions of global requests securely.
              </p>
            </div>
            
            {/* The Diagram */}
            <div className="max-w-5xl mx-auto bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between">
                
                {/* Traffic Entry */}
                <div className="w-full md:w-1/4 flex flex-col space-y-4">
                  <div className="bg-white p-4 rounded-sm border border-gray-200 text-center shadow-sm">
                    <Globe className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <div className="font-bold text-sm text-navy-900">Global Users</div>
                  </div>
                  <div className="flex justify-center text-gray-400"><ArrowDown className="md:-rotate-90" /></div>
                  <div className="bg-white p-4 rounded-sm border border-gray-200 text-center shadow-sm border-l-4 border-l-accent-500">
                    <Cloud className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                    <div className="font-bold text-sm text-navy-900">CDN & WAF</div>
                    <div className="text-xs text-gray-500">Cloudflare</div>
                  </div>
                  <div className="flex justify-center text-gray-400"><ArrowDown className="md:-rotate-90" /></div>
                  <div className="bg-white p-4 rounded-sm border border-gray-200 text-center shadow-sm">
                    <div className="font-bold text-sm text-navy-900">Load Balancer</div>
                    <div className="text-xs text-gray-500">AWS ALB</div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col justify-center px-4"><ArrowRight className="w-6 h-6 text-gray-300" /></div>
                <div className="md:hidden flex justify-center py-4"><ArrowDown className="w-6 h-6 text-gray-300" /></div>

                {/* Compute Cluster */}
                <div className="w-full md:w-2/4 bg-white p-6 rounded-sm border border-navy-100 shadow-md">
                  <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <h3 className="font-bold text-navy-900 flex items-center">
                      <Server className="w-5 h-5 mr-2 text-navy-500" />
                      Kubernetes Cluster (EKS)
                    </h3>
                    <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">Auto-scaling</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-center">
                      <div className="font-bold text-sm text-blue-900">Auth Service</div>
                      <div className="text-xs text-blue-600">Node.js</div>
                    </div>
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg text-center">
                      <div className="font-bold text-sm text-green-900">Core API</div>
                      <div className="text-xs text-green-600">Spring Boot</div>
                    </div>
                    <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg text-center">
                      <div className="font-bold text-sm text-purple-900">Payment Svc</div>
                      <div className="text-xs text-purple-600">Python</div>
                    </div>
                    <div className="bg-amber-50 border border-amber-100 p-4 rounded-lg text-center">
                      <div className="font-bold text-sm text-amber-900">Worker Nodes</div>
                      <div className="text-xs text-amber-600">Background Tasks</div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col justify-center px-4"><ArrowRight className="w-6 h-6 text-gray-300" /></div>
                <div className="md:hidden flex justify-center py-4"><ArrowDown className="w-6 h-6 text-gray-300" /></div>

                {/* Data Layer */}
                <div className="w-full md:w-1/4 flex flex-col space-y-4">
                  <div className="bg-navy-900 text-white p-4 rounded-sm text-center shadow-sm">
                    <Zap className="w-6 h-6 text-red-400 mx-auto mb-2" />
                    <div className="font-bold text-sm">Redis Cache</div>
                    <div className="text-xs text-gray-400">Sub-ms reads</div>
                  </div>
                  <div className="bg-navy-900 text-white p-4 rounded-sm text-center shadow-sm">
                    <Workflow className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="font-bold text-sm">Kafka</div>
                    <div className="text-xs text-gray-400">Event streaming</div>
                  </div>
                  <div className="bg-navy-900 text-white p-4 rounded-sm text-center shadow-sm border-b-4 border-b-accent-500">
                    <Database className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                    <div className="font-bold text-sm">Primary DB</div>
                    <div className="text-xs text-gray-400">PostgreSQL (Multi-AZ)</div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-20 bg-accent-50 border-t border-accent-100 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900 mb-6">Need a scalable architecture for your next product?</h2>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Discuss Your Architecture
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Engineering;
