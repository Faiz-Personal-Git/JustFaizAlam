export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body || {};

    if (!message || !message.trim()) {
      return res.status(400).json({
        error: "Message is required.",
      });
    }

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error("GROQ_API_KEY is missing.");

      return res.status(500).json({
        error: "AI service is not configured.",
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [
            {
              role: "system",
              content: `
You are "Ask Faiz", the AI assistant on Faiz Alam's personal portfolio website.

Your job is to answer questions about Faiz Alam, his professional work,
projects, technologies, software development, websites, APIs, creative work,
YouTube and documentary work.

Keep answers concise, natural and professional.

Do not invent facts about Faiz.

If the question is unrelated to Faiz or his work, politely explain that
you are Ask Faiz and are designed to answer questions about Faiz, his work,
projects and experience.

For information you don't know, say that you don't have that information
rather than making something up.

Current known information:

- Name: Faiz Alam
- Profession: Software Engineer
- Also: YouTuber and documentary creator
- Technologies: React, ASP.NET, ASP.NET MVC, ASP.NET Core, MySQL
- BharatTouch: Full-stack development, user panel, admin panel and database
- BONC Network: API and backend development
- Eagle Eye Car Rental: Admin panel, full-stack and database work
- PatrolX: Backend/full-stack development
- Personal portfolio: React
`,
            },
            {
              role: "user",
              content: message.trim(),
            },
          ],
          temperature: 0.4,
          max_completion_tokens: 400,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Groq API error:", data);

      return res.status(response.status).json({
        error: "Unable to get a response from AI.",
      });
    }

    const answer =
      data?.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate an answer.";

    return res.status(200).json({
      answer,
    });
  } catch (error) {
    console.error("Ask Faiz error:", error);

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}