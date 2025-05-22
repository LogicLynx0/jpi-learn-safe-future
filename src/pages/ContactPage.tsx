
import React from 'react';
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
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string()
    .min(11, { message: 'Phone number must be at least 11 digits' })
    .regex(/^\d+$/, { message: 'Phone number must contain only numbers' }),
  inquiryType: z.string({ required_error: 'Please select an inquiry type' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    }
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', data);
    
    toast.success('Message sent successfully!', {
      description: 'We will get back to you soon.',
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-institute-blue to-institute-teal text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Have questions about our courses? Want to learn more about JPI? We're here to help! Reach out to us using the form below or through our contact information.
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <MapPin size={20} className="text-institute-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-gray-600">123 Education Street, Jhang, Punjab, Pakistan</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Phone size={20} className="text-institute-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-gray-600">
                        <a href="tel:+923001234567" className="hover:text-institute-blue">+92 300 1234567</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Mail size={20} className="text-institute-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@jhanginstitute.com" className="hover:text-institute-blue">info@jhanginstitute.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-institute-blue hover:bg-institute-blue hover:text-white transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-institute-blue hover:bg-institute-blue hover:text-white transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="https://wa.me/+923001234567" target="_blank" rel="noopener noreferrer" className="bg-blue-100 p-3 rounded-full text-institute-blue hover:bg-green-500 hover:text-white transition-colors">
                      <Whatsapp size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white rounded-lg shadow-md p-6 h-80">
                <h2 className="text-2xl font-bold mb-4">Our Location</h2>
                <div className="h-56 bg-gray-300 rounded overflow-hidden">
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
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    name="inquiryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="General">General Inquiry</SelectItem>
                            <SelectItem value="Admission">Admission Query</SelectItem>
                            <SelectItem value="Suggestion">Suggestion</SelectItem>
                            <SelectItem value="Complaint">Complaint</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Write your message here..."
                            className="resize-none h-32"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-institute-blue hover:bg-blue-800">
                    Send Message
                  </Button>
                </form>
              </Form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Our team will get back to you within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Opening Hours */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Office Hours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Weekdays</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Weekends</h3>
                <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Feel free to visit our campus during office hours for in-person inquiries or to take a tour of our facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-institute-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Enroll?</h2>
            <p className="text-lg opacity-90 mb-6">
              Start your journey with JPI today. Apply for any of our tech or safety courses.
            </p>
            <Button asChild size="lg" className="bg-white text-institute-blue hover:bg-gray-100">
              <a href="/apply">Apply Now</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
