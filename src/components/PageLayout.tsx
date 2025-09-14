// src/components/PageLayout.tsx
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen grid grid-cols-[1fr_minmax(auto,_1400px)_1fr] bg-background">
      {/* Left Side Panel */}
      <div className="bg-navy relative overflow-hidden">
        {/* Opacity slightly increased for contrast */}
        <div className="absolute inset-0 bg-[url('@/assets/diamond-pattern-small.png')] bg-repeat opacity-[0.05]"></div> 
      </div>

      {/* Main Content Area - Now with rounded corners and distinct styling */}
      <main className="bg-white shadow-2xl z-10 rounded-xl mx-8 my-8 overflow-hidden border border-gray-100">
        {children}
      </main>

      {/* Right Side Panel */}
      <div className="bg-navy relative overflow-hidden">
        {/* Opacity slightly increased for contrast */}
        <div className="absolute inset-0 bg-[url('@/assets/diamond-pattern-small.png')] bg-repeat opacity-[0.05]"></div>
      </div>
    </div>
  );
};

export default PageLayout;