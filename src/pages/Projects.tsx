
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users, Target, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Murchison Falls National Park Biodiversity Assessment',
      category: 'Conservation',
      client: 'Uganda Wildlife Authority',
      location: 'Murchison Falls National Park, Uganda',
      duration: '18 months',
      status: 'Completed',
      year: '2023',
      budget: '$850,000',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      description: 'Comprehensive biodiversity assessment and conservation strategy development for Uganda\'s largest national park.',
      objectives: [
        'Wildlife population assessment',
        'Habitat mapping and analysis',
        'Conservation strategy development',
        'Community engagement programs'
      ],
      results: [
        'Identified 76 mammal species',
        'Mapped 15 critical habitats',
        'Developed 10-year conservation plan',
        'Trained 50 local conservationists'
      ],
      services: ['Environmental Assessment', 'Conservation Planning', 'Community Engagement'],
      featured: true
    },
    {
      id: 2,
      title: 'Kampala Metropolitan Climate Resilience Study',
      category: 'Climate Change',
      client: 'Kampala Capital City Authority',
      location: 'Kampala Metropolitan Area',
      duration: '12 months',
      status: 'Completed',
      year: '2023',
      budget: '$650,000',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      description: 'Climate vulnerability assessment and adaptation planning for Uganda\'s capital city.',
      objectives: [
        'Climate risk assessment',
        'Vulnerability mapping',
        'Adaptation strategy development',
        'Infrastructure resilience planning'
      ],
      results: [
        'Identified 12 climate vulnerabilities',
        'Developed adaptation framework',
        'Created resilience action plan',
        'Established monitoring systems'
      ],
      services: ['Climate Risk Assessment', 'Urban Planning', 'Infrastructure Assessment'],
      featured: true
    },
    {
      id: 3,
      title: 'Agricultural Weather Monitoring Network',
      category: 'Agriculture',
      client: 'Ministry of Agriculture',
      location: 'Central and Eastern Uganda',
      duration: '24 months',
      status: 'Ongoing',
      year: '2024',
      budget: '$1,200,000',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'Establishment of comprehensive weather monitoring network for agricultural decision-making.',
      objectives: [
        'Install 50 weather stations',
        'Develop forecasting system',
        'Train agricultural officers',
        'Create farmer advisory system'
      ],
      results: [
        '35 stations operational',
        'Real-time data system active',
        '200 officers trained',
        '5,000 farmers receiving alerts'
      ],
      services: ['Weather Monitoring', 'Technology Implementation', 'Capacity Building'],
      featured: false
    },
    {
      id: 4,
      title: 'Industrial Environmental Compliance Audit',
      category: 'Industrial',
      client: 'Uganda Manufacturers Association',
      location: 'Multiple locations across Uganda',
      duration: '8 months',
      status: 'Completed',
      year: '2022',
      budget: '$450,000',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      description: 'Comprehensive environmental compliance assessment for major manufacturing facilities.',
      objectives: [
        'Compliance gap analysis',
        'Environmental management systems review',
        'Corrective action planning',
        'Staff training programs'
      ],
      results: [
        'Audited 25 facilities',
        '95% compliance achieved',
        'Implemented management systems',
        'Reduced environmental incidents by 60%'
      ],
      services: ['Environmental Auditing', 'Compliance Management', 'Training'],
      featured: false
    },
    {
      id: 5,
      title: 'Lake Victoria Water Quality Assessment',
      category: 'Water Resources',
      client: 'Lake Victoria Basin Commission',
      location: 'Lake Victoria, Uganda shore',
      duration: '15 months',
      status: 'Completed',
      year: '2023',
      budget: '$750,000',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop',
      description: 'Comprehensive water quality assessment and pollution source identification for Lake Victoria.',
      objectives: [
        'Water quality monitoring',
        'Pollution source mapping',
        'Ecosystem health assessment',
        'Restoration recommendations'
      ],
      results: [
        'Monitored 30 sampling points',
        'Identified 15 pollution sources',
        'Assessed ecosystem health',
        'Developed restoration plan'
      ],
      services: ['Water Quality Assessment', 'Environmental Monitoring', 'Ecosystem Analysis'],
      featured: true
    },
    {
      id: 6,
      title: 'Renewable Energy Environmental Impact Study',
      category: 'Energy',
      client: 'Green Energy Uganda Ltd',
      location: 'Western Uganda',
      duration: '10 months',
      status: 'Ongoing',
      year: '2024',
      budget: '$580,000',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
      description: 'Environmental impact assessment for large-scale solar and wind energy installations.',
      objectives: [
        'Environmental baseline studies',
        'Impact assessment',
        'Mitigation planning',
        'Monitoring framework development'
      ],
      results: [
        'Baseline study completed',
        'Impact assessment ongoing',
        'Mitigation measures designed',
        'Monitoring plan developed'
      ],
      services: ['Environmental Impact Assessment', 'Renewable Energy Consulting', 'Monitoring'],
      featured: false
    }
  ];

  const categories = ['All', 'Conservation', 'Climate Change', 'Agriculture', 'Industrial', 'Water Resources', 'Energy'];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                Our Environmental Projects
              </h1>
              <p className="text-xl leading-relaxed">
                Explore our portfolio of successful environmental and climate projects across Uganda and East Africa
              </p>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-earth-green mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-earth-green mb-2">$50M+</div>
                <div className="text-gray-600">Total Project Value</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-earth-green mb-2">15+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-earth-green mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600">
                Highlighting our most impactful environmental projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-earth-green text-white">{project.category}</Badge>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                    
                    <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.duration}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Target className="h-4 w-4 mr-2" />
                        {project.budget}
                      </div>
                    </div>

                    <Button className="w-full bg-earth-green hover:bg-forest-green">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Project Portfolio
              </h2>
              <p className="text-xl text-gray-600">
                Browse our comprehensive collection of environmental projects
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-earth-green hover:bg-forest-green" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge variant={project.status === 'Completed' ? 'default' : 'outline'}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {project.year} • {project.duration}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-earth-green mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-earth-green text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your environmental goals with our proven expertise and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-earth-green hover:bg-gray-100">
                  Start a Project
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-earth-green">
                  Download Portfolio
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

export default Projects;
