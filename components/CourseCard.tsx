
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-[10px] font-bold uppercase tracking-wider text-indigo-600 shadow-sm">
            {course.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold text-slate-700">{course.rating}</span>
          <span className="text-sm text-slate-400">({course.students.toLocaleString()})</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3 group-hover:text-indigo-600 transition-colors">
          {course.title}
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <img src={`https://i.pravatar.cc/150?u=${course.id}`} alt={course.instructor} className="w-8 h-8 rounded-full border border-slate-100" />
          <div>
            <p className="text-xs font-semibold text-slate-800">{course.instructor}</p>
            <p className="text-[10px] text-slate-400">{course.level}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="text-xl font-bold text-slate-900">
            ${course.price}
          </div>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
