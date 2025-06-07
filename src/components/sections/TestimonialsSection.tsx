
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Namugga',
      position: 'Environmental Manager, Uganda Breweries',
      content: 'SMK EcoEnviro Solutions provided exceptional environmental impact assessment services for our new facility. Their thorough approach and local expertise made the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'James Mukasa',
      position: 'Project Director, Ministry of Water',
      content: 'The climate risk assessment conducted by SMK helped us develop robust adaptation strategies. Their insights were invaluable for our water resource management project.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Grace Nalwoga',
      position: 'Sustainability Officer, Kampala Capital City',
      content: 'Outstanding weather monitoring services that helped us plan our urban development projects effectively. The team is professional and always delivers on time.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Ssemwanga',
      position: 'Operations Manager, Kakira Sugar',
      content: 'SMK EcoEnviro has been our trusted partner for environmental compliance. Their expertise in local regulations and international standards is remarkable.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across Uganda for environmental excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-earth-green opacity-50" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <h3 className="text-center text-gray-600 font-medium mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'Uganda Breweries',
              'Ministry of Water',
              'Kampala Capital City',
              'Kakira Sugar',
              'NEMA Uganda',
              'World Bank Uganda'
            ].map((client, index) => (
              <div key={index} className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-gray-700 font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
