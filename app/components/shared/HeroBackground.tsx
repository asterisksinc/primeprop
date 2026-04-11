'use client';
import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute -z-10 bg-white inset-x-0 top-0 overflow-hidden pointer-events-none" style={{ height: '945px' }}>
      {/* Ellipse 4 - Cyan */}
      <div 
        className="absolute"
        style={{
          width: '918px',
          height: '919px',
          left: '0px',
          top: '-850px',
          background: '#22C3D8',
          filter: 'blur(300px)', /* Reduced from 532px for browser performance */
          opacity: 0.8
        }}
      />
      {/* Ellipse 3 - Orange */}
      <div 
        className="absolute"
        style={{
          width: '918px',
          height: '919px',
          right: '0px',
          top: '-850px',
          background: '#FF6500',
          filter: 'blur(300px)', /* Reduced from 532px for browser performance */
          opacity: 0.8
        }}
      />
    </div>
  );
}
