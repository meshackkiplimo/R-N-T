import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Car Selling App</Text>
      <View style={globalStyles.formContainer}>
        <View>
          <Text style={globalStyles.label}>EMAIL:</Text>
          <TextInput
            placeholder="Enter Email..."
            style={globalStyles.input}
          />
        </View>
        <View style={globalStyles.inputContainer}>
          <Text style={globalStyles.label}>PASSWORD:</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password..."
            style={globalStyles.input}
          />
        </View>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={globalStyles.orText}>OR</Text>
        <View style={globalStyles.googleButtonContainer}>
          <TouchableOpacity style={globalStyles.googleButton}>
            <Text style={globalStyles.googleButtonText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>
        <View style={globalStyles.signUpContainer}>
          <Text style={globalStyles.signUpText}>New to Car Selling App? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={globalStyles.signUpLink}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;