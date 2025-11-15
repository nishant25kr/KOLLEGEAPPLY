import { useState } from "react";
import axios from "axios";

export default function LeadForm({ universityId }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    intake: "",
    consent: false
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://YOUR-PIPEDREAM-ENDPOINT.m.pipedream.net",
        { ...form, universityId }
      );

      setMsg("Submitted Successfully!");
    } catch (err) {
      setMsg("Error submitting form!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" type="number" placeholder="Phone (10-digit)" maxLength="10" onChange={handleChange} required />
        <input name="state" placeholder="State" onChange={handleChange} required />
        <input name="course" placeholder="Course Interested" onChange={handleChange} required />
        <input name="intake" placeholder="Intake Year" onChange={handleChange} required />

        <label>
          <input type="checkbox" name="consent" onChange={handleChange} required />  
          I agree to be contacted.
        </label>

        <button type="submit">Submit</button>
      </form>

      {msg && <p>{msg}</p>}
    </>
  );
}
