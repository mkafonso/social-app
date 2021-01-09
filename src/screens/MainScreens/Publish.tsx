import React from 'react';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const Publish = () => {
  return (
    <Container>
      <Text>Publish</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: green;
  justify-content: center;
`;

export default Publish;
