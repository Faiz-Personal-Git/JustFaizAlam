import { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import categories from "../../data/categories";
import videos from "../../data/videos";
import quizzes from "../../data/quizzes";

import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Quiz.css";

function Quiz() {

  const quizList = useMemo(() => {
    return Object.values(quizzes || {});
  }, []);

  /*
   * =========================================================
   * CATEGORY DATA
   * =========================================================
   */

  const categoryData = useMemo(() => {
    return categories.map((category) => {
      /*
       * ALL TOPICS
       */
      if (category.id === "all") {
        return {
          ...category,
          quizCount: quizList.length,
        };
      }

      /*
       * Find videos belonging to this category
       */
      const categoryVideos = videos.filter((video) => {
        const videoCategory = video.category
          ?.toLowerCase()
          .replace(/\s+/g, "-");

        return videoCategory === category.id;
      });

      /*
       * Get their video IDs
       */
      const categoryVideoIds = categoryVideos.map(
        (video) => video.id
      );

      /*
       * Count quizzes belonging to these videos
       */
      const categoryQuizzes = quizList.filter((quiz) =>
        categoryVideoIds.includes(quiz.videoId)
      );

      return {
        ...category,
        quizCount: categoryQuizzes.length,
      };
    });
  }, [quizList]);

  /*
   * =========================================================
   * TOTAL QUESTIONS
   * =========================================================
   */

  const totalQuestions = useMemo(() => {
    return quizList.reduce((total, quiz) => {
      return total + (quiz.questions?.length || 0);
    }, 0);
  }, [quizList]);

  /*
   * =========================================================
   * START QUIZ
   * =========================================================
   */

  const firstQuiz = quizList[0];

  return (
    <main className="quiz-page">

      <SEO
        title="Quiz — Faiz Alam"
        description="Test your knowledge with interactive quizzes based on Faiz Alam's documentary and educational videos."
        path="/quiz"
      />
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="quiz-hero">

        <div className="quiz-hero-inner">

          <ScrollReveal direction="up">

            <div className="quiz-kicker">
              <span className="quiz-kicker-dot" />

              TEST YOUR KNOWLEDGE
            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={100}
          >

            <h1>
              How much did
              <span> you actually learn?</span>
            </h1>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={200}
          >

            <p>
              Take quizzes based directly on the videos.
              Choose a topic, answer the questions and explore
              the source behind every answer.
            </p>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={300}
          >

            <div className="quiz-hero-meta">

              <div>
                <strong>{videos.length}</strong>
                <span>Videos</span>
              </div>

              <div>
                <strong>{totalQuestions}</strong>
                <span>Questions</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Choices</span>
              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="quiz-categories-section">

        <div className="quiz-section-heading">

          <ScrollReveal direction="left">

            <div>

              <span className="section-eyebrow">
                EXPLORE QUIZZES
              </span>

              <h2>
                Choose a topic
              </h2>

            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="right"
            delay={100}
          >

            <p>
              Every quiz is connected to a specific video,
              so you can always go back to the original source.
            </p>

          </ScrollReveal>

        </div>


        <div className="quiz-category-grid">

          {categoryData.map((category, index) => {

            const Icon = category.icon;

            /*
             * Only categories with an actual quiz
             * should open a quiz.
             */

            const categoryVideos = videos.filter((video) => {
              const videoCategory = video.category
                ?.toLowerCase()
                .replace(/\s+/g, "-");

              if (category.id === "all") {
                return true;
              }

              return videoCategory === category.id;
            });

            const categoryQuiz = quizList.find((quiz) =>
              categoryVideos.some(
                (video) => video.id === quiz.videoId
              )
            );

            const destination = categoryQuiz
              ? `/quiz/video/${categoryQuiz.videoId}`
              : "/quiz";

            return (
              <ScrollReveal
                key={category.id}
                direction="up"
                delay={index * 70}
              >

                <Link
                  to={destination}
                  className={`quiz-category-card ${category.quizCount === 0
                      ? "quiz-category-disabled"
                      : ""
                    }`}
                >

                  <div className="quiz-category-top">

                    <div className="quiz-category-icon">
                      {Icon && <Icon size={21} />}
                    </div>

                    <ArrowRight
                      className="quiz-category-arrow"
                      size={18}
                    />

                  </div>


                  <div className="quiz-category-content">

                    <h3>
                      {category.name}
                    </h3>

                    <span>
                      {category.quizCount}{" "}
                      {category.quizCount === 1
                        ? "quiz"
                        : "quizzes"}
                    </span>

                  </div>

                </Link>

              </ScrollReveal>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="quiz-how-section">

        <ScrollReveal direction="left">

          <div className="quiz-how-heading">

            <span className="section-eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Learn.
              <br />
              Remember.
              <br />
              Verify.
            </h2>

          </div>

        </ScrollReveal>


        <div className="quiz-steps">

          <ScrollReveal direction="up">

            <div className="quiz-step">

              <span>01</span>

              <div>

                <h3>
                  Choose a topic
                </h3>

                <p>
                  Pick a category and find quizzes
                  connected to the videos.
                </p>

              </div>

            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={120}
          >

            <div className="quiz-step">

              <span>02</span>

              <div>

                <h3>
                  Answer questions
                </h3>

                <p>
                  Every question has four choices
                  and only one correct answer.
                </p>

              </div>

            </div>

          </ScrollReveal>


          <ScrollReveal
            direction="up"
            delay={240}
          >

            <div className="quiz-step">

              <span>03</span>

              <div>

                <h3>
                  Explore the source
                </h3>

                <p>
                  Whether you are right or wrong,
                  you can go back to the original
                  video and source.
                </p>

              </div>

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="quiz-bottom-cta">

        <ScrollReveal direction="up">

          <div className="quiz-bottom-icon">
            <CheckCircle2 size={24} />
          </div>

        </ScrollReveal>


        <ScrollReveal
          direction="up"
          delay={100}
        >

          <h2>
            Ready to test yourself?
          </h2>

        </ScrollReveal>


        <ScrollReveal
          direction="up"
          delay={200}
        >

          <p>
            Start with the available questions
            and see how much you remember.
          </p>

        </ScrollReveal>


        <ScrollReveal
          direction="up"
          delay={300}
        >

          {firstQuiz ? (
            <Link
              to={`/quiz/video/${firstQuiz.videoId}`}
              className="quiz-start-button"
            >
              Start Quiz

              <ArrowRight size={17} />
            </Link>
          ) : (
            <span
              className="quiz-start-button"
              style={{
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              No Quiz Available
            </span>
          )}

        </ScrollReveal>

      </section>

    </main>
  );
}

export default Quiz;