import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext from '../contexts/user'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value="Paulo">
      <Component {...pageProps} />
    </UserContext.Provider>
    
  );
  }

export default MyApp
