import React, { useState } from 'react';
import Auth from './auth';
import TeacherDashboard from './TeacherDashboard';
import StudentDashboard from './StudentDashboard';
import StudentProfile from './studentprofile';
import StudentBalance from './studentbalance';
import StudentHistory from './studenthistory';
import StudentAssets from './studentassets';
import TeacherRewards from './teacherrewards';
import TeacherPenalties from './teacherpenalties';
import TeacherHistory from './teacherhistory';
import TeacherBalance from './teacherbalance';
import TeacherAssets from './teacherassets';
import TeacherRFP from './teacherrfp';
import StudentRFP from './studentrfp';
import ManageLessons from './managelessons';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('auth');
  const [userRole, setUserRole] = useState('');
  const [previousView, setPreviousView] = useState('auth');

  const handleNavigateToDashboard = (role) => {
    console.log('🚀 handleNavigateToDashboard called with role:', role);
    setUserRole(role);
    setPreviousView('roleSelection');
    setCurrentView('dashboard');
    console.log('✅ Navigation state updated - currentView: dashboard, userRole:', role);
  };

  const handleNavigateToProfile = () => {
    console.log('👤 handleNavigateToProfile called');
    setPreviousView('dashboard');
    setCurrentView('profile');
  };

  const handleNavigateToBalance = () => {
    console.log('💰 handleNavigateToBalance called');
    setPreviousView('dashboard');
    setCurrentView('studentBalance');
  };

  const handleNavigateToHistory = () => {
    console.log('📜 handleNavigateToHistory called');
    setPreviousView('dashboard');
    setCurrentView('studentHistory');
  };

  const handleNavigateToAssets = () => {
    console.log('🏗️ handleNavigateToAssets called');
    setPreviousView('dashboard');
    setCurrentView('studentAssets');
  };

  const handleNavigateToTeacherAssets = () => {
    console.log('📋 handleNavigateToTeacherAssets called');
    setPreviousView('dashboard');
    setCurrentView('teacherAssets');
  };

  const handleNavigateToTeacherBalance = () => {
    console.log('💰 handleNavigateToTeacherBalance called');
    setPreviousView('dashboard');
    setCurrentView('teacherBalance');
  };

  const handleNavigateToRewards = () => {
    console.log('🎁 handleNavigateToRewards called');
    setPreviousView('dashboard');
    setCurrentView('teacherRewards');
  };

  const handleNavigateToPenalties = () => {
    console.log('⚠️ handleNavigateToPenalties called');
    setPreviousView('dashboard');
    setCurrentView('teacherPenalties');
  };

  const handleNavigateToTeacherHistory = () => {
    console.log('📚 handleNavigateToTeacherHistory called');
    setPreviousView('dashboard');
    setCurrentView('teacherHistory');
  };

  const handleNavigateToLessons = () => {
    console.log('📖 handleNavigateToLessons called');
    setPreviousView('dashboard');
    setCurrentView('manageLessons');
  };

  const handleNavigateToStudentRFP = () => {
    console.log('📋 handleNavigateToStudentRFP called');
    setPreviousView('dashboard');
    setCurrentView('studentRFP');
  };

  const handleNavigateToRFP = () => {
    console.log('📋 handleNavigateToRFP called');
    setPreviousView('dashboard');
    setCurrentView('teacherRFP');
  };

  const handleBackToAuth = () => {
    console.log('🔙 handleBackToAuth called');
    setCurrentView('auth');
    setPreviousView('auth');
    setUserRole('');
  };

  const handleBackToRoleSelection = () => {
    console.log('🔙 handleBackToRoleSelection called');
    setCurrentView('roleSelection');
    setPreviousView('auth');
  };

  const handleBackToDashboard = () => {
    console.log('🔙 handleBackToDashboard called');
    setCurrentView('dashboard');
    setPreviousView('dashboard');
  };

  const renderCurrentView = () => {
    console.log('🎨 renderCurrentView called - currentView:', currentView, 'userRole:', userRole);
        
    switch (currentView) {
      case 'auth':
        console.log('📱 Rendering Auth component');
        return <Auth onNavigateToDashboard={handleNavigateToDashboard} />;
              
      case 'roleSelection':
        console.log('👥 Rendering Role Selection');
        return <Auth 
          onNavigateToDashboard={handleNavigateToDashboard}
          initialScreen="roleSelection"
          onBack={handleBackToAuth}
        />;
              
      case 'dashboard':
        console.log('📊 Rendering Dashboard - checking userRole:', userRole);
        if (userRole === 'teacher') {
          console.log('👨‍🏫 Rendering TeacherDashboard');
          return <TeacherDashboard 
            onBack={handleBackToRoleSelection}
            onNavigateToRewards={handleNavigateToRewards}
            onNavigateToPenalties={handleNavigateToPenalties}
            onNavigateToTeacherHistory={handleNavigateToTeacherHistory}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToTeacherBalance={handleNavigateToTeacherBalance}
            onNavigateToAssets={handleNavigateToTeacherAssets}
            onNavigateToLessons={handleNavigateToLessons}
            onNavigateToRFP={handleNavigateToRFP}
          />;
        } else if (userRole === 'student') {
          console.log('👨‍🎓 Rendering StudentDashboard');
          return <StudentDashboard 
            onBack={handleBackToRoleSelection}
            onNavigateToBalance={handleNavigateToBalance}
            onNavigateToHistory={handleNavigateToHistory}
            onNavigateToAssets={handleNavigateToAssets}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToRFP={handleNavigateToStudentRFP}
          />;
        }
        console.log('❌ No matching role, falling back to Auth');
        return <Auth onNavigateToDashboard={handleNavigateToDashboard} />;

      case 'profile':
        console.log('👤 Rendering Profile');
        return <StudentProfile onBack={handleBackToDashboard} />;

      case 'studentBalance':
        console.log('💰 Rendering StudentBalance');
        return <StudentBalance onBack={handleBackToDashboard} />;

      case 'studentHistory':
        console.log('📜 Rendering StudentHistory');
        return <StudentHistory onBack={handleBackToDashboard} />;

      case 'studentAssets':
        console.log('🏗️ Rendering StudentAssets');
        return <StudentAssets 
          onBack={handleBackToDashboard} 
          onNavigateToRFP={handleNavigateToStudentRFP}
        />;

      case 'teacherAssets':
        console.log('📋 Rendering TeacherAssets');
        return <TeacherAssets onBack={handleBackToDashboard} />;

      case 'teacherBalance':
        console.log('💰 Rendering TeacherBalance');
        return <TeacherBalance onBack={handleBackToDashboard} />;

      case 'teacherRewards':
        console.log('🎁 Rendering TeacherRewards');
        return <TeacherRewards 
          onBack={handleBackToDashboard} 
          onNavigateToPenalties={handleNavigateToPenalties}
        />;

      case 'teacherPenalties':
        console.log('⚠️ Rendering TeacherPenalties');
        return <TeacherPenalties onBack={handleBackToDashboard} />;

      case 'teacherHistory':
        console.log('📚 Rendering TeacherHistory');
        return <TeacherHistory onBack={handleBackToDashboard} />;

      case 'teacherRFP':
        console.log('📋 Rendering TeacherRFP');
        return <TeacherRFP onBack={handleBackToDashboard} />;

      case 'studentRFP':
        console.log('📋 Rendering StudentRFP');
        return <StudentRFP onBack={handleBackToDashboard} />;

      case 'manageLessons':
        console.log('📖 Rendering ManageLessons');
        return <ManageLessons onBack={handleBackToDashboard} />;
              
      default:
        console.log('❓ Default case, rendering Auth');
        return <Auth onNavigateToDashboard={handleNavigateToDashboard} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  );
}

export default App;