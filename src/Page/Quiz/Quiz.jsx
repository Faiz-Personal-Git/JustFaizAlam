import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import categories from "../../data/categories";
import videos from "../../data/videos";
import quizzes from "../../data/quizzes";
import ScrollReveal from "../../components/ScrollReveal";
import SEO from "../../components/SEO";

import "./Quiz.css";

function Quiz() {
  const quizList = useMemo(() => Object.values(quizzes || {}), []);

  const categoryData = useMemo(() => {
    return categories.map((category) => {
      if (category.id === "all") {
        return {
          ...category,
          quizCount: quizList.length,
        };
      }

      const categoryVideos = videos.filter((video) => {
        const videoCategory = video.category
          ?.toLowerCase()
          .replace(/\s+/g, "-");

        return videoCategory === category.id;
      });

      const categoryVideoIds = categoryVideos.map((video) => video.id);
      const categoryQuizzes = quizList.filter((quiz) =>
        categoryVideoIds.includes(quiz.videoId)
      );

      return {
        ...category,
        quizCount: categoryQuizzes.length,
      };
    });
  }, [quizList]);

  const totalQuestions = useMemo(() => {
    return quizList.reduce(
      (total, quiz) => total + (quiz.questions?.length || 0),
      0
    );
  }, [quizList]);

  const firstQuiz = quizList[0];

  return (
    <main className="quiz-page">
      <SEO
        title="Quizzes | Faiz Alam"
        description="Test your knowledge with interactive quizzes based on Faiz Alam's documentary, educational, technology and YouTube videos. Choose a topic, answer questions and explore the sources behind each story."
        path="/quiz"
      />

      <section className="quiz-categories-section" aria-labelledby="quiz-page-title">
      
        <div className="quiz-section-heading">
          <ScrollReveal direction="left">
            <div>
              <span className="section-eyebrow">01 / Explore quizzes</span>
              <h2>
                Choose a <em>topic.</em>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <p>
              Every quiz is connected to a specific video, so you can always go
              back to the original source.
            </p>
          </ScrollReveal>
        </div>

        <div className="quiz-category-grid">
          {categoryData
            .filter((category) => category.id !== "all")
            .map((category, index) => {
              const Icon = category.icon;
              const destination =
                category.quizCount > 0 ? `/quiz/${category.id}` : "/quiz";

              return (
                <ScrollReveal
                  key={category.id}
                  direction="up"
                  delay={index * 70}
                >
                  <Link
                    to={destination}
                    className={`quiz-category-card ${
                      category.quizCount === 0 ? "quiz-category-disabled" : ""
                    }`}
                    aria-disabled={category.quizCount === 0}
                  >
                    <div className="quiz-category-top">
                      <div className="quiz-category-icon">
                        {Icon ? <Icon size={21} aria-hidden="true" /> : null}
                      </div>
                      <ArrowRight
                        className="quiz-category-arrow"
                        size={18}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="quiz-category-content">
                      <h3>{category.name}</h3>
                      <span>
                        {category.quizCount}{" "}
                        {category.quizCount === 1 ? "quiz" : "quizzes"}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
        </div>
      </section>

      <section className="quiz-bottom-cta" aria-labelledby="quiz-cta-title">
        <div className="quiz-bottom-icon" aria-hidden="true">
          <CheckCircle2 size={22} />
        </div>
        <span className="section-eyebrow">03 / Your next step</span>
        <h2 id="quiz-cta-title">
          Ready to test <em>yourself?</em>
        </h2>
        <p>
          Start with the available questions and see how much you remember.
        </p>

        {firstQuiz ? (
          <Link
            to={`/quiz/video/${firstQuiz.videoId}`}
            className="quiz-start-button"
          >
            Start quiz <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ) : (
          <span
            className="quiz-start-button quiz-start-button-disabled"
            aria-disabled="true"
          >
            No quiz available
          </span>
        )}
      </section>
    </main>
  );
}

export default Quiz;
