import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { servicesData } from '../../data/services';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.id === slug);

  if (!service) return <Navigate to="/404" />;

  return (
    <>
      <Helmet>
        <title>{service.title} | DG Technix Services</title>
      </Helmet>
      
      <div className="bg-navy-900 text-white py-24 border-b-4 border-accent-500">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/services" className="inline-flex items-center text-gray-300 mb-8 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">{service.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 prose max-w-none prose-lg prose-headings:font-heading prose-h2:text-3xl prose-h2:text-navy-900 prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:text-navy-900 prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-accent-600">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                ul: ({node: _node, ...props}) => <ul className="space-y-3 my-6 list-none pl-0" {...props} />,
                li: ({node: _node, ...props}) => (
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent-500 mr-3 mt-1 flex-shrink-0" />
                    <span {...props} />
                  </li>
                ),
                table: ({node: _node, ...props}) => (
                  <div className="overflow-x-auto my-8">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg" {...props} />
                  </div>
                ),
                th: ({node: _node, ...props}) => <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />,
                td: ({node: _node, ...props}) => <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-b border-gray-100" {...props} />
              }}
            >
              {service.content}
            </ReactMarkdown>
          </div>
          
          <div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-sm border border-gray-200 sticky top-24">
              <h2 className="text-xl font-bold text-navy-900 mb-3">Discuss Your Project</h2>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                We review requirements thoroughly, provide an explicit written scope, and establish agreed delivery milestones before development begins.
              </p>
              
              <div className="space-y-3 mb-6 text-xs text-gray-600 border-t border-b border-gray-200 py-4">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" />
                  <span>30-Minute Technical Scoping Call</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" />
                  <span>Written Functional Specification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent-600 mr-2 flex-shrink-0" />
                  <span>Defined Milestone Delivery</span>
                </div>
              </div>

              <Link to="/contact" className="block w-full btn btn-primary text-center px-6 py-3.5 rounded-sm font-semibold text-sm">
                Discuss This Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;