import '../styles/globals.css'
import {axeAccessibilityReporter} from "@/utils/axeAccessibilityReporter";
import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  // usar o useEffect ou a valida
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp