import MainButton from "./components/ui/MainButton";

function App() {
  return (
    <>
      <section className="main-section">
        <div className="main-container">
          {/* Headings */}
          <div className="">
            <h1 className="h1">This is heading 1</h1>
            <h2 className="h2">This is heading 2</h2>
            <h3 className="h3">This is heading 3</h3>
            <h4 className="h4">This is heading 4</h4>
            <h5 className="h5">This is heading 5</h5>
          </div>

          {/* Text sizes */}
          <div className="flex flex-col gap-xs">
            <p className="text-xs">This is text xs</p>
            <p className="text-s">This is text s</p>
            <p className="text-m">This is text m</p>
            <p className="text-l">This is text l</p>
            <p className="text-xl">This is text xl</p>
          </div>

          {/* Real content example */}
          <div>
            <h2 className="heading-2">Example paragraph</h2>

            <p className="text-m">
              This is a normal paragraph using your medium text size. It should
              scale smoothly across screen sizes thanks to clamp().
            </p>

            <p className="text-s">This is supporting text, slightly smaller.</p>

            <p className="text-xs">This is extra small helper text.</p>
          </div>

          <div>
            <MainButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
