import React from 'react';
import { ChefHat } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <ChefHat size={48} className="text-amber-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-400">LANOS</h1>
          
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/10 border border-white/20"
                />
                <button className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-r-lg hover:bg-amber-300 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;