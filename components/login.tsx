import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import { useTheme } from './Themecontext';

const Login: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Use the theme context
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isSignupMode, setIsSignupMode] = useState<boolean>(false);

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful', 'Welcome to the app!');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password.');
    }
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Signup Failed', 'Passwords do not match.');
      return;
    }
    if (username && email && password) {
      Alert.alert('Signup Successful', 'Your account has been created!');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
      Alert.alert('Signup Failed', 'Please fill out all fields.');
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
        <TouchableOpacity onPress={toggleTheme} style={styles.iconContainer}>
        <Image
          source={isDarkMode ? require('../assets/sun.png') : require('../assets/brightness.png')}
          style={styles.themeImage}
        />
      </TouchableOpacity>
      <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
        {isSignupMode ? 'Sign Up' : 'Login'}
      </Text>

      <TextInput
        style={[styles.input, { backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        autoCapitalize="none"
      />

      {isSignupMode && (
        <>
          <TextInput
            style={[styles.input, { backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
            autoCapitalize="none"
          />
        </>
      )}

      <TextInput
        style={[styles.input, { backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
      />

      {isSignupMode && (
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? '#444' : '#fff', color: isDarkMode ? '#fff' : '#000' }]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor={isDarkMode ? '#ccc' : '#999'}
        />
      )}

      {isSignupMode ? (
        <Button title="Sign Up" onPress={handleSignup} />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}

      <Text style={[styles.toggleText, { color: isDarkMode ? '#007BFF' : '#007BFF' }]} onPress={() => setIsSignupMode(!isSignupMode)}>
        {isSignupMode ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </Text>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    position: 'absolute',
    top: 40, // Adjust as per your need
    right: 20, // Adjust as per your need
    zIndex: 1, // To ensure it's on top of other elements
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  toggleText: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  themeImage: {
    width: 30,
    height: 30,
  },
});

export default Login;
