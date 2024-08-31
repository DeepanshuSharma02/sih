import React from 'react';
import { ThemeProvider } from './components/Themecontext'; // Ensure the path is correct
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './components/login'; // or your main component
import HomePage from './components/HomePage';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        
        <HomePage/>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
