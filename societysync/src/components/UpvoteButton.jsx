import { useState } from "react";

function UpvoteButton() {
  // Feature 3: local upvote count using useState + increment
  const [upvotes, setUpvotes] = useState(0);

  return (
    <button
      onClick={() => setUpvotes(upvotes + 1)}
      style={{
        background: "#2563eb",
        color: "white",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      Upvote ({upvotes})
    </button>
  );
}

export default UpvoteButton;