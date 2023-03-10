import MusicProvider from '../Contexts/MusicProvider/MusicProvider';
import '../styles/globals.css';
import 'swiper/css';
import AuthProvider from '../Contexts/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MusicProvider>
        <div className="max-w-screen-2xl mx-auto bg-black ">
          <Component {...pageProps} />
        </div>
      </MusicProvider>
      <Toaster />
    </AuthProvider>
  );
}
