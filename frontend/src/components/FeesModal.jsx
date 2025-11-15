import axios from "axios";
import { useState, useEffect } from "react";

export default function FeesModal({ id, open, onClose }) {
  const [fees, setFees] = useState("");

  useEffect(() => {
    if (open) {
      axios.get(`https://your-backend-url/api/universities/${id}/fees`)
      .then(res => setFees(res.data.feeRange));
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Course-wise Fee Range</h2>
        <p>{fees}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
