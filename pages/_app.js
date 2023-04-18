import './styles.css';
import * as ga from '../lib/analytics';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ga.initGA();
    ga.logPageView();

    // Track pageview when router changes
    router.events.on('routeChangeComplete', ga.logPageView);

    return () => {
      router.events.off('routeChangeComplete', ga.logPageView);
    }
  }, [])

  return <Component {...pageProps} />
}
export default App;
