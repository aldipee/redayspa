import { useEffect } from "react";
import AOS from "aos";
import TagManager from "react-gtm-module";


import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    TagManager.initialize({ gtmId: "GTM-T869TFS" });
  }, []);
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
