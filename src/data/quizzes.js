const quizzes = {
  1: {
    videoId: 1,

    title: "Gyanesh Kumar & CJP",

    description:
      "Test your knowledge of the key facts, events and issues discussed in this documentary.",

    resource: "/Resources/1.pdf",

    questions: [
      {
        id: "q1",
        question: "What does SIR stand for in the context of the documentary?",
        options: [
          {
            value: "A",
            text: "Special Intensive Revision",
          },
          {
            value: "B",
            text: "Systematic Indian Registration",
          },
          {
            value: "C",
            text: "Special Indian Review",
          },
          {
            value: "D",
            text: "State Intensive Reorganisation",
          },
        ],
        correctAnswer: "A",
        explanation:
          "SIR stands for Special Intensive Revision. The documentary explains it as an Election Commission exercise to re-check and update voter lists.",
      },

      {
        id: "q2",
        question:
          "According to the documentary, where did the SIR process begin in June 2025?",
        options: [
          {
            value: "A",
            text: "Bihar",
          },
          {
            value: "B",
            text: "Maharashtra",
          },
          {
            value: "C",
            text: "Delhi",
          },
          {
            value: "D",
            text: "Uttar Pradesh",
          },
        ],
        correctAnswer: "A",
        explanation:
          "The documentary states that SIR began in Bihar in June 2025 before its rollout reached other states and Union Territories.",
      },

      {
        id: "q3",
        question:
          "According to the Indian Express investigation cited in the documentary, how many names were excluded from draft voter rolls across 30 States and Union Territories?",
        options: [
          {
            value: "A",
            text: "More than 1 crore",
          },
          {
            value: "B",
            text: "More than 5 crore",
          },
          {
            value: "C",
            text: "More than 13 crore",
          },
          {
            value: "D",
            text: "More than 20 crore",
          },
        ],
        correctAnswer: "C",
        explanation:
          "The documentary cites an Indian Express investigation reporting that more than 13 crore names were excluded from draft voter rolls across 30 States and Union Territories.",
      },

      {
        id: "q4",
        question:
          "According to the September 2026 Indian Express report cited in the documentary, how many times did Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi record objections over the previous 10 months?",
        options: [
          {
            value: "A",
            text: "5 times",
          },
          {
            value: "B",
            text: "10 times",
          },
          {
            value: "C",
            text: "14 times",
          },
          {
            value: "D",
            text: "21 times",
          },
        ],
        correctAnswer: "C",
        explanation:
          "The documentary states that the September 2026 Indian Express investigation reported at least 14 recorded objections over the previous 10 months.",
      },

      {
        id: "q5",
        question:
          "Which form is used for voter registration by an eligible citizen, according to the documentary?",
        options: [
          {
            value: "A",
            text: "Form 2",
          },
          {
            value: "B",
            text: "Form 6",
          },
          {
            value: "C",
            text: "Form 10",
          },
          {
            value: "D",
            text: "Form 12",
          },
        ],
        correctAnswer: "B",
        explanation:
          "The documentary explains that an eligible citizen uses Form 6 for voter registration and notes that changes to the Form 6 process became part of the internal discussion.",
      },

      {
        id: "q6",
        question:
          "Which of the following was one of CJP's demands mentioned in the documentary?",
        options: [
          {
            value: "A",
            text: "Immediately freeze SIR",
          },
          {
            value: "B",
            text: "Increase the number of Election Commissioners",
          },
          {
            value: "C",
            text: "Cancel all future elections permanently",
          },
          {
            value: "D",
            text: "Replace all voter ID cards",
          },
        ],
        correctAnswer: "A",
        explanation:
          "One of CJP's three major demands was to immediately freeze SIR, stop upcoming elections and restore the January 2025 voter list.",
      },

      {
        id: "q7",
        question:
          "Under the Election Commissioners appointment system described in the documentary, who are the three members of the selection committee?",
        options: [
          {
            value: "A",
            text: "Prime Minister, Chief Justice and President",
          },
          {
            value: "B",
            text: "Prime Minister, Lok Sabha Leader of Opposition and a PM-nominated Union Cabinet Minister",
          },
          {
            value: "C",
            text: "President, Prime Minister and Chief Election Commissioner",
          },
          {
            value: "D",
            text: "Lok Sabha Speaker, Prime Minister and Chief Justice",
          },
        ],
        correctAnswer: "B",
        explanation:
          "The documentary describes the 2023 law's selection committee as consisting of the Prime Minister, the Lok Sabha Leader of Opposition and a Union Cabinet Minister nominated by the Prime Minister.",
      },

      {
        id: "q8",
        question:
          "Why does the documentary say voter-list revision can potentially affect an election outcome?",
        options: [
          {
            value: "A",
            text: "Because voter lists determine candidate salaries",
          },
          {
            value: "B",
            text: "Because excluding eligible voters can matter when the number of affected voters is large compared with a winning margin",
          },
          {
            value: "C",
            text: "Because voter lists decide which party gets election symbols",
          },
          {
            value: "D",
            text: "Because voter lists determine the election date",
          },
        ],
        correctAnswer: "B",
        explanation:
          "The documentary explains that if many eligible voters are excluded in a constituency with a small winning margin, questions can arise about the potential effect on the election outcome.",
      },

      {
        id: "q9",
        question:
          "What happened on 2 October according to the documentary?",
        options: [
          {
            value: "A",
            text: "The Supreme Court cancelled SIR",
          },
          {
            value: "B",
            text: "CJP held a protest at Mumbai's Shivaji Park",
          },
          {
            value: "C",
            text: "Gyanesh Kumar announced his resignation",
          },
          {
            value: "D",
            text: "The Election Commission restored the January 2025 voter list",
          },
        ],
        correctAnswer: "B",
        explanation:
          "The documentary states that CJP held a protest at Mumbai's Shivaji Park on 2 October and reports that more than 10,000 people attended according to cited reports.",
      },

      {
        id: "q10",
        question:
          "According to the documentary's conclusion, what is the larger issue behind the Gyanesh Kumar controversy?",
        options: [
          {
            value: "A",
            text: "Only the resignation of one CEC",
          },
          {
            value: "B",
            text: "The future of political parties",
          },
          {
            value: "C",
            text: "How India's voter list is controlled and who is responsible for adding or removing voters",
          },
          {
            value: "D",
            text: "The design of voter ID cards",
          },
        ],
        correctAnswer: "C",
        explanation:
          "The documentary concludes that the issue goes beyond one person's resignation and raises questions about how India's voter list is controlled, who decides whose name is added or removed, and where responsibility lies.",
      },
    ],
  },
  
};

export default quizzes;