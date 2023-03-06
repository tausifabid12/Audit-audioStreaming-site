import MusicProvider from '../Contexts/MusicProvider/MusicProvider';
import '../styles/globals.css';
import 'swiper/css';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MusicProvider>
        <Component {...pageProps} />
      </MusicProvider>
      <Toaster />
    </AuthProvider>
  );
}
