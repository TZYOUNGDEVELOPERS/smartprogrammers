"use client"

import React from 'react';
import TopBar from '../components/TopBar';
import MainSection from '../components/MainSection';
import Sidebar from '@/components/Navbar/Nav';
// import Sidebar from '../components/Sidebar';



const MainLayout: React.FC = () => {


// Example usage of the package

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar active="home" /> */}
      <Sidebar/>
   
      {/* Main Content */}
      <div className="ml-16 flex-1">
        <TopBar />
        <MainSection />
      </div>
    
    </div>
  );
};

export default MainLayout;
