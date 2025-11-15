import { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeesModal from "../components/FeesModal";

export default function University1() {
  const [modal, setModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-orange-500 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              NAAC Accredited
            </span>
            <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              Est. 2005
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Sunrise Private University
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            NAAC Accredited | 50+ Courses | 100% Placement Support
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModal(true)}
              className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              💰 Check Course-wise Fees
            </button>
            <button className="px-8 py-4 bg-orange-700 text-white font-semibold rounded-xl hover:bg-orange-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
              📄 Download Brochure
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-300 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
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
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-lg mb-2">50+ Programs</h3>
            <p className="text-gray-600 text-sm">Wide range of undergraduate and postgraduate courses</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold text-lg mb-2">100% Support</h3>
            <p className="text-gray-600 text-sm">Dedicated placement cell with industry connections</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-lg mb-2">NAAC Accredited</h3>
            <p className="text-gray-600 text-sm">Recognized for academic excellence nationwide</p>
          </div>
        </div>

        {/* Lead Form Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Get Started Today
            </h2>
            <p className="text-gray-600">
              Fill in your details and our counselors will reach out to you within 24 hours
            </p>
          </div>
          <LeadForm universityId={1} />
        </div>
      </div>

      <FeesModal id={1} open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
