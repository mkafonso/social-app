import React from 'react';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const Message = () => {
  return (
    <Container>
      <Text>Message</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: #9b9393;
  justify-content: center;
`;

export default Message;
