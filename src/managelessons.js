import React, { useState } from 'react';
import './App.css';

const ManageLessons = ({ onBack }) => {
  const [currentView, setCurrentView] = useState('lessons'); // 'lessons', 'videoLessons', 'videoLessonDetail', 'videoPlayer', 'quizList', 'quizDetail', 'quizQuestion', 'quizIncorrect', 'quizCorrect', 'quizComplete'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState({ current: 6, total: 10 });
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock data
  const quizzes = [
    {
      id: 1,
      title: 'Money Basics: Spending and Saving',
      category: 'Banking • Quiz 1',
      description: 'Test your knowledge about spending wisely and saving habits! This quiz covers the basics of spending wisely, saving money, and understanding the difference between what you need and things you want. Perfect for young learners starting their financial journey.',
      objectives: [
        'Identify needs vs wants in everyday situations',
        'Apply basic budgeting concepts',
        'Understand simple saving strategies',
        'Make informed spending decisions'
      ],
      questions: [
        {
          id: 1,
          question: "Emma wants to buy a toy that costs $15. She has saved $8 so far. How much more money does she need to save?",
          options: ['$23', '$10', '$7', '$5'],
          correctAnswer: 2,
          explanation: "To find how much more Emma needs, we subtract what she has from what she needs: $15 - $8 = $7. This is basic subtraction that helps us understand how much more money we need to reach our savings goal!"
        },
        {
          id: 2,
          question: "Jake earns $5 per week for doing chores. He wants to buy a video game that costs $25. How many weeks will he need to save?",
          options: ['3 weeks', '4 weeks', '5 weeks', '6 weeks'],
          correctAnswer: 1,
          explanation: "To find how many weeks Jake needs to save, we divide the total cost by his weekly earnings: $25 ÷ $5 = 5 weeks. You chose 4 weeks, but that would only give him $20 ($4 × $5 = $20), which is $5 short of the $25 he needs."
        }
      ],
      progress: 43,
      totalQuestions: 8
    }
  ];

  const videoLessons = [
    {
      id: 1,
      title: 'Smart Spending: Making Your Money Count',
      duration: '12:45',
      thumbnail: '📹',
      description: 'Learn how to make smart spending decisions and create a simple budget that works for kids.',
      objectives: [
        'Understand the difference between needs and wants',
        'Create a simple weekly budget',
        'Learn strategies for saving money',
        'Make smart spending choices'
      ]
    },
    {
      id: 2,
      title: 'Banking Basics for Students',
      duration: '08:20',
      thumbnail: '🏦',
      description: 'Introduction to banking concepts and how banks work.'
    }
  ];

  // Lessons List View
  const renderLessonsList = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={onBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content">
        <h1 className="page-title">Lessons</h1>
        
        <div className="lesson-options">
          <button className="lesson-option-card video-lessons" onClick={() => setCurrentView('videoLessons')}>
            <span className="option-icon">📹</span>
            <span className="option-text">Video Lessons</span>
          </button>

          <button className="lesson-option-card quizzes" onClick={() => setCurrentView('quizList')}>
            <span className="option-icon">📝</span>
            <span className="option-text">Quizzes</span>
          </button>
        </div>
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  // Quiz List View
  const renderQuizList = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={() => setCurrentView('lessons')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content">
        <h1 className="page-title">Lesson Quizzes</h1>
        
        <div className="quiz-illustration">
          <div className="quiz-character">
            <span className="character-icon">👩‍🎓</span>
            <div className="quiz-badge">K</div>
          </div>
        </div>

        <div className="quiz-list">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="quiz-item">
              <div className="quiz-info">
                <span className="quiz-category">{quiz.category}</span>
                <h3 className="quiz-title">{quiz.title}</h3>
                <div className="quiz-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${quiz.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{quiz.progress}% Complete</span>
                </div>
              </div>
              <button 
                className="start-quiz-btn"
                onClick={() => {
                  setSelectedQuiz(quiz);
                  setCurrentView('quizDetail');
                }}
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  // Quiz Detail View
  const renderQuizDetail = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={() => setCurrentView('quizList')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content scrollable">
        <div className="quiz-detail-header">
          <h1 className="quiz-detail-title">Quiz 2</h1>
          <span className="completion-status">✓ Completed</span>
        </div>

        <div className="quiz-illustration">
          <div className="quiz-scene">
            <div className="quiz-character">
              <span className="character-icon">👩‍🎓</span>
              <div className="quiz-badge">K</div>
            </div>
            <div className="quiz-laptop">💻</div>
          </div>
        </div>

        <div className="quiz-meta">
          <span className="quiz-category">{selectedQuiz?.category}</span>
          <h2 className="quiz-main-title">{selectedQuiz?.title}</h2>
          <div className="quiz-stats">
            <span className="quiz-stat">📊 {selectedQuiz?.totalQuestions} Questions</span>
          </div>
        </div>

        <div className="quiz-description">
          <p>{selectedQuiz?.description}</p>
        </div>

        <div className="learning-objectives">
          <h3>Learning Objectives</h3>
          <ul>
            {selectedQuiz?.objectives?.map((objective, index) => (
              <li key={index}>● {objective}</li>
            ))}
          </ul>
        </div>

        <button 
          className="start-quiz-button"
          onClick={() => {
            setCurrentQuestion(0);
            setCurrentView('quizQuestion');
          }}
        >
          ▶ Start Quiz
        </button>
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  // Quiz Question View
  const renderQuizQuestion = () => {
    const question = selectedQuiz?.questions[currentQuestion];
    const questionNumber = currentQuestion + 1;
    const totalQuestions = selectedQuiz?.questions?.length || 0;
    const progressPercent = ((questionNumber - 1) / totalQuestions) * 100;

    return (
      <>
        <div className="quiz-status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal-icon">📶</span>
            <span className="wifi-icon">📶</span>
            <span className="battery-icon">🔋</span>
          </div>
        </div>

        <div className="quiz-header">
          <button className="back-button" onClick={() => setCurrentView('quizDetail')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="quiz-content scrollable">
          <div className="quiz-progress-header">
            <span className="question-counter">Question {questionNumber} of {totalQuestions}</span>
            <span className="progress-percentage">{Math.round(progressPercent)}% Complete</span>
          </div>

          <div className="question-number-badge">
            <span className="question-num">{questionNumber}</span>
          </div>

          <div className="question-content">
            <h2 className="question-text">{question?.question}</h2>
            
            <div className="answer-options">
              {question?.options?.map((option, index) => (
                <button
                  key={index}
                  className={`answer-option ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => setSelectedAnswer(index)}
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-navigation">
            <button 
              className="nav-btn previous"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button 
              className="nav-btn next"
              onClick={() => {
                if (selectedAnswer !== null) {
                  if (selectedAnswer === question?.correctAnswer) {
                    setCurrentView('quizCorrect');
                  } else {
                    setCurrentView('quizIncorrect');
                  }
                }
              }}
              disabled={selectedAnswer === null}
            >
              Next →
            </button>
          </div>
        </div>

        <div className="bottom-indicator">
          <div className="nav-line"></div>
        </div>
      </>
    );
  };

  // Quiz Incorrect Answer View
  const renderQuizIncorrect = () => {
    const question = selectedQuiz?.questions[currentQuestion];
    const correctOption = question?.options[question?.correctAnswer];
    const selectedOption = question?.options[selectedAnswer];

    return (
      <>
        <div className="quiz-status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal-icon">📶</span>
            <span className="wifi-icon">📶</span>
            <span className="battery-icon">🔋</span>
          </div>
        </div>

        <div className="quiz-header">
          <button className="back-button" onClick={() => setCurrentView('quizQuestion')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="quiz-content scrollable">
          <div className="quiz-progress-header">
            <span className="question-counter">Question {currentQuestion + 1} of {selectedQuiz?.questions?.length}</span>
            <span className="progress-percentage">50% Complete</span>
          </div>

          <div className="question-number-badge">
            <span className="question-num">{currentQuestion + 1}</span>
          </div>

          <div className="question-content">
            <h2 className="question-text">{question?.question}</h2>
            
            <div className="answer-options">
              {question?.options?.map((option, index) => (
                <button
                  key={index}
                  className={`answer-option ${
                    index === question?.correctAnswer ? 'correct' : 
                    index === selectedAnswer ? 'incorrect' : ''
                  }`}
                  disabled
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                  {index === question?.correctAnswer && <span className="status-icon">✓</span>}
                  {index === selectedAnswer && index !== question?.correctAnswer && <span className="status-icon">✗</span>}
                </button>
              ))}
            </div>

            <div className="answer-feedback incorrect">
              <div className="feedback-header">
                <span className="feedback-icon">✗</span>
                <span className="feedback-status">Incorrect</span>
                <div className="score-display">
                  <span className="current-score">Current Score</span>
                  <span className="score">{score.current}/{score.total}</span>
                </div>
              </div>
              <div className="feedback-content">
                <span className="your-answer-label">Your Answer</span>
                <div className="explanation">
                  <span className="explanation-label">💡 Explanation</span>
                  <p>{question?.explanation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-navigation">
            <button 
              className="nav-btn previous"
              onClick={() => setCurrentView('quizQuestion')}
            >
              Previous
            </button>
            <button 
              className="nav-btn next"
              onClick={() => {
                if (currentQuestion + 1 < selectedQuiz?.questions?.length) {
                  setCurrentQuestion(currentQuestion + 1);
                  setSelectedAnswer(null);
                  setCurrentView('quizQuestion');
                } else {
                  setCurrentView('quizComplete');
                }
              }}
            >
              Next →
            </button>
          </div>
        </div>

        <div className="bottom-indicator">
          <div className="nav-line"></div>
        </div>
      </>
    );
  };

  // Quiz Correct Answer View
  const renderQuizCorrect = () => {
    const question = selectedQuiz?.questions[currentQuestion];

    return (
      <>
        <div className="quiz-status-bar">
          <span className="time">8:15</span>
          <div className="status-icons">
            <span className="signal-icon">📶</span>
            <span className="wifi-icon">📶</span>
            <span className="battery-icon">🔋</span>
          </div>
        </div>

        <div className="quiz-header">
          <button className="back-button" onClick={() => setCurrentView('quizQuestion')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="quiz-content scrollable">
          <div className="quiz-progress-header">
            <span className="question-counter">Question {currentQuestion + 1} of {selectedQuiz?.questions?.length}</span>
            <span className="progress-percentage">50% Complete</span>
          </div>

          <div className="question-number-badge">
            <span className="question-num">{currentQuestion + 1}</span>
          </div>

          <div className="question-content">
            <h2 className="question-text">{question?.question}</h2>
            
            <div className="answer-options">
              {question?.options?.map((option, index) => (
                <button
                  key={index}
                  className={`answer-option ${index === question?.correctAnswer ? 'correct' : ''}`}
                  disabled
                >
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                  {index === question?.correctAnswer && <span className="status-icon">✓</span>}
                </button>
              ))}
            </div>

            <div className="answer-feedback correct">
              <div className="feedback-header">
                <span className="feedback-icon">✓</span>
                <span className="feedback-status">Correct!</span>
                <div className="score-display">
                  <span className="current-score">Current Score</span>
                  <span className="score">{score.current + 1}/{score.total}</span>
                </div>
              </div>
              <div className="feedback-content">
                <span className="correct-answer-label">Correct Answer</span>
                <div className="explanation">
                  <span className="explanation-label">💡 Explanation</span>
                  <p>{question?.explanation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quiz-navigation">
            <button 
              className="nav-btn previous"
              onClick={() => setCurrentView('quizQuestion')}
            >
              Previous
            </button>
            <button 
              className="nav-btn next"
              onClick={() => {
                setScore(prev => ({ ...prev, current: prev.current + 1 }));
                if (currentQuestion + 1 < selectedQuiz?.questions?.length) {
                  setCurrentQuestion(currentQuestion + 1);
                  setSelectedAnswer(null);
                  setCurrentView('quizQuestion');
                } else {
                  setCurrentView('quizComplete');
                }
              }}
            >
              Next →
            </button>
          </div>
        </div>

        <div className="bottom-indicator">
          <div className="nav-line"></div>
        </div>
      </>
    );
  };

  // Quiz Complete View
  const renderQuizComplete = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={() => setCurrentView('quizList')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content">
        <h1 className="completion-title">Amazing Work!</h1>
        <p className="completion-subtitle">You have just learned!</p>

        <div className="completion-illustration">
          <div className="celebration-scene">
            <div className="character-group">
              <span className="celebrating-character">🎉</span>
              <span className="celebrating-character">🎊</span>
            </div>
          </div>
        </div>

        <div className="completion-stats">
          <div className="final-score">
            <span className="score-icon">🏆</span>
            <span className="score-text">{score.current}/{score.total}</span>
          </div>
          <div className="points-earned">
            <span className="points-icon">⭐</span>
            <span className="points-text">+80</span>
          </div>
          <span className="score-label">Your Score</span>
          <span className="points-label">Points Earned</span>
        </div>

        <div className="completion-actions">
          <button 
            className="action-btn restart"
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswer(null);
              setScore({ current: 6, total: 10 });
              setCurrentView('quizDetail');
            }}
          >
            🔄 Restart This Quiz
          </button>
          <button 
            className="action-btn back-to-list"
            onClick={() => setCurrentView('quizList')}
          >
            📋 Back to Quiz List
          </button>
        </div>
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  // Video Lesson Detail View
  const renderVideoLessonDetail = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={() => setCurrentView('videoLessons')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content scrollable">
        <div className="lesson-header">
          <h1 className="lesson-title">{selectedLesson?.title || 'Video Lesson'}</h1>
          <p className="lesson-subtitle">Banking • Lesson 3</p>
        </div>

        <div className="lesson-card">
          <h3 className="card-title">Understanding Bank Accounts</h3>
          <div className="video-preview" onClick={() => setCurrentView('videoPlayer')}>
            <div className="preview-thumbnail">
              <span className="preview-icon">💰</span>
            </div>
            <div className="video-duration">{selectedLesson?.duration || '12:45'}</div>
            <div className="play-button">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.9"/>
                <path d="M16 13V27L28 20L16 13Z" fill="#1a1a1a"/>
              </svg>
            </div>
            <div className="mini-controls">
              <span className="mini-control">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M15 10L5 10M5 10L10 5M5 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                10s
              </span>
              <span className="mini-control">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10L15 10M15 10L10 5M15 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                10s
              </span>
            </div>
          </div>
        </div>

        {selectedLesson?.description && (
          <div className="video-description">
            <h3>Description</h3>
            <p>{selectedLesson.description}</p>
          </div>
        )}

        {selectedLesson?.objectives && (
          <div className="video-objectives">
            <h3>What you'll learn:</h3>
            <ul>
              {selectedLesson.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  // Video Player View
  const renderVideoPlayer = () => (
    <div className="video-player-view">
      {/* Video Container */}
      <div className="video-container">
        <div className="video-header-overlay">
          <button className="back-button" onClick={() => setCurrentView('videoLessonDetail')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="video-tag">Banking • Lesson 3</div>
          <div className="video-time">{selectedLesson?.duration || '12:45'}</div>
        </div>
        
        <div className="video-center">
          <div className="center-play-button" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying ? (
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                <path d="M24 18V42L42 30L24 18Z" fill="#1a1a1a"/>
              </svg>
            ) : (
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.9"/>
                <rect x="20" y="18" width="8" height="24" fill="#1a1a1a"/>
                <rect x="32" y="18" width="8" height="24" fill="#1a1a1a"/>
              </svg>
            )}
          </div>
        </div>

        {/* Player Controls */}
        <div className="player-controls-bottom">
          <button className="control-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10L5 10M5 10L10 5M5 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>10s</span>
          </button>
          
          <button className="play-pause-button" onClick={() => setIsPlaying(!isPlaying)}>
            {!isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="6" y="4" width="4" height="16" fill="white"/>
                <rect x="14" y="4" width="4" height="16" fill="white"/>
              </svg>
            )}
          </button>
          
          <button className="control-button">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 10L15 10M15 10L10 5M15 10L10 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>10s</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="time-display">02:45</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '22%' }}></div>
          </div>
          <div className="time-display">08:20</div>
        </div>

        {/* Bottom Controls */}
        <div className="bottom-controls">
          <button className="bottom-control-button">
            <span className="control-icon">📄</span>
          </button>
          <button className="bottom-control-button">
            <span className="control-label">1x</span>
          </button>
          <button className="bottom-control-button">
            <span className="control-icon">⬜</span>
          </button>
        </div>
      </div>

      {/* Video Info */}
      <div className="video-info-section">
        <h2 className="video-player-title">{selectedLesson?.title || 'Smart Spending: Making Your Money Count'}</h2>
        
        <div className="video-description">
          <h3>Description</h3>
          <p>{selectedLesson?.description || 'Learn how to make smart spending decisions and create a simple budget that works for kids.'}</p>
        </div>

        {selectedLesson?.objectives && (
          <div className="video-objectives">
            <h3>What you'll learn:</h3>
            <ul>
              {selectedLesson.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
  const renderVideoLessonsList = () => (
    <>
      <div className="quiz-status-bar">
        <span className="time">8:15</span>
        <div className="status-icons">
          <span className="signal-icon">📶</span>
          <span className="wifi-icon">📶</span>
          <span className="battery-icon">🔋</span>
        </div>
      </div>

      <div className="quiz-header">
        <button className="back-button" onClick={() => setCurrentView('lessons')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="quiz-content">
        <h1 className="page-title">Video Lessons</h1>
        
        <div className="video-lessons-grid">
          {videoLessons.map((lesson) => (
            <div key={lesson.id} className="video-lesson-card" onClick={() => {
              setSelectedLesson(lesson);
              setCurrentView('videoLessonDetail');
            }}>
              <div className="video-thumbnail">
                <span className="thumbnail-icon">{lesson.thumbnail}</span>
                <div className="play-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
              </div>
              <div className="video-info">
                <h3 className="video-title">{lesson.title}</h3>
                <span className="video-duration">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-indicator">
        <div className="nav-line"></div>
      </div>
    </>
  );

  return (
    <div className="manage-lessons">
      {currentView === 'lessons' && renderLessonsList()}
      {currentView === 'quizList' && renderQuizList()}
      {currentView === 'quizDetail' && renderQuizDetail()}
      {currentView === 'quizQuestion' && renderQuizQuestion()}
      {currentView === 'quizIncorrect' && renderQuizIncorrect()}
      {currentView === 'quizCorrect' && renderQuizCorrect()}
      {currentView === 'quizComplete' && renderQuizComplete()}
      {currentView === 'videoLessons' && renderVideoLessonsList()}
      {currentView === 'videoLessonDetail' && renderVideoLessonDetail()}
      {currentView === 'videoPlayer' && renderVideoPlayer()}
    </div>
  );
};

export default ManageLessons;