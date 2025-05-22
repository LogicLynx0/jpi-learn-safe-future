
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Award, CheckCircle } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import courses from '@/data/courses';
import CourseCard from '@/components/CourseCard';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find((c) => c.id === courseId);
  
  // Find related courses (same category, but not the current course)
  const relatedCourses = courses
    .filter((c) => c.category === course?.category && c.id !== course?.id)
    .slice(0, 3);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="container mx-auto px-4 py-12 text-center flex-grow">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const courseOutline = [
    {
      title: "Introduction",
      content: `Introduction to ${course.title} and overview of what you'll learn.`
    },
    {
      title: "Core Concepts",
      content: `Fundamental concepts and principles of ${course.category === 'Tech' ? 'technology' : 'safety'} that form the foundation of this course.`
    },
    {
      title: "Practical Applications",
      content: "Hands-on projects and real-world applications to reinforce your learning."
    },
    {
      title: "Advanced Topics",
      content: "In-depth exploration of advanced concepts and specialized techniques."
    },
    {
      title: "Final Project",
      content: "Comprehensive final project that demonstrates your mastery of the course material."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <Link to="/courses" className="text-institute-blue hover:text-blue-800 flex items-center text-sm">
            <ArrowLeft size={16} className="mr-1" /> Back to Courses
          </Link>
        </div>
      </div>
      
      {/* Course Header */}
      <section className="bg-gradient-to-r from-institute-blue to-institute-teal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <div className="flex gap-2 mb-3">
                <Badge variant={course.category === 'Tech' ? 'default' : 'outline'} className={`${course.category === 'Tech' ? 'bg-white text-institute-blue' : 'bg-institute-orange text-white'}`}>
                  {course.category}
                </Badge>
                <Badge variant="outline" className={`${course.type === 'Private' ? 'bg-white text-gray-800' : 'bg-white text-institute-teal border-white'}`}>
                  {course.type}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg opacity-90 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Clock className="mr-2" size={20} />
                  <span>Duration: {course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2" size={20} />
                  <span>Regular Batches Available</span>
                </div>
                <div className="flex items-center">
                  <Award className="mr-2" size={20} />
                  <span>Certificate Upon Completion</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-institute-blue hover:bg-gray-100">
                <Link to={`/apply?course=${course.id}`}>Apply for this Course</Link>
              </Button>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Features */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Course Features</h2>
                <ul className="space-y-3">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Course Outline */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Course Outline</h2>
                <Accordion type="single" collapsible className="w-full">
                  {courseOutline.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <span className="text-left font-medium">{section.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 py-2">{section.content}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              
              {/* Requirements & Prerequisites */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4">Requirements & Prerequisites</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-institute-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Basic computer literacy and familiarity with operating systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-institute-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Access to a computer for practice and assignments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-institute-blue mr-2 mt-1 flex-shrink-0" />
                    <span>Commitment to dedicate sufficient time for learning and practice</span>
                  </li>
                  {course.category === 'Tech' && (
                    <li className="flex items-start">
                      <CheckCircle size={16} className="text-institute-blue mr-2 mt-1 flex-shrink-0" />
                      <span>Basic understanding of {course.title.includes("Web") ? "internet technologies" : course.title.includes("Graphics") ? "design principles" : "relevant field"}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Apply Now CTA */}
              <div className="bg-gray-100 p-6 rounded-lg shadow border border-gray-200">
                <h3 className="text-xl font-bold mb-3">Ready to Enroll?</h3>
                <p className="text-gray-600 mb-4">
                  Start your professional journey today with our {course.title} course.
                </p>
                <Button asChild className="w-full bg-institute-blue hover:bg-blue-800">
                  <Link to={`/apply?course=${course.id}`}>Apply Now</Link>
                </Button>
              </div>
              
              {/* Course Info */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Course Information</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{course.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium">{course.type}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Certification:</span>
                    <span className="font-medium">{course.type === 'Govt' ? 'Government' : 'Institute'} Certificate</span>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold mb-3">Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Contact our admissions team for more information about this course.
                </p>
                <div className="text-institute-blue font-bold">
                  +92 300 1234567
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Courses */}
      {relatedCourses.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-10 bg-institute-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-2">Start Your Learning Journey Today</h2>
              <p className="opacity-90">
                Take the first step towards a rewarding career in {course.category.toLowerCase()}.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
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

export default CourseDetailPage;
