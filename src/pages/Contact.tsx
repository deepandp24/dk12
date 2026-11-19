import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle2, ArrowRight, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Full name is required (min 2 characters)' }),
  workEmail: z.string().email({ message: 'A valid work email is required' }),
  company: z.string().min(2, { message: 'Company or organization name is required' }),
  country: z.string().min(1, { message: 'Please select your country or region' }),
  projectType: z.array(z.string()).min(1, { message: 'Select at least one project requirement' }),
  budget: z.string().min(1, { message: 'Please select an estimated budget range' }),
  timeline: z.string().min(1, { message: 'Please select an anticipated timeline' }),
  message: z.string().min(15, { message: 'Please provide some project details (at least 15 characters)' }),
  honeypot: z.string().max(0, { message: 'Bot detected' }).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { projectType: [], honeypot: '' }
  });

  const selectedCountry = watch('country');

  const getCurrencyOptions = (country: string) => {
    switch(country) {
      case 'UK': return { symbol: '£', ranges: ['< £10K', '£10K – £25K', '£25K – £50K', '£50K+'] };
      case 'UAE': return { symbol: 'AED ', ranges: ['< 50K AED', '50K – 100K AED', '100K – 250K AED', '250K+ AED'] };
      case 'Australia': return { symbol: 'A$', ranges: ['< A$15K', 'A$15K – A$35K', 'A$35K – A$75K', 'A$75K+'] };
      case 'India': return { symbol: '₹', ranges: ['< ₹5L', '₹5L – ₹15L', '₹15L – ₹30L', '₹30L+'] };
      case 'Germany':
      case 'Europe': return { symbol: '€', ranges: ['< €10K', '€10K – €25K', '€25K – €50K', '€50K+'] };
      default: return { symbol: '$', ranges: ['< $10K', '$10K – $25K', '$25K – $50K', '$50K+'] };
    }
  };

  const currencyOptions = getCurrencyOptions(selectedCountry);

  const onSubmit = async (data: ContactFormValues) => {
    // Spam protection check
    if (data.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if real email delivery service credentials are configured
    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setErrorMessage(
        'Online submission service credentials are not yet configured in this deployment environment. Please reach out directly to support@dgtechnix.com. Your entered details have been preserved below.'
      );
      return;
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.workEmail,
          company: data.company,
          country: data.country,
          project_type: data.projectType.join(', '),
          budget: data.budget,
          timeline: data.timeline,
          message: data.message,
        },
        publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error(`Email delivery service responded with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Email dispatch failed:', error);
      setErrorMessage(
        'Unable to deliver your enquiry through the automated service at this moment. Your message details have been preserved. Please contact us directly at support@dgtechnix.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectOptions = [
    'Web Application', 'Custom Business Software', 'Backend & API Integration', 
    'Cloud Architecture', 'Mobile Application', 'Dedicated Engineering Team'
  ];

  const currentValues = getValues();
  const directMailtoHref = `mailto:support@dgtechnix.com?subject=Project%20Enquiry%20from%20${encodeURIComponent(currentValues.name || 'Website%20Visitor')}&body=${encodeURIComponent(
    `Name: ${currentValues.name || ''}\nEmail: ${currentValues.workEmail || ''}\nCompany: ${currentValues.company || ''}\nCountry: ${currentValues.country || ''}\nRequirements: ${currentValues.projectType?.join(', ') || ''}\nBudget: ${currentValues.budget || ''}\nTimeline: ${currentValues.timeline || ''}\n\nProject Details:\n${currentValues.message || ''}`
  )}`;

  return (
    <>
      <Helmet>
        <title>Discuss Your Project | DG Technix</title>
        <meta 
          name="description" 
          content="Contact DG Technix to discuss custom software development, web applications, and engineering projects." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20 relative overflow-hidden border-b-4 border-accent-500">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <span className="text-accent-400 font-bold tracking-wider uppercase text-xs mb-3 block">
            Start a Technical Conversation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium mb-6 leading-tight">
            Tell us about your project.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
            We design, develop, and deploy custom software and web applications for businesses that need dependable execution. Share your objectives, and we will arrange a technical scoping discussion.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-sm border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-8 md:p-12">
              
              {/* Error message banner */}
              {errorMessage && (
                <div className="mb-8 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-sm">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-amber-900 mb-1">Direct Contact Recommended</h4>
                      <p className="text-sm text-amber-800 leading-relaxed mb-3">{errorMessage}</p>
                      <a 
                        href={directMailtoHref} 
                        className="inline-flex items-center text-sm font-bold text-navy-900 bg-white border border-amber-300 px-3 py-1.5 rounded-sm hover:bg-amber-100 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-1.5 text-accent-600" /> Click to open email with your prefilled details
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {isSuccess ? (
                <div className="text-center py-16">
                  <div className="mx-auto w-16 h-16 bg-green-50 border border-green-200 rounded-sm flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-navy-900 mb-4">Enquiry Received</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto text-base leading-relaxed">
                    Thank you for contacting DG Technix. A technical strategist will review your requirements and reach out within one business day.
                  </p>
                  <button 
                    onClick={() => {
                      setIsSuccess(false);
                      setErrorMessage(null);
                    }}
                    className="btn btn-primary"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10" noValidate>
                  
                  {/* Honeypot hidden input for spam bots */}
                  <input 
                    type="text" 
                    {...register('honeypot')} 
                    className="hidden" 
                    tabIndex={-1} 
                    autoComplete="off" 
                  />

                  {/* 1. Contact Details */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 border-b pb-3 mb-6">1. Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          {...register('name')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors text-sm"
                          placeholder="Jane Doe"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email *</label>
                        <input
                          type="email"
                          {...register('workEmail')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors text-sm"
                          placeholder="jane@company.com"
                        />
                        {errors.workEmail && <p className="text-red-500 text-xs mt-1.5">{errors.workEmail.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company or Organization *</label>
                        <input
                          {...register('company')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors text-sm"
                          placeholder="Acme Ltd."
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1.5">{errors.company.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Country / Region *</label>
                        <select
                          {...register('country')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white text-sm"
                        >
                          <option value="">Select your region</option>
                          <option value="UK">United Kingdom</option>
                          <option value="UAE">United Arab Emirates (UAE)</option>
                          <option value="Australia">Australia</option>
                          <option value="Europe">Europe (Other)</option>
                          <option value="India">India</option>
                          <option value="USA">United States</option>
                          <option value="Other">Other Region</option>
                        </select>
                        {errors.country && <p className="text-red-500 text-xs mt-1.5">{errors.country.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* 2. Project Requirements */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 border-b pb-3 mb-6">2. Project Requirements</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {projectOptions.map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 transition-colors">
                          <input 
                            type="checkbox" 
                            value={opt} 
                            {...register('projectType')} 
                            className="w-4 h-4 text-accent-600 rounded-sm border-gray-300 focus:ring-accent-500" 
                          />
                          <span className="text-xs md:text-sm font-medium text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                    {errors.projectType && <p className="text-red-500 text-xs mt-2">{errors.projectType.message}</p>}
                  </div>

                  {/* 3. Budget & Timeline */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 border-b pb-3 mb-6">3. Scope & Timeline Expectations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Estimated Budget ({selectedCountry ? currencyOptions.symbol : '$'})
                        </label>
                        <select
                          {...register('budget')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white text-sm"
                        >
                          <option value="">Select budget range</option>
                          {currencyOptions.ranges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                        {errors.budget && <p className="text-red-500 text-xs mt-1.5">{errors.budget.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Desired Start / Delivery Timeline</label>
                        <select
                          {...register('timeline')}
                          className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors bg-white text-sm"
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediate (within 2 weeks)">Immediate (within 2 weeks)</option>
                          <option value="1–2 months">1–2 months</option>
                          <option value="2–4 months">2–4 months</option>
                          <option value="Flexible / Exploratory">Flexible / Exploratory</option>
                        </select>
                        {errors.timeline && <p className="text-red-500 text-xs mt-1.5">{errors.timeline.message}</p>}
                      </div>
                    </div>
                  </div>

                  {/* 4. Details */}
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 border-b pb-3 mb-6">4. Project Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Please describe the problem you want to solve or the system you are planning *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={5}
                        className="w-full px-4 py-3 rounded-sm border border-gray-300 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-colors text-sm"
                        placeholder="Please include details such as current bottlenecks, user roles, integrations needed, or any existing system you are modernizing..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1.5">{errors.message.message}</p>}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto btn btn-primary flex items-center justify-center text-base px-8 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting Enquiry...
                        </>
                      ) : (
                        <>
                          Submit Project Enquiry
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                      We respect your privacy. Enquiries are treated confidentially and used solely to prepare our technical proposal.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>
          
          {/* Alternative Direct Channels */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-sm border border-gray-200 flex items-start shadow-sm">
              <div className="w-12 h-12 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center mr-4 flex-shrink-0 border border-blue-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Direct Email</h4>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Prefer to email requirements or an existing RFP directly?</p>
                <a 
                  href="mailto:support@dgtechnix.com?subject=Project%20Inquiry%20-%20DG%20Technix" 
                  className="text-accent-600 font-semibold text-sm hover:underline"
                >
                  support@dgtechnix.com &rarr;
                </a>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-sm border border-gray-200 flex items-start shadow-sm">
              <div className="w-12 h-12 rounded-sm bg-orange-50 text-accent-600 flex items-center justify-center mr-4 flex-shrink-0 border border-orange-100">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Customer & Tech Support</h4>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">Dedicated support desk for technical inquiries, active projects, and SLA support.</p>
                <a 
                  href="mailto:support@dgtechnix.com?subject=Support%20Enquiry%20-%20DG%20Technix" 
                  className="text-accent-600 font-semibold text-sm hover:underline"
                >
                  support@dgtechnix.com &rarr;
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
