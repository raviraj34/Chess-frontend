import React, { useState } from 'react';

type SVGIconProps = {
  className?: string;
};

const ServerOffIcon: React.FC<SVGIconProps> = ({ className }) => (
    <svg 
        className={className} 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M7 22h10"/>
        <path d="M12 18v4"/>
        <path d="M10 4.27a8 8 0 1 0 4.54 11.2"/>
        <path d="M12 2v2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="m5.64 17.66-1.41 1.41"/>
        <path d="m18.36 5.64-1.41 1.41"/>
        <path d="m15 12-3.5 3.5"/>
    </svg>
);


const WebSocketErrorPage: React.FC = () => {
  const [isModalOpen] = useState<boolean>(true);

  const handleRetry = () => {
    window.location.reload();
  };
  
  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center text-center p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      
      <div className="text-gray-700">
          <h1 className="text-6xl font-extrabold">ChessMasters</h1>
          <p>Attempting to connect...</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-10">
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-8 text-center md:ml-6">
            
            <div className="mb-5">
              <ServerOffIcon className="w-20 h-20 mx-auto text-red-500" />
            </div>

            <h1 className="text-3xl font-bold text-white mb-2">
              Connection Lost
            </h1>

            <p className="text-md text-gray-400 mb-8">
              We couldn't connect to the game server. It seems to be temporarily offline. Please try again in a moment.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleRetry}
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg text-md transition duration-300 transform hover:scale-105"
              >
                Try to Reconnect
              </button>
              <button 
                onClick={goHome}
                className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-md transition duration-300"
              >
                Go to Homepage
              </button>



           
           
           
                   </div>
         
         
                 </div>
       
       
        </div>
     
     
     )}
   
    </div>
 
);
}

export default WebSocketErrorPage;
