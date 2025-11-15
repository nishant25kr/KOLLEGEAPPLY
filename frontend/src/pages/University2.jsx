import { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeesModal from "../components/FeesModal";

export default function University2() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Top Ranked
            </span>
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              AICTE Approved
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Galaxy Institute of Technology
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Top Private Engineering Institute | Great Placements
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModal(true)}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              💰 Check Course-wise Fees
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              📄 Download Brochure
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold rounded-xl hover:from-purple-300 hover:to-pink-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              🎓 Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold text-lg mb-2">Engineering Focus</h3>
            <p className="text-gray-600 text-sm">Specialized technical programs with modern labs</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2">Great Placements</h3>
            <p className="text-gray-600 text-sm">Top companies recruit from our campus annually</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-bold text-lg mb-2">Award Winning</h3>
            <p className="text-gray-600 text-sm">Recognized for innovation and research excellence</p>
          </div>
        </div>

        {/* Lead Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Start Your Engineering Journey
            </h2>
            <p className="text-gray-600">
              Connect with our admissions team to learn more about programs and scholarships
            </p>
          </div>
          <LeadForm universityId={2} />
        </div>
      </div>

      <FeesModal id={2} open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
