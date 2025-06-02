
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import CourseFilter from '@/components/CourseFilter';
import courses from '@/data/courses';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter to only show private courses for now
  const availableCourses = courses.filter(course => course.type === 'Private');

  // Initialize filters from URL parameters
  useEffect(() => {
    const category = searchParams.get('category');
    const type = searchParams.get('type');
    
    if (category) setSelectedCategory(category);
    if (type) setSelectedType(type);
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    
    if (selectedType !== 'All') {
      params.set('type', selectedType);
    }
    
    setSearchParams(params);
  }, [selectedCategory, selectedType, setSearchParams]);

  const filteredCourses = availableCourses.filter((course) => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesType = selectedType === 'All' || course.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-institute-blue to-institute-orange text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Courses</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Explore our comprehensive range of tech and safety courses designed to prepare you for success in today's competitive job market.
          </p>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-12 bg-institute-light flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-institute-gray" />
                  <Input
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 border-gray-300 focus:border-institute-blue focus:ring-institute-blue"
                  />
                </div>
                
                <CourseFilter
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                />
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4 text-institute-text">Need Help?</h3>
                <p className="text-institute-text-muted text-sm mb-4">
                  Contact our admissions team for guidance on selecting the right course for your career goals.
                </p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-institute-text">Call us at:</p>
                  <p className="text-institute-blue font-bold">+92 300 1234567</p>
                </div>
              </div>
            </div>
            
            {/* Course Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-institute-text">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} {selectedCategory !== 'All' ? `in ${selectedCategory}` : ''}
                </h2>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <h3 className="text-xl font-bold mb-2 text-institute-text">No courses found</h3>
                  <p className="text-institute-text-muted">
                    Try adjusting your search or filter criteria to find more courses.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CoursesPage;
