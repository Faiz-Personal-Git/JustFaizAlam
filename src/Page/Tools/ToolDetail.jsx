
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    Check,
    Copy,
    FileText,
    Zap,
    PenLine,
    Calculator,
    ScanText,
    Layers3,
    SlidersHorizontal,
    LockKeyhole,
    Sparkles,
    Clock3,
    Type,
    RotateCcw,
    ShieldCheck,
} from "lucide-react";

import "./ToolDetail.css";

const toolData = {
    "youtube-title-generator": {
        title: "YouTube Title Generator",
        category: "YouTube",
        type: "FREE",
        icon: "Y",
        subtitle:
            "Create compelling video titles that communicate your story and spark curiosity.",
        description:
            "Generate title ideas for documentaries, educational videos, tutorials and creator content. Choose a style, enter your topic and explore several directions for your next video.",
        features: [
            "Multiple title variations",
            "Documentary and educational styles",
            "One-click copy",
            "No API key required",
        ],
        instructions: [
            "Enter your video topic.",
            "Choose the title style.",
            "Generate and review suggestions.",
            "Copy and refine your preferred title.",
        ],
    },
    "youtube-hook-generator": {
        title: "YouTube Hook Generator",
        category: "YouTube",
        type: "FREE",
        icon: Zap,
        subtitle:
            "Build stronger opening lines for your next video.",
        description:
            "Create opening-line ideas for documentaries, tutorials and educational videos. Use the suggestions to develop an introduction that gives viewers a clear reason to continue watching.",
        features: [
            "Multiple opening ideas",
            "Documentary and educational styles",
            "Copy individual results",
            "Instant browser-based generation",
        ],
        instructions: [
            "Enter the video topic.",
            "Choose an opening style.",
            "Generate hook ideas.",
            "Edit the result to match your script.",
        ],
    },
    "script-word-counter": {
        title: "Script Word Counter",
        category: "Writing",
        type: "FREE",
        icon: FileText,
        subtitle:
            "Know your script length and estimate narration time before recording.",
        description:
            "A practical writing utility for creators, voiceover artists and writers. Track words and characters as you write, and estimate recording duration using your preferred speaking speed.",
        features: [
            "Live word count",
            "Character and paragraph count",
            "Adjustable narration speed",
            "Copy your script",
        ],
        instructions: [
            "Paste or write your script.",
            "Choose your narration speed.",
            "Review the live statistics.",
            "Copy your script when ready.",
        ],
    },
    "social-caption-generator": {
        title: "Social Caption Generator",
        category: "Writing",
        type: "FREE",
        icon: PenLine,
        subtitle:
            "Create caption drafts for posts, announcements and short videos.",
        description:
            "Generate simple caption variations in different writing styles. Refine the suggestions for your platform, audience and content before publishing.",
        features: [
            "Multiple caption variations",
            "Professional, friendly and curiosity-led tones",
            "Copy-ready text",
            "No API key required",
        ],
        instructions: [
            "Enter your post topic.",
            "Select a tone.",
            "Generate caption drafts.",
            "Edit and copy your preferred caption.",
        ],
    },
    "website-cost-estimator": {
        title: "Website Cost Estimator",
        category: "Developer",
        type: "FREE",
        icon: Calculator,
        subtitle:
            "Build an indicative website budget based on pages and features.",
        description:
            "Estimate a website project's starting budget by selecting a project type, page count and additional functionality. Use the result for early planning, not as a final quotation.",
        features: [
            "Multiple website types",
            "Adjustable page count",
            "Optional feature costs",
            "Copyable project estimate",
        ],
        instructions: [
            "Select a website type.",
            "Set the number of pages.",
            "Choose additional features.",
            "Review and copy your estimate.",
        ],
    },
    "youtube-description-generator": {
        title: "YouTube Description Writer",
        category: "YouTube",
        type: "PRO",
        icon: ScanText,
        subtitle:
            "Plan structured descriptions for your YouTube videos.",
        description:
            "A planned premium tool for drafting video summaries, calls to action, chapter placeholders and description structures.",
        features: [
            "Description structure",
            "Video summary drafts",
            "Chapter planning",
            "SEO writing checklist",
        ],
        instructions: [
            "Provide your video topic.",
            "Choose the description format.",
            "Review the draft structure.",
            "Edit the description before publishing.",
        ],
    },
    "thumbnail-planner": {
        title: "Thumbnail Concept Planner",
        category: "YouTube",
        type: "PRO",
        icon: Layers3,
        subtitle:
            "Plan thumbnail concepts around composition and visual storytelling.",
        description:
            "A planned premium workspace for organizing thumbnail concepts, focal points, contrast and text placement.",
        features: [
            "Concept planning",
            "Composition checklist",
            "Text placement notes",
            "Visual direction",
        ],
        instructions: [
            "Enter your video topic.",
            "Define the central visual idea.",
            "Plan the composition.",
            "Review your thumbnail brief.",
        ],
    },
    "seo-content-analyzer": {
        title: "SEO Content Analyzer",
        category: "Developer",
        type: "PRO",
        icon: SlidersHorizontal,
        subtitle:
            "Organize an on-page SEO review for your website content.",
        description:
            "A planned premium tool for reviewing page titles, headings, descriptions and content structure. Search performance cannot be guaranteed.",
        features: [
            "On-page SEO checklist",
            "Title and description review",
            "Heading structure",
            "Content improvement notes",
        ],
        instructions: [
            "Enter your page details.",
            "Review the available SEO checks.",
            "Identify possible improvements.",
            "Update and recheck your page.",
        ],
    },
};

const titleTemplates = {
    Curiosity: [
        (topic) => `The Truth About ${topic}`,
        (topic) => `What Nobody Tells You About ${topic}`,
        (topic) => `${topic}: What You Need to Know`,
        (topic) => `Why ${topic} Matters More Than You Think`,
        (topic) => `The Hidden Story Behind ${topic}`,
        (topic) => `I Investigated ${topic} — Here's What I Found`,
    ],
    Documentary: [
        (topic) => `The Untold Story of ${topic}`,
        (topic) => `Inside the Mystery of ${topic}`,
        (topic) => `The Rise and Fall of ${topic}`,
        (topic) => `What Really Happened to ${topic}?`,
        (topic) => `The Evidence Behind ${topic}`,
        (topic) => `The Story They Never Told About ${topic}`,
    ],
    Educational: [
        (topic) => `${topic} Explained Simply`,
        (topic) => `A Complete Guide to ${topic}`,
        (topic) => `How ${topic} Really Works`,
        (topic) => `5 Important Facts About ${topic}`,
        (topic) => `Everything You Should Know About ${topic}`,
        (topic) => `Understanding ${topic}: A Beginner's Guide`,
    ],
};

const hookTemplates = {
    Curiosity: [
        (topic) =>
            `What if everything you knew about ${topic} was only part of the story?`,
        (topic) =>
            `There is one question about ${topic} that deserves a closer look.`,
        (topic) =>
            `The most interesting part of ${topic} may not be what you expect.`,
        (topic) =>
            `Before we discuss ${topic}, consider this.`,
    ],
    Documentary: [
        (topic) =>
            `Every investigation starts with a question. In this case, that question is ${topic}.`,
        (topic) =>
            `To understand ${topic}, we need to go back to the beginning.`,
        (topic) =>
            `The evidence surrounding ${topic} tells a story worth examining.`,
        (topic) =>
            `This is a closer look at ${topic} and what the available evidence reveals.`,
    ],
    Educational: [
        (topic) =>
            `Let's break down ${topic} into simple, understandable steps.`,
        (topic) =>
            `First, let's understand what ${topic} actually means.`,
        (topic) =>
            `By the end of this video, you'll have a clearer understanding of ${topic}.`,
        (topic) =>
            `Here are the key things to know about ${topic}.`,
    ],
};

const captionTemplates = {
    Friendly: [
        (topic) => `Let's explore ${topic} together. Here's something worth sharing.`,
        (topic) => `A little inspiration around ${topic} for your next project.`,
        (topic) => `Here's something I've been thinking about: ${topic}.`,
        (topic) => `One step at a time. Let's talk about ${topic}.`,
    ],
    Professional: [
        (topic) => `Explore our latest insights on ${topic} and the key takeaways.`,
        (topic) => `Understanding ${topic} can help you make more informed decisions.`,
        (topic) => `A practical perspective on ${topic} and why it matters.`,
        (topic) => `Here are a few important considerations when it comes to ${topic}.`,
    ],
    Curiosity: [
        (topic) => `There's more to ${topic} than meets the eye. Let's take a closer look.`,
        (topic) => `Have you ever wondered about ${topic}? Here's something worth exploring.`,
        (topic) => `A closer look at ${topic} reveals some interesting questions.`,
        (topic) => `What is the most overlooked thing about ${topic}?`,
    ],
};

function makeSuggestions(toolId, topic, style) {
    const templateGroups = {
        "youtube-title-generator": titleTemplates,
        "youtube-hook-generator": hookTemplates,
        "social-caption-generator": captionTemplates,
    };

    const group = templateGroups[toolId];

    if (!group || !group[style]) {
        return [];
    }

    return group[style].map((createText) => createText(topic.trim()));
}

function ToolGenerator({ toolId }) {
    const [topic, setTopic] = useState("");
    const [style, setStyle] = useState("Curiosity");
    const [results, setResults] = useState([]);
    const [copied, setCopied] = useState("");
    const [speed, setSpeed] = useState(130);
    const [script, setScript] = useState("");
    const [websiteType, setWebsiteType] = useState("Business website");
    const [pages, setPages] = useState(5);
    const [selectedFeatures, setSelectedFeatures] = useState([
        "Contact form",
    ]);

    const wordCount = useMemo(() => {
        const trimmed = script.trim();
        return trimmed ? trimmed.split(/\s+/u).length : 0;
    }, [script]);

    const characterCount = script.length;

    const paragraphCount = useMemo(() => {
        const trimmed = script.trim();
        return trimmed
            ? trimmed.split(/\n\s*\n/u).filter(Boolean).length
            : 0;
    }, [script]);

    const durationSeconds = Math.round(
        (wordCount / Math.max(speed, 1)) * 60
    );

    const basePrices = {
        "Landing page": 7999,
        "Business website": 14999,
        "Portfolio website": 9999,
        "E-commerce website": 24999,
    };

    const featurePrices = {
        "Contact form": 1000,
        Blog: 3000,
        "Admin panel": 8000,
        "E-commerce": 12000,
        "Booking system": 7000,
    };

    const estimate =
        basePrices[websiteType] +
        Math.max(0, pages - 5) * 1500 +
        selectedFeatures.reduce(
            (total, feature) => total + featurePrices[feature],
            0
        );

    async function copyText(text, id) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(id);
        } catch {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.select();

            const successful = document.execCommand("copy");
            document.body.removeChild(textArea);

            if (successful) {
                setCopied(id);
            }
        }

        window.setTimeout(() => setCopied(""), 1600);
    }

    function generate() {
        if (!topic.trim()) return;

        setResults(makeSuggestions(toolId, topic, style));
        setCopied("");
    }

    function toggleFeature(feature) {
        setSelectedFeatures((current) =>
            current.includes(feature)
                ? current.filter((item) => item !== feature)
                : [...current, feature]
        );
    }

    function resetGenerator() {
        setTopic("");
        setStyle("Curiosity");
        setResults([]);
        setCopied("");
    }

    if (toolId === "script-word-counter") {
        return (
            <div className="td-workspace-content">
                <div className="td-workspace-field">
                    <label htmlFor="td-script">Your script</label>
                    <textarea
                        id="td-script"
                        className="td-textarea"
                        value={script}
                        onChange={(event) => setScript(event.target.value)}
                        placeholder="Paste your video script or start writing here..."
                        rows={9}
                    />
                    <span className="td-field-hint">
                        Your text is processed in this browser.
                    </span>
                </div>

                <div className="td-speed-control">
                    <div className="td-speed-label">
                        <label htmlFor="td-speed">Narration speed</label>
                        <strong>{speed} WPM</strong>
                    </div>

                    <input
                        id="td-speed"
                        type="range"
                        min="80"
                        max="220"
                        step="5"
                        value={speed}
                        onChange={(event) => setSpeed(Number(event.target.value))}
                    />
                    <div className="td-range-labels">
                        <span>80 WPM · Slow</span>
                        <span>220 WPM · Fast</span>
                    </div>
                </div>

                <div className="td-live-stats">
                    <div>
                        <span>WORDS</span>
                        <strong>{wordCount.toLocaleString("en-IN")}</strong>
                    </div>
                    <div>
                        <span>CHARACTERS</span>
                        <strong>{characterCount.toLocaleString("en-IN")}</strong>
                    </div>
                    <div>
                        <span>PARAGRAPHS</span>
                        <strong>{paragraphCount.toLocaleString("en-IN")}</strong>
                    </div>
                </div>

                <div className="td-duration-panel">
                    <div className="td-duration-icon">
                        <Clock3 size={20} />
                    </div>
                    <div>
                        <span>ESTIMATED NARRATION TIME</span>
                        <strong>
                            {Math.floor(durationSeconds / 60)}:
                            {String(durationSeconds % 60).padStart(2, "0")}
                        </strong>
                    </div>
                </div>

                <button
                    type="button"
                    className="td-action-button"
                    disabled={!script}
                    onClick={() => copyText(script, "script")}
                >
                    {copied === "script" ? <Check size={16} /> : <Copy size={16} />}
                    {copied === "script" ? "Copied" : "Copy script"}
                </button>

                <p className="td-disclaimer">
                    Narration time is an estimate based on your selected speaking speed.
                    Pauses and editing may change the final runtime.
                </p>
            </div>
        );
    }

    if (toolId === "website-cost-estimator") {
        return (
            <div className="td-workspace-content">
                <div className="td-workspace-field">
                    <label htmlFor="td-website-type">Website type</label>
                    <select
                        id="td-website-type"
                        className="td-select"
                        value={websiteType}
                        onChange={(event) => setWebsiteType(event.target.value)}
                    >
                        {Object.keys(basePrices).map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="td-workspace-field">
                    <div className="td-speed-label">
                        <label htmlFor="td-pages">Number of pages</label>
                        <strong>{pages} pages</strong>
                    </div>

                    <input
                        id="td-pages"
                        className="td-range"
                        type="range"
                        min="1"
                        max="20"
                        value={pages}
                        onChange={(event) => setPages(Number(event.target.value))}
                    />
                    <div className="td-range-labels">
                        <span>1 page</span>
                        <span>20 pages</span>
                    </div>
                </div>

                <div className="td-workspace-field">
                    <label>Additional features</label>
                    <div className="td-feature-options">
                        {Object.entries(featurePrices).map(([feature, price]) => (
                            <label className="td-feature-option" key={feature}>
                                <input
                                    type="checkbox"
                                    checked={selectedFeatures.includes(feature)}
                                    onChange={() => toggleFeature(feature)}
                                />
                                <span>{feature}</span>
                                <strong>
                                    +₹{price.toLocaleString("en-IN")}
                                </strong>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="td-estimate-panel">
                    <span>INDICATIVE PROJECT BUDGET</span>
                    <strong>₹{estimate.toLocaleString("en-IN")}</strong>
                    <p>One-time estimate · INR</p>

                    <div className="td-estimate-breakdown">
                        <span>Base project</span>
                        <strong>
                            ₹{basePrices[websiteType].toLocaleString("en-IN")}
                        </strong>
                        <span>Extra pages</span>
                        <strong>
                            ₹{(
                                Math.max(0, pages - 5) * 1500
                            ).toLocaleString("en-IN")}
                        </strong>
                        <span>Additional features</span>
                        <strong>
                            ₹
                            {selectedFeatures
                                .reduce(
                                    (total, feature) => total + featurePrices[feature],
                                    0
                                )
                                .toLocaleString("en-IN")}
                        </strong>
                    </div>
                </div>

                <button
                    type="button"
                    className="td-action-button"
                    onClick={() =>
                        copyText(
                            [
                                "WEBSITE PROJECT ESTIMATE",
                                `Website type: ${websiteType}`,
                                `Pages: ${pages}`,
                                `Features: ${selectedFeatures.join(", ") || "None"}`,
                                `Estimated budget: ₹${estimate.toLocaleString("en-IN")}`,
                                "",
                                "This is an indicative estimate, not a formal quotation.",
                            ].join("\n"),
                            "estimate"
                        )
                    }
                >
                    {copied === "estimate" ? <Check size={16} /> : <Copy size={16} />}
                    {copied === "estimate" ? "Estimate copied" : "Copy estimate"}
                </button>

                <p className="td-disclaimer">
                    Illustrative pricing only. Final prices depend on requirements,
                    design complexity, integrations, hosting and applicable taxes.
                </p>
            </div>
        );
    }

    const isTitleTool = toolId === "youtube-title-generator";
    const isHookTool = toolId === "youtube-hook-generator";

    const styleOptions = isTitleTool
        ? ["Curiosity", "Documentary", "Educational"]
        : isHookTool
            ? ["Curiosity", "Documentary", "Educational"]
            : ["Curiosity", "Professional", "Friendly"];

    return (
        <div className="td-workspace-content">
            <div className="td-workspace-field">
                <label htmlFor="td-topic">
                    {isTitleTool || isHookTool ? "Your video topic" : "Your post topic"}
                </label>

                <textarea
                    id="td-topic"
                    className="td-textarea"
                    rows={4}
                    maxLength={500}
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    placeholder={
                        isTitleTool
                            ? "e.g. The mystery of Amelia Earhart..."
                            : isHookTool
                                ? "e.g. The untold history of space exploration..."
                                : "e.g. A new project, product or announcement..."
                    }
                />

                <div className="td-field-footer">
                    <span>Be specific for more relevant ideas.</span>
                    <span>{topic.length}/500</span>
                </div>
            </div>

            <div className="td-workspace-field">
                <label htmlFor="td-style">Choose a writing style</label>
                <select
                    id="td-style"
                    className="td-select"
                    value={style}
                    onChange={(event) => {
                        setStyle(event.target.value);
                        setResults([]);
                    }}
                >
                    {styleOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="button"
                className="td-action-button"
                disabled={!topic.trim()}
                onClick={generate}
            >
                <Sparkles size={16} />
                Generate ideas
                <ArrowRight size={16} />
            </button>

            {results.length > 0 && (
                <div className="td-results" aria-live="polite">
                    <div className="td-results-heading">
                        <div>
                            <span className="td-small-label">YOUR RESULTS</span>
                            <h3>Choose your favourite.</h3>
                        </div>
                        <button
                            type="button"
                            className="td-reset-button"
                            onClick={resetGenerator}
                            aria-label="Start over"
                        >
                            <RotateCcw size={15} />
                        </button>
                    </div>

                    {results.map((result, index) => (
                        <div className="td-result-item" key={`${result}-${index}`}>
                            <span className="td-result-index">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <p>{result}</p>
                            <button
                                type="button"
                                className="td-copy-icon"
                                aria-label={`Copy result ${index + 1}`}
                                onClick={() => copyText(result, `result-${index}`)}
                            >
                                {copied === `result-${index}` ? (
                                    <Check size={15} />
                                ) : (
                                    <Copy size={15} />
                                )}
                            </button>
                        </div>
                    ))}

                    <p className="td-disclaimer">
                        These are template-based suggestions, not AI-generated or
                        fact-checked content. Review and edit before publishing.
                    </p>
                </div>
            )}

            {!results.length && (
                <div className="td-workspace-tip">
                    <Sparkles size={17} />
                    <p>
                        Your ideas will appear here. No account or API key is required.
                    </p>
                </div>
            )}
        </div>
    );
}

function ToolDetail() {
    const { toolId } = useParams();
    const tool = toolData[toolId];
    const Icon = tool?.icon;

    if (!tool) {
        return (
            <main className="tool-detail-page">
                <div className="td-container">
                    <div className="td-not-found">
                        <span className="td-small-label">404 / TOOL NOT FOUND</span>
                        <h1>This tool doesn't exist.</h1>
                        <p>Visit the tools library to explore available tools.</p>
                        <Link to="/tools" className="td-back-link">
                            <ArrowLeft size={15} />
                            Back to all tools
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    const isFree = tool.type === "FREE";
    const isAvailable = isFree;

    return (
        <main className="tool-detail-page">
            <div className="td-container">
                <div className="td-breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/tools">Tools</Link>
                    <span>/</span>
                    <span>{tool.title}</span>
                </div>

                <Link to="/tools" className="td-back-link">
                    <ArrowLeft size={15} />
                    Back to all tools
                </Link>

                <div className="td-main-grid">
                    <section className="td-information">
                        <div className="td-label-row">
                            <span className="td-category">{tool.category}</span>
                            <span className={`td-type-badge ${isFree ? "free" : "pro"}`}>
                                {!isFree && <LockKeyhole size={11} />}
                                {isFree ? "FREE TOOL" : "PRO · COMING SOON"}
                            </span>
                        </div>

                        <div className="td-large-icon">
                            <Icon size={28} strokeWidth={1.4} />
                        </div>

                        <div className="td-eyebrow">
                            <span />
                            FAIZ ALAM / TOOLKIT
                        </div>

                        <h1>{tool.title}</h1>

                        <p className="td-lead">{tool.subtitle}</p>
                        <p className="td-description">{tool.description}</p>

                        <div className="td-access-card">
                            <div className="td-access-icon">
                                {isFree ? (
                                    <ShieldCheck size={20} />
                                ) : (
                                    <LockKeyhole size={20} />
                                )}
                            </div>
                            <div>
                                <span>ACCESS & AVAILABILITY</span>
                                <strong>
                                    {isFree ? "Free to use" : "Premium · Planned"}
                                </strong>
                                <p>
                                    {isFree
                                        ? "No subscription or API key required."
                                        : "Premium functionality and payment are not enabled yet."}
                                </p>
                            </div>
                        </div>

                        <section className="td-info-section">
                            <div className="td-section-heading">
                                <span>01</span>
                                <h2>What this tool offers</h2>
                            </div>

                            <div className="td-features">
                                {tool.features.map((feature) => (
                                    <div className="td-feature" key={feature}>
                                        <span className="td-feature-check">
                                            <Check size={13} />
                                        </span>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="td-info-section">
                            <div className="td-section-heading">
                                <span>02</span>
                                <h2>How to use it</h2>
                            </div>

                            <div className="td-steps">
                                {tool.instructions.map((instruction, index) => (
                                    <div className="td-step" key={instruction}>
                                        <span className="td-step-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p>{instruction}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="td-privacy-note">
                            <ShieldCheck size={17} />
                            <p>
                                Free tools run in your browser. Avoid entering sensitive
                                or confidential information.
                            </p>
                        </div>
                    </section>

                    <aside className="td-workspace">
                        <div className="td-workspace-header">
                            <div className="td-workspace-heading">
                                <span className="td-small-label">YOUR WORKSPACE</span>
                                <h2>{tool.title}</h2>
                            </div>

                            <span
                                className={`td-workspace-status ${isAvailable ? "active" : "planned"
                                    }`}
                            >
                                <span />
                                {isAvailable ? "AVAILABLE" : "PLANNED"}
                            </span>
                        </div>

                        {isAvailable ? (
                            <ToolGenerator key={toolId} toolId={toolId} />
                        ) : (
                            <div className="td-planned-panel">
                                <div className="td-planned-icon">
                                    <LockKeyhole size={24} />
                                </div>
                                <span className="td-small-label">PREMIUM COLLECTION</span>
                                <h3>This tool is on the roadmap.</h3>
                                <p>
                                    The feature description is available above. The working
                                    interface, premium access and checkout have not been
                                    implemented yet.
                                </p>
                                <Link to="/tools" className="td-secondary-button">
                                    Explore available tools
                                    <ArrowRight size={15} />
                                </Link>
                            </div>
                        )}

                        <div className="td-workspace-footer">
                            <span>
                                <ShieldCheck size={12} />
                                BROWSER-BASED TOOL
                            </span>
                            <span>FA / 2026</span>
                        </div>
                    </aside>
                </div>

                <section className="td-bottom-cta">
                    <div className="td-bottom-icon">
                        <Type size={22} />
                    </div>
                    <div>
                        <span className="td-small-label">EXPLORE THE COLLECTION</span>
                        <h2>More tools. Better workflows.</h2>
                        <p>Find another tool for your next project.</p>
                    </div>
                    <Link to="/tools" className="td-bottom-button">
                        View all tools
                        <ArrowUpRight size={16} />
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default ToolDetail;
