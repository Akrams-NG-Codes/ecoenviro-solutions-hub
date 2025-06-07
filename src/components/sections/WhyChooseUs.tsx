
import React from 'react';
import { Award, Users, Globe, Shield, Clock, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified environmental consultants with deep local and international expertise'
    },
    {
      icon: Globe,
      title: 'Local Knowledge',
      description: 'Deep understanding of Ugandan environmental regulations and climate patterns'
    },
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: 'Successfully completed 500+ projects with 100% compliance rate'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to meeting deadlines while maintaining quality standards'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Tailored solutions that meet your specific environmental needs'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Latest technologies and methodologies for accurate assessments'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SMK EcoEnviro Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with local knowledge to deliver outstanding environmental solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-lg transition-all duration-300 group hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-earth-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-earth-green/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-earth-green" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-green mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-green mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-green mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth-green mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
