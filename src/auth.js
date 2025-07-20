import React, { useState, useEffect } from 'react';
import './App.css'; 
const Auth = ({ onNavigateToDashboard, initialScreen = 'login', onBack }) => {
  const [currentScreen, setCurrentScreen] = useState(initialScreen);
  const [activeTab, setActiveTab] = useState('login');
  const [selectedRole, setSelectedRole] = useState('');
  
  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Signup state
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // OTP state
  const [otp, setOtp] = useState(['', '', '', '']);

  // Set initial screen when component mounts or initialScreen prop changes
  useEffect(() => {
    setCurrentScreen(initialScreen);
  }, [initialScreen]);

  // Tab switching handlers
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  // Login handlers
  const handleLogin = () => {
    console.log('Login clicked - Email:', email, 'Password:', password);
    if (email && password) {
      console.log('Login validation passed, navigating directly to role selection');
      setCurrentScreen('roleSelection');
    } else {
      console.log('Login validation failed - missing email or password');
      alert('Please enter both email and password');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked, navigating to OTP');
    setCurrentScreen('otp');
  };

  const handleStudentLogin = () => {
    console.log('Student login clicked');
  };

  const handleTeacherLogin = () => {
    console.log('Teacher login clicked');
  };

  // Signup handlers
  const handleSignup = () => {
    console.log('Signup clicked - Name:', fullName, 'Email:', signupEmail, 'Password:', signupPassword, 'Confirm:', confirmPassword);
    if (fullName && signupEmail && signupPassword && confirmPassword) {
      if (signupPassword === confirmPassword) {
        console.log('Signup validation passed, navigating to OTP');
        setCurrentScreen('otp');
      } else {
        console.log('Password mismatch');
        alert('Passwords do not match');
      }
    } else {
      console.log('Signup validation failed - missing fields');
      alert('Please fill in all fields');
    }
  };

  // OTP handlers
  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpContinue = () => {
    const otpCode = otp.join('');
    console.log('OTP Code:', otpCode, 'Length:', otpCode.length);
    
    // Allow proceeding even with incomplete OTP for demo purposes
    // In production, you'd want to validate the actual OTP
    if (otpCode.length >= 1) { // Changed from === 4 to >= 1 for easier testing
      console.log('OTP verification successful, navigating to role selection');
      setCurrentScreen('roleSelection');
    } else {
      console.log('Please enter at least one digit');
      alert('Please enter OTP code');
    }
  };

  const handleResendOtp = () => {
    console.log('Resend OTP clicked');
  };

  // Role Selection handlers
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    console.log('Role selected:', role);
  };

  const handleRoleConfirm = () => {
    console.log('Role confirm clicked - Selected role:', selectedRole);
    if (selectedRole) {
      console.log('Role confirmation successful');
      // Navigate to appropriate dashboard based on role
      if (onNavigateToDashboard) {
        onNavigateToDashboard(selectedRole);
      }
    } else {
      console.log('No role selected');
      alert('Please select a role');
    }
  };

  // Back button handler
  const handleBack = () => {
    console.log('Back button clicked - Current screen:', currentScreen);
    
    // If we're on role selection and have an onBack prop, use it
    if (currentScreen === 'roleSelection' && onBack) {
      console.log('Navigating back via onBack prop');
      onBack();
      return;
    }
    
    if (currentScreen === 'otp') {
      console.log('Navigating back to: login (from forgot password flow)');
      setCurrentScreen('login');
      setActiveTab('login');
    } else if (currentScreen === 'roleSelection') {
      console.log('Navigating back to login');
      setCurrentScreen('login');
      setActiveTab('login');
    } else {
      console.log('Back clicked from:', currentScreen);
    }
  };

  // Render Login Screen
  const renderLogin = () => (
    <div className="form-section">
      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
      </div>

      <button 
        className="forgot-password-link"
        onClick={handleForgotPassword}
      >
        Forgot Password?
      </button>

      <button 
        className="confirm-button"
        onClick={handleLogin}
      >
        CONFIRM
      </button>

      <div className="login-options">
        <button 
          className="login-option-button"
          onClick={handleStudentLogin}
        >
          Student Login
        </button>
        <button 
          className="login-option-button"
          onClick={handleTeacherLogin}
        >
          Teacher Login
        </button>
      </div>
    </div>
  );

  // Render Signup Screen
  const renderSignup = () => (
    <div className="form-section">
      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <input
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Set Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          className="auth-input"
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="auth-input"
        />
      </div>

      <button 
        className="confirm-button"
        onClick={handleSignup}
      >
        CONTINUE
      </button>
    </div>
  );

  // Render Role Selection Screen
  const renderRoleSelection = () => (
    <div className="role-selection-section">
      <h2 className="role-title">Select your Role</h2>
      
      <div className="role-options">
        <div 
          className={`role-option ${selectedRole === 'teacher' ? 'selected' : ''}`}
          onClick={() => handleRoleSelect('teacher')}
        >
          <div className="role-icon teacher-icon">
            <div className="teacher-illustration">
              <div className="teacher-figure"></div>
              <div className="teacher-board"></div>
            </div>
          </div>
          <span className="role-label">Teacher</span>
        </div>
        
        <div 
          className={`role-option ${selectedRole === 'student' ? 'selected' : ''}`}
          onClick={() => handleRoleSelect('student')}
        >
          <div className="role-icon student-icon">
            <div className="student-illustration">
              <div className="student-figure"></div>
              <div className="student-books"></div>
            </div>
          </div>
          <span className="role-label">Student</span>
        </div>
      </div>

      <button 
        className="confirm-button role-confirm-button"
        onClick={handleRoleConfirm}
      >
        CONFIRM
      </button>
    </div>
  );
  const renderOTP = () => (
    <div className="otp-section">
      <h2 className="otp-title">OTP Verification</h2>
      <p className="otp-subtitle">
        Enter the 4 digit code sent to you<br />
        at www.flosendo.edu
      </p>

      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otp-input"
          />
        ))}
      </div>

      <button 
        className="resend-link"
        onClick={handleResendOtp}
      >
        Don't receive?
      </button>

      <button 
        className="confirm-button otp-continue-button"
        onClick={handleOtpContinue}
      >
        CONTINUE
      </button>
    </div>
  );

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <div className="signal-bars"></div>
            <div className="wifi-icon"></div>
            <div className="battery-icon"></div>
          </div>
        </div>
        <button className="back-button" onClick={handleBack}>
          ←
        </button>
      </div>

      <div className="auth-content">
        {currentScreen !== 'otp' && currentScreen !== 'roleSelection' && (
          <>
            <div className="logo-section">
              <h1 className="logo">FLOSENDO</h1>
              <p className="tagline">Welcome to Educity</p>
            </div>

            <div className="tab-buttons">
              <button 
                className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
                onClick={() => handleTabSwitch('login')}
              >
                LOG IN
              </button>
              <button 
                className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
                onClick={() => handleTabSwitch('signup')}
              >
                SIGN UP
              </button>
            </div>
          </>
        )}

        {currentScreen === 'login' && renderLogin()}
        {currentScreen === 'signup' && renderSignup()}
        {currentScreen === 'otp' && renderOTP()}
        {currentScreen === 'roleSelection' && renderRoleSelection()}
      </div>
    </div>
  );
};

export default Auth;