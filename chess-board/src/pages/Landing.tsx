import React from 'react';



type SVGIconProps = {
  className?: string;
};


const MenuIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
);

const UsersIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrophyIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7.03 18 6 18c-1.03 0-1.87.75-2.97.21-.5-.23-.97-.66-.97-1.21V14.66" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 16.97 18 18 18c1.03 0 1.87.75 2.97.21.5-.23.97-.66.97-1.21V14.66" />
    <path d="M9.5 14.5A2.5 2.5 0 0 1 12 12a2.5 2.5 0 0 1 2.5 2.5" />
    <path d="M12 12v- эмоциональн" />
  </svg>
);

const GlobeIcon: React.FC<SVGIconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);



export const Landing: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);


  const heroBgStyles: React.CSSProperties = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1580541832626-2a7131ee809f?q=80&w=2070&auto=format&fit=crop') center center/cover no-repeat`,
  };

  return (
    <div className="bg-gray-900 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            <span className="text-yellow-400">Chess</span>Mate
          </h1>

          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#features" className="hover:text-yellow-400 transition duration-300">Features</a>
            <a href="#how-to-play" className="hover:text-yellow-400 transition duration-300">How to Play</a>
            <a href="#community" className="hover:text-yellow-400 transition duration-300">Community</a>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">Login</button>
          </nav>
         
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 z-10">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a href="#features" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#how-to-play" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>How to Play</a>
              <a href="#community" className="hover:text-yellow-400 transition duration-300" onClick={() => setIsMenuOpen(false)}>Community</a>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg transition duration-300">Login</button>
            </nav>
          </div>
        )}
      </header>


      <main style={heroBgStyles}>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              Your Move. Your Victory.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Challenge players from around the globe, climb the leaderboards, and become a true Chess Master. The ultimate online chess experience awaits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => {
                window.location.href = '/game';
              }} className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                Play a Game Now
              </button>
              <button onClick={() => {
                window.location.href = '/game';
              }} className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                Create a Private Room
              </button>
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-2">Why Play Here?</h2>
          <p className="text-gray-400 mb-12">We offer the best features for a seamless chess experience.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <GlobeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Matchmaking</h3>
              <p className="text-gray-400">Find an opponent of your skill level in seconds, any time of day.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TrophyIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Competitive Ladders</h3>
              <p className="text-gray-400">Track your ELO rating, compete in seasons, and earn rewards.</p>
            </div>
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-yellow-500 text-gray-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Play With Friends</h3>
              <p className="text-gray-400">Easily create private lobbies and challenge your friends directly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Get Started in 30 Seconds</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex items-center flex-col text-center">
              <div className="text-5xl font-extrabold text-yellow-400 mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="max-w-xs text-gray-400">A quick, free sign-up gets you into the action.</p>
            </div>
            <div className="text-gray-600 text-4xl hidden md:block">&rarr;</div>
            <div className="flex items-center flex-col text-center">
              <div className="text-5xl font-extrabold text-yellow-400 mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Find a Match</h3>
              <p className="max-w-xs text-gray-400">Click "Play" to be instantly paired with another player.</p>
            </div>
            <div className="text-gray-600 text-4xl hidden md:block">&rarr;</div>
            <div className="flex items-center flex-col text-center">
              <div className="text-5xl font-extrabold text-yellow-400 mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Claim Victory</h3>
              <p className="max-w-xs text-gray-400">Outsmart your opponent and say "Checkmate!"</p>
            </div>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2025 ChessMate. All Rights Reserved. Built for the love of the game.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

