import React from "react";
import { ChefHat, Mail, Phone } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <ChefHat size={48} className="text-amber-400" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-400">
            LANOS
          </h1>
          <p className="text-lg md:text-xl mb-2">
            We're bringing you modular kitchen solutions at a price-friendly
            range for everyone. Stay tuned as we build something exceptional
          </p>
          <div className="mb-2">
            <div className="flex items-center justify-center gap-2">
              <Phone size={20} className="text-amber-400" />
              <p>
                <span className="font-semibold">Phone:</span> +91 7714001442,
                +91 9589027413
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={20} className="text-amber-400" />
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:sales@lanos.in"
                  className="text-amber-400 hover:underline"
                >
                  sales@lanos.in
                </a>
              </p>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-lg">
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email for updates"
                  className="flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/10 border border-white/20"
                />
                <button className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg sm:rounded-r-lg hover:bg-amber-300 transition-colors">
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
