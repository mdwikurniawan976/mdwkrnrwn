"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiTrophy, BiMedal, BiBook, BiCodeBlock } from "react-icons/bi";

const achievements = [
  {
    title: "1st Place ITSSB",
    institution: "Pasuruan Regional Education Office",
    year: "2024",
    badge: "Winner",
    image: "/assets/achievement/juara1.png",
    icon: <BiTrophy className="text-2xl text-white" />,
  },
  {
    title: "Gold Medal",
    institution: "Puskanas",
    year: "2024",
    badge: "Winner",
    image: "/assets/achievement/goldmedal.png",
    icon: <BiMedal className="text-2xl text-white" />,
  },
  {
    title: "Bootcamp LKS ITSSB",
    institution: "PT. Universal Big Data",
    year: "2024",
    badge: "Bootcamp",
    image: "/assets/achievement/batch1.png",
    icon: <BiBook className="text-2xl text-white" />,
  },
  {
    title: "Web Design",
    institution: "UPTKK, East Java Provincial Education Office",
    year: "2024",
    badge: "Participant",
    image: "/assets/achievement/upt.png",
    icon: <BiCodeBlock className="text-2xl text-white" />,
  },
  {
    title: "Bootcamp LKS ITSSB",
    institution: "PT. Universal Big Data",
    year: "2024",
    badge: "Bootcamp",
    image: "/assets/achievement/batch2.png",
    icon: <BiBook className="text-2xl text-white" />,
  },
  {
    title: "7th Place ITSSB",
    institution: "East Java Provincial Education Office",
    year: "2024",
    badge: "Participant",
    image: "/assets/achievement/prov.jpg",
    icon: <BiBook className="text-2xl text-white" />,
  },
];

const Achievements = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container p-2 mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}>
        <h1 className="relative mx-auto text-3xl font-bold text-center text-white w-fit">
          My Achievements
          <span className="block w-12 h-1 mx-auto mt-1 rounded-full bg-accent"></span>
        </h1>
        <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div key={index} className="overflow-hidden bg-white shadow-lg rounded-xl">
              {/* Gambar Sertifikat - Klik untuk membuka modal */}
              <div className="relative cursor-pointer" onClick={() => setSelectedImage(item.image)}>
                <Image src={item.image} alt={item.title} width={500} height={400} className="object-cover w-full aspect-video rounded-t-xl" />
                <span className="absolute px-3 py-1 text-sm text-white rounded-full bg-accent top-2 right-2">{item.badge}</span>
              </div>

              {/* Konten Kartu */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 text-white rounded-lg bg-accent">{item.icon}</span>
                  <h2 className="text-xl font-bold text-gray-600">{item.title}</h2>
                </div>
                <p className="text-gray-600">{item.institution}</p>
                <p className="mt-2 font-semibold text-accent">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal Popup */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-4 bg-white rounded-lg shadow-lg">
            <button
              className="absolute px-2 py-1 text-white bg-red-500 rounded-lg top-2 right-2"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <Image src={selectedImage} alt="Popup Image" width={600} height={400} className="rounded-lg" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Achievements;