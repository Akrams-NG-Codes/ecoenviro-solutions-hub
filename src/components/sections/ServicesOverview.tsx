
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudRain, Leaf, BarChart3, Shield, Sun, Droplets } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesOverview = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive EIA studies to assess potential environmental impacts of your projects',
      features: ['Baseline Studies', 'Impact Analysis', 'Mitigation Measures', 'Monitoring Plans']
    },
    {
      icon: CloudRain,
      title: 'Climate Risk Assessment',
      description: 'Evaluate climate risks and develop adaptation strategies for your organization',
      features: ['Climate Modeling', 'Vulnerability Assessment', 'Adaptation Planning', 'Risk Management']
    },
    {
      icon: BarChart3,
      title: 'Weather Monitoring',
      description: 'Advanced meteorological services for accurate weather forecasting and monitoring',
      features: ['Real-time Monitoring', 'Data Analysis', 'Custom Reports', '24/7 Support']
    },
    {
      icon: Shield,
      title: 'Environmental Auditing',
      description: 'Regular audits to ensure compliance with environmental regulations and standards',
      features: ['Compliance Assessment', 'Gap Analysis', 'Corrective Actions', 'Certification Support']
    },
    {
      icon: Sun,
      title: 'Sustainability Consulting',
      description: 'Strategic guidance for implementing sustainable practices in your operations',
      features: ['Sustainability Strategy', 'Green Certification', 'Carbon Footprint', 'ESG Reporting']
    },
    {
      icon: Droplets,
      title: 'Water Resources Management',
      description: 'Comprehensive water management solutions for sustainable resource utilization',
      features: ['Water Quality Testing', 'Resource Assessment', 'Conservation Planning', 'Treatment Design']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Environmental Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive environmental and meteorological consultancy services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border-0 bg-gradient-to-br from-white to-gray-50"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-earth-green to-forest-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 flex-1">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-earth-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="text-earth-green hover:text-forest-green hover:bg-earth-green/5 p-0 h-auto justify-start group/btn"
                  asChild
                >
                  <Link to="/services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            className="bg-earth-green hover:bg-forest-green"
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
