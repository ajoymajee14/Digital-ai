import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { courses, categoriesList } from '../data/mockData';
import { Course } from '../types';

interface CourseLibraryViewProps {
  setCurrentView: (view: string) => void;
  setSelectedCourse: (course: Course) => void;
}

export function CourseLibraryView({ setCurrentView, setSelectedCourse }: CourseLibraryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [onlySubscription, setOnlySubscription] = useState(false);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesSub = !onlySubscription || course.isSubscriptionIncluded;

      return matchesSearch && matchesCategory && matchesLevel && matchesSub;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.studentsCount - a.studentsCount;
      if (sortBy === 'rated') return b.rating - a.rating;
      if (sortBy === 'newest') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLevel, sortBy, onlySubscription]);

  return (
    <div className="min-h-screen bg-white text-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Explore The Library</h1>
          <p className="text-slate-600 text-sm mt-3">Discover practical courses taught by industry veterans to master future skills.</p>
        </div>

        {/* Search & Main Filter Bar */}
        <div className="bg-[#F0FDF4] border border-emerald-200 rounded-3xl p-6 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search courses, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-emerald-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white border border-emerald-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none shadow-sm"
              >
                <option value="All">All Categories</option>
                {categoriesList.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>

              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-white border border-emerald-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none shadow-sm"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>

              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-emerald-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 focus:outline-none shadow-sm"
              >
                <option value="popular">Most Popular</option>
                <option value="rated">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-emerald-200 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input 
                type="checkbox" 
                checked={onlySubscription}
                onChange={(e) => setOnlySubscription(e.target.checked)}
                className="rounded border-emerald-300 bg-white text-emerald-600 focus:ring-0"
              />
              <span>Included With Pro Pass Subscription</span>
            </label>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">Showing {filteredCourses.length} courses</span>
          </div>
        </div>

        {/* Course Grid (Responsive: 1 col mobile, 2 col tablet, 3-4 col desktop) */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-[#F0FDF4] border border-emerald-200 rounded-3xl">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900">No courses found</h3>
            <p className="text-xs text-slate-600 mt-1">Try adjusting your search criteria or filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedLevel('All'); setOnlySubscription(false); }}
              className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                onClick={() => { setSelectedCourse(course); setCurrentView('course-detail'); }}
                className="group bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-emerald-700 border border-emerald-200 shadow-sm">
                    {course.category}
                  </div>
                  {course.isSubscriptionIncluded && (
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                      PRO PASS
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1 text-amber-500 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-current" /> {course.rating}
                      </span>
                      <span>•</span>
                      <span>{course.duration}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Price</span>
                      <span className="text-sm font-extrabold text-slate-900">₹{course.price.toLocaleString()}</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
