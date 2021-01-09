import React from 'react';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const Profile = () => {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: #572020;
  justify-content: center;
`;

export default Profile;
