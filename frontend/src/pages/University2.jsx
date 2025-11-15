import { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeesModal from "../components/FeesModal";

export default function University2() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <h1>Galaxy Institute of Technology</h1>
      <p>Top Private Engineering Institute | Great Placements</p>

      <button onClick={() => setModal(true)}>Check Course-wise Fees</button>
      <button>Download Brochure</button>
      <button>Apply Now</button>

      <LeadForm universityId={2} />

      <FeesModal id={2} open={modal} onClose={() => setModal(false)} />
    </div>
  );
}

