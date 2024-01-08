import React, { useEffect, useState } from "react";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { ContextProvider } from "@/context/context";
import PrivacyModal from "@/components/PrivacyModal";
import "../styles/global.css";

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
    <>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/25407986.js"
      ></Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E5NV41KVYK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E5NV41KVYK');
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MTMKNVS');
      `}
      </Script>
      <SessionProvider session={session}>
        <ContextProvider>
          <Component {...pageProps} />
          {hasPrivacyModalShown && <PrivacyModal />}
        </ContextProvider>
      </SessionProvider>
    </>
  );
};

export default App;
