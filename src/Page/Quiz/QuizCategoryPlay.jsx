import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  RotateCcw,
  XCircle,
} from "lucide-react";

import categories from "../../data/categories";
import videos from "../../data/videos";
import quizzes from "../../data/quizzes";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./QuizCategoryPlay.css";

function QuizCategoryPlay() {
  const { categoryId } = useParams();

  // =========================================================
  // CATEGORY
  // =========================================================

  const category = useMemo(() => {
    return categories.find(
      (item) => item.id === categoryId
    );
  }, [categoryId]);

  // =========================================================
  // QUIZZES IN THIS CATEGORY
  // =========================================================

  const categoryQuizzes = useMemo(() => {
    if (!category || category.id === "all") {
      return [];
    }

    const categoryVideoIds = videos
      .filter((video) => {
        const videoCategory = video.category
          ?.toLowerCase()
          .replace(/\s+/g, "-");

        return videoCategory === category.id;
      })
      .map((video) => video.id);

    return Object.values(quizzes || {})
      .filter((quiz) => {
        return (
          categoryVideoIds.includes(quiz.videoId) &&
          Array.isArray(quiz.questions) &&
          quiz.questions.length > 0
        );
      })
      .sort((a, b) => a.videoId - b.videoId);
  }, [category]);

  // =========================================================
  // STATE
  // =========================================================

  const [quizIndex, setQuizIndex] = useState(0);

  const [questionIndex, setQuestionIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [submitted, setSubmitted] =
    useState(false);

  const [score, setScore] = useState(0);

  // Current quiz result
  const [quizFinished, setQuizFinished] =
    useState(false);

  // Final category result
  const [categoryFinished, setCategoryFinished] =
    useState(false);

  // Completed quiz scores
  const [quizScores, setQuizScores] =
    useState([]);

  // =========================================================
  // ACTIVE QUIZ
  // =========================================================

  const activeQuiz =
    categoryQuizzes[quizIndex];

  const activeVideo = useMemo(() => {
    if (!activeQuiz) {
      return null;
    }

    return videos.find(
      (video) =>
        video.id === activeQuiz.videoId
    );
  }, [activeQuiz]);

  const questions =
    activeQuiz?.questions || [];

  const currentQuestion =
    questions[questionIndex];

  const isLastQuestion =
    questions.length > 0 &&
    questionIndex === questions.length - 1;

  const isLastQuiz =
    categoryQuizzes.length > 0 &&
    quizIndex === categoryQuizzes.length - 1;

  // =========================================================
  // HANDLE ANSWER
  // =========================================================

  const handleSelectAnswer = (answer) => {
    if (
      submitted ||
      quizFinished ||
      !currentQuestion
    ) {
      return;
    }

    setSelectedAnswer(answer);
    setSubmitted(true);

    if (
      answer ===
      currentQuestion.correctAnswer
    ) {
      setScore(
        (previousScore) =>
          previousScore + 1
      );
    }
  };

  // =========================================================
  // NEXT QUESTION
  // =========================================================

  const handleNextQuestion = () => {
    if (
      !submitted ||
      !currentQuestion
    ) {
      return;
    }

    // ---------------------------------------------
    // More questions in current quiz
    // ---------------------------------------------

    if (!isLastQuestion) {
      setQuestionIndex(
        (previousIndex) =>
          previousIndex + 1
      );

      setSelectedAnswer(null);
      setSubmitted(false);

      return;
    }

    // ---------------------------------------------
    // Current quiz is complete
    // ---------------------------------------------

    const finalQuizScore =
      score +
      (selectedAnswer ===
        currentQuestion.correctAnswer
        ? 1
        : 0);

    setScore(finalQuizScore);

    setQuizScores((previousScores) => {
      const withoutCurrent =
        previousScores.filter(
          (item) =>
            item.videoId !==
            activeQuiz.videoId
        );

      return [
        ...withoutCurrent,
        {
          videoId: activeQuiz.videoId,
          score: finalQuizScore,
          total: questions.length,
        },
      ];
    });

    // IMPORTANT:
    // Do NOT automatically move to next quiz.
    // Show result first.
    setQuizFinished(true);
  };

  // =========================================================
  // NEXT QUIZ
  // =========================================================

  const handleNextQuiz = () => {
    // Last quiz -> final category result
    if (isLastQuiz) {
      setCategoryFinished(true);
      return;
    }

    // Move to next quiz
    setQuizIndex(
      (previousIndex) =>
        previousIndex + 1
    );

    // Reset question state
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // =========================================================
  // RETRY CURRENT QUIZ
  // =========================================================

  const handleRetryCurrentQuiz = () => {
    if (!activeQuiz) {
      return;
    }

    setQuizScores((previousScores) =>
      previousScores.filter(
        (item) =>
          item.videoId !==
          activeQuiz.videoId
      )
    );

    setQuestionIndex(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  // =========================================================
  // RETRY WHOLE CATEGORY
  // =========================================================

  const handleRetryCategory = () => {
    setQuizIndex(0);
    setQuestionIndex(0);

    setSelectedAnswer(null);
    setSubmitted(false);

    setScore(0);

    setQuizFinished(false);
    setCategoryFinished(false);

    setQuizScores([]);
  };

  // =========================================================
  // FINAL SCORE
  // =========================================================

  const finalScore = quizScores.reduce(
    (total, item) =>
      total + item.score,
    0
  );

  const finalTotal = quizScores.reduce(
    (total, item) =>
      total + item.total,
    0
  );

  const finalPercentage =
    finalTotal > 0
      ? Math.round(
        (finalScore / finalTotal) *
        100
      )
      : 0;

  // =========================================================
  // INVALID CATEGORY
  // =========================================================

  if (
    !category ||
    category.id === "all"
  ) {
    return (
      <main className="category-quiz-page">
        <div className="category-quiz-container">
          <section className="category-quiz-empty">
            <span className="category-quiz-eyebrow">
              QUIZ
            </span>

            <h1>Quiz Not Found</h1>

            <p>
              The quiz category you're
              looking for doesn't exist.
            </p>

            <Link
              to="/quiz"
              className="category-quiz-back-button"
            >
              <ArrowLeft size={16} />
              Back to Quiz
            </Link>
          </section>
        </div>
      </main>
    );
  }

  // =========================================================
  // NO QUIZ IN CATEGORY
  // =========================================================

  if (
    categoryQuizzes.length === 0
  ) {
    return (
      <main className="category-quiz-page">
        <div className="category-quiz-container">
          <section className="category-quiz-empty">
            <span className="category-quiz-eyebrow">
              {category.name.toUpperCase()}
            </span>

            <h1>
              No Quiz Available
            </h1>

            <p>
              There are no quizzes available
              in this category yet.
            </p>

            <Link
              to="/quiz"
              className="category-quiz-back-button"
            >
              <ArrowLeft size={16} />
              Back to Quiz
            </Link>
          </section>
        </div>
      </main>
    );
  }

  // =========================================================
  // FINAL CATEGORY RESULT
  // =========================================================

  if (categoryFinished) {
    return (
      <>
        <SEO
          title={`${category.name} Quiz Result | Faiz Alam`}
          description={`Complete the ${category.name} quizzes by Faiz Alam and see your final score, questions answered and overall performance.`}
          path={`/quiz/${categoryId}`}
        />

        <main className="category-quiz-page">
          <div className="category-quiz-container">
            <ScrollReveal>
              <section className="category-quiz-result">
                <span className="category-quiz-eyebrow">
                  CATEGORY COMPLETE
                </span>

                <div className="category-quiz-score-circle">
                  <strong>
                    {finalScore}
                  </strong>

                  <span>
                    / {finalTotal}
                  </span>
                </div>

                <h1>
                  {finalPercentage >= 80
                    ? "Excellent work."
                    : finalPercentage >=
                      50
                      ? "Nice work."
                      : "Keep learning."}
                </h1>

                <p>
                  You completed all the
                  quizzes in the{" "}
                  <strong>
                    {category.name}
                  </strong>{" "}
                  category.
                </p>

                <div className="category-quiz-percentage">
                  {finalPercentage}% CORRECT
                </div>

                <div className="category-quiz-summary">
                  <div>
                    <strong>
                      {quizScores.length}
                    </strong>

                    <span>
                      Quizzes
                    </span>
                  </div>

                  <div>
                    <strong>
                      {finalTotal}
                    </strong>

                    <span>
                      Questions
                    </span>
                  </div>

                  <div>
                    <strong>
                      {finalScore}
                    </strong>

                    <span>
                      Correct
                    </span>
                  </div>
                </div>

                <div className="category-quiz-actions">
                  <button
                    type="button"
                    className="category-quiz-retry-button"
                    onClick={
                      handleRetryCategory
                    }
                  >
                    <RotateCcw
                      size={16}
                    />
                    Try Again
                  </button>

                  <Link
                    to="/quiz"
                    className="category-quiz-back-button"
                  >
                    <ArrowLeft
                      size={16}
                    />
                    Back to Quiz
                  </Link>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </main>
      </>
    );
  }

  // =========================================================
  // CURRENT QUIZ RESULT
  // =========================================================

  if (quizFinished) {
    const currentPercentage =
      questions.length > 0
        ? Math.round(
          (score /
            questions.length) *
          100
        )
        : 0;

    return (
      <>
        <SEO
          title={`${activeQuiz.title} Quiz Result | Faiz Alam`}
          description={`Your quiz result for ${activeQuiz.title}.`}
        />

        <main className="category-quiz-page">
          <div className="category-quiz-container">
            <ScrollReveal>
              <section className="category-quiz-result">
                <span className="category-quiz-eyebrow">
                  QUIZ {quizIndex + 1} /{" "}
                  {categoryQuizzes.length}
                </span>

                <div className="category-quiz-score-circle">
                  <strong>
                    {score}
                  </strong>

                  <span>
                    / {questions.length}
                  </span>
                </div>

                <h1>
                  {score ===
                    questions.length
                    ? "Perfect score."
                    : score >=
                      questions.length /
                      2
                      ? "Nice work."
                      : "Keep learning."}
                </h1>

                <p>
                  You answered{" "}
                  <strong>
                    {score}
                  </strong>{" "}
                  out of{" "}
                  <strong>
                    {questions.length}
                  </strong>{" "}
                  questions correctly.
                </p>

                <div className="category-quiz-percentage">
                  {currentPercentage}%
                  CORRECT
                </div>

                <div className="category-quiz-summary">
                  <div>
                    <strong>
                      {score}
                    </strong>

                    <span>
                      Correct
                    </span>
                  </div>

                  <div>
                    <strong>
                      {questions.length -
                        score}
                    </strong>

                    <span>
                      Wrong
                    </span>
                  </div>

                  <div>
                    <strong>
                      {quizIndex + 1}/
                      {
                        categoryQuizzes.length
                      }
                    </strong>

                    <span>
                      Quiz
                    </span>
                  </div>
                </div>

                <div className="category-quiz-actions">

                  {/* TRY AGAIN */}

                  <button
                    type="button"
                    className="category-quiz-retry-button"
                    onClick={
                      handleRetryCurrentQuiz
                    }
                  >
                    <RotateCcw
                      size={16}
                    />
                    Try Again
                  </button>

                  {/* BACK TO VIDEO */}

                  {activeVideo && (
                    <Link
                      to={`/videos/${activeVideo.id}`}
                      className="category-quiz-back-button"
                    >
                      <ArrowLeft
                        size={16}
                      />
                      Back to Video
                    </Link>
                  )}

                  {/* NEXT QUIZ / FINAL RESULT */}

                  <button
                    type="button"
                    className="category-quiz-next-button"
                    onClick={
                      handleNextQuiz
                    }
                  >
                    {isLastQuiz
                      ? "Final Result"
                      : "Next Quiz"}

                    <ArrowRight
                      size={17}
                    />
                  </button>
                </div>
              </section>
            </ScrollReveal>
          </div>
        </main>
      </>
    );
  }

  // =========================================================
  // QUIZ PROGRESS
  // =========================================================

  const progress =
    questions.length > 0
      ? ((questionIndex + 1) /
        questions.length) *
      100
      : 0;

  const isCorrect =
    submitted &&
    selectedAnswer ===
    currentQuestion.correctAnswer;

  // =========================================================
  // MAIN QUIZ SCREEN
  // =========================================================

  return (
    <>
      <SEO
        title={`${activeQuiz.title} Quiz | Faiz Alam`}
        description={
          activeQuiz.description ||
          `Test your knowledge of ${activeQuiz.title}.`
        }
      />

      <main className="category-quiz-page">
        <div className="category-quiz-container">

          {/* =========================================
              TOP
          ========================================= */}

          <ScrollReveal>
            <div className="category-quiz-top">

              <Link
                to="/quiz"
                className="category-quiz-exit"
              >
                <ArrowLeft size={16} />
                Back to Quiz
              </Link>

              <div className="category-quiz-counter">
                QUIZ {quizIndex + 1} /{" "}
                {categoryQuizzes.length}
              </div>

            </div>
          </ScrollReveal>

          {/* =========================================
              QUESTION COUNTER
          ========================================= */}

          <ScrollReveal delay={50}>
            <div className="category-quiz-question-info">
              <span>
                QUESTION{" "}
                {questionIndex + 1} /{" "}
                {questions.length}
              </span>

              <span>
                {Math.round(progress)}%
              </span>
            </div>

            <div className="category-quiz-progress">
              <div
                className="category-quiz-progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </ScrollReveal>

          {/* =========================================
              VIDEO / SOURCE INFO
          ========================================= */}

          {activeVideo && (
            <ScrollReveal delay={100}>
              <div className="category-quiz-video-info">
                <span>
                  FROM VIDEO
                </span>

                <strong>
                  {activeVideo.title}
                </strong>
              </div>
            </ScrollReveal>
          )}

          {/* =========================================
              QUESTION
          ========================================= */}

          <ScrollReveal delay={150}>
            <section className="category-quiz-question-card">

              <div className="category-quiz-question-number">
                QUESTION{" "}
                {String(
                  questionIndex + 1
                ).padStart(2, "0")}
              </div>

              <h1>
                {currentQuestion.question}
              </h1>

              {/* OPTIONS */}

              <div className="category-quiz-options">
                {currentQuestion.options.map(
                  (option, index) => {
                    const isSelected =
                      selectedAnswer ===
                      option.value;

                    const isOptionCorrect =
                      submitted &&
                      option.value ===
                      currentQuestion.correctAnswer;

                    const isWrong =
                      submitted &&
                      isSelected &&
                      option.value !==
                      currentQuestion.correctAnswer;

                    return (
                      <button
                        key={
                          option.value
                        }
                        type="button"
                        disabled={
                          submitted
                        }
                        onClick={() =>
                          handleSelectAnswer(
                            option.value
                          )
                        }
                        className={[
                          "category-quiz-option",

                          isSelected
                            ? "selected"
                            : "",

                          isOptionCorrect
                            ? "correct"
                            : "",

                          isWrong
                            ? "wrong"
                            : "",
                        ]
                          .filter(
                            Boolean
                          )
                          .join(" ")}
                      >
                        <span className="category-quiz-option-letter">
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        <span className="category-quiz-option-text">
                          {option.text}
                        </span>

                        {isOptionCorrect && (
                          <CheckCircle2
                            size={20}
                          />
                        )}

                        {isWrong && (
                          <XCircle
                            size={20}
                          />
                        )}
                      </button>
                    );
                  }
                )}
              </div>

              {/* =====================================
                  ANSWER RESULT
              ===================================== */}

              {submitted && (
                <ScrollReveal
                  direction="up"
                  delay={50}
                >
                  <div
                    className={`category-quiz-answer ${isCorrect
                        ? "correct"
                        : "wrong"
                      }`}
                  >

                    <div className="category-quiz-answer-heading">
                      {isCorrect ? (
                        <>
                          <CheckCircle2
                            size={20}
                          />
                          Correct answer
                        </>
                      ) : (
                        <>
                          <XCircle
                            size={20}
                          />
                          Incorrect answer
                        </>
                      )}
                    </div>

                    {/* EXPLANATION */}

                    <p>
                      {
                        currentQuestion.explanation
                      }
                    </p>

                    {/* =================================
                        SOURCE VIDEO
                    ================================= */}

                    {activeVideo && (
                      <div className="category-quiz-related-video">

                        <div className="category-quiz-related-info">

                          <span>
                            SOURCE VIDEO
                          </span>

                          <strong>
                            {
                              activeVideo.title
                            }
                          </strong>

                        </div>

                        <div className="category-quiz-source-actions">

                          {/* YOUTUBE */}

                          {activeVideo.youtubeId &&
                            activeVideo.youtubeId !==
                            "YOUR_YOUTUBE_ID" && (
                              <a
                                href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                                target="_blank"
                                rel="noreferrer"
                                className="category-quiz-source-button"
                              >
                                YouTube

                                <ExternalLink
                                  size={
                                    14
                                  }
                                />
                              </a>
                            )}

                          {/* SOURCE PAGE */}

                          <Link
                            to={`/videos/${activeVideo.id}`}
                            className="category-quiz-source-button"
                          >
                            Source

                            <FileText
                              size={14}
                            />
                          </Link>

                        </div>
                      </div>
                    )}

                  </div>
                </ScrollReveal>
              )}

              {/* =====================================
                  NEXT QUESTION
              ===================================== */}

              {submitted && (
                <ScrollReveal
                  direction="up"
                  delay={100}
                >
                  <div className="category-quiz-question-action">

                    <button
                      type="button"
                      className="category-quiz-submit-button"
                      onClick={
                        handleNextQuestion
                      }
                    >
                      {isLastQuestion
                        ? "See Result"
                        : "Next Question"}

                      <ArrowRight
                        size={17}
                      />
                    </button>

                  </div>
                </ScrollReveal>
              )}

            </section>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}

export default QuizCategoryPlay;