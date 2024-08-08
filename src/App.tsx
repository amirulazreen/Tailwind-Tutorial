import { FirstSection } from "./components/FirstSection";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { LastSection } from "./components/LastSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";

function App() {
  return (
    <>
      <Header />;
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
