import '../styles/globals.css'
import {axeAccessibilityReporter} from "@/utils/axeAccessibilityReporter";

axeAccessibilityReporter()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp