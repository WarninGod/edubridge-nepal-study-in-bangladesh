import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { COURSES } from '../../constants';
import { usePageContext } from '../../contexts/PageContext';

export const CoursesSection: React.FC = () => {
  const { setPage } = usePageContext();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A2647] mb-3">Target Courses</h2>
          <p className="text-slate-600">Specialized pathways for future professionals.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="text-[#146C94] mb-4 bg-blue-50 w-14 h-14 flex items-center justify-center rounded-lg">{course.icon}</div>
              <h3 className="font-bold text-xl text-[#0A2647] mb-2">{course.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{course.description}</p>
              <p className="text-xs font-semibold text-[#F2672E] uppercase tracking-wide">{course.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
