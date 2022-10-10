import mobile from "./images/image-hero-mobile.png";
import desktop from "./images/image-hero-desktop.png";

function App() {
  return (
    <>
      <section className="grid grid-cols-1 gap-10" >
        <article>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <button>
            Learn more
          </button>
        </article>

        <article>
          <picture>
            <source media="(min-width: 768px)" scrSet={desktop} />
            <img src={mobile} alt="" />
          </picture>
        </article>
      </section>
    </>
  );
}

export default App;
