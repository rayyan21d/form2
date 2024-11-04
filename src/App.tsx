import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <>
      <main className="flex flex-col bg-blue-900 min-h-screen">
        <Navbar />
        <section className="flex items-center justify-center">
          <Form />
        </section>
      </main>
    </>
  );
}

export default App;
