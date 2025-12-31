import React from 'react';
import { Stethoscope, Calculator, HardHat, Sprout } from 'lucide-react';
import { Course, Testimonial, University } from './types';

export const COLORS = {
  primary: '#0A2647', // Navy Blue
  secondary: '#146C94', // Medical Teal
  accent: '#F2672E', // Burnt Orange
  bg: '#F9F9F9',
};

export const COURSES: Course[] = [
  {
    title: "MBBS",
    description: "Direct admission in WHO & NMC recognized medical colleges with extensive clinical exposure.",
    duration: "5 Years + 1 Year Internship",
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: "BDS (Dental)",
    description: "World-class dental surgery programs featuring modern labs and patient-centric training.",
    duration: "4 Years + 1 Year Internship",
    icon: <Calculator className="w-8 h-8" />, // Using Calc as proxy for precise tools if Dental icon unavailable in simple set
  },
  {
    title: "Engineering",
    description: "Top-tier admission in BUET and other leading technical universities for Civil, CSE, and EEE.",
    duration: "4 Years",
    icon: <HardHat className="w-8 h-8" />,
  },
  {
    title: "Agriculture",
    description: "Join the agricultural revolution with degrees from Bangladesh's renowned agricultural universities.",
    duration: "4 Years",
    icon: <Sprout className="w-8 h-8" />,
  }
];

export const UNIVERSITIES: University[] = [
  {
    id: 1,
    name: "Dhaka National Medical College",
    location: "Dhaka",
    type: "Medical",
    features: ["Dhaka University Affiliated", "Central Location", "Huge Patient Flow"],
    image: "https://future-mbbs.com/wp-content/uploads/2025/09/Copy-of-Untitled-26.png.webp"
  },
  {
    id: 2,
    name: "Enam Medical College",
    location: "Savar",
    type: "Medical",
    features: ["Modern Campus", "1000 Bed Hospital", "High FMGE Pass Rate"],
    image: "https://www.ruseducation.in/wp-content/uploads/2022/01/enam-medical-college-and-hospital.webp"
  },
  {
    id: 3,
    name: "Bangladesh Agricultural University",
    location: "Mymensingh",
    type: "Agriculture",
    features: ["Top Ranked", "Research Focused", "Large Campus"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Islamic University of Technology",
    location: "Gazipur",
    type: "Engineering",
    features: ["OIC Funded", "International Standard", "Scholarships Available"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Aayush Shrestha",
    course: "MBBS",
    university: "Dhaka National Medical College",
    image: "https://picsum.photos/100/100?random=5",
    quote: "Students Helpline made the impossible feel easy. From documentation to my first day in Dhaka, their local team was always there.",
    batch: "Batch of 2018"
  },
  {
    id: 2,
    name: "Priya Gurung",
    course: "BDS",
    university: "City Dental College",
    image: "https://picsum.photos/100/100?random=6",
    quote: "My parents were worried about sending me abroad, but the transparency regarding fees and safety at Students Helpline won their trust.",
    batch: "Batch of 2020"
  },
  {
    id: 3,
    name: "Rohan Mahara",
    course: "Civil Engineering",
    university: "IUT",
    image: "https://picsum.photos/100/100?random=7",
    quote: "The admission process for engineering is competitive. Their guidance on entrance prep was spot on.",
    batch: "Batch of 2021"
  }
];

export const HERO_IMAGES = [
  "https://future-mbbs.com/wp-content/uploads/2025/09/Copy-of-Untitled-26.png.webp",
  "https://www.ruseducation.in/wp-content/uploads/2022/01/enam-medical-college-and-hospital.webp",
  "https://media.licdn.com/dms/image/v2/C511BAQHIFvFJ1Q61hQ/company-background_10000/company-background_10000/0/1584420683974/bangladesh_agricultural_university_cover?e=1766869200&v=beta&t=Io4MVYEKgdl0imF8jn2R7IrZM9ORU4l-BfwKDbNQA0Q",
  "https://scontent.fdel33-1.fna.fbcdn.net/v/t39.30808-6/488576089_1233149658817393_1085561248222875533_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=m6vAxL98wGMQ7kNvwEgdc_H&_nc_oc=AdmRZSnZ_k-RSh9SUyEolPQKJZak2_O2QF7YwnVrDQjDgf1RcwR5OVfl6U3vRVsHDh8&_nc_zt=23&_nc_ht=scontent.fdel33-1.fna&_nc_gid=ffhrTwBMynwW0ZQrAIiTiA&oh=00_AflLrRK0yB2486gqyoPvx141oPK4WoANmtSHXjXepe6Vaw&oe=694CB861",
  "https://www.outlooktravelmag.com/media/bangladesh-1-1611923974.profileImage.2x-jpg-webp.webp",
  "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg",
  "https://cdn.britannica.com/51/148851-050-16F6ADB7/Jatiya-Sangsad-Bhaban-Dhaka-Bangl-Louis-I-1983.jpg"
];

export const NAV_ITEMS: { id: import('./types').Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'packages', label: 'Our Packages' },
  { id: 'universities', label: 'Universities' },
  { id: 'stories', label: 'Success Stories' },
  { id: 'contact', label: 'Contact Us' },
];