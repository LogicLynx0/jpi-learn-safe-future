
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { Facebook, Instagram, Whatsapp } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import courses from '@/data/courses';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  cnic: z.string()
    .min(13, { message: 'CNIC must be 13 digits without dashes' })
    .max(13, { message: 'CNIC must be 13 digits without dashes' })
    .regex(/^\d+$/, { message: 'CNIC must contain only numbers' }),
  phone: z.string()
    .min(11, { message: 'Phone number must be at least 11 digits' })
    .regex(/^\d+$/, { message: 'Phone number must contain only numbers' }),
  courseType: z.string({ required_error: 'Please select a course type' }),
  courseId: z.string({ required_error: 'Please select a course' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const ApplyPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      cnic: '',
      phone: '',
      courseType: '',
      courseId: '',
      message: '',
    }
  });

  const { watch, setValue } = form;
  const courseType = watch('courseType');
  
  // Set initial course from URL params if available
  useEffect(() => {
    const courseIdFromUrl = searchParams.get('course');
    if (courseIdFromUrl) {
      const selectedCourse = courses.find(course => course.id === courseIdFromUrl);
      if (selectedCourse) {
        setValue('courseId', courseIdFromUrl);
        setValue('courseType', selectedCourse.type);
      }
    }
  }, [searchParams, setValue]);
  
  // Filter courses based on selected course type
  useEffect(() => {
    if (courseType) {
      setFilteredCourses(courses.filter(course => course.type === courseType));
    } else {
      setFilteredCourses(courses);
    }
  }, [courseType]);

  const onSubmit = (data: FormValues) => {
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', data);
    
    toast.success('Application submitted successfully!', {
      description: 'We will contact you shortly.',
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-institute-blue to-institute-teal text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Apply for Admission</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Fill out the form below to apply for your preferred course at Jhang Polytechnic Institute.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold mb-2">Application Form</h2>
              <p className="text-gray-600">
                Please fill out all the required information to proceed with your application.
              </p>
              
              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-institute-blue">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-institute-blue">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/+923001234567" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500">
                  <Whatsapp size={20} />
                </a>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium border-b pb-2">Personal Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 03001234567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="cnic"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CNIC Number (without dashes)</FormLabel>
                        <FormControl>
                          <Input placeholder="13 digit CNIC number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Course Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium border-b pb-2">Course Selection</h3>
                  
                  <FormField
                    control={form.control}
                    name="courseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Private">Private</SelectItem>
                            <SelectItem value="Govt">Government</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="courseId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Course</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value} disabled={!courseType}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={courseType ? "Select a course" : "First select a course type"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {filteredCourses.map((course) => (
                              <SelectItem key={course.id} value={course.id}>
                                {course.title} ({course.duration})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific questions or information you'd like to share?"
                            className="resize-none h-24"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-institute-blue hover:bg-blue-800">
                  Submit Application
                </Button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            </Form>
          </div>
          
          {/* Help Section */}
          <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Need Assistance?</h3>
                <p className="text-gray-600">
                  Contact our support team if you need help with your application.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button variant="outline" asChild>
                  <a href="tel:+923001234567" className="flex items-center">
                    <span className="mr-2">Helpline</span> +92 300 1234567
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ApplyPage;
