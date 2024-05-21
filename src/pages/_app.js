import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const CustomHeaderLayout = dynamic(() => import('../components/CustomHeaderLayout'));

function Page({ Component, pageProps }) {
  const router = useRouter();
  const isCustomHeaderRoute = router.pathname.startsWith('/folderA') || router.pathname.startsWith('/folderB');

  if (isCustomHeaderRoute) {
    return (
      <CustomHeaderLayout>
        <Component {...pageProps} />
      </CustomHeaderLayout>
    );
  }

  return <Component {...pageProps} />;
}

Page.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Page;
