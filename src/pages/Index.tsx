
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import CourseFilter from '@/components/CourseFilter';
import courses from '@/data/courses';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredCourses = courses.filter((course) => {
    const categoryFilter = selectedCategory === 'All' || course.category === selectedCategory;
    const typeFilter = selectedType === 'All' || course.type === selectedType;
    return categoryFilter && typeFilter;
  }).slice(0, 6); // Only show 6 courses on homepage

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-institute-blue to-institute-teal text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Shape Your Future with Quality Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join Jhang Polytechnic Institute for innovative tech and safety courses designed for tomorrow's workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-institute-blue hover:bg-gray-100">
                <Link to="/courses">Browse Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-right-bottom opacity-10"
             style={{ backgroundImage: "url(/placeholder.svg)" }}>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of professional courses designed to help you excel in tech and safety industries.
            </p>
          </div>
          
          {/* Course Filters */}
          <CourseFilter 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            className="mb-8"
          />
          
          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="default" className="bg-institute-blue hover:bg-blue-800">
              <Link to="/courses" className="flex items-center">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose JPI?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer hands-on training, industry-relevant curriculum, and experienced instructors to prepare you for in-demand careers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">Our courses are designed in consultation with industry experts to ensure relevant, up-to-date content.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Instructors</h3>
              <p className="text-gray-600">Learn from professionals with extensive experience in their respective fields.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">Get assistance with job placement and career advancement after completing your course.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Affiliations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Affiliations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to be affiliated with these respected organizations that recognize our commitment to quality education.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {/* Replace these with actual partner logos */}
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-gray-400 text-xs text-center">Partner Logo</div>
            </div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-gray-400 text-xs text-center">Partner Logo</div>
            </div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-gray-400 text-xs text-center">Partner Logo</div>
            </div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="text-gray-400 text-xs text-center">Partner Logo</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our campus located in the heart of Jhang. We're easily accessible by public transport.
            </p>
          </div>
          
          <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54803.30203213755!2d72.30107865699694!3d31.279806999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922322fafb280c9%3A0x153b15b5d26d430c!2sJhang%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1653383733684!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Jhang Polytechnic Institute Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-institute-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-lg opacity-90">
                Join thousands of students who have already boosted their careers with our courses.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <Button asChild size="lg" className="bg-white text-institute-blue hover:bg-gray-100">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
