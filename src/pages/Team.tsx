
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Linkedin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Samuel Mukasa Kayondo',
      position: 'Chief Executive Officer & Lead Environmental Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      credentials: ['PhD Environmental Science', 'Certified EIA Practitioner', '15+ Years Experience'],
      bio: 'Dr. Kayondo leads our team with extensive experience in environmental management and climate science. He has overseen over 300 successful EIA projects across East Africa.',
      email: 'samuel@smkecoenvirosolutions.com'
    },
    {
      name: 'Eng. Margaret Nalwanga',
      position: 'Senior Environmental Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      credentials: ['MSc Environmental Engineering', 'Professional Engineer (PE)', 'NEMA Certified'],
      bio: 'Margaret specializes in water resources management and environmental engineering solutions. She brings 12 years of experience in sustainable development projects.',
      email: 'margaret@smkecoenvirosolutions.com'
    },
    {
      name: 'Dr. James Ssemwanga',
      position: 'Chief Meteorologist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      credentials: ['PhD Atmospheric Sciences', 'WMO Certified', 'Climate Risk Specialist'],
      bio: 'Dr. Ssemwanga leads our meteorological services with expertise in climate modeling and weather forecasting. He has contributed to several international climate research projects.',
      email: 'james@smkecoenvirosolutions.com'
    },
    {
      name: 'Grace Nakato',
      position: 'Environmental Policy Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      credentials: ['MSc Environmental Policy', 'Legal Compliance Expert', 'UNEP Consultant'],
      bio: 'Grace ensures all our projects meet regulatory requirements and helps clients navigate complex environmental policies. She has 10 years of experience in environmental law.',
      email: 'grace@smkecoenvirosolutions.com'
    },
    {
      name: 'David Musoke',
      position: 'GIS & Remote Sensing Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      credentials: ['MSc Geoinformatics', 'ESRI Certified', 'Remote Sensing Expert'],
      bio: 'David manages our spatial analysis and mapping services using cutting-edge GIS technology. He specializes in environmental monitoring and change detection.',
      email: 'david@smkecoenvirosolutions.com'
    },
    {
      name: 'Sarah Namutebi',
      position: 'Project Manager & Client Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
      credentials: ['MBA Project Management', 'PMP Certified', 'Client Success Specialist'],
      bio: 'Sarah ensures smooth project delivery and maintains strong client relationships. She coordinates our multidisciplinary teams to deliver projects on time and within budget.',
      email: 'sarah@smkecoenvirosolutions.com'
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
                Our Expert Team
              </h1>
              <p className="text-xl leading-relaxed">
                Meet the professionals who make SMK EcoEnviro Solutions a leader in environmental consultancy. 
                Our diverse team brings together decades of experience and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    {/* Photo */}
                    <div className="relative">
                      <div 
                        className="w-full h-64 bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-poppins text-xl font-bold">{member.name}</h3>
                        <p className="text-green-200">{member.position}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Credentials */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <Award className="h-4 w-4 text-earth-green mr-2" />
                          <span className="font-semibold text-sm">Credentials</span>
                        </div>
                        <ul className="space-y-1">
                          {member.credentials.map((credential, credIndex) => (
                            <li key={credIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-earth-green rounded-full mr-2" />
                              {credential}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bio */}
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {member.bio}
                      </p>

                      {/* Contact */}
                      <div className="flex items-center space-x-3 pt-4 border-t">
                        <a 
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 bg-earth-green rounded-full flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                        </a>
                        <a 
                          href="#"
                          className="w-8 h-8 bg-earth-green rounded-full flex items-center justify-center text-white hover:bg-forest-green transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-poppins text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented professionals to join our growing team. 
                If you're passionate about environmental sustainability and want to make a difference, 
                we'd love to hear from you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌱</div>
                  <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                  <p className="text-gray-600 text-sm">Professional development and career advancement</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold mb-2">Collaborative Culture</h3>
                  <p className="text-gray-600 text-sm">Work with passionate environmental professionals</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">Meaningful Impact</h3>
                  <p className="text-gray-600 text-sm">Contribute to environmental sustainability</p>
                </div>
              </div>
              <a 
                href="/careers" 
                className="inline-flex items-center px-6 py-3 bg-earth-green text-white rounded-lg hover:bg-forest-green transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
