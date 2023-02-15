import Home from "./pages/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="container flex flex-col items-center justify-center max-w-full mx-auto  ">
      <Header />
      <Home />
    </div>
  );
}

export default App;
