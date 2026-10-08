import { useEffect, useRef, useState } from "react";
import "./AskFaiz.css";

function AskFaiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const chatInputRef = useRef(null);

  const suggestedQuestions = [
    "What does Faiz specialize in?",
    "Tell me about his projects",
    "What technologies does Faiz use?",
  ];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatInputRef.current?.focus();
      }, 250);
    }
  }, [isOpen]);

  const handleQuestion = (question) => {
    setMessage(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    // Backend / AI API will be connected here later.
    console.log("Ask Faiz:", message);

    setMessage("");
  };

  return (
    <>
      {/* =====================================================
          FLOATING ASK FAIZ BUTTON
      ===================================================== */}

      <button
        type="button"
        className={`ask-faiz-trigger ${
          isOpen ? "is-open" : ""
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Ask Faiz" : "Open Ask Faiz"}
        aria-expanded={isOpen}
      >
        <span className="ask-faiz-trigger-mark">
          <span />
          <span />
          <span />
        </span>

        <span className="ask-faiz-trigger-text">
          ASK FAIZ
        </span>
      </button>


      {/* =====================================================
          CHAT PANEL
      ===================================================== */}

      <div
        className={`ask-faiz-panel ${
          isOpen ? "is-open" : ""
        }`}
        aria-hidden={!isOpen}
      >

        {/* HEADER */}

        <div className="ask-faiz-header">

          <div className="ask-faiz-heading">

            <div className="ask-faiz-symbol">
              <span />
              <span />
              <span />
            </div>

            <div>
              <div className="ask-faiz-title">
                ASK FAIZ
              </div>

              <div className="ask-faiz-status">
                <span className="ask-faiz-status-dot" />
                ABOUT MY WORK
              </div>
            </div>

          </div>

          <button
            type="button"
            className="ask-faiz-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close Ask Faiz"
          >
            ×
          </button>

        </div>


        {/* CHAT BODY */}

        <div className="ask-faiz-body">

          <div className="ask-faiz-intro">

            <span className="ask-faiz-intro-number">
              01
            </span>

            <div>

              <h3>
                Curious about
                <br />
                <em>my work?</em>
              </h3>

              <p>
                Ask me about my projects, technologies,
                experience or the things I build.
              </p>

            </div>

          </div>


          {/* SUGGESTED QUESTIONS */}

          <div className="ask-faiz-suggestions">

            <span className="ask-faiz-label">
              TRY ASKING
            </span>

            <div className="ask-faiz-question-list">

              {suggestedQuestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  className="ask-faiz-question"
                  onClick={() => handleQuestion(question)}
                >
                  <span>{question}</span>

                  <span className="ask-faiz-question-arrow">
                    ↗
                  </span>
                </button>
              ))}

            </div>

          </div>

        </div>


        {/* INPUT */}

        <form
          className="ask-faiz-input-area"
          onSubmit={handleSubmit}
        >

          <div className="ask-faiz-input-wrap">

            <input
              ref={chatInputRef}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask something..."
              aria-label="Ask Faiz a question"
              autoComplete="off"
            />

            <button
              type="submit"
              className="ask-faiz-send"
              aria-label="Send question"
            >
              ↗
            </button>

          </div>

          <div className="ask-faiz-input-note">
            ASK ABOUT FAIZ · HIS WORK · HIS PROJECTS
          </div>

        </form>

      </div>


      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      <button
        type="button"
        className={`ask-faiz-backdrop ${
          isOpen ? "is-open" : ""
        }`}
        onClick={() => setIsOpen(false)}
        aria-label="Close Ask Faiz"
      />
    </>
  );
}

export default AskFaiz;