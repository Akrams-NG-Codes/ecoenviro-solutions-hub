
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Clock, DollarSign, Users, Send, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const { toast } = useToast();
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Environmental Consultant',
      department: 'Environmental Services',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$25,000 - $35,000',
      postedDate: '2024-01-10',
      description: 'Lead environmental impact assessments and manage client relationships for major development projects across Uganda.',
      requirements: [
        'Master\'s degree in Environmental Science or related field',
        'Minimum 5 years experience in environmental consulting',
        'Professional certification in EIA',
        'Strong project management skills',
        'Excellent communication skills in English and local languages'
      ],
      responsibilities: [
        'Conduct comprehensive environmental impact assessments',
        'Manage multiple projects simultaneously',
        'Lead client presentations and stakeholder meetings',
        'Mentor junior consultants',
        'Ensure compliance with national and international standards'
      ]
    },
    {
      id: 2,
      title: 'Climate Risk Analyst',
      department: 'Climate Services',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$20,000 - $28,000',
      postedDate: '2024-01-08',
      description: 'Analyze climate risks and develop adaptation strategies for various sectors including agriculture, infrastructure, and water resources.',
      requirements: [
        'Bachelor\'s degree in Climate Science, Meteorology, or related field',
        'Experience with climate modeling and data analysis',
        'Proficiency in statistical software (R, Python)',
        'Knowledge of climate adaptation frameworks',
        'Strong analytical and report writing skills'
      ],
      responsibilities: [
        'Conduct climate vulnerability assessments',
        'Develop climate risk maps and scenarios',
        'Create adaptation strategies and action plans',
        'Collaborate with international research institutions',
        'Present findings to government and private sector clients'
      ]
    },
    {
      id: 3,
      title: 'GIS Specialist',
      department: 'Geospatial Services',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$18,000 - $25,000',
      postedDate: '2024-01-05',
      description: 'Manage geospatial data and create maps and visualizations for environmental and climate projects.',
      requirements: [
        'Bachelor\'s degree in GIS, Geography, or related field',
        'Proficiency in ArcGIS, QGIS, and remote sensing software',
        'Experience with satellite imagery analysis',
        'Programming skills in Python or R',
        'Attention to detail and accuracy'
      ],
      responsibilities: [
        'Create detailed maps and spatial analyses',
        'Process and analyze satellite imagery',
        'Maintain geospatial databases',
        'Support field data collection activities',
        'Develop web-based mapping applications'
      ]
    },
    {
      id: 4,
      title: 'Field Research Assistant',
      department: 'Research & Development',
      location: 'Various locations across Uganda',
      type: 'Contract',
      experience: '1+ years',
      salary: '$12,000 - $18,000',
      postedDate: '2024-01-03',
      description: 'Support field research activities including data collection, equipment maintenance, and community engagement.',
      requirements: [
        'Bachelor\'s degree in Environmental Science or related field',
        'Willingness to travel extensively within Uganda',
        'Experience with field research methods',
        'Good communication skills with local communities',
        'Physical fitness for fieldwork'
      ],
      responsibilities: [
        'Collect environmental samples and data',
        'Maintain and calibrate field equipment',
        'Engage with local communities',
        'Assist in field surveys and assessments',
        'Prepare field reports and documentation'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-competitive compensation packages with annual reviews'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family'
    },
    {
      icon: '📚',
      title: 'Professional Development',
      description: 'Training opportunities and conference attendance support'
    },
    {
      icon: '🌴',
      title: 'Flexible Work',
      description: 'Remote work options and flexible scheduling'
    },
    {
      icon: '🚗',
      title: 'Transport Allowance',
      description: 'Monthly transport allowance for field work'
    },
    {
      icon: '🎓',
      title: 'Education Support',
      description: 'Tuition assistance for continued education'
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "We'll review your application and get back to you within 2 weeks.",
    });
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
                Join Our Team
              </h1>
              <p className="text-xl leading-relaxed">
                Be part of Uganda's leading environmental consultancy firm. 
                Help us create sustainable solutions for a better future.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600">
                Join a team of passionate professionals making a real impact on environmental sustainability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                Current Openings
              </h2>
              <p className="text-xl text-gray-600">
                Explore exciting career opportunities with our growing team
              </p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-2">
                          {job.title}
                        </CardTitle>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline">{job.experience}</Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="h-5 w-5 mr-2" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">{job.description}</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 bg-earth-green rounded-full mr-2 mt-2" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Responsibilities:</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <div className="w-2 h-2 bg-earth-green rounded-full mr-2 mt-2" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button 
                      className="bg-earth-green hover:bg-forest-green"
                      onClick={() => setApplicationData(prev => ({ ...prev, position: job.title }))}
                    >
                      Apply for this Position
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Submit Your Application
                  </CardTitle>
                  <p className="text-center text-gray-600">
                    Fill out the form below to apply for any of our open positions
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleApplicationSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={applicationData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={applicationData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={applicationData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                          Position Applied For *
                        </label>
                        <Input
                          id="position"
                          name="position"
                          type="text"
                          value={applicationData.position}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <Input
                        id="experience"
                        name="experience"
                        type="text"
                        value={applicationData.experience}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter *
                      </label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows={6}
                        value={applicationData.coverLetter}
                        onChange={handleInputChange}
                        placeholder="Tell us why you're interested in this position and how you can contribute to our team..."
                        required
                      />
                    </div>

                    <div className="text-sm text-gray-600">
                      <p>* Please attach your resume and relevant certificates by email to: 
                        <strong> hr@smkecoenvirosolutions.com</strong>
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-earth-green hover:bg-forest-green"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </Button>
                  </form>
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

export default Careers;
