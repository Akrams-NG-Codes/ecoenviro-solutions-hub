
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Lake Victoria Water Quality Assessment',
      client: 'Ministry of Water and Environment',
      duration: '2023 - 2024',
      location: 'Lake Victoria Basin, Uganda',
      category: 'Water Resources',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      description: 'Comprehensive water quality assessment covering 150 sampling points across the Ugandan section of Lake Victoria. The project included pollution source identification, ecosystem health evaluation, and development of restoration strategies.',
      outcomes: [
        'Identified 45 pollution hotspots',
        'Developed 10-year restoration plan',
        'Created early warning system',
        'Trained 200+ local monitors'
      ]
    },
    {
      title: 'Kampala Climate Resilience Strategy',
      client: 'Kampala Capital City Authority',
      duration: '2022 - 2023',
      location: 'Kampala, Uganda',
      category: 'Climate Risk',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      description: 'Development of comprehensive climate resilience strategy for Kampala city, including vulnerability assessment, adaptation planning, and implementation roadmap for climate-smart urban development.',
      outcomes: [
        'Climate vulnerability mapping',
        '50% flood risk reduction plan',
        'Green infrastructure guidelines',
        'Community engagement framework'
      ]
    },
    {
      title: 'Murchison Falls EIA Study',
      client: 'Uganda Wildlife Authority',
      duration: '2023 - Ongoing',
      location: 'Murchison Falls National Park',
      category: 'Environmental Impact',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      description: 'Environmental Impact Assessment for proposed tourism infrastructure development within Murchison Falls National Park, ensuring minimal environmental impact while supporting sustainable tourism.',
      outcomes: [
        'Biodiversity baseline established',
        'Wildlife corridor mapping',
        'Sustainable tourism guidelines',
        'Community benefit framework'
      ]
    },
    {
      title: 'Agricultural Weather Network',
      client: 'Ministry of Agriculture',
      duration: '2021 - 2024',
      location: 'Central and Eastern Uganda',
      category: 'Weather Monitoring',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      description: 'Installation and operation of 50 automated weather stations across agricultural regions, providing real-time weather data and customized advisories to over 10,000 farmers.',
      outcomes: [
        '50 weather stations installed',
        '10,000+ farmers benefited',
        '30% crop yield improvement',
        'Mobile weather app launched'
      ]
    },
    {
      title: 'Industrial Waste Management Audit',
      client: 'Uganda Breweries Limited',
      duration: '2023',
      location: 'Port Bell, Uganda',
      category: 'Environmental Audit',
      status: 'Completed',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'Comprehensive environmental audit of brewery operations, waste management systems, and development of circular economy solutions for industrial waste streams.',
      outcomes: [
        '60% waste reduction achieved',
        'Zero liquid discharge system',
        'Biogas energy generation',
        'ISO 14001 certification support'
      ]
    },
    {
      title: 'Nile Basin Climate Study',
      client: 'Nile Basin Initiative',
      duration: '2022 - 2024',
      location: 'Uganda Nile Basin',
      category: 'Climate Research',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      description: 'Multi-year climate change impact study for the Nile Basin in Uganda, including hydrological modeling, climate projections, and adaptive management strategies.',
      outcomes: [
        'Climate projection models',
        'Water resource assessment',
        'Adaptation strategies',
        'Regional cooperation framework'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Water Resources':
        return 'bg-blue-100 text-blue-800';
      case 'Climate Risk':
        return 'bg-red-100 text-red-800';
      case 'Environmental Impact':
        return 'bg-green-100 text-green-800';
      case 'Weather Monitoring':
        return 'bg-orange-100 text-orange-800';
      case 'Environmental Audit':
        return 'bg-purple-100 text-purple-800';
      case 'Climate Research':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                Our Projects
              </h1>
              <p className="text-xl leading-relaxed">
                Explore our portfolio of successful environmental and climate projects across Uganda and East Africa. 
                Each project demonstrates our commitment to sustainable development and environmental excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {project.title}
                    </CardTitle>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Client: {project.client}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Location: {project.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                      <ul className="space-y-1">
                        {project.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-earth-green rounded-full mr-2" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full text-earth-green border-earth-green hover:bg-earth-green hover:text-white"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                Project Impact
              </h2>
              <p className="text-xl text-gray-600">
                Measurable results from our environmental initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">2.5M</div>
                <div className="text-gray-600">People Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">150+</div>
                <div className="text-gray-600">EIA Studies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth-green mb-2">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-earth-green">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="font-poppins text-3xl font-bold mb-6">
                Ready to Start Your Environmental Project?
              </h2>
              <p className="text-xl mb-8">
                Let's work together to create sustainable solutions for your environmental challenges.
              </p>
              <Button 
                asChild 
                size="lg"
                className="bg-white text-earth-green hover:bg-gray-100"
              >
                <a href="/contact">
                  Discuss Your Project
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
