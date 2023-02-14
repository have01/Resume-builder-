import Navbar from "./components/navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="container flex flex-col items-center justify-center max-w-full mx-auto  ">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
