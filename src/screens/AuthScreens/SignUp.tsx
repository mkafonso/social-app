import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

// import components
import Text from '../../components/Text';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text title semi center>
          Criar conta
        </Text>

        <Auth>
          <AuthContainer>
            <AuthTitle>Usuário</AuthTitle>
            <AuthField
              autoCorrect={false}
              autoFocus={true}
              autoCapitalize="none"
              keyboardType="default"
              onChangeText={(username) => setUsername(username.trim())}
              value={username}
            />
          </AuthContainer>

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

        <SignUpContainer>
          {loading ? (
            <Loading />
          ) : (
            <Text bold center color="#ffffff">
              Cadastrar
            </Text>
          )}
        </SignUpContainer>

        <SignIn onPress={() => navigation.navigate('SignIn')}>
          <Text small center>
            Já tem conta?{' '}
            <Text bold color="orange">
              Entrar
            </Text>
          </Text>
        </SignIn>
      </KeyboardAvoidingView>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background: #e4e4e4;
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
  height: 48px;
`;

const SignUpContainer = styled.TouchableOpacity`
  margin: 0 32px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: orange;
  border-radius: 4px;
`;

const SignIn = styled.TouchableOpacity`
  margin-top: 16px;
`;

const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: '#ffffff',
  size: 'small',
}))``;

export default SignUp;
