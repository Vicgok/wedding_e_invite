import { useState } from "react";
import Envelope from "./components/Envelope";
import WaxSeal from "./components/WaxSeal";
import InvitationCard from "./components/InvitationCard";
import FloralDecoration from "./components/FloralDecoration";
import type { WeddingDetails } from "./types/wedding";
import "./App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const weddingData: WeddingDetails = {
    groom: {
      fullName: "Vigneshwaraa K",
      father: "Kottaisamy T",
      mother: "Latha R",
    },
    bride: {
      fullName: "Shabhari Karthiga M.S",
      father: "Sethuraman M",
      mother: "Abirami S",
    },
    event: {
      date: new Date("2026-02-06"),
      time: "8:45 AM - 10:00 AM",
      venue: {
        name: "Grand Empire Convention Hall",
        address:
          "27, Thanjavur Rd, opp.to LIC of India, Kumaran Nagar, Thiruverumbur, Tamil Nadu 620019",
        mapLink: "https://maps.app.goo.gl/84R69sDLGyZBzsDM6",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-[#F5EDE4] to-[#F0E6DC] flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Floral decorations */}
      <FloralDecoration position="top-left" isVisible={!isOpened} />
      <FloralDecoration position="top-right" isVisible={!isOpened} />
      <FloralDecoration position="bottom-left" isVisible={!isOpened} />
      <FloralDecoration position="bottom-right" isVisible={!isOpened} />

      {/* Main content */}
      <div className="relative z-10 w-full">
        <Envelope isOpened={isOpened} onReseal={() => setIsOpened(false)}>
          <InvitationCard isVisible={isOpened} details={weddingData} />
        </Envelope>

        {/* Wax seal - positioned over the envelope */}
        {!isOpened && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <WaxSeal onClick={() => setIsOpened(true)} isOpened={isOpened} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
