import MusicProvider from '../Contexts/MusicProvider/MusicProvider';
import '../styles/globals.css';
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <MusicProvider>
      <Component {...pageProps} />
    </MusicProvider>
  );
}
