import { useState } from "react";
import LandingPage from "./Components/ComponentsPage/LandingPage/LandingPage";
import CardDetails from "./Components/ComponentsPage/CardDetails/CardDetails";

export default function App() {
  const [cardDetails, setCardDetails] = useState(null);

  return (
    <>
      {cardDetails ? (
        <CardDetails
          setCardDetails={setCardDetails}
          cardDetails={cardDetails}
        />
      ) : (
        <LandingPage setCardDetails={setCardDetails} />
      )}
    </>
  );
}
