import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <nav className="px-6 py-4 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            EduConnect
          </h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 transition">
              About
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              University Match
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore top-ranked universities, compare programs, and take the first step toward your dream career.
          </p>
        </div>

        {/* University Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* University 1 Card */}
          <Link to="/unit1" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-pink-500 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                    NAAC Accredited
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  Sunrise Private University
                </h3>
                <p className="text-gray-600 mb-4">
                  Premier institution offering 50+ diverse programs with guaranteed placement support
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      📚 50+ Courses
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      💼 100% Support
                    </span>
                  </div>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* University 2 Card */}
          <Link to="/unit2" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                    Top Ranked
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition">
                  Galaxy Institute of Technology
                </h3>
                <p className="text-gray-600 mb-4">
                  Leading engineering college with industry partnerships and exceptional placement records
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      🎓 Engineering
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      🚀 Great Placements
                    </span>
                  </div>
                  <span className="text-purple-600 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 text-sm mt-1">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">10K+</div>
            <div className="text-gray-600 text-sm mt-1">Students Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">95%</div>
            <div className="text-gray-600 text-sm mt-1">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">24/7</div>
            <div className="text-gray-600 text-sm mt-1">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
