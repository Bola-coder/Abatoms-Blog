import "../styles/globals.css";
import Layouts from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
