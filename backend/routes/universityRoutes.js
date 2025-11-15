import express, { Router } from "express";
import universities from "../data/universities.js";

const router = Router();

// List all universities
router.get("/", (req, res) => {
  res.json(universities);
});

// Get fees by ID
router.get("/:id/fees", (req, res) => {
  const uni = universities.find(u => u.id == req.params.id);
  if (!uni) return res.status(404).json({ message: "Not Found" });

  res.json({
    university: uni.name,
    feeRange: `${uni.fees.min} - ${uni.fees.max}`
  });
});

export default router;
