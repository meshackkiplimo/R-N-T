import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 24,
    fontWeight: '300',
    color: '#FFA07A',
  },
  subtitle: {
    fontSize: 16,
    color: '#808080',
    marginTop: 10,
  },
  formContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  label: {
    color: '#808080',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'dotted',
    padding: 10,
    color: '#808080',
    borderColor: '#FFA07A',
    marginTop: 5,
  },
  inputContainer: {
    marginTop: 15,
  },
  button: {
    backgroundColor: '#FFA07A',
    padding: 15,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
  orText: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#808080',
    fontSize: 16,
    marginTop: 15,
  },
  googleButtonContainer: {
    marginTop: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFA07A',
  },
  googleButtonText: {
    color: '#fff',
    marginHorizontal: 10,
    fontSize: 14,
  },
  signUpContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808080',
  },
  signUpLink: {
    color: '#FFA07A',
  },
  loginContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    color: '#808080',
  },
  loginLink: {
    color: '#FFA07A',
  },
});