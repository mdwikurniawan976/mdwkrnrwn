"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 20,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 100,
    text: "Code commits",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Grid layout */}
        <div className="grid grid-cols-2 gap-6 max-w-[80vw] mx-auto xl:grid-cols-4 xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex flex-col items-center gap-2 xl:items-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-center xl:text-left leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
