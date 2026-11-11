/**
 * Centralized Site Configuration & Metadata
 * Viseshta Group / Viseshta Avenues Monolithic Application
 */

export const siteConfig = {
  name: 'Viseshta Avenues',
  legalName: 'Viseshta Group',
  tagline: 'Architecture, Luxury Residences & Grade-A Commercial Assets',
  foundedYear: 2018,
  incorporatedYear: 2014,
  headquarters: 'Hyderabad, Telangana, India',
  phone: '+91 91000 24000',
  phoneRaw: '+919100024000',
  whatsappUrl: 'https://wa.me/919100024000',
  email: 'invest@viseshta.com',
  careersEmail: 'careers@viseshta.com',
  supportEmail: 'contact@viseshta.com',
  
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Properties', path: '/properties' },
    { label: 'Developments', path: '/developments' },
    { label: 'Locations', path: '/locations' },
    { label: 'Journal', path: '/journal' },
    { label: 'About', path: '/about' }
  ],

  projects: [
    {
      id: 'invesmart',
      title: 'Invesmart Commercial',
      location: 'Madhapur / HITEC City, Hyderabad',
      type: 'Grade-A IT & Corporate Hub',
      path: '/invesmart',
      status: 'Ongoing'
    },
    {
      id: 'palm-valley',
      title: 'Palm Valley',
      location: 'Moinabad / Chevella Corridor',
      type: 'Ultra-Luxury Villa Plots',
      path: '/palm-valley',
      status: 'Ongoing'
    },
    {
      id: 'teak-village',
      title: 'Teak Village',
      location: 'Shankarpally Growth Corridor',
      type: 'Managed Teak Farmlands',
      path: '/teak-village',
      status: 'Ongoing'
    },
    {
      id: 'vistara-valley',
      title: 'Vistara Valley',
      location: 'Near Shamshabad RGI Airport',
      type: 'HMDA & RERA Approved Open Plots',
      path: '/vistara-valley',
      status: 'Ongoing'
    }
  ]
};

export default siteConfig;
