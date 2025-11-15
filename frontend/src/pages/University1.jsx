import { useState } from "react";
import LeadForm from "../components/LeadForm";
import FeesModal from "../components/FeesModal";

export default function University1() {
  const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <h1>Sunrise Private University</h1>
      <p>NAAC Accredited | 50+ Courses | 100% Placement Support</p>

      <button onClick={() => setModal(true)}>Check Course-wise Fees</button>
      <button>Download Brochure</button>
      <button>Apply Now</button>

      <LeadForm universityId={1} />

      <FeesModal id={1} open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
