import React from 'react';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const Feed = () => {
  return (
    <Container>
      <Text>Feed</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: orange;
  justify-content: center;
`;

export default Feed;
