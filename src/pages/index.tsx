import Head from 'next/head';
import { StyledMain } from 'styles/index.styles';
import { AppNavbar } from 'components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppNavbar />

      <StyledMain>
        <h1>NextJS Boilerplate</h1>
      </StyledMain>
    </div>
  );
}
