
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                About SMK EcoEnviro Solutions
              </h1>
              <p className="text-xl leading-relaxed">
                Leading environmental and meteorological consultancy firm based in Wakiso District, Uganda, 
                committed to providing sustainable solutions for a greener future.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-earth-green mx-auto mb-6" />
                  <h3 className="font-poppins text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide sustainable environmental and climate solutions that protect our planet 
                    while supporting economic development across Uganda and East Africa.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Eye className="h-12 w-12 text-earth-green mx-auto mb-6" />
                  <h3 className="font-poppins text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the leading environmental consultancy firm in East Africa, 
                    recognized for excellence in environmental stewardship and climate solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-earth-green mx-auto mb-6" />
                  <h3 className="font-poppins text-2xl font-bold mb-4">Our Values</h3>
                  <p className="text-gray-600">
                    Integrity, sustainability, innovation, and excellence guide everything we do. 
                    We believe in transparent practices and measurable environmental impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins text-3xl font-bold text-center mb-12">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="mb-6">
                  Founded in 2009, SMK EcoEnviro Solutions Limited has grown from a small environmental 
                  consultancy to become one of Uganda's most trusted names in environmental and meteorological services. 
                  Our journey began with a simple yet powerful vision: to help organizations and communities 
                  make informed decisions that benefit both business and the environment.
                </p>
                <p className="mb-6">
                  Over the years, we have built our reputation on delivering high-quality, 
                  scientifically-backed environmental solutions. Our team of certified professionals 
                  combines international expertise with deep local knowledge, ensuring that our 
                  recommendations are both globally relevant and locally applicable.
                </p>
                <p>
                  Today, we serve clients across various sectors including government agencies, 
                  multinational corporations, NGOs, and private enterprises. Our comprehensive 
                  services cover everything from environmental impact assessments to climate 
                  risk analysis and weather monitoring systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-poppins text-3xl font-bold text-center mb-12">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">15+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">100+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
