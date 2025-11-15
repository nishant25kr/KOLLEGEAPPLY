const universities = [
  {
    id: 1,
    name: "Sunrise Private University",
    overview: "A NAAC-accredited university offering UG/PG programs.",
    courses: ["B.Tech", "MBA", "BCA", "M.Tech"],
    fees: {
      min: 45000,
      max: 150000
    },
    facilities: ["Hostel", "Wi-Fi", "Library", "Labs"],
    placements: {
      highest: "12 LPA",
      average: "4.5 LPA"
    }
  },
  {
    id: 2,
    name: "Galaxy Institute of Technology",
    overview: "Top-ranked private technical university.",
    courses: ["B.Tech", "MCA", "MBA", "BBA"],
    fees: {
      min: 60000,
      max: 180000
    },
    facilities: ["Hostel", "Canteen", "Sports", "Research Centers"],
    placements: {
      highest: "15 LPA",
      average: "5 LPA"
    }
  }
];

export default universities;
