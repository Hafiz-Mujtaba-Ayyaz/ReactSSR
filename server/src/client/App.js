import React, { useEffect, useState, createContext } from 'react';
import { renderRoutes } from 'react-router-config';
import NProgress from 'nprogress';
// import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import './styles/globals.scss';
import './styles/page-styles.scss';
import './styles/tabs.scss';
import './styles/utils.modules.scss';
import Container from './components/base/container';

// Contexts
export const AreaContext = createContext();
export const GAContext = createContext();

NProgress.configure({ showSpinner: false });

function Root({ route }) {
  const [areaUnit, setAreaUnit] = useState();
  // const [GAHash, setGAHash] = useState({});

  // useEffect(() => {
  //   if (process.env.REACT_APP_GA_TRACKING_ID) {
  //     ReactGA.initialize([{ trackingId: process.env.REACT_APP_GA_TRACKING_ID }]);
  //   }
  //
  //   window.OneSignal = window.OneSignal || [];
  //   OneSignal.push(() => {
  //     OneSignal.init({
  //       appId: 'e06678e5-d595-4177-996b-4ea59f7d1b16',
  //       notifyButton: {
  //         enable: true,
  //       },
  //       allowLocalhostAsSecureOrigin: true,
  //     });
  //   });
  //
  //   return () => {
  //     window.OneSignal = undefined;
  //   };
  // }, []);

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    window.addEventListener('routeChangeStart', handleStart);
    window.addEventListener('routeChangeComplete', handleStop);
    window.addEventListener('routeChangeError', handleStop);

    return () => {
      window.removeEventListener('routeChangeStart', handleStart);
      window.removeEventListener('routeChangeComplete', handleStop);
      window.removeEventListener('routeChangeError', handleStop);
    };
  }, []);

  return (
    // <CookiesProvider>
    // <GAContext.Provider value={[GAHash, setGAHash]}>
    <>
      <Helmet>
        <link rel="stylesheet" href="main.css" />
      </Helmet>
      <AreaContext.Provider value={[areaUnit, setAreaUnit]}>
        {/* <Header /> */}
        {renderRoutes(route.routes)}
      </AreaContext.Provider>
    </>
    // </GAContext.Provider>
    // </CookiesProvider>
  );
}

export default {
  component: Root,
};

// import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import { fetchCurrentUser } from './actions';
// import Header from './components/Header';

// const App = ({ route }) => {
//   return (
//     <div>
//       <Header />
//       {renderRoutes(route.routes)}
//     </div>
//   );
// };

// export default {
//   component: App,
//   // loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
// };
