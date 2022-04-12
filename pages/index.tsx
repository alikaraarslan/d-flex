import type { NextPage } from 'next';

import styled from 'styled-components';

const HomeWrapper = styled.div`
  background-color: red;
`;

const Home: NextPage = () => {
  return <HomeWrapper>Hello</HomeWrapper>;
};

export default Home;
