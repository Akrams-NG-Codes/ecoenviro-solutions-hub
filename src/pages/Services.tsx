
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Environmental Impact Assessment (EIA)',
      description: 'Comprehensive assessment of potential environmental impacts for development projects',
      features: [
        'Baseline environmental studies',
        'Impact prediction and evaluation',
        'Mitigation measure development',
        'Environmental management plans',
        'Monitoring and follow-up programs',
        'Stakeholder consultation'
      ],
      price: 'From $5,000'
    },
    {
      title: 'Climate Risk Assessment',
      description: 'Evaluate climate vulnerabilities and develop adaptation strategies',
      features: [
        'Climate data analysis',
        'Vulnerability assessments',
        'Risk mapping and modeling',
        'Adaptation planning',
        'Resilience building strategies',
        'Policy recommendations'
      ],
      price: 'From $3,500'
    },
    {
      title: 'Weather Monitoring Services',
      description: 'Advanced meteorological monitoring and forecasting systems',
      features: [
        'Real-time weather monitoring',
        'Customized forecasting',
        'Agricultural weather advisories',
        'Early warning systems',
        'Data logging and analysis',
        '24/7 technical support'
      ],
      price: 'From $2,000/month'
    },
    {
      title: 'Environmental Auditing',
      description: 'Regular compliance audits and environmental performance assessments',
      features: [
        'Compliance auditing',
        'Environmental performance reviews',
        'Gap analysis and recommendations',
        'Corrective action planning',
        'Certification support',
        'Training and capacity building'
      ],
      price: 'From $2,500'
    },
    {
      title: 'Sustainability Consulting',
      description: 'Strategic guidance for implementing sustainable business practices',
      features: [
        'Sustainability strategy development',
        'Carbon footprint assessment',
        'Green certification support',
        'ESG reporting assistance',
        'Renewable energy consulting',
        'Waste management solutions'
      ],
      price: 'From $4,000'
    },
    {
      title: 'Water Resources Management',
      description: 'Comprehensive water management and quality assessment services',
      features: [
        'Water quality testing',
        'Resource assessment studies',
        'Conservation planning',
        'Treatment system design',
        'Pollution source identification',
        'Regulatory compliance support'
      ],
      price: 'From $3,000'
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
                Comprehensive environmental and meteorological consultancy services 
                tailored to meet your specific needs and regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-earth-green mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <div className="text-2xl font-bold text-earth-green mb-4">
                        {service.price}
                      </div>
                      <Button className="w-full bg-earth-green hover:bg-forest-green">
                        Request Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-poppins text-3xl font-bold mb-12">Our Service Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Consultation', description: 'Initial discussion of your needs and requirements' },
                  { step: '02', title: 'Assessment', description: 'Detailed site assessment and data collection' },
                  { step: '03', title: 'Analysis', description: 'Comprehensive analysis and solution development' },
                  { step: '04', title: 'Delivery', description: 'Report delivery and ongoing support' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-earth-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
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
