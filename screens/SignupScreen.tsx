import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Sign Up</Text>
      <View style={globalStyles.formContainer}>
        <View>
          <Text style={globalStyles.label}>NAME:</Text>
          <TextInput
            placeholder="Enter Name..."
            style={globalStyles.input}
          />
        </View>
        <View style={globalStyles.inputContainer}>
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
          <Text style={globalStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={globalStyles.loginContainer}>
          <Text style={globalStyles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={globalStyles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;