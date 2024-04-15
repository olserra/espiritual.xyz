import React, { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/context";
import PrivacyModal from "@/components/PrivacyModal";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../lib/apolloClient";
import "../styles/global.css";
import { FocusProvider } from "@/context/FocusContext";

interface AppProps {
  Component: React.ComponentType;
  pageProps: {
    session: any; // Replace 'any' with a more specific type if possible
    // other page props
  };
}

const App: React.FC<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [hasPrivacyModalShown, setHasPrivacyModalShown] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("hasPrivacyModalShown");
    if (!hasShown) {
      setHasPrivacyModalShown(true);
      localStorage.setItem("hasPrivacyModalShown", "true");
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ContextProvider>
          <FocusProvider>
            <Component {...pageProps} />
            {hasPrivacyModalShown && <PrivacyModal />}
          </FocusProvider>
        </ContextProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default App;
