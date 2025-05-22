
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '@/data/courses';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="h-full flex flex-col hover-scale overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Badge variant={course.category === 'Tech' ? 'default' : 'outline'} className={`${course.category === 'Tech' ? 'bg-institute-blue' : 'bg-institute-orange text-white'}`}>
            {course.category}
          </Badge>
          <Badge variant="outline" className={`${course.type === 'Private' ? 'bg-white text-gray-800' : 'bg-institute-teal text-white'}`}>
            {course.type}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-lg font-bold line-clamp-2">{course.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">{course.description}</p>
        <div className="flex items-center text-sm text-gray-600">
          <Clock size={16} className="mr-1" />
          <span>{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/course/${course.id}`} className="flex items-center justify-center">
            View Details <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
