
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
          <h3 className="text-lg font-semibold text-institute-text">Filter Courses</h3>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium mb-2 text-institute-text">Category:</h4>
          <TabsList className="grid w-full grid-cols-3 bg-institute-light">
            <TabsTrigger 
              value="All"
              className="data-[state=active]:bg-institute-blue data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="Tech"
              className="data-[state=active]:bg-institute-blue data-[state=active]:text-white"
            >
              Tech
            </TabsTrigger>
            <TabsTrigger 
              value="Safety"
              className="data-[state=active]:bg-institute-orange data-[state=active]:text-white"
            >
              Safety
            </TabsTrigger>
          </TabsList>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2 text-institute-text">Type:</h4>
          <div className="flex gap-2">
            <Button 
              variant={selectedType === 'All' ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType('All')}
              className={selectedType === 'All' ? 'bg-institute-blue hover:bg-institute-blue-dark text-white' : 'border-institute-blue text-institute-blue hover:bg-institute-light'}
            >
              All
            </Button>
            <Button 
              variant={selectedType === 'Private' ? "default" : "outline"} 
              size="sm"
              onClick={() => setSelectedType('Private')}
              className={selectedType === 'Private' ? 'bg-institute-blue hover:bg-institute-blue-dark text-white' : 'border-institute-blue text-institute-blue hover:bg-institute-light'}
            >
              Private
            </Button>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CourseFilter;
