
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CloudRain, Leaf, BarChart3, Shield, Sun, Droplets, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive EIA studies to assess potential environmental impacts of development projects.',
      features: [
        'Baseline environmental studies',
        'Impact prediction and evaluation',
        'Mitigation measures development',
        'Environmental monitoring plans',
        'Stakeholder consultation',
        'Regulatory compliance support'
      ],
      process: [
        'Initial site reconnaissance',
        'Data collection and analysis',
        'Impact assessment',
        'Report preparation',
        'Stakeholder engagement'
      ]
    },
    {
      icon: CloudRain,
      title: 'Climate Risk Assessment',
      description: 'Evaluate climate vulnerabilities and develop adaptation strategies for resilient operations.',
      features: [
        'Climate change projections',
        'Vulnerability assessments',
        'Risk analysis and mapping',
        'Adaptation planning',
        'Climate resilience strategies',
        'Carbon footprint analysis'
      ],
      process: [
        'Climate data analysis',
        'Vulnerability mapping',
        'Risk quantification',
        'Strategy development',
        'Implementation planning'
      ]
    },
    {
      icon: BarChart3,
      title: 'Weather Monitoring & Forecasting',
      description: 'Advanced meteorological services for accurate weather monitoring and forecasting.',
      features: [
        'Real-time weather monitoring',
        'Customized forecasting',
        'Agricultural weather services',
        'Extreme weather alerts',
        'Climate data analysis',
        '24/7 monitoring support'
      ],
      process: [
        'Equipment installation',
        'Data collection setup',
        'Monitoring system activation',
        'Regular data analysis',
        'Report generation'
      ]
    },
    {
      icon: Shield,
      title: 'Environmental Auditing',
      description: 'Regular audits to ensure environmental compliance and continuous improvement.',
      features: [
        'Compliance assessments',
        'Environmental management systems',
        'Regulatory gap analysis',
        'Corrective action plans',
        'Performance monitoring',
        'Certification support'
      ],
      process: [
        'Pre-audit planning',
        'On-site assessment',
        'Data evaluation',
        'Report preparation',
        'Follow-up support'
      ]
    },
    {
      icon: Sun,
      title: 'Sustainability Consulting',
      description: 'Strategic guidance for implementing sustainable practices across your operations.',
      features: [
        'Sustainability strategy development',
        'Green certification assistance',
        'Resource efficiency optimization',
        'Waste management solutions',
        'ESG reporting support',
        'Stakeholder engagement'
      ],
      process: [
        'Sustainability assessment',
        'Strategy formulation',
        'Implementation planning',
        'Progress monitoring',
        'Continuous improvement'
      ]
    },
    {
      icon: Droplets,
      title: 'Water Resources Management',
      description: 'Comprehensive water management solutions for sustainable resource utilization.',
      features: [
        'Water quality assessment',
        'Resource availability studies',
        'Conservation planning',
        'Treatment system design',
        'Pollution control measures',
        'Regulatory compliance'
      ],
      process: [
        'Resource assessment',
        'Quality analysis',
        'Management planning',
        'System design',
        'Implementation support'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                Our Environmental Services
              </h1>
              <p className="text-xl leading-relaxed">
                Comprehensive environmental and meteorological consultancy services designed to meet your specific needs and ensure regulatory compliance
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-earth-green rounded-2xl flex items-center justify-center mr-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="font-poppins text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-4">Key Features</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-5 w-5 text-earth-green mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 mb-4">Our Process</h3>
                        <ul className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <li key={stepIndex} className="flex items-center text-gray-600">
                              <div className="w-6 h-6 bg-earth-green rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button className="bg-earth-green hover:bg-forest-green">
                        Learn More About This Service
                      </Button>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <img 
                          src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1500673922987-e212871fec22' : '1518495973542-4542c06a5843'}?w=600&h=400&fit=crop`}
                          alt={service.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <div className="bg-earth-green/5 p-6 rounded-lg">
                          <h4 className="font-semibold text-lg text-gray-900 mb-4">Why Choose Our Service?</h4>
                          <p className="text-gray-600">
                            Our team of certified professionals brings years of experience and uses the latest methodologies to ensure accurate assessments and effective solutions tailored to your specific requirements.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your environmental consultancy needs and discover how we can help you achieve your sustainability goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-earth-green hover:bg-forest-green">
                  Request a Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Download Our Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
