import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Linkedin, Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Mollen Kenyena',
      position: 'Chief Executive Officer & Senior Meteorologist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c4e2fedf?w=400&h=400&fit=crop&crop=face',
      qualifications: ['BSc Meteorology - Makerere University', 'Weather Forecaster - UNMA', 'Climate Change Communicator - UBC'],
      experience: '7+ years',
      specialization: 'Weather Forecasting, Climate Communication',
      achievements: [
        'Founding member of Climate Without Borders',
        'IGAD-ICPAC\'s Climate Champion for East Africa',
        'Climate Action Award 2021 by ICPAC',
        'Recognized as one of the best weather presenters in the world by European Meteorological Society'
      ],
      email: 'mollen@smkecoenvirosolutions.com',
      phone: '+256 701492351',
      bio: 'A senior Meteorologist with a Bachelor of Science in Meteorology from Makerere University. She is a Weather Forecaster at Uganda National Meteorological Authority. Mollen is a Climate Change Communicator at Uganda Broadcasting Corporation (UBC). Mollen is passionate about nature and believes in being a voice of change for an international and scientific approach to address environmental challenges in the face of climate change.'
    },
    {
      name: 'Dr. Samuel Kayondo',
      position: 'Chief Operating Officer & Lead Environmental Scientist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      qualifications: ['PhD Environmental Science', 'MSc Climate Change', 'ISO 14001 Lead Auditor'],
      experience: '15+ years',
      specialization: 'Climate Risk Assessment, EIA',
      achievements: ['Led 200+ EIA projects', 'Climate adaptation expert', 'Published researcher'],
      email: 'samuel@smkecoenvirosolutions.com',
      phone: '+256 701492352'
    },
    {
      name: 'Eng. Margaret Nalwanga',
      position: 'Technical Director & Senior Environmental Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      qualifications: ['BEng Environmental Engineering', 'MSc Water Resources', 'Professional Engineer (PE)'],
      experience: '12+ years',
      specialization: 'Water Resources, Environmental Engineering',
      achievements: ['Water treatment specialist', 'Infrastructure projects expert', 'Regulatory compliance leader'],
      email: 'margaret@smkecoenvirosolutions.com',
      phone: '+256 701492353'
    },
    {
      name: 'Dr. James Ssemwanga',
      position: 'Chief Meteorologist & Weather Systems Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      qualifications: ['PhD Meteorology', 'MSc Atmospheric Sciences', 'WMO Certified Meteorologist'],
      experience: '18+ years',
      specialization: 'Weather Forecasting, Climate Modeling',
      achievements: ['Weather monitoring expert', 'Agricultural meteorology specialist', 'Technology implementation leader'],
      email: 'james@smkecoenvirosolutions.com',
      phone: '+256 701492354'
    },
    {
      name: 'Grace Nakato',
      position: 'Senior Environmental Consultant & Sustainability Specialist',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      qualifications: ['MSc Environmental Management', 'BSc Biology', 'Certified Sustainability Professional'],
      experience: '10+ years',
      specialization: 'Sustainability Consulting, Environmental Auditing',
      achievements: ['Green certification expert', 'Corporate sustainability advisor', 'ESG reporting specialist'],
      email: 'grace@smkecoenvirosolutions.com',
      phone: '+256 701492355'
    },
    {
      name: 'David Musoke',
      position: 'Wildlife Conservation Specialist & Biodiversity Expert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      qualifications: ['MSc Wildlife Conservation', 'BSc Ecology', 'Certified Conservation Biologist'],
      experience: '8+ years',
      specialization: 'Biodiversity Assessment, Conservation Planning',
      achievements: ['Protected area management', 'Species conservation expert', 'Community engagement specialist'],
      email: 'david@smkecoenvirosolutions.com',
      phone: '+256 701492356'
    }
  ];

  const departments = [
    {
      icon: Award,
      name: 'Environmental Assessment',
      description: 'Leading EIA and environmental impact studies',
      teamSize: '8 specialists'
    },
    {
      icon: BookOpen,
      name: 'Research & Development',
      description: 'Innovation in environmental solutions',
      teamSize: '5 researchers'
    },
    {
      icon: Users,
      name: 'Client Services',
      description: 'Dedicated support and consultation',
      teamSize: '6 consultants'
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
                Meet Our Expert Team
              </h1>
              <p className="text-xl leading-relaxed">
                Dedicated professionals with decades of combined experience in environmental science, meteorology, and sustainability consulting
              </p>
            </div>
          </div>
        </section>

        {/* CEO Spotlight Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Leadership
                </h2>
                <p className="text-xl text-gray-600">
                  Meet our visionary CEO leading SMK EcoEnviro Solutions
                </p>
              </div>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative">
                      <div className="aspect-square bg-gray-100 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-32 h-32 bg-earth-green/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl">📸</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            CEO Photo Placeholder
                          </p>
                          <p className="text-gray-500 text-xs mt-2">
                            Replace with Mollen Kenyena's photo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-2">
                        Mollen Kenyena
                      </h3>
                      <p className="text-earth-green font-semibold mb-6">
                        Chief Executive Officer & Senior Meteorologist
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Biography</h4>
                          <p className="text-gray-600 leading-relaxed">
                            {teamMembers[0].bio}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {teamMembers[0].achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start">
                                <Award className="h-4 w-4 text-earth-green mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Qualifications</h4>
                          <ul className="space-y-1">
                            {teamMembers[0].qualifications.map((qual, index) => (
                              <li key={index} className="text-gray-600 text-sm">• {qual}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 border-t">
                          <div className="flex space-x-4">
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4 mr-2" />
                              Contact CEO
                            </Button>
                            <Button variant="outline" size="sm">
                              <Linkedin className="h-4 w-4 mr-2" />
                              LinkedIn
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Departments
              </h2>
              <p className="text-xl text-gray-600">
                Specialized teams working together for comprehensive environmental solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {departments.map((dept, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <dept.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {dept.description}
                    </p>
                    <p className="text-earth-green font-medium">
                      {dept.teamSize}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Senior Team Members
              </h2>
              <p className="text-xl text-gray-600">
                Meet the experts supporting our environmental consultancy services
              </p>
            </div>
            {/* Only CEO is currently listed */}
            <div className="text-center text-gray-600 text-lg py-12">
              Only the CEO is currently listed.
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Team Certifications & Credentials
              </h2>
              <p className="text-xl text-gray-600">
                Our team holds professional certifications from leading environmental and meteorological organizations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'ISO 14001 Lead Auditors',
                'Professional Engineers (PE)',
                'WMO Certified Meteorologists',
                'Certified Sustainability Professionals',
                'Environmental Impact Assessment Specialists',
                'Wildlife Conservation Biologists',
                'Environmental Law Specialists',
                'Climate Change Adaptation Experts'
              ].map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-earth-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-earth-green" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-earth-green text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                We're always looking for talented environmental professionals to join our mission of creating sustainable solutions for Uganda and East Africa.
              </p>
              <Button size="lg" className="bg-white text-earth-green hover:bg-gray-100">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
