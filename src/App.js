import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";

function App() {
  return (
    <>
      <section className="flex flex-col-reverse py-20 md:grid md:gap-10 md:grid-cols-2 md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto" >
        <article className="text-center md:text-left px-5 xl:px-0 mt-10 md:mt-0">
          <h1 className="font-bold text-4xl lg:text-6xl xl:text-7xl mb-5">Make remote work</h1>
          <p className="mb-5">
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black rounded-lg shadow text-white font-bold hover:opacity-75 transition-all duration-150 pt-3 pb-2 px-6 cursor-pointer">
            Learn more
          </button>
        </article>  

        <article>
          <picture>
            <source media="(min-width: 768px)" scrSet={desktop} />
            <img src={mobile} alt="" className="w-full" />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;
