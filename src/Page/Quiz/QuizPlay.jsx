import { articles } from "../../data/articles";
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

import videos from "../../data/videos";
import quizzes from "../../data/quizzes";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./QuizPlay.css";

function QuizPlay() {
  const { videoId } = useParams();

  const numericVideoId = Number(videoId);

  // ---------------------------------------------
  // VIDEO
  // ---------------------------------------------

  const selectedVideo = useMemo(() => {
    return videos.find(
      (video) => video.id === numericVideoId
    );
  }, [numericVideoId]);

  // ---------------------------------------------
  // QUIZ
  // ---------------------------------------------

  const quiz = quizzes[numericVideoId];

  const relatedArticle = articles.find(
    (article) => article.relatedVideoId === numericVideoId
  );

  const articlePath = relatedArticle
    ? `/blog/${relatedArticle.slug}`
    : null;

  // ---------------------------------------------
  // QUESTIONS
  // ---------------------------------------------

  const questions = quiz?.questions || [];

  // ---------------------------------------------
  // STATE
  // ---------------------------------------------

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  // ---------------------------------------------
  // QUIZ NOT FOUND
  // ---------------------------------------------

  if (!quiz) {
    return (
      <main className="quiz-play-page">

        <section className="quiz-empty">

          <ScrollReveal direction="up">

            <span className="section-eyebrow">
              404 / QUIZ
            </span>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <h1>
              Quiz not found.
            </h1>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <p>
              The quiz you are trying to access
              does not exist.
            </p>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={300}
          >

            <Link
              to="/quiz"
              className="quiz-back-button"
            >
              <ArrowLeft size={16} />
              Back to Quiz
            </Link>

          </ScrollReveal>

        </section>

      </main>
    );
  }

  // ---------------------------------------------
  // NO QUESTIONS
  // ---------------------------------------------

  if (!questions.length) {
    return (
      <main className="quiz-play-page">

        <section className="quiz-empty">

          <ScrollReveal direction="up">

            <span className="section-eyebrow">
              QUIZ
            </span>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <h1>
              No questions available yet.
            </h1>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <p>
              This video does not have any quiz
              questions yet.
            </p>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={300}
          >

            <Link
              to={`/videos/${quiz.videoId}`}
              className="quiz-back-button"
            >
              <ArrowLeft size={16} />
              Back to Video
            </Link>

          </ScrollReveal>

        </section>

      </main>
    );
  }

  // ---------------------------------------------
  // CURRENT QUESTION
  // ---------------------------------------------

  const currentQuestion =
    questions[currentIndex];

  // ---------------------------------------------
  // SELECT ANSWER
  // ---------------------------------------------

  const selectAnswer = (answer) => {
    if (submitted) {
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

  // ---------------------------------------------
  // NEXT QUESTION
  // ---------------------------------------------

  const nextQuestion = () => {
    if (
      currentIndex ===
      questions.length - 1
    ) {
      setFinished(true);
      return;
    }

    setCurrentIndex(
      (previousIndex) =>
        previousIndex + 1
    );

    setSelectedAnswer(null);

    setSubmitted(false);
  };

  // ---------------------------------------------
  // RESTART
  // ---------------------------------------------

  const restartQuiz = () => {
    setCurrentIndex(0);

    setSelectedAnswer(null);

    setSubmitted(false);

    setScore(0);

    setFinished(false);
  };

  // ---------------------------------------------
  // RESULT SCREEN
  // ---------------------------------------------

  if (finished) {
    return (
      <main className="quiz-play-page">

        <section className="quiz-result">

          <ScrollReveal direction="up">

            <span className="section-eyebrow">
              QUIZ COMPLETE
            </span>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <div className="quiz-score-circle">

              <strong>
                {score}
              </strong>

              <span>
                / {questions.length}
              </span>

            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <h1>
              {score === questions.length
                ? "Perfect score."
                : score >=
                  questions.length / 2
                  ? "Nice work."
                  : "Keep learning."}
            </h1>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={300}
          >

            <p>
              You answered{" "}
              {score} out of{" "}
              {questions.length}{" "}
              questions correctly.
            </p>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={400}
          >

            <div className="quiz-result-actions">
              <button
                type="button"
                onClick={restartQuiz}
                className="quiz-restart-button"
              >
                <RotateCcw size={16} />
                Try Again
              </button>

              <Link
                to={`/videos/${quiz.videoId}`}
                className="quiz-back-button"
              >
                Watch Documentary
                <ArrowRight size={16} />
              </Link>

              {relatedArticle && (
                <Link
                  to={articlePath}
                  className="quiz-back-button"
                >
                  Read Full Article
                  <ArrowRight size={16} />
                </Link>
              )}
            </div>

          </ScrollReveal>

        </section>

      </main>
    );
  }

  // ---------------------------------------------
  // RELATED VIDEO
  // ---------------------------------------------

  const relatedVideo =
    selectedVideo ||
    videos.find(
      (video) =>
        video.id ===
        currentQuestion.videoId
    );

  // ---------------------------------------------
  // PROGRESS
  // ---------------------------------------------

  const progress =
    ((currentIndex + 1) /
      questions.length) *
    100;

  // ---------------------------------------------
  // PAGE
  // ---------------------------------------------

  return (
    <main className="quiz-play-page">

      <SEO
        title={`${selectedVideo?.title || "Quiz"} | Quiz by Faiz Alam`}
        description={
          selectedVideo
            ? `Test your knowledge about ${selectedVideo.title} with this interactive quiz by Faiz Alam. Watch the video, answer questions and explore the sources behind the story.`
            : "Test your knowledge with interactive quizzes based on Faiz Alam's videos, documentaries and educational content."
        }
        path={`/quiz/video/${numericVideoId}`}
      />

      <section className="quiz-play-container">

        {/* ======================================
            TOP
        ====================================== */}

        <ScrollReveal direction="up">

          <div className="quiz-play-top">

            <Link
              to={`/videos/${quiz.videoId}`}
              className="quiz-exit"
            >
              <ArrowLeft size={16} />
              Back to Video
            </Link>


            <div className="quiz-progress-label">
              QUESTION{" "}
              {currentIndex + 1}
              {" / "}
              {questions.length}
            </div>

          </div>

        </ScrollReveal>


        {/* ======================================
            PROGRESS
        ====================================== */}

        <ScrollReveal
          direction="up"
          delay={50}
        >

          <div className="quiz-progress">

            <div
              className="quiz-progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </ScrollReveal>


        {/* ======================================
            SOURCE VIDEO
        ====================================== */}

        {relatedVideo && (

          <ScrollReveal
            direction="up"
            delay={100}
          >

            <div className="quiz-source-mini">

              <span>
                FROM VIDEO
              </span>

              <strong>
                {relatedVideo.title}
              </strong>

            </div>

          </ScrollReveal>

        )}


        {/* ======================================
            QUESTION CARD
        ====================================== */}

        <ScrollReveal
          direction="up"
          delay={150}
        >

          <section className="quiz-question-card">

            <div className="quiz-question-number">
              {String(
                currentIndex + 1
              ).padStart(2, "0")}
            </div>


            <h1>
              {currentQuestion.question}
            </h1>


            {/* ==================================
                OPTIONS
            ================================== */}

            <div className="quiz-options">

              {currentQuestion.options.map(
                (option, index) => {

                  const isSelected =
                    selectedAnswer ===
                    option.value;

                  const isCorrect =
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
                      key={option.value}
                      type="button"
                      disabled={submitted}
                      onClick={() =>
                        selectAnswer(
                          option.value
                        )
                      }
                      className={[
                        "quiz-option",

                        isSelected
                          ? "selected"
                          : "",

                        isCorrect
                          ? "correct"
                          : "",

                        isWrong
                          ? "wrong"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >

                      <span className="quiz-option-letter">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span className="quiz-option-text">
                        {option.text}
                      </span>


                      {isCorrect && (
                        <CheckCircle2
                          className="quiz-option-result"
                          size={19}
                        />
                      )}


                      {isWrong && (
                        <XCircle
                          className="quiz-option-result"
                          size={19}
                        />
                      )}

                    </button>
                  );
                }
              )}

            </div>


            {/* ==================================
                ANSWER RESULT
            ================================== */}

            {submitted && (

              <ScrollReveal
                direction="up"
                delay={50}
              >

                <div
                  className={`quiz-answer-message ${selectedAnswer ===
                    currentQuestion.correctAnswer
                    ? "answer-correct"
                    : "answer-wrong"
                    }`}
                >

                  {/* ANSWER HEADING */}

                  <div className="quiz-answer-heading">

                    {selectedAnswer ===
                      currentQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 size={20} />
                        Correct answer
                      </>
                    ) : (
                      <>
                        <XCircle size={20} />
                        Incorrect answer
                      </>
                    )}

                  </div>


                  {/* EXPLANATION */}

                  <p>
                    {currentQuestion.explanation}
                  </p>


                  {/* ==================================
                      SOURCE VIDEO
                  ================================== */}

                  {relatedVideo && (

                    <div className="quiz-related-video">

                      <div>

                        <span>
                          SOURCE VIDEO
                        </span>

                        <strong>
                          {relatedVideo.title}
                        </strong>

                      </div>


                      <div className="quiz-source-actions">

                        {/* YOUTUBE */}

                        {relatedVideo.youtubeId &&
                          relatedVideo.youtubeId !==
                          "YOUR_YOUTUBE_ID" && (

                            <a
                              href={`https://www.youtube.com/watch?v=${relatedVideo.youtubeId}`}
                              target="_blank"
                              rel="noreferrer"
                              className="quiz-source-button"
                            >
                              YouTube

                              <ExternalLink
                                size={14}
                              />

                            </a>

                          )}


                        {/* SOURCE VIDEO PAGE */}

                        <Link
                          to={`/videos/${relatedVideo.id}`}
                          className="quiz-source-button"
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


            {/* ==================================
                NEXT QUESTION
            ================================== */}

            {submitted && (

              <ScrollReveal
                direction="up"
                delay={100}
              >

                <div className="quiz-question-action">

                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="quiz-submit-button"
                  >

                    {currentIndex ===
                      questions.length - 1
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

      </section>

    </main>
  );
}

export default QuizPlay;