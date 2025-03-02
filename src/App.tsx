import React, { useState } from 'react';
import { 
  Briefcase, 
  Megaphone, 
  BarChart, 
  Award, 
  Code, 
  Mail, 
  ChevronDown, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                {/* <Briefcase className="h-8 w-8 text-blue-400 mr-2" /> */}
                <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Marketer</span>
              </a>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#services" className="text-white hover:text-blue-400 transition-colors duration-300">Services</a>
              <a href="#features" className="text-white hover:text-blue-400 transition-colors duration-300">Features</a>
              <a href="#experience" className="text-white hover:text-blue-400 transition-colors duration-300">Experience</a>
              <a href="#skills" className="text-white hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-white">Contact</a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300">Home</a>
              <a href="#services" className="block px-3 py-2 rounded-md text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300">Services</a>
              <a href="#features" className="block px-3 py-2 rounded-md text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300">Features</a>
              <a href="#experience" className="block px-3 py-2 rounded-md text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300">Experience</a>
              <a href="#skills" className="block px-3 py-2 rounded-md text-white hover:bg-blue-500/20 hover:text-blue-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Header Section */}
      <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
            alt="Digital Marketing Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <img 
                src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital Marketing Professional" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Digital Marketing Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transforming brands through strategic digital marketing solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-full bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Our Portfolio
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to elevate your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-10 h-10 text-blue-400" />,
                title: "Social Media Marketing",
                description: "Strategic campaigns across platforms to boost engagement and brand awareness."
              },
              {
                icon: <BarChart className="w-10 h-10 text-purple-400" />,
                title: "SEO Optimization",
                description: "Data-driven strategies to improve search rankings and organic traffic."
              },
              {
                icon: <Target className="w-10 h-10 text-pink-400" />,
                title: "PPC Advertising",
                description: "Targeted paid campaigns to drive conversions and maximize ROI."
              },
              {
                icon: <Users className="w-10 h-10 text-green-400" />,
                title: "Content Marketing",
                description: "Compelling content creation that resonates with your target audience."
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-yellow-400" />,
                title: "Analytics & Reporting",
                description: "Comprehensive insights to track performance and optimize strategies."
              },
              {
                icon: <Zap className="w-10 h-10 text-red-400" />,
                title: "Brand Strategy",
                description: "Holistic approach to positioning your brand for market success."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our approach combines creativity, data, and strategy for exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 p-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-slate-900 p-8 rounded-lg h-full">
                <Sparkles className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Data-Driven Approach</h3>
                <p className="text-gray-300 mb-6">
                  We leverage advanced analytics and market insights to craft strategies that deliver measurable results. Our decisions are backed by data, ensuring optimal performance for your campaigns.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                    Comprehensive performance tracking
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                    Audience behavior analysis
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                    Conversion optimization
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 p-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="bg-slate-900 p-8 rounded-lg h-full">
                <Target className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Strategic Execution</h3>
                <p className="text-gray-300 mb-6">
                  Our team develops customized strategies aligned with your business goals. We focus on creating cohesive campaigns that resonate with your target audience and drive meaningful engagement.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    Tailored marketing plans
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    Cross-channel integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    Agile campaign management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A track record of success across industries and challenges
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                year: "2020 - Present",
                role: "Digital Marketing Lead",
                company: "Global Tech Brands",
                description: "Spearheaded comprehensive digital marketing strategies for Fortune 500 tech companies, resulting in 45% increase in qualified leads and 32% growth in conversion rates."
              },
              {
                year: "2018 - 2020",
                role: "Social Media Strategist",
                company: "Creative Agency Collective",
                description: "Developed innovative social media campaigns for lifestyle and retail brands, achieving 3x engagement growth and establishing strong brand identities across platforms."
              },
              {
                year: "2016 - 2018",
                role: "SEO Specialist",
                company: "Digital Growth Partners",
                description: "Implemented data-driven SEO strategies for e-commerce clients, resulting in 65% increase in organic traffic and first-page rankings for competitive keywords."
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="relative pl-8 md:pl-0 group"
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10 shadow-lg group-hover:scale-150 transition-transform duration-300"></div>
                {index !== 2 && <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/50 to-purple-600/50"></div>}
                
                <div className="md:grid md:grid-cols-7 items-center">
                  <div className="md:col-span-2 mb-4 md:mb-0 md:text-right md:pr-12">
                    <span className="text-sm font-semibold text-gray-400">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  
                  <div className="md:col-span-5 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 group-hover:border-blue-500/50 shadow-lg transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Our Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert capabilities that drive your digital marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {[
                { name: "Social Media Marketing", percentage: 95 },
                { name: "SEO & Content Strategy", percentage: 90 },
                { name: "PPC & Paid Advertising", percentage: 85 },
                { name: "Email Marketing", percentage: 88 }
              ].map((skill, index) => (
                <div key={index} className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left transition-transform duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%`, transform: 'scaleX(0)', animationFillMode: 'forwards' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Google Analytics", icon: <BarChart className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Facebook Ads", icon: <Users className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Google Ads", icon: <Target className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Content Creation", icon: <Sparkles className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Email Platforms", icon: <Mail className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "SEO Tools", icon: <Code className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Data Analysis", icon: <TrendingUp className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> },
                { name: "Brand Strategy", icon: <Award className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors duration-300" /> }
              ].map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 flex flex-col items-center justify-center text-center group hover:bg-gradient-to-br hover:from-blue-900/40 hover:to-purple-900/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-3">
                    {tool.icon}
                  </div>
                  <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tool.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your digital marketing strategy? Let's connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-gray-700 shadow-lg">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-slate-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-gray-700 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                      <p className="text-white">contact@digitalmarketing.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <Briefcase className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm mb-1">Business Hours</h4>
                      <p className="text-white">Monday - Friday: 9am - 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-5 h-5 text-blue-400"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Digital Marketing Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;