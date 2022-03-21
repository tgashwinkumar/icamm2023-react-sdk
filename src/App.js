import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import ShapeDivider from "./components/ShapeDivider";
import "./styles/tailwind.output.css";

const App = () => {
  return (
    <main className="w-screen h-screen  overflow-x-hidden">
      <Section1 />
      <div className="translate-y-0 hidden lg:block">
        <ShapeDivider />
      </div>
      {/* Important Dates */}
      <Section2 />
      {/* About the Institution */}
      <Section3 />
      {/* About the Department */}
      <Section4 />
      {/* Theme of Conference */}
      <Section5 />
      {/* Important Topics */}
      <Section6 />
    </main>
  );
};

export default App;
