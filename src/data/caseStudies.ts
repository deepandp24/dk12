import { z } from 'zod';

export const caseStudySchema = z.object({
  slug: z.string(),
  category: z.enum(['client', 'product', 'concept']),
  categoryLabel: z.string(),
  status: z.string(),
  clientName: z.string(),
  industry: z.string(),
  services: z.array(z.string()),
  region: z.string(),
  heroImage: z.string(),
  summary: z.string(),
  challenge: z.string(),
  companyRole: z.string(),
  approach: z.array(z.object({ title: z.string(), description: z.string() })),
  techStack: z.array(z.string()),
  featuresDelivered: z.array(z.string()),
  plannedFeatures: z.array(z.string()).optional(),
  liveUrl: z.string().optional(),
  results: z.array(z.object({ metric: z.string(), label: z.string() })).optional(),
  testimonial: z.object({ quote: z.string(), author: z.string(), role: z.string() }).optional(),
  gallery: z.array(z.string()),
  timeline: z.string(),
  relatedCaseStudies: z.array(z.string()),
});

export type CaseStudy = z.infer<typeof caseStudySchema>;

export const caseStudies: CaseStudy[] = [
  // =========================================================================
  // CATEGORY 1: CLIENT PROJECTS
  // =========================================================================
  {
    slug: 'purple-squad',
    category: 'client',
    categoryLabel: 'Client Project',
    status: 'Live Client Delivery',
    clientName: 'Purple Squad',
    industry: 'Home Services / On-Demand Booking',
    services: ['Responsive Web Development', 'Service Discovery UX', 'Pricing Architecture', 'Frontend Engineering'],
    region: 'Chennai, India',
    liveUrl: 'https://purplesquad.in/',
    heroImage: '/portfolio/Purple_Squad.png',
    summary: 'A customer-facing web platform for a Chennai-based on-demand home services business, built to make category discovery effortless and pricing completely transparent.',
    challenge: 'Home service platforms frequently lose customers when service options are poorly organized and pricing requires tedious back-and-forth phone calls. Purple Squad needed a high-performance web experience that clearly showcases available maintenance categories (AC servicing, electrical, plumbing, deep cleaning) with upfront pricing and simple scheduling.',
    companyRole: 'DG Technix designed and developed the customer-facing website and service-booking journey, focusing on mobile responsiveness, transparent pricing matrices, and intuitive service taxonomy. (Backend CRM handoffs and technician dispatch operations are managed directly by Purple Squad’s operational team).',
    approach: [
      { title: 'Taxonomy & Visual Category Funnel', description: 'Engineered a visual service catalog that allows homeowners to locate specific repairs (AC maintenance, appliance repair, deep cleaning) within two clicks.' },
      { title: 'Transparent Pricing Matrices', description: 'Replaced opaque quote requests with clear, upfront package tiers and detailed inclusions to eliminate customer hesitation.' },
      { title: 'Mobile-First Scheduling Flow', description: 'Structured a step-by-step appointment request flow allowing customers to choose preferred time slots and enter service addresses with zero cognitive overload.' },
      { title: 'Seasonal Intent Layouts', description: 'Optimized key viewport real estate to feature seasonal maintenance priorities (such as summer AC cleaning) directly on the landing page.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'PostgreSQL'],
    featuresDelivered: [
      'Multi-category home services catalog with visual icons',
      'Transparent package pricing with itemized service inclusions',
      'Mobile-responsive appointment time-slot selection flow',
      'Direct WhatsApp and phone consultation integration for urgent queries',
      'Fast client-side routing and sub-second page transitions'
    ],
    results: [
      { metric: 'Discovery', label: 'Zero-friction navigation across 15+ specialized home service categories.' },
      { metric: 'Clarity', label: 'Upfront pricing tiers eliminating quote negotiation drop-offs.' }
    ],
    gallery: [
      '/portfolio/Purple_Squad.png',
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80'
    ],
    timeline: 'Completed & Live',
    relatedCaseStudies: ['organivaa', 'grf-growths', 'gad-growths']
  },
  {
    slug: 'organivaa',
    category: 'client',
    categoryLabel: 'Client Project',
    status: 'Live Client Delivery',
    clientName: 'Organivaa',
    industry: 'Natural Wellness & Ayurvedic E-Commerce',
    services: ['E-Commerce Storefront Development', 'Next.js Frontend Engineering', 'Product Catalog & Cart UX', 'Secure Payment Flow'],
    region: 'India / Global',
    liveUrl: 'https://organivaa.netlify.app/',
    heroImage: '/portfolio/Organivaa.png',
    summary: 'A clean, modern botanical e-commerce web platform engineered for Organivaa to showcase natural, Ayurvedic, and herbal wellness products with a serene user journey.',
    challenge: 'Ayurvedic and organic wellness brands require an online storefront that communicates pure natural ingredients, authentic herbal formulations, and chemical-free standards, while delivering a frictionless purchasing journey with instant mobile responsiveness.',
    companyRole: 'DG Technix designed the soothing botanical interface and engineered the high-performance e-commerce platform, implementing categorized wellness discovery, responsive product cards, cart state management, and direct order workflows.',
    approach: [
      { title: 'Botanical & Minimalist Design System', description: 'Created an earth-toned, organic aesthetic emphasizing purity, 100% natural ingredients, and authentic Ayurvedic heritage.' },
      { title: 'Responsive Product Showcase', description: 'Designed high-fidelity product cards featuring benefits, botanical origins, and easy cart additions across mobile and desktop.' },
      { title: 'Seamless Cart & Order Architecture', description: 'Engineered an intuitive shopping cart with dynamic order totals, secure checkout integration, and delivery tracking.' },
      { title: 'High-Performance Static Generation', description: 'Optimized Next.js page generation and responsive image delivery to achieve instant page transitions under mobile networks.' }
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe / Payment Gateway'],
    featuresDelivered: [
      'Botanical e-commerce storefront with high-resolution visual lookbook',
      'Categorized natural and herbal product catalog with itemized health benefits',
      'Mobile-optimized shopping cart with instant quantity adjustments',
      'Secure checkout flow with order tracking and customer support links',
      'Sub-second page rendering and clean mobile navigation'
    ],
    results: [
      { metric: 'Live Storefront', label: 'Deployed and active at organivaa.netlify.app with instant mobile rendering.' },
      { metric: 'Brand Clarity', label: 'Articulates herbal wellness benefits through a serene botanical shopping journey.' }
    ],
    gallery: [
      '/portfolio/Organivaa.png'
    ],
    timeline: 'Completed & Live',
    relatedCaseStudies: ['purple-squad', 'linksync', 'gad-growths']
  },
  {
    slug: 'grf-growths',
    category: 'client',
    categoryLabel: 'Client Project',
    status: 'Live Client Delivery',
    clientName: 'GRF Growths',
    industry: 'Poultry & Agriculture',
    services: ['Web Design & Development', 'Breed & Product Catalogue', 'Mobile Optimization', 'Enquiry Funnels'],
    region: 'Tamil Nadu, India',
    liveUrl: 'https://grfgrowths.netlify.app/',
    heroImage: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80',
    summary: 'A dedicated web presentation and breed catalogue for an agricultural and poultry enterprise, engineered to establish professional credibility and drive commercial enquiries.',
    challenge: 'Agricultural producers often rely on word-of-mouth and fragmented messaging to sell livestock and farm produce. GRF Growths needed an accessible, professional digital profile to showcase their poultry breeds, farm hygiene standards, and supply capabilities to regional commercial buyers and partners.',
    companyRole: 'End-to-end design and frontend development. DG Technix structured the digital narrative, built the responsive product catalogue, and integrated direct telephone and WhatsApp contact points for fast customer enquiry response.',
    approach: [
      { title: 'Information Hierarchy', description: 'Structured the site to guide potential commercial buyers through farm standards, available breeds, and supply specifications.' },
      { title: 'Product & Breed Presentation', description: 'Created clean visual cards highlighting livestock health, feed quality, and ordering information.' },
      { title: 'Direct Contact Integration', description: 'Placed accessible click-to-WhatsApp and phone enquiry channels prominently to meet the communication preferences of agricultural buyers.' },
      { title: 'Lightweight Static Engineering', description: 'Engineered a lightweight static site bundle that loads near-instantly even on low-bandwidth rural mobile networks.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    featuresDelivered: [
      'Comprehensive breed and livestock inventory presentation',
      'Operational hygiene and farm standards documentation section',
      'Click-to-chat WhatsApp enquiry buttons for immediate commercial discussions',
      'High-contrast, mobile-friendly interface tested across low-end mobile devices'
    ],
    results: [
      { metric: 'Credibility', label: 'Replaced informal word-of-mouth with a verified digital brand presence.' },
      { metric: 'Accessibility', label: 'Sub-second mobile loading across rural 3G/4G network conditions.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1535090467336-9501f96eef89?auto=format&fit=crop&q=80'
    ],
    timeline: 'Completed & Live',
    relatedCaseStudies: ['purple-squad', 'gad-growths']
  },
  {
    slug: 'gad-growths',
    category: 'client',
    categoryLabel: 'Client Project',
    status: 'Live Client Delivery',
    clientName: 'GAD Growths',
    industry: 'Digital Marketing & Growth Consulting',
    services: ['B2B Web Development', 'Positioning Strategy', 'Conversion Architecture', 'Responsive Design'],
    region: 'International / UAE Focus',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    summary: 'A conversion-focused B2B website presenting growth strategy, SEO, paid media, and CRM integration as one unified commercial growth engine.',
    challenge: 'Consulting agencies struggle when their website treats marketing services as isolated deliverables rather than a connected growth strategy. GAD Growths needed a website that articulates their holistic approach to enterprise acquisition and guides decision-makers directly toward booking discovery sessions.',
    companyRole: 'DG Technix developed the responsive B2B website, implementing clean visual typography, service pillar architecture, and an inquiry funnel aligned with international B2B buyer expectations.',
    approach: [
      { title: 'System-Level Positioning', description: 'Organized content around an interconnected growth system rather than disconnected vendor tasks.' },
      { title: 'Structured Conversion Journey', description: 'Guided visitors from understanding business challenges to reviewing execution methodologies and scheduling calls.' },
      { title: 'International Visual Aesthetic', description: 'Delivered clean, high-contrast typography and subtle interactions appropriate for corporate decision-makers.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    featuresDelivered: [
      'Interactive growth methodology and service pillar navigation',
      'Corporate discovery call booking workflow',
      'Responsive B2B layout optimized for tablet and desktop review'
    ],
    results: [
      { metric: 'Positioning', label: 'Elevated presentation from commodity marketing to strategic growth consultancy.' },
      { metric: 'Clarity', label: 'Structured funnel guiding corporate decision-makers directly to discovery calls.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
    ],
    timeline: 'Completed & Live',
    relatedCaseStudies: ['purple-squad', 'linksync']
  },

  // =========================================================================
  // CATEGORY 2: PRODUCTS BY DG TECHNIX
  // =========================================================================
  {
    slug: 'linksync',
    category: 'product',
    categoryLabel: 'Product by DG Technix',
    status: 'Live MVP',
    clientName: 'LinkSync',
    industry: 'Creator Tools & Bio-Link SaaS',
    services: ['In-House SaaS Product Engineering', 'Product Strategy', 'UI/UX Design', 'Cloud Hosting'],
    region: 'Global Product',
    liveUrl: 'https://linksynk.vercel.app/',
    heroImage: '/portfolio/LinkSync.png',
    summary: 'A lightweight bio-link SaaS MVP engineered by DG Technix to let creators, founders, and businesses consolidate links, customize themes, and collect visitor leads on a single fast page.',
    challenge: 'Standard link-in-bio services have become overloaded with bloated tracking scripts, slow loading times, and expensive paywalls for basic visual customization. DG Technix engineered LinkSync as an in-house product to provide a streamlined, high-speed alternative.',
    companyRole: 'DG Technix is the creator and owner of LinkSync. We handled end-to-end product architecture, UI/UX design, frontend development, and serverless hosting on Vercel.',
    approach: [
      { title: 'Ultra-Fast Page Generation', description: 'Engineered server-rendered profile pages to ensure instant load times when opened within mobile social media in-app browsers.' },
      { title: 'Custom Theme Engine', description: 'Built an interactive visual theme editor allowing creators to tailor button styles, gradient backgrounds, and fonts.' },
      { title: 'Dynamic Link Management', description: 'Designed a simple management interface for reordering priority links, embedding social icons, and capturing visitor leads.' }
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    featuresDelivered: [
      'Customizable public bio-link profile page with custom avatar and bio banner',
      'Dynamic social media icon linking (YouTube, Instagram, LinkedIn, X, GitHub, WhatsApp)',
      'Lead capture forms and contact enquiry integration',
      'Mobile-first responsive presentation optimized for in-app webviews',
      'Analytics and click telemetry dashboard'
    ],
    plannedFeatures: [
      'Real-time link click analytics and referrer tracking dashboard',
      'Custom domain (CNAME) routing support',
      'Newsletter lead capture email forms'
    ],
    results: [
      { metric: 'Live MVP', label: 'Deployed and active at linksynk.vercel.app with instant mobile rendering.' },
      { metric: 'Performance', label: 'Near-instant page loads under mobile in-app browser webviews.' }
    ],
    gallery: [
      '/portfolio/LinkSync.png'
    ],
    timeline: 'Live MVP / Active Iteration',
    relatedCaseStudies: ['dgbill', 'zylinn-ai', 'dgstaff']
  },
  {
    slug: 'dgbill',
    category: 'product',
    categoryLabel: 'Product by DG Technix',
    status: 'Beta / Active Development',
    clientName: 'BillNow / DG Bill',
    industry: 'Financial Software / Billing & Inventory SaaS',
    services: ['In-House SaaS Product', 'Financial Software Architecture', 'Inventory Systems', 'GST Invoicing Engine'],
    region: 'India & Global MSMEs',
    heroImage: '/portfolio/BillNow_DG Bill.png',
    summary: 'A simple and powerful billing and inventory management solution engineered by DG Technix for small and medium businesses to manage GST invoicing, stock levels, and sales analytics.',
    challenge: 'Small businesses often outgrow manual spreadsheets but cannot justify the steep learning curves and high monthly costs of enterprise ERP platforms. BillNow / DG Bill provides structured, predictable invoicing and stock control without administrative complexity.',
    companyRole: 'In-house product development. DG Technix architects the data schema, designs the UI/UX dashboard, and builds the invoice generation, inventory tracking, and calculation engine.',
    approach: [
      { title: 'GST-Compliant Invoicing Engine', description: 'Implemented calculation routines for HSN codes, multi-slab GST rates, line-item discounts, and auto-computed totals.' },
      { title: 'Integrated Inventory & Stock Control', description: 'Connected billing directly to warehouse inventory levels to update stock balances automatically upon invoice issuance.' },
      { title: 'Customer & Supplier Management', description: 'Structured relational records tracking client credit limits, pending payment balances, and supplier purchase orders.' },
      { title: 'Multi-Device Responsiveness', description: 'Engineered responsive interfaces optimized for desktop billing counters, tablets, and mobile owner oversight.' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
    featuresDelivered: [
      'GST invoicing engine with instant PDF preview and download',
      'Real-time inventory and stock tracking with low-stock alerts',
      'Customer and supplier ledger management with overdue reminders',
      'Comprehensive sales reports, revenue trends, and tax analytics',
      'Multi-device responsive access across desktop, tablet, and mobile'
    ],
    plannedFeatures: [
      'Stripe & Razorpay payment links embedded directly in issued invoices',
      'Automated email and WhatsApp reminders for unpaid balances',
      'Financial overview dashboard with monthly revenue metrics'
    ],
    results: [
      { metric: 'Status', label: 'Active Beta version undergoing internal workflow testing and validation.' },
      { metric: 'Capabilities', label: 'GST invoicing, inventory control, and multi-device management in one unified portal.' }
    ],
    gallery: [
      '/portfolio/BillNow_DG Bill.png'
    ],
    timeline: 'Product Beta in Development',
    relatedCaseStudies: ['linksync', 'zylinn-ai', 'dgstaff']
  },
  {
    slug: 'dgstaff',
    category: 'product',
    categoryLabel: 'Product by DG Technix',
    status: 'In Active Development',
    clientName: 'DG Staff',
    industry: 'HRTech / Internal Management Software',
    services: ['In-House Product Engineering', 'Workflow Automation', 'Role-Based Access Control', 'UI/UX Design'],
    region: 'Internal / Multi-Market',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    summary: 'A modular HRMS and employee management platform engineered to streamline employee directories, leave requests, attendance tracking, and internal team operations.',
    challenge: 'Early-stage and growing companies often coordinate leave, attendance, and team directories across informal chat apps and spreadsheets, leading to scheduling conflicts and lost records. DG Technix is engineering DG Staff to provide a centralized internal console.',
    companyRole: 'DG Technix is designing and building DG Staff as a proprietary internal tool and upcoming SaaS platform for agile teams.',
    approach: [
      { title: 'Role-Based Permission Matrix', description: 'Engineered granular access levels ensuring employees, managers, and administrators see only appropriate operational data.' },
      { title: 'Leave Approval Workflow', description: 'Designed a multi-stage request and approval system with automated status notifications.' },
      { title: 'Department Hierarchy Mapping', description: 'Structured visual organization charts mapping reporting structures across technical pods.' }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    featuresDelivered: [
      'Centralized employee directory with role definitions and contact records',
      'Leave request submission and manager approval status tracking',
      'Department mapping and reporting hierarchy views',
      'Role-based dashboard views (Admin, Manager, Employee)'
    ],
    plannedFeatures: [
      'Automated monthly attendance report generation',
      'Payroll calculation integration and payslip generation modules',
      'Slack and email notification webhooks'
    ],
    results: [
      { metric: 'Build Phase', label: 'Core directory and leave workflows built; currently testing approval cycles.' },
      { metric: 'Design', label: 'Clean, role-based dashboard interface reducing administrative overhead.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'
    ],
    timeline: 'Product in Active Development',
    relatedCaseStudies: ['dgbill', 'zylinn-ai']
  },
  {
    slug: 'zylinn-ai',
    category: 'product',
    categoryLabel: 'Product by DG Technix',
    status: 'Beta / Active Iteration',
    clientName: 'Zylinn AI',
    industry: 'Multilingual AI Voice Agents & Conversational AI',
    services: ['AI Voice Agent Development', 'Conversational AI Architecture', 'Telephony & WebRTC Integration', 'CRM & WhatsApp Automation'],
    region: 'Global / Multi-Language',
    heroImage: '/portfolio/Zylinn_AI.png',
    summary: 'AI-powered multilingual voice agents engineered by DG Technix for automated customer support, lead qualification, appointments, and business automation.',
    challenge: 'Businesses lose qualified leads and face mounting customer support costs when constrained by standard office hours and manual call agents. Traditional phone trees (IVRs) frustrate users with rigid menus. Zylinn AI delivers conversational voice agents capable of understanding natural speech, regional accents, and business context.',
    companyRole: 'DG Technix is architecting and building Zylinn AI as an in-house voice intelligence product, developing real-time audio pipelines, multilingual language understanding, CRM webhooks, and analytics dashboards.',
    approach: [
      { title: 'Sub-Second Voice Processing', description: 'Engineered real-time speech pipelines and WebRTC bridges for human-speed conversational turn-taking.' },
      { title: 'Trilingual Regional Intelligence', description: 'Trained and tuned voice agents to converse fluently in Tamil, English, and Hindi for regional and international enterprise users.' },
      { title: 'Automated CRM & WhatsApp Handoffs', description: 'Integrated bidirectional sync with CRMs, auto-booking calendar slots and triggering instant WhatsApp appointment confirmations.' },
      { title: 'Executive Analytics & Transcripts', description: 'Built an interactive dashboard capturing full call recordings, transcripts, sentiment summaries, and conversion rates.' }
    ],
    techStack: ['Python', 'FastAPI', 'WebRTC', 'OpenAI Realtime API', 'Twilio / SIP', 'PostgreSQL', 'React', 'Tailwind CSS'],
    featuresDelivered: [
      'Inbound and outbound automated voice call handling',
      'Multilingual voice support across Tamil, English, and Hindi',
      'Real-time call transcription, intelligent summaries, and sentiment analytics',
      'Direct CRM integration and appointment scheduling',
      'Automated WhatsApp follow-up and confirmation notifications',
      'Centralized web dashboard for live monitoring, call logs, and agent analytics'
    ],
    plannedFeatures: [
      'Additional regional language models (Telugu, Kannada, Malayalam)',
      'Custom brand voice cloning for enterprise clients',
      'Automated outbound campaign dialer with smart cadence logic'
    ],
    results: [
      { metric: 'Voice AI Beta', label: 'Functional voice agents live in testing across Tamil, English, and Hindi.' },
      { metric: 'Automation', label: 'Direct post-call sync to CRM pipelines and WhatsApp confirmation triggers.' }
    ],
    gallery: [
      '/portfolio/Zylinn_AI.png'
    ],
    timeline: 'Active Beta Iteration',
    relatedCaseStudies: ['dgbill', 'linksync']
  },

  // =========================================================================
  // CATEGORY 3: CONCEPTS AND PROJECTS IN DEVELOPMENT
  // =========================================================================
  {
    slug: 'cavve',
    category: 'concept',
    categoryLabel: 'Concept / In Development',
    status: 'In Development',
    clientName: 'CAVVE Premium Fashion',
    industry: 'E-Commerce & Retail / Premium Fashion',
    services: ['E-Commerce Storefront Development', 'UI/UX Design System', 'Product Catalog Architecture'],
    region: 'International E-Commerce',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
    summary: 'A premium fashion e-commerce platform currently in active development, engineered with editorial aesthetics, collection lookbooks, and an immersive catalog browsing experience.',
    challenge: 'High-end apparel brands need storefronts that feel like an editorial publication rather than a crowded generic marketplace. CAVVE is designed to balance visual storytelling with fast, frictionless mobile shopping.',
    companyRole: 'DG Technix is designing the brand identity system, crafting the responsive storefront UI, and architecting the headless product catalog schema.',
    approach: [
      { title: 'Editorial Typography & Spacing', description: 'Implemented a bespoke typography scale, high-resolution imagery aspect ratios, and minimal distraction layouts.' },
      { title: 'Visual Collection Filtering', description: 'Designed intuitive category, size, and seasonal collection navigation allowing shoppers to browse apparel effortlessly.' },
      { title: 'Fast Client-Side Experience', description: 'Built on React and Vite with optimized image lazy-loading to ensure rapid browsing across lookbook galleries.' }
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Headless API Design'],
    featuresDelivered: [
      'Editorial lookbook and collection showcase layout',
      'Responsive product grid with high-resolution imagery support',
      'Filterable catalog by collection, size, and category',
      'Mobile-optimized navigation and touch-friendly product carousels'
    ],
    plannedFeatures: [
      'Production checkout and payment gateway integration (Stripe / Razorpay)',
      'Real-time inventory reservation and warehouse sync backend',
      'User customer accounts and order tracking dashboard'
    ],
    results: [
      { metric: 'Status', label: 'Storefront UI & design system completed; backend checkout currently in active engineering.' },
      { metric: 'Design', label: 'Modern luxury aesthetic with balanced mobile-first navigation.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80'
    ],
    timeline: 'Active Development',
    relatedCaseStudies: ['commerce-platform-concept', 'linksync']
  },
  {
    slug: 'fleet-tracking-platform',
    category: 'concept',
    categoryLabel: 'Architecture Blueprint',
    status: 'Architecture Blueprint',
    clientName: 'Fleet & Dispatch Management Portal',
    industry: 'Logistics & Supply Chain',
    services: ['System Architecture', 'Custom Business Software', 'API Integration', 'UI/UX Design'],
    region: 'Global Architecture Concept',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    summary: 'An illustrative architecture blueprint demonstrating how a centralized web console connects GPS feeds, driver dispatch workflows, and inventory records into an auditable operational dashboard.',
    challenge: 'Mid-sized logistics operations frequently struggle with dispatchers managing vehicle status across disjointed spreadsheets, phone calls, and isolated GPS tools. This concept outlines our methodology for centralizing real-time operational status into an auditable web application.',
    companyRole: 'Architectural blueprint and prototype UI design illustrating DG Technix’s approach to operations software.',
    approach: [
      { title: 'Workflow Mapping', description: 'Mapped dispatcher decision trees to understand where communication delays and misallocations occur during peak delivery hours.' },
      { title: 'Unified Operational Console', description: 'Designed a consolidated dashboard with interactive map views, vehicle statuses, and route history.' },
      { title: 'API Integration Design', description: 'Architected secure RESTful endpoints connecting GPS telemetry feeds directly to inventory and order records in PostgreSQL.' },
      { title: 'Role-Based Permissions', description: 'Structured granular access controls for dispatchers, fleet managers, and warehouse supervisors.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Leaflet'],
    featuresDelivered: [
      'Interactive dispatch dashboard prototype with simulated vehicle markers',
      'Vehicle status filtering (In Transit, Loading, Idle, Maintenance)',
      'Route history inspection and timestamped milestone logs'
    ],
    plannedFeatures: [
      'Live WebSocket telematics streaming for production GPS hardware',
      'Automated SMS dispatch notification webhooks for delivery recipients'
    ],
    results: [
      { metric: 'Concept', label: 'Provides a concrete architectural reference for mid-market fleet operators.' },
      { metric: 'Architecture', label: 'Modular microservice blueprint ready for high-throughput telematics ingestion.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
    ],
    timeline: 'Architecture Blueprint',
    relatedCaseStudies: ['commerce-platform-concept', 'purple-squad']
  },
  {
    slug: 'commerce-platform-concept',
    category: 'concept',
    categoryLabel: 'Architecture Blueprint',
    status: 'Architecture Blueprint',
    clientName: 'Connected Commerce & Inventory Workflow',
    industry: 'Retail & E-Commerce',
    services: ['Custom Business Software', 'Backend & API Integrations', 'Database Architecture'],
    region: 'Global Architecture Concept',
    heroImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80',
    summary: 'An illustrative architecture blueprint demonstrating how headless storefronts, central inventory databases, and payment workflows synchronize without manual data re-entry.',
    challenge: 'Retail businesses that outgrow standard storefronts often suffer from inventory discrepancies between physical stock and online channels, requiring tedious manual reconciliation and leading to order fulfillment delays.',
    companyRole: 'System design and data schema blueprint created by DG Technix to guide custom retail software builds.',
    approach: [
      { title: 'Domain Modeling', description: 'Mapped entity relationships between products, warehouse stock levels, payment intents, and fulfillment states.' },
      { title: 'Event-Driven Synchronization', description: 'Outlined webhook-based syncing between payment gateways and inventory allocation services to eliminate stock over-selling.' },
      { title: 'Modular Backend APIs', description: 'Designed documented REST endpoints decoupling frontend customer experience from underlying database logic.' },
      { title: 'Audit & Reconciliation', description: 'Created transactional logs to trace every price adjustment and inventory mutation.' }
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Tailwind CSS'],
    featuresDelivered: [
      'Headless inventory allocation schema blueprint',
      'Multi-warehouse stock reservation logic flowcharts',
      'Payment intent webhook error-handling specifications'
    ],
    plannedFeatures: [
      'Multi-currency automated settlement reporting',
      'Barcode scanner mobile integration endpoints'
    ],
    results: [
      { metric: 'Integrity', label: 'Architectural blueprint preventing overselling via atomic stock reservations.' },
      { metric: 'Modularity', label: 'Decoupled storefront enabling independent UI refreshes and API scaling.' }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'
    ],
    timeline: 'Architecture Blueprint',
    relatedCaseStudies: ['cavve', 'fleet-tracking-platform']
  }
];
