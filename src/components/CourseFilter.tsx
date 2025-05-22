
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface CourseFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  className?: string;
}

const CourseFilter: React.FC<CourseFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  className
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Filter Courses</h3>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2">Category:</h4>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Tech">Tech</TabsTrigger>
            <TabsTrigger value="Safety">Safety</TabsTrigger>
          </TabsList>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Type:</h4>
          <div className="flex gap-2">
            <Button 
              variant={selectedType === 'All' ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType('All')}
              className={selectedType === 'All' ? 'bg-institute-blue hover:bg-blue-800' : ''}
            >
              All
            </Button>
            <Button 
              variant={selectedType === 'Private' ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType('Private')}
              className={selectedType === 'Private' ? 'bg-institute-blue hover:bg-blue-800' : ''}
            >
              Private
            </Button>
            <Button 
              variant={selectedType === 'Govt' ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType('Govt')}
              className={selectedType === 'Govt' ? 'bg-institute-blue hover:bg-blue-800' : ''}
            >
              Govt
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CourseFilter;
