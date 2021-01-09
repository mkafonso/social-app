import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

// import actions
// import {} from '../../actions/user'

const SignIn = ({ navigation }) => {
  // states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // redux
  const dispatch = useDispatch();

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text title semi center color="#0095f6">
          Bem-vindo
        </Text>

        <Auth>
          <AuthContainer>
            <AuthTitle>E-mail</AuthTitle>
            <AuthField
              autoCorrect={false}
              autoFocus={true}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email.trim())}
              value={email}
            />
          </AuthContainer>

          <AuthContainer>
            <AuthTitle>Senha</AuthTitle>
            <AuthField
              autoCorrect={false}
              autoFocus
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
              keyboardType="default"
              onChangeText={(password) => setPassword(password.trim())}
              value={password}
            />
          </AuthContainer>
        </Auth>

        <SignInContainer>
          {loading ? (
            <Loading />
          ) : (
            <Text bold center color="#ffffff">
              Entrar
            </Text>
          )}
        </SignInContainer>

        <SignUp onPress={() => navigation.navigate('SignUp')}>
          <Text small center>
            Novo por aqui?{' '}
            <Text bold color="#0095f6">
              Cadastro
            </Text>
          </Text>
        </SignUp>
      </KeyboardAvoidingView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: #e7e7de;
  justify-content: center;
`;

const Auth = styled.View`
  margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
  margin-bottom: 32px;
`;

const AuthTitle = styled(Text)`
  color: #8e93a1;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 300;
`;

const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.5px;
  height: 45px;
  color: #262626;
`;

const SignInContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background: #0095f6;
  border-radius: 4px;
`;

const SignUp = styled.TouchableOpacity`
  margin-top: 16px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: '#ffffff',
  size: 'small',
}))``;

export default SignIn;
