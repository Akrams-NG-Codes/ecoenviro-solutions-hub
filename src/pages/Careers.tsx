
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart, Target, Award, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: '',
    portfolio: '',
    availability: '',
    salary: ''
  });

  const { toast } = useToast();

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Environmental Scientist',
      department: 'Environmental Assessment',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'UGX 8,000,000 - 12,000,000/year',
      description: 'Lead environmental impact assessments and manage complex environmental projects across East Africa.',
      requirements: [
        'PhD or MSc in Environmental Science',
        '5+ years EIA experience',
        'Professional certification preferred',
        'Strong analytical and communication skills',
        'Experience with GIS and environmental modeling'
      ],
      responsibilities: [
        'Conduct comprehensive environmental assessments',
        'Lead field studies and data collection',
        'Prepare technical reports and presentations',
        'Manage client relationships and projects',
        'Mentor junior staff members'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Professional development opportunities',
        'International project exposure',
        'Health insurance coverage',
        'Flexible working arrangements'
      ]
    },
    {
      id: 2,
      title: 'Climate Risk Analyst',
      department: 'Climate Solutions',
      location: 'Kampala/Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'UGX 6,000,000 - 9,000,000/year',
      description: 'Analyze climate risks and develop adaptation strategies for various sectors and clients.',
      requirements: [
        'MSc in Climate Science or related field',
        '3+ years climate risk experience',
        'Strong quantitative analysis skills',
        'Knowledge of climate modeling tools',
        'Experience with vulnerability assessments'
      ],
      responsibilities: [
        'Conduct climate risk assessments',
        'Develop adaptation strategies',
        'Analyze climate data and projections',
        'Prepare risk assessment reports',
        'Support client consultation meetings'
      ],
      benefits: [
        'Competitive compensation package',
        'Training in latest climate tools',
        'Conference attendance opportunities',
        'Comprehensive health benefits',
        'Career advancement pathways'
      ]
    },
    {
      id: 3,
      title: 'Meteorological Technician',
      department: 'Weather Services',
      location: 'Multiple locations',
      type: 'Full-time',
      experience: '2+ years',
      salary: 'UGX 4,000,000 - 6,000,000/year',
      description: 'Operate and maintain weather monitoring equipment and provide technical support for meteorological services.',
      requirements: [
        'Diploma/BSc in Meteorology or related field',
        '2+ years weather monitoring experience',
        'Technical equipment maintenance skills',
        'Strong attention to detail',
        'Willingness to work in various field locations'
      ],
      responsibilities: [
        'Install and maintain weather stations',
        'Collect and process meteorological data',
        'Perform equipment calibration and repairs',
        'Prepare technical reports',
        'Provide field support services'
      ],
      benefits: [
        'Competitive starting salary',
        'Technical training programs',
        'Field allowances',
        'Medical coverage',
        'Skills development opportunities'
      ]
    },
    {
      id: 4,
      title: 'Environmental Compliance Officer',
      department: 'Regulatory Affairs',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'UGX 7,000,000 - 10,000,000/year',
      description: 'Ensure environmental regulatory compliance and support clients with permit applications and compliance management.',
      requirements: [
        'BSc/MSc in Environmental Science or Law',
        '4+ years regulatory compliance experience',
        'Knowledge of Ugandan environmental laws',
        'Strong communication and negotiation skills',
        'Experience with permit applications'
      ],
      responsibilities: [
        'Review and ensure regulatory compliance',
        'Prepare permit applications',
        'Conduct compliance audits',
        'Liaise with regulatory authorities',
        'Develop compliance management systems'
      ],
      benefits: [
        'Excellent compensation package',
        'Legal training opportunities',
        'Professional certification support',
        'Comprehensive benefits package',
        'Leadership development programs'
      ]
    },
    {
      id: 5,
      title: 'Junior Water Resources Engineer',
      department: 'Water Management',
      location: 'Wakiso District, Uganda',
      type: 'Full-time',
      experience: '1-2 years',
      salary: 'UGX 3,500,000 - 5,500,000/year',
      description: 'Support water resources assessment and management projects under senior engineer supervision.',
      requirements: [
        'BSc in Water Resources/Environmental Engineering',
        '1-2 years relevant experience',
        'Knowledge of water quality testing',
        'Proficiency in CAD software',
        'Strong mathematical and analytical skills'
      ],
      responsibilities: [
        'Assist in water quality assessments',
        'Support field data collection',
        'Prepare technical drawings',
        'Analyze water samples and data',
        'Support senior engineers in project delivery'
      ],
      benefits: [
        'Competitive entry-level salary',
        'Comprehensive training program',
        'Mentorship opportunities',
        'Professional development support',
        'Health and dental coverage'
      ]
    },
    {
      id: 6,
      title: 'Sustainability Consultant',
      department: 'Sustainability Services',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'UGX 6,500,000 - 9,500,000/year',
      description: 'Help organizations develop and implement sustainability strategies and achieve green certifications.',
      requirements: [
        'MSc in Sustainability/Environmental Management',
        '3+ years sustainability consulting experience',
        'Knowledge of sustainability frameworks',
        'Experience with ESG reporting',
        'Strong project management skills'
      ],
      responsibilities: [
        'Develop sustainability strategies',
        'Conduct sustainability assessments',
        'Support green certification processes',
        'Prepare ESG reports',
        'Facilitate stakeholder engagement'
      ],
      benefits: [
        'Competitive salary package',
        'Sustainability certification support',
        'Flexible working arrangements',
        'International project opportunities',
        'Comprehensive benefits package'
      ]
    }
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    toast({
      title: "Application submitted successfully!",
      description: "We'll review your application and get back to you within 5 business days.",
    });
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      education: '',
      coverLetter: '',
      portfolio: '',
      availability: '',
      salary: ''
    });
    setSelectedJob(null);
  };

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and mental health coverage'
    },
    {
      icon: Target,
      title: 'Professional Development',
      description: 'Training, certifications, and conference attendance support'
    },
    {
      icon: Award,
      title: 'Recognition Programs',
      description: 'Performance bonuses and achievement recognition awards'
    },
    {
      icon: Users,
      title: 'Work-Life Balance',
      description: 'Flexible schedules, remote work options, and paid time off'
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
                Join Our Environmental Mission
              </h1>
              <p className="text-xl leading-relaxed">
                Build your career with Uganda's leading environmental consultancy. Make a meaningful impact while growing professionally in a supportive, innovative environment.
              </p>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600">
                Join a team that's passionate about environmental excellence and professional growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Opportunities
              </h2>
              <p className="text-xl text-gray-600">
                Explore exciting career opportunities across our departments
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Job Listings */}
              <div className="lg:col-span-2 space-y-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge variant="secondary">{job.department}</Badge>
                            <Badge variant="outline">{job.type}</Badge>
                          </div>
                        </div>
                        <Button 
                          onClick={() => setSelectedJob(job)}
                          className="bg-earth-green hover:bg-forest-green"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {job.experience}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {job.salary}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Application Form */}
              <div>
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle>
                      {selectedJob ? `Apply for ${selectedJob.title}` : 'Quick Application'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleApplicationSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={applicationData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={applicationData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          required
                          value={applicationData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+256 XXX XXXXXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Position of Interest *
                        </label>
                        <Select 
                          value={applicationData.position} 
                          onValueChange={(value) => handleInputChange('position', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select position" />
                          </SelectTrigger>
                          <SelectContent>
                            {jobOpenings.map((job) => (
                              <SelectItem key={job.id} value={job.title}>
                                {job.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience
                        </label>
                        <Select 
                          value={applicationData.experience} 
                          onValueChange={(value) => handleInputChange('experience', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-3">2-3 years</SelectItem>
                            <SelectItem value="4-5">4-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter *
                        </label>
                        <Textarea
                          required
                          rows={4}
                          value={applicationData.coverLetter}
                          onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Resume/CV Upload
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">
                            Drop your resume here or click to upload
                          </p>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-earth-green hover:bg-forest-green">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-earth-green text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-4">
                Join Our Growing Team
              </h2>
              <p className="text-xl">
                Be part of Uganda's leading environmental consultancy success story
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg">Years Growing</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg">Employee Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg">Growth Opportunities</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
