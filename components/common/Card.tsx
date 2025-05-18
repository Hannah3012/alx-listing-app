import React, { useState } from "react";

const RandomQuote: React.FC = () => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "The only limit is your mind.",
    "Stay hungry, stay foolish.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Everything you can imagine is real."
  ];

  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(getRandomQuote());

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Random Quote</h2>
      <p style={{ fontStyle: "italic" }}>{quote}</p>
      <button onClick={() => setQuote(getRandomQuote())}>New Quote</button>
    </div>
  );
};

export default RandomQuote;
