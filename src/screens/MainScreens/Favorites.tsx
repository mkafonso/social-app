import React from 'react';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const Favorites = () => {
  return (
    <Container>
      <Text>Favorites</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: orangered;
  justify-content: center;
`;

export default Favorites;
