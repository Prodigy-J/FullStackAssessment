import express from "express";
import cors from 'cors'

const app = express();
app.use(cors())

const PORT = 3300;

const businesses = [
  {
    id: 1,
    name: "Sam Tailoring Shop",
    category: "Tailoring",
    services: ["Cutting", "Measuring", "Styling"],
    contact: "0776123456",
  },
  {
    id: 2,
    name: "Godwin Auto Services",
    category: "Mechanic",
    services: ["AC Repair", "Wheel Alignment", "Engine Tuning"],
    contact: "0775444555"
  },
  {
    id: 3, 
    name: "Grace Hair Salon",
    category: "Salon",
    services: ["Braiding", "Weaving", "Installation"],
    contact: "0777987456"
  }
];

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.get("/api/businesses", (req, res) => {
  res.json(businesses);
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
