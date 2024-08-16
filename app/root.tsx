import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Header from './components/compound/Header/Header';
import HorizontalNavbar from './components/compound/HorizontalNavbar/HorizontalNavbar';
import './tailwind.css';
import Modal from './components/molecule/Modal/Modal';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className='bg-blue-100'>
        <Provider store={store}>
          <Header />
          <Modal />
          <HorizontalNavbar />
          {children}
          <ScrollRestoration />
          <Scripts />
        </Provider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
