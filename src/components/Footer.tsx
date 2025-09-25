import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-gradient-to-b from-blue-950/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          {/* 연락처 정보 */}
          <div className="mb-6">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
              {/* 회장 정보 */}
              <div className="flex items-center gap-2 group">
                <span className="text-gray-300 font-semibold">회장</span>
                <span className="font-medium text-white">장현진</span>
                <span className="text-gray-600">|</span>
                <a 
                  href="tel:010-6280-2258" 
                  className="hover:text-blue-400 transition-all duration-300 flex items-center gap-1 group-hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  010-6280-2258
                </a>
              </div>
              
              {/* 구분선 */}
              <span className="hidden lg:block text-gray-600">•</span>
              
              {/* 대표이사 정보 */}
              <div className="flex items-center gap-2 group">
                <span className="text-gray-300 font-semibold">대표이사</span>
                <span className="font-medium text-white">최수환</span>
                <span className="text-gray-600">|</span>
                <a 
                  href="tel:010-2604-6685" 
                  className="hover:text-blue-400 transition-all duration-300 flex items-center gap-1 group-hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  010-2604-6685
                </a>
              </div>
            </div>
          </div>
          
          {/* 구분선 */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-4"></div>
          
          {/* 저작권 정보 */}
          <p className="text-sm">
            © 2016 HorizonSeaweed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;