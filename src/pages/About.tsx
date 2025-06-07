
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide sustainable environmental and climate solutions that protect Uganda\'s natural resources and promote sustainable development for future generations.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading environmental consultancy firm in East Africa, recognized for excellence in climate solutions and environmental stewardship.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, Innovation, Sustainability, Community, and Environmental Responsibility guide everything we do.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years of Experience' },
    { number: '100+', label: 'Satisfied Clients' },
    { number: '50+', label: 'Expert Consultants' }
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
                About SMK EcoEnviro Solutions
              </h1>
              <p className="text-xl leading-relaxed">
                Leading the way in environmental excellence and climate solutions across Uganda and East Africa
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in Central Division A, Wakiso District, Uganda, SMK EcoEnviro Solutions Limited has been at the forefront of environmental and meteorological consultancy for over 15 years. We started with a simple mission: to provide sustainable environmental solutions that protect our natural heritage while promoting economic development.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, we are proud to be Uganda's leading environmental consultancy firm, having completed over 500 successful projects and earning the trust of clients across East Africa. Our team of certified experts combines international best practices with deep local knowledge to deliver solutions that truly make a difference.
                </p>
                <p className="text-gray-600">
                  We believe that environmental protection and economic growth can go hand in hand, and we're committed to helping our clients achieve both through innovative, science-based solutions.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop" 
                  alt="Environmental consultation" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Foundation
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide our work and define our purpose
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-earth-green text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
                Our Achievements
              </h2>
              <p className="text-xl">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Certifications & Partnerships
              </h2>
              <p className="text-xl text-gray-600">
                Recognized by leading organizations and regulatory bodies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <Award className="h-16 w-16 text-earth-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">ISO 14001 Certified</h3>
                  <p className="text-gray-600">Environmental Management Systems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Globe className="h-16 w-16 text-earth-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">NEMA Accredited</h3>
                  <p className="text-gray-600">National Environment Management Authority</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="h-16 w-16 text-earth-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">UNMA Member</h3>
                  <p className="text-gray-600">Uganda National Meteorological Authority</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
