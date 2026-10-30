import { useEffect, useMemo, useRef, useState } from "react";

import {

  ArrowLeft,

  ArrowUpRight,

  Check,

  CheckCheck,

  Image as ImageIcon,

  Info,

  MoreHorizontal,

  Paperclip,

  Search,

  Send,

  Smile,

  X,

  MessageCircle,

  PenSquare,

  Plus,




} from "lucide-react";



import SEO from "../../components/SEO";

import "./Messages.css";





const avatar = (id) =>

  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=180&q=85`;



const initialConversations = [

  {

    id: 1,

    name: "Aman Verma",

    username: "@amanverma",

    image: avatar("photo-1500648767791-00dcc994a43e"),

    online: true,

    unread: 2,

    lastMessage: "Bro, that video was amazing!",

    time: "10:24 AM",

    messages: [

      {

        id: 101,

        sender: "them",

        text: "Hey Faiz! How are you doing?",

        time: "10:12 AM",

      },

      {

        id: 102,

        sender: "me",

        text: "I'm good bro! How about you?",

        time: "10:16 AM",

      },

      {

        id: 103,

        sender: "them",

        text: "Doing great. Just watched your latest documentary.",

        time: "10:21 AM",

      },

      {

        id: 104,

        sender: "them",

        text: "Bro, that video was amazing!",

        time: "10:24 AM",

      },

    ],

  },

  {

    id: 2,

    name: "Priya Singh",

    username: "@priyasingh",

    image: avatar("photo-1534528741775-53994a69daeb"),

    online: true,

    unread: 1,

    lastMessage: "Can you share the project files?",

    time: "9:18 AM",

    messages: [

      {

        id: 201,

        sender: "them",

        text: "Hi Faiz, I saw your latest website project.",

        time: "9:10 AM",

      },

      {

        id: 202,

        sender: "me",

        text: "Hey Priya! Thank you for checking it out.",

        time: "9:14 AM",

      },

      {

        id: 203,

        sender: "them",

        text: "Can you share the project files?",

        time: "9:18 AM",

      },

    ],

  },

  {

    id: 3,

    name: "Rohit Mehta",

    username: "@rohitmehta",

    image: avatar("photo-1506794778202-cad84cf45f1d"),

    online: false,

    unread: 0,

    lastMessage: "Let's plan for the next trip.",

    time: "Yesterday",

    messages: [

      {

        id: 301,

        sender: "them",

        text: "We should plan another trip soon.",

        time: "Yesterday",

      },

      {

        id: 302,

        sender: "me",

        text: "Absolutely! Let's figure out the dates.",

        time: "Yesterday",

      },

      {

        id: 303,

        sender: "them",

        text: "Let's plan for the next trip.",

        time: "Yesterday",

      },

    ],

  },

  {

    id: 4,

    name: "Sneha Kapoor",

    username: "@snehakapoor",

    image: avatar("photo-1544005313-94ddf0286df2"),

    online: false,

    unread: 0,

    lastMessage: "This looks so good! ✨",

    time: "Yesterday",

    messages: [

      {

        id: 401,

        sender: "them",

        text: "Just checked your new post.",

        time: "Yesterday",

      },

      {

        id: 402,

        sender: "them",

        text: "This looks so good! ✨",

        time: "Yesterday",

      },

    ],

  },

  {

    id: 5,

    name: "Creative Crew",

    username: "@creativecrew",

    image: avatar("photo-1529156069898-49953e39b3ac"),

    online: true,

    unread: 4,

    lastMessage: "Rohit: See you all there!",

    time: "Monday",

    group: true,

    members: "8 members",

    messages: [

      {

        id: 501,

        sender: "them",

        senderName: "Rohit",

        text: "The meeting is confirmed for Saturday.",

        time: "Monday",

      },

      {

        id: 502,

        sender: "them",

        senderName: "Aman",

        text: "Perfect. I'll be there!",

        time: "Monday",

      },

      {

        id: 503,

        sender: "them",

        senderName: "Rohit",

        text: "See you all there!",

        time: "Monday",

      },

    ],

  },

];



const EMOJIS = ["😊", "😂", "❤️", "🔥", "✨", "🙌", "👍", "😍", "🎉", "🙏", "💯", "🤝"];



const formatTime = () =>

  new Intl.DateTimeFormat("en", {

    hour: "numeric",

    minute: "2-digit",

  }).format(new Date());



function ConversationItem({ conversation, active, onClick }) {

  return (

    <button

      type="button"

      className={`msg-conversation ${active ? "active" : ""} ${

        conversation.unread > 0 ? "has-unread" : ""

      }`}

      onClick={onClick}

    >

      <div className="msg-avatar-wrap">

        <img src={conversation.image} alt={conversation.name} />

        {conversation.online && <span className="msg-online-dot" />}

      </div>



      <div className="msg-conversation-info">

        <div className="msg-conversation-top">

          <strong>{conversation.name}</strong>

          <span>{conversation.time}</span>

        </div>



        <div className="msg-conversation-bottom">

          <p>{conversation.lastMessage}</p>

          {conversation.unread > 0 && (

            <span className="msg-unread-count">{conversation.unread}</span>

          )}

        </div>

      </div>

    </button>

  );

}



function MessageBubble({ message, conversation }) {

  const isMine = message.sender === "me";



  return (

    <div className={`msg-bubble-row ${isMine ? "mine" : "theirs"}`}>

      {!isMine && conversation.group && (

        <span className="msg-sender-name">

          {message.senderName || conversation.name}

        </span>

      )}



      <div className="msg-bubble">

        {message.image && (

          <img

            className="msg-attachment-image"

            src={message.image}

            alt={message.fileName || "Shared image"}

          />

        )}



        {message.text && <p>{message.text}</p>}



        <div className="msg-bubble-meta">

          <span>{message.time}</span>

          {isMine && (

            <CheckCheck size={14} className="msg-read-icon" />

          )}

        </div>

      </div>

    </div>

  );

}



function EmptyChat({ onNewMessage }) {

  return (

    <div className="msg-empty-chat">

      <div className="msg-empty-art">

        <div className="msg-empty-orbit orbit-one" />

        <div className="msg-empty-orbit orbit-two" />

        <div className="msg-empty-icon">

          <MessageCircle size={31} strokeWidth={1.35} />

        </div>

        <span className="msg-empty-spark spark-one">✳</span>

        <span className="msg-empty-spark spark-two">✦</span>

      </div>



      <span className="msg-eyebrow">YOUR PRIVATE SPACE</span>

      <h2>Every conversation has a <em>story.</em></h2>

      <p>

        Choose a conversation from your inbox or start something new.

        Good ideas begin with a simple hello.

      </p>



      <button

        type="button"

        className="msg-start-button"

        onClick={onNewMessage}

      >

        <PenSquare size={15} />

        Start a conversation

      </button>

    </div>

  );

}



function Messages() {

  const [conversations, setConversations] = useState(initialConversations);

  const [activeId, setActiveId] = useState(1);

  const [search, setSearch] = useState("");

  const [activeFilter, setActiveFilter] = useState("All");

  const [messageText, setMessageText] = useState("");

  const [mobileChatOpen, setMobileChatOpen] = useState(false);

  const [showInfo, setShowInfo] = useState(false);

  const [showEmoji, setShowEmoji] = useState(false);

  const [showNewMessage, setShowNewMessage] = useState(false);

  const [attachment, setAttachment] = useState(null);



  const messagesEndRef = useRef(null);

  const inputRef = useRef(null);

  const fileInputRef = useRef(null);

  const chatBodyRef = useRef(null);



  const activeConversation = conversations.find(

    (conversation) => conversation.id === activeId

  );



  const filteredConversations = useMemo(() => {

    const query = search.trim().toLowerCase();



    return conversations.filter((conversation) => {

      const matchesSearch =

        conversation.name.toLowerCase().includes(query) ||

        conversation.username.toLowerCase().includes(query) ||

        conversation.lastMessage.toLowerCase().includes(query) ||

        conversation.messages.some((message) =>

          message.text?.toLowerCase().includes(query)

        );



      const matchesFilter =

        activeFilter === "All" ||

        (activeFilter === "Unread" && conversation.unread > 0) ||

        (activeFilter === "Groups" && conversation.group);



      return matchesSearch && matchesFilter;

    });

  }, [conversations, search, activeFilter]);



  const unreadTotal = conversations.reduce(

    (total, conversation) => total + conversation.unread,

    0

  );



  useEffect(() => {

    if (!activeConversation) return;



    const container = chatBodyRef.current;



    if (container) {

      container.scrollTo({

        top: container.scrollHeight,

        behavior: "smooth",

      });

    }

  }, [activeId, activeConversation?.messages.length]);



  useEffect(() => {

    const handleEscape = (event) => {

      if (event.key === "Escape") {

        setShowInfo(false);

        setShowEmoji(false);

        setShowNewMessage(false);

      }

    };



    window.addEventListener("keydown", handleEscape);



    return () => window.removeEventListener("keydown", handleEscape);

  }, []);



  useEffect(() => {

    return () => {

      if (attachment?.preview) {

        URL.revokeObjectURL(attachment.preview);

      }

    };

  }, [attachment]);



  const openConversation = (id) => {

    setActiveId(id);

    setMobileChatOpen(true);

    setShowInfo(false);

    setShowEmoji(false);



    setConversations((current) =>

      current.map((conversation) =>

        conversation.id === id

          ? { ...conversation, unread: 0 }

          : conversation

      )

    );

  };



  const sendMessage = (event) => {

    event.preventDefault();



    const text = messageText.trim();



    if ((!text && !attachment) || !activeConversation) return;



    const newMessage = {

      id: Date.now(),

      sender: "me",

      text,

      time: formatTime(),

      image: attachment?.preview || null,

      fileName: attachment?.name || null,

    };



    const previewText = attachment

      ? text || "Shared an image"

      : text;



    setConversations((current) =>

      current.map((conversation) =>

        conversation.id === activeId

          ? {

              ...conversation,

              messages: [...conversation.messages, newMessage],

              lastMessage: previewText,

              time: "Now",

            }

          : conversation

      )

    );



    setMessageText("");

    setAttachment(null);

    setShowEmoji(false);



    requestAnimationFrame(() => {

      inputRef.current?.focus();

    });

  };



  const handleComposerKeyDown = (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

      event.preventDefault();

      sendMessage(event);

    }

  };



  const addEmoji = (emoji) => {

    setMessageText((current) => current + emoji);

    setShowEmoji(false);

    inputRef.current?.focus();

  };



  const handleAttachment = (event) => {

    const file = event.target.files?.[0];



    if (!file) return;



    if (!file.type.startsWith("image/")) {

      event.target.value = "";

      return;

    }



    if (file.size > 5 * 1024 * 1024) {

      window.alert("Please choose an image smaller than 5 MB.");

      event.target.value = "";

      return;

    }



    setAttachment({

      name: file.name,

      preview: URL.createObjectURL(file),

    });



    event.target.value = "";

  };



  const removeAttachment = () => {

    setAttachment(null);

  };



  const startNewMessage = () => {

    setShowNewMessage(true);

    setShowInfo(false);

  };



  const createConversation = (person) => {

    const existing = conversations.find(

      (conversation) => conversation.id === person.id

    );



    if (existing) {

      openConversation(existing.id);

    } else {

      setConversations((current) => [person, ...current]);

      setActiveId(person.id);

      setMobileChatOpen(true);

    }



    setShowNewMessage(false);

    setSearch("");

    setActiveFilter("All");

  };



  const newContacts = [

    {

      id: 6,

      name: "Aarav Sharma",

      username: "@aaravsharma",

      image: avatar("photo-1506794778202-cad84cf45f1d"),

      online: true,

      unread: 0,

      lastMessage: "Start a conversation",

      time: "Now",

      messages: [],

    },

    {

      id: 7,

      name: "Meera Joshi",

      username: "@meerajoshi",

      image: avatar("photo-1534528741775-53994a69daeb"),

      online: false,

      unread: 0,

      lastMessage: "Start a conversation",

      time: "Now",

      messages: [],

    },

  ];



  return (

    <div className="messages-page">

      <SEO

        title="Messages | Faiz Alam"

        description="Private conversations and messages from Faiz Alam."

        path="/social/messages"

      />



      <main className="msg-shell">

        <header className="msg-page-heading">

          <div>

            <span className="msg-eyebrow">STAY CONNECTED</span>

            <h1>

              Your <em>messages.</em>

            </h1>

            <p>

              A place for conversations, ideas and meaningful connections.

            </p>

          </div>



          <div className="msg-heading-meta">

            <div className="msg-heading-count">

              <span>{unreadTotal}</span>

              <small>UNREAD</small>

            </div>

            <span className="msg-heading-note">

              <span className="msg-status-dot" />

              Your inbox

            </span>

          </div>

        </header>



        <section className="msg-inbox">

          <aside

            className={`msg-inbox-sidebar ${

              mobileChatOpen ? "mobile-hidden" : ""

            }`}

          >

            <div className="msg-inbox-header">

              <div>

                <span className="msg-eyebrow">YOUR INBOX</span>

                <h2>Messages <span>{conversations.length}</span></h2>

              </div>



              <button

                type="button"

                className="msg-new-button"

                onClick={startNewMessage}

                aria-label="New message"

                title="New message"

              >

                <Plus size={19} />

              </button>

            </div>



            <label className="msg-search">

              <Search size={16} />

              <input

                type="search"

                placeholder="Search conversations..."

                value={search}

                onChange={(event) => setSearch(event.target.value)}

              />

              {search && (

                <button

                  type="button"

                  onClick={() => setSearch("")}

                  aria-label="Clear search"

                >

                  <X size={15} />

                </button>

              )}

            </label>



            <div className="msg-filter-tabs">

              {["All", "Unread", "Groups"].map((filter) => (

                <button

                  key={filter}

                  type="button"

                  className={activeFilter === filter ? "active" : ""}

                  onClick={() => setActiveFilter(filter)}

                >

                  {filter}

                  {filter === "Unread" && unreadTotal > 0 && (

                    <span>{unreadTotal}</span>

                  )}

                </button>

              ))}

            </div>



            <div className="msg-list-heading">

              <span>RECENT CONVERSATIONS</span>

              <span>{filteredConversations.length}</span>

            </div>



            <div className="msg-conversation-list">

              {filteredConversations.length > 0 ? (

                filteredConversations.map((conversation) => (

                  <ConversationItem

                    key={conversation.id}

                    conversation={conversation}

                    active={activeId === conversation.id}

                    onClick={() => openConversation(conversation.id)}

                  />

                ))

              ) : (

                <div className="msg-no-results">

                  <Search size={22} />

                  <strong>No conversations found</strong>

                  <span>Try another name or keyword.</span>

                </div>

              )}

            </div>



            <div className="msg-sidebar-footer">

              <span className="msg-footer-dot" />

              <span>All conversations in one place</span>

            </div>

          </aside>



          <section

            className={`msg-chat ${

              mobileChatOpen ? "mobile-visible" : ""

            }`}

          >

            {activeConversation ? (

              <>

                <header className="msg-chat-header">

                  <div className="msg-chat-person">

                    <button

                      type="button"

                      className="msg-back-button"

                      onClick={() => setMobileChatOpen(false)}

                      aria-label="Back to inbox"

                    >

                      <ArrowLeft size={19} />

                    </button>



                    <div className="msg-avatar-wrap">

                      <img

                        src={activeConversation.image}

                        alt={activeConversation.name}

                      />

                      {activeConversation.online && (

                        <span className="msg-online-dot" />

                      )}

                    </div>



                    <div className="msg-person-copy">

                      <strong>{activeConversation.name}</strong>

                      <span>

                        {activeConversation.online

                          ? "Active now"

                          : activeConversation.username}

                      </span>

                    </div>

                  </div>



                  <div className="msg-chat-tools">

                    <span className="msg-chat-private">

                      <span />

                      PRIVATE CHAT

                    </span>



                    <button

                      type="button"

                      aria-label="Conversation information"

                      title="Conversation details"

                      className={showInfo ? "selected" : ""}

                      onClick={() => setShowInfo((value) => !value)}

                    >

                      <Info size={18} />

                    </button>



                    <button

                      type="button"

                      aria-label="More options"

                      title="More options"

                      onClick={() => setShowInfo((value) => !value)}

                    >

                      <MoreHorizontal size={19} />

                    </button>

                  </div>

                </header>



                <div className="msg-chat-body" ref={chatBodyRef}>

                  <div className="msg-chat-intro">

                    <div className="msg-chat-intro-avatar">

                      <img

                        src={activeConversation.image}

                        alt={activeConversation.name}

                      />

                      {activeConversation.online && (

                        <span className="msg-online-dot" />

                      )}

                    </div>



                    <span className="msg-eyebrow">CONVERSATION WITH</span>

                    <strong>{activeConversation.name}</strong>

                    <span>{activeConversation.username}</span>



                    <small>

                      {activeConversation.group

                        ? activeConversation.members

                        : "Connected on Faiz Alam Social"}

                    </small>

                  </div>



                  <div className="msg-date-divider">

                    <span>MESSAGES</span>

                  </div>



                  {activeConversation.messages.length > 0 ? (

                    activeConversation.messages.map((message) => (

                      <MessageBubble

                        key={message.id}

                        message={message}

                        conversation={activeConversation}

                      />

                    ))

                  ) : (

                    <div className="msg-first-message">

                      <MessageCircle size={22} />

                      <span>This is the beginning of your conversation.</span>

                      <small>Send a message to say hello.</small>

                    </div>

                  )}



                  <div ref={messagesEndRef} />

                </div>



                <div className="msg-composer-area">

                  {attachment && (

                    <div className="msg-attachment-preview">

                      <img src={attachment.preview} alt="Attachment preview" />

                      <div>

                        <strong>{attachment.name}</strong>

                        <span>Ready to share</span>

                      </div>

                      <button

                        type="button"

                        onClick={removeAttachment}

                        aria-label="Remove attachment"

                      >

                        <X size={16} />

                      </button>

                    </div>

                  )}



                  {showEmoji && (

                    <div className="msg-emoji-picker">

                      <div className="msg-emoji-picker-head">

                        <span>Choose an emoji</span>

                        <button

                          type="button"

                          onClick={() => setShowEmoji(false)}

                          aria-label="Close emoji picker"

                        >

                          <X size={15} />

                        </button>

                      </div>

                      <div className="msg-emoji-grid">

                        {EMOJIS.map((emoji) => (

                          <button

                            key={emoji}

                            type="button"

                            onClick={() => addEmoji(emoji)}

                          >

                            {emoji}

                          </button>

                        ))}

                      </div>

                    </div>

                  )}



                  <form className="msg-composer" onSubmit={sendMessage}>

                    <div className="msg-composer-tools">

                      <input

                        ref={fileInputRef}

                        type="file"

                        accept="image/*"

                        hidden

                        onChange={handleAttachment}

                      />



                      <button

                        type="button"

                        aria-label="Attach image"

                        title="Attach image"

                        onClick={() => fileInputRef.current?.click()}

                      >

                        <Paperclip size={18} />

                      </button>



                      <button

                        type="button"

                        aria-label="Choose image"

                        title="Choose image"

                        onClick={() => fileInputRef.current?.click()}

                      >

                        <ImageIcon size={18} />

                      </button>

                    </div>



                    <textarea

                      ref={inputRef}

                      rows={1}

                      placeholder="Write something thoughtful..."

                      value={messageText}

                      onChange={(event) => setMessageText(event.target.value)}

                      onKeyDown={handleComposerKeyDown}

                    />



                    <button

                      type="button"

                      className={`msg-emoji-button ${

                        showEmoji ? "selected" : ""

                      }`}

                      aria-label="Open emoji picker"

                      title="Emoji"

                      onClick={() => setShowEmoji((value) => !value)}

                    >

                      <Smile size={19} />

                    </button>



                    <button

                      type="submit"

                      className="msg-send-button"

                      disabled={!messageText.trim() && !attachment}

                      aria-label="Send message"

                    >

                      <Send size={17} />

                    </button>

                  </form>



                  <div className="msg-composer-hint">

                    <span>ENTER TO SEND</span>

                    <span>SHIFT + ENTER FOR NEW LINE</span>

                  </div>

                </div>



                {showInfo && (

                  <>

                    <button

                      type="button"

                      className="msg-info-backdrop"

                      aria-label="Close conversation details"

                      onClick={() => setShowInfo(false)}

                    />



                    <aside className="msg-info-panel">

                      <div className="msg-info-header">

                        <span className="msg-eyebrow">DETAILS</span>

                        <button

                          type="button"

                          onClick={() => setShowInfo(false)}

                          aria-label="Close details"

                        >

                          <X size={18} />

                        </button>

                      </div>



                      <div className="msg-info-profile">

                        <img

                          src={activeConversation.image}

                          alt={activeConversation.name}

                        />

                        <strong>{activeConversation.name}</strong>

                        <span>{activeConversation.username}</span>

                        <small>

                          {activeConversation.online

                            ? "Currently active"

                            : "Last seen recently"}

                        </small>

                      </div>



                      <div className="msg-info-divider" />



                      <div className="msg-info-stat">

                        <span>Conversation type</span>

                        <strong>

                          {activeConversation.group ? "Group" : "Direct"}

                        </strong>

                      </div>



                      <div className="msg-info-stat">

                        <span>Messages</span>

                        <strong>

                          {activeConversation.messages.length}

                        </strong>

                      </div>



                      {activeConversation.group && (

                        <div className="msg-info-stat">

                          <span>Members</span>

                          <strong>{activeConversation.members}</strong>

                        </div>

                      )}



                      <div className="msg-info-note">

                        <Info size={15} />

                        <p>

                          This is a static conversation preview. Messages

                          are stored only in the current page session.

                        </p>

                      </div>

                    </aside>

                  </>

                )}

              </>

            ) : (

              <EmptyChat onNewMessage={startNewMessage} />

            )}

          </section>

        </section>





      </main>







      {showNewMessage && (

        <div

          className="msg-modal-backdrop"

          onMouseDown={(event) => {

            if (event.target === event.currentTarget) {

              setShowNewMessage(false);

            }

          }}

        >

          <section

            className="msg-new-modal"

            role="dialog"

            aria-modal="true"

            aria-labelledby="msg-new-title"

          >

            <div className="msg-new-modal-head">

              <div>

                <span className="msg-eyebrow">MAKE A CONNECTION</span>

                <h2 id="msg-new-title">

                  New <em>message.</em>

                </h2>

              </div>

              <button

                type="button"

                onClick={() => setShowNewMessage(false)}

                aria-label="Close new message"

              >

                <X size={19} />

              </button>

            </div>



            <p className="msg-new-description">

              Choose someone to start a conversation with.

            </p>



            <div className="msg-new-contact-list">

              {[...conversations, ...newContacts]

                .filter(

                  (person, index, array) =>

                    array.findIndex((item) => item.id === person.id) === index

                )

                .map((person) => (

                  <button

                    type="button"

                    className="msg-new-contact"

                    key={person.id}

                    onClick={() => createConversation(person)}

                  >

                    <img src={person.image} alt={person.name} />

                    <span>

                      <strong>{person.name}</strong>

                      <small>{person.username}</small>

                    </span>

                    <ArrowUpRight size={16} />

                  </button>

                ))}

            </div>



            <div className="msg-new-modal-foot">

              <span>DEMO CONTACTS</span>

              <span>STATIC PREVIEW</span>

            </div>

          </section>

        </div>

      )}

    </div>

  );

}



export default Messages;