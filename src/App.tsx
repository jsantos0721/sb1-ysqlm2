import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import RegistrationForm from './RegistrationForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
}

export default App;