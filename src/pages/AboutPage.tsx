
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-institute-blue to-institute-teal text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Jhang Polytechnic Institute</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            We're dedicated to providing high-quality education in technology and safety courses to prepare students for successful careers.
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To empower individuals with the knowledge and skills necessary to excel in the fields of technology and safety through practical, industry-relevant education.
              </p>
              <p className="text-gray-600">
                We strive to create an inclusive learning environment where innovation and practical application are prioritized, preparing our students for the demands of today's workforce.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To be the leading educational institute in Jhang and surrounding areas, recognized for excellence in technical and safety education.
              </p>
              <p className="text-gray-600">
                We aim to be at the forefront of innovation in education, continuously adapting our teaching methodologies and curriculum to meet the evolving needs of industries and society.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Jhang Polytechnic Institute was established in 2010 with a vision to provide quality technical education to the youth of Jhang and surrounding areas. What started as a small institute with just a few courses has now grown into a comprehensive educational facility offering a wide range of programs in technology and safety.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we have continuously evolved our curriculum and teaching methodologies to keep pace with the rapidly changing technological landscape and industry requirements. Our commitment to excellence has helped us build a reputation for producing skilled professionals who are ready to meet the challenges of the modern workplace.
              </p>
              <p className="text-gray-600">
                Today, JPI stands as a testament to our dedication to education and our belief in the transformative power of knowledge. We continue to expand our offerings and enhance our facilities to provide our students with the best possible educational experience.
              </p>
            </div>
            
            {/* Timeline */}
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-institute-blue"></div>
              
              {/* Timeline Item 1 */}
              <div className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-institute-blue border-4 border-white"></div>
                <div className="ml-auto mr-auto w-1/2 pr-8 md:pr-16 text-right">
                  <h3 className="text-xl font-bold mb-2">2010</h3>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Establishment of Jhang Polytechnic Institute with initial focus on basic computer courses.</p>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 2 */}
              <div className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-institute-blue border-4 border-white"></div>
                <div className="ml-auto mr-auto w-1/2 pl-8 md:pl-16 md:ml-1/2">
                  <h3 className="text-xl font-bold mb-2">2015</h3>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Expansion of course offerings to include advanced technology programs and safety courses.</p>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-institute-blue border-4 border-white"></div>
                <div className="ml-auto mr-auto w-1/2 pr-8 md:pr-16 text-right">
                  <h3 className="text-xl font-bold mb-2">2018</h3>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Partnership with government agencies to offer certified government courses.</p>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 4 */}
              <div className="relative mb-12">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-6 h-6 rounded-full bg-institute-blue border-4 border-white"></div>
                <div className="ml-auto mr-auto w-1/2 pl-8 md:pl-16 md:ml-1/2">
                  <h3 className="text-xl font-bold mb-2">2023</h3>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <p>Modernization of facilities and introduction of cutting-edge courses in digital technology.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose JPI?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">State-of-the-Art Facilities</h3>
              <p className="text-gray-600">
                Modern classrooms, computer labs, and practical training facilities equipped with the latest technology.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our courses are regularly updated to reflect the latest industry trends and employer requirements.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from instructors with extensive industry experience and passion for teaching.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Recognized Certifications</h3>
              <p className="text-gray-600">
                Earn certificates that are recognized by employers and government agencies, enhancing your employability.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Career Support</h3>
              <p className="text-gray-600">
                Comprehensive career guidance, job placement assistance, and networking opportunities with industry partners.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-institute-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">
                Courses offered in morning, evening, and weekend batches to accommodate different schedules and needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section - Optional */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Take a Tour of Our Institute</h2>
            <p className="text-gray-600 mb-8">
              Get a glimpse of our facilities, classrooms, and the learning environment at JPI.
            </p>
            
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg shadow-md overflow-hidden">
              {/* Placeholder for video - replace with actual video in production */}
              <div className="w-full h-80 bg-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-center p-4">
                  <svg className="w-16 h-16 mx-auto opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="mt-4">Video Tour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-institute-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-3">Ready to Start Your Learning Journey?</h2>
              <p className="text-lg opacity-90">
                Join Jhang Polytechnic Institute today and take the first step towards a successful career.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-institute-blue hover:bg-gray-100">
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
