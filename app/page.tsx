import Image from "next/image";
import Link from "next/link";

// const covers = [
//   { id: 1, src: "/images/time.jpg", alt: "TIME", href: "https://www.youtube.com/@MattPrasty" },
//   { id: 2, src: "/images/syphon.jpg", alt: "SYPHON", href: "https://www.youtube.com/@MattPrasty"   },
//   { id: 3, src: "/images/afterfive.jpg", alt: "After Five" },
//   { id: 4, src: "/images/hyperlane.jpg", alt: "Hyperlane" },
//   { id: 5, src: "/images/sparkle.jpg", alt: "Sparkle on the Dancefloor" },
//   { id: 6, src: "/images/lovesaysitall.jpg", alt: "Love says it all" }, 
// ];

const albums = [
  { title: "Time", src: "/images/time.jpg", alt: "Time", href: "https://www.youtube.com/watch?v=lQocfJ_rOGw&list=RDlQocfJ_rOGw&start_radio=1" },
  { title: "Syphon", src: "/images/Syphon 2.jpg", alt: "Syphon 2", href: "https://www.youtube.com/watch?v=3ORGYZadXBc&list=RD3ORGYZadXBc&start_radio=1" },
  { title: "Love says It All", src: "/images/lovesaysitall.jpg", alt: "Love Says it All", href: "https://www.youtube.com/@MattPrasty" },
  { title:"After Five", src:"/images/After Five.jpg", alt:"After Five" , href: "https://www.youtube.com/@MattPrasty" },
  { title:"Hyperlane", src:"/images/CD Matt Prasty.png", alt:"Hyperlane" , href: "https://www.youtube.com/@MattPrasty" },
  { title:"Sparkle on the Dancefloor", src:"/images/sparkle.jpg", alt:"Sparkle" , href: "https://www.youtube.com/@MattPrasty" },
  { title:"Coming Soon...", src:"/images/blacksquare.jpg", alt:"Coming Soon" , href: "https://www.youtube.com/@MattPrasty" },
  { title:"Coming Soon...", src:"/images/blacksquare.jpg", alt:"Coming Soon" , href: "https://www.youtube.com/@MattPrasty" },
];
export default function Home() {
  return (
    <div className="font-sans min-h-screen w-full">
      {/* ===== Hero Section ===== */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 blur-sm dark:grayscale"
          src="/images/mp.jpg"
          alt="Background"
          fill
          priority
        />
        <div className="relative z-10 text-center">
          <Image
            className="rounded-full mx-auto mb-6"
            src="/images/1x1mp.jpg"
            alt="Matt Prasty"
            width={180}
            height={180}
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Matt Prasty
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-200">
            Music producer from Indonesia known for nostalgic reinterpretations
            of modern songs — blending city pop, lo-fi, and electronic.
          </p>
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-3xl px-6 py-12 text-center">
          <h2 className="text-3xl text-black font-bold mb-6">About</h2>
          <p className="leading-relaxed text-gray-800 text-lg">
            Matt Prasty creates fresh yet familiar sounds that blur the lines
            between past and future. His unique ability to reimagine modern
            songs with nostalgic vibes has connected with fans worldwide.
          </p>
        </div>
      </section>

      {/* ===== Biography Section ===== */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-3xl px-6 py-12">
          <h2 className="text-3xl text-black font-bold mb-6">Biography</h2>
          <p className="leading-relaxed text-gray-800 text-lg">
            Starting his musical journey in Indonesia, Matt Prasty has worked on
            a variety of genres, from retrowave to lo-fi. His ability to blend
            nostalgia with modern sounds has gained attention from fans
            worldwide. With collaborations and remixes, he continues to expand
            his artistry and bring fresh interpretations to the music scene.
          </p>
        </div>
      </section>

      {/* ===== Portfolio Section ===== */}
      <section className="w-full min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto w-full h-full px-6">
          <h2 className="text-3xl text-black font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/loop.webp"
                alt="Project 1"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  In collaborations with PAIX PER MILL, we transform YVES debut song into a city pop masterpiece.
                </p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/xg.png"
                alt="Project 2"
                width={400}
                height={400}
                className="w-full min-h-full object-cover group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  Working with XG, we reimagine their hit "Puppet Show" into a nostalgic city pop remix.
                </p>
              </div>
            </div>
            {/* Project 3 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/1x1mp.jpg"
                alt="Project 3"
                width={400}
                height={300}
                className="w-full min-h-full object-cover group-hover:scale-105 opacity-30 dark:grayscale transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  More to be announced soon!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Popular Remix Section ===== */}
        <div className="max-w-6xl mx-auto my-h-6xl py-5 px-6">
          <h2 className="text-black text-3xl py-12 font-bold text-center">Popular works</h2>
          <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {/* Remix 1 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Link href="https://www.youtube.com/watch?v=3ORGYZadXBc&list=RD3ORGYZadXBc&start_radio=1" target="_blank" rel="noreferrer">
                <Image
                  src="/images/hype boy.jpg"
                  alt="Remix 1"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </Link>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <a
                  href="https://www.youtube.com/watch?v=3ORGYZadXBc&list=RD3ORGYZadXBc&start_radio=1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 text-center px-4"
                >
                  NewJeans - Hype Boy (Matt Prasty City Pop Remix)
                </a>
              </div>
            </div>
            {/* Remix 2 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/perfectnight.jpg"
                alt="Remix 2"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  LESSERAFIM - Perfect Night (Matt Prasty City Pop Remix)
                </p>
              </div>
            </div>
            {/* Remix 3 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/Newjeansgetup.jpg"
                alt="Remix 3"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  NewJeans - Get Up (Matt Prasty City Pop Remix)
                </p>
              </div>
            </div>
            {/* Remix 4 */}
            <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/illitmagnetic.jpg"
                alt="Remix 4"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">
                  Illit - Magnetic (Matt Prasty City Pop Remix)
                </p>
              </div>
            </div>
          </div>
          <h2 className="text-black text-md py-12 text-center">And many more...</h2>
        </div>

        {/* ===== Original Music Section ===== */}
        <div className="max-w-5xl mx-auto py-5 px-6">

    
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold mb-10 text-black">Original Music</h2>
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            place-items-center
          "
        >
        </div>
      </div>
        

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6">
            {albums.map((album, i) => (
            <div key={i} className="relative rounded-xl bg-white shadow-md overflow-hidden group">
              <Link href={album.href || "#"} target="_blank" rel="noreferrer">
                <Image
                src={album.src}
                alt={album.title}
                width={400}
                height={300}
                 className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 cursor-pointer"
              />
                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                     <span className="text-white text-lg font-semibold text-center px-4">{album.title}</span>
                </div>
              </Link>

            </div>
          ))}

            {/* Original 1 */}
            {/* <div className="relative group bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                src="/images/time.jpg"
                alt="Original 1"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-center px-4">Time</p>
              </div>
            </div> */}
            
          </div>
        </div>
      </section>
     

      {/* ===== Contact Section ===== */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-3xl px-6 py-12 text-center">
          <h2 className="text-3xl text-black font-bold mb-6">Contact</h2>
          <p className="leading-relaxed text-gray-800 text-lg mb-4">
            For inquiries, collaborations, or just to say hi, feel free to reach out!
          </p>
          <a
            href="mailto: mattprasty.music@gmail.com">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Email Me
            </button>
          </a>
        </div>
      </section>
      <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-3xl px-6 py-12 text-center">
          <h2 className="text-3xl text-black font-bold mb-6">Follow Me</h2>
          <p className="leading-relaxed text-gray-800 text-lg mb-4">
            Stay updated with my latest releases and projects by following me on social media!
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://x.com/mattprasty" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Twitter
            </a>
            <a href="https://www.instagram.com/mattprasty" target="_blank" rel="noreferrer" className="text-pink-600 hover:underline">
              Instagram
            </a>
            <a href="https://www.youtube.com/@MattPrasty" target="_blank" rel="noreferrer" className="text-red-600 hover:underline">
              YouTube
            </a>
          </div>
        </div>
      </section>
           

      {/* ===== Footer ===== */}
      <footer className="w-full bg-black text-gray-400 py-6 flex flex-col items-center">
        <div className="flex gap-6 mb-4">
          <a href="https://x.com/mattprasty" target="_blank" rel="noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/mattprasty" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.youtube.com/@MattPrasty" target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Matt Prasty</p>
      </footer>
    </div>
  );
}