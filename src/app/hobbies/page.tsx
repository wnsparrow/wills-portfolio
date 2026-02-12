import Image from "next/image";

const hobbies = [
  { src: "/hobbies/family.jpeg", label: "Hanging with Family", objectClass: "object-[40%_center]" },
  { src: "/hobbies/friends.jpeg", label: "and Friends" },
  { src: "/hobbies/dancing.jpeg", label: "Dancing" },
  { src: "/hobbies/basketball.jpeg", label: "Basketball" },
  { src: "/hobbies/sports.jpeg", label: "Sports" },
  { src: "/hobbies/travel.jpeg", label: "Travel" },
  { src: "/hobbies/food.jpeg", label: "Food" },
  { src: "/hobbies/music.jpeg", label: "Music" },
  { src: "/hobbies/comedy.jpeg", label: "Comedy" },
  { src: "/hobbies/movies.jpeg", label: "Movies" },
];

export default function HobbiesPage() {
  return (
    <div className="px-6 py-12 sm:px-10">
      <main className="mx-auto w-full max-w-6xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Hobbies
        </h1>
        <p className="mt-2 text-white/70">
          Things I enjoy outside of work.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm group"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                className={[
                  "object-cover transition duration-300 group-hover:scale-105",
                  item.objectClass ?? "object-center",
                ].join(" ")}
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 w-full bg-black/60 p-2 text-center text-sm text-white backdrop-blur-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
