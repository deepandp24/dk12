import React from 'react';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../../components/ui/FadeIn';
import { Shield, Lock, Server, FileText, CheckCircle, Database } from 'lucide-react';

const Security = () => {
  return (
    <>
      <Helmet>
        <title>Security & Privacy | DG Technix</title>
        <meta name="description" content="How DG Technix engineers approach security, data privacy, and GDPR considerations for enterprise applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden border-b-4 border-accent-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Security & Privacy by Design</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For businesses operating in Europe, the Middle East, and globally, data protection isn't an afterthought. Our development practices are designed with strict data privacy considerations and modern security architectures in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full">
                <Shield className="w-10 h-10 text-accent-600 mb-6" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">GDPR-Aware Development</h3>
                <p className="text-gray-600">
                  We build systems assuming strict regulatory environments. From user consent tracking to "right to be forgotten" deletion cascades, our database schemas and APIs are prepared for international compliance.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full">
                <Database className="w-10 h-10 text-accent-600 mb-6" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Data Minimization</h3>
                <p className="text-gray-600">
                  We architect products to collect and retain only the data absolutely necessary for functionality, reducing your liability and simplifying your privacy policy obligations.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 h-full">
                <Lock className="w-10 h-10 text-accent-600 mb-6" />
                <h3 className="text-xl font-bold text-navy-900 mb-4">Encryption Standard</h3>
                <p className="text-gray-600">
                  All systems utilize TLS 1.3 for data in transit and AES-256 for data at rest. Sensitive PII is separated, salted, and hashed using industry-standard cryptography (bcrypt/Argon2).
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Infrastructure Security */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Secure Infrastructure</h2>
            <p className="text-gray-300 text-lg">
              We deploy to enterprise-grade cloud environments configured to lock down access and prevent unauthorized lateral movement.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <FadeIn delay={0.2} className="flex space-x-6">
              <div className="flex-shrink-0">
                <Server className="w-8 h-8 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">VPC & Network Isolation</h3>
                <p className="text-gray-400">Database and cache layers are strictly isolated in private subnets with no public internet access, reachable only by authenticated application services.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex space-x-6">
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Identity & Access (IAM)</h3>
                <p className="text-gray-400">We utilize Role-Based Access Control (RBAC) and strict IAM policies adhering to the principle of least privilege for both application users and cloud services.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="flex space-x-6">
              <div className="flex-shrink-0">
                <FileText className="w-8 h-8 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Audit Logging</h3>
                <p className="text-gray-400">Critical system actions, administrative changes, and data mutations are logged comprehensively to support compliance auditing and rapid incident response.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} className="flex space-x-6">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-accent-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Automated Backups</h3>
                <p className="text-gray-400">Robust backup strategies with Point-in-Time Recovery (PITR) ensure business continuity and guard against catastrophic data loss or ransomware.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;
