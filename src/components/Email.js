export default function Email() {
  return (
    <>
      <div className="emailplacething">
        <div className="inputtheemail">
          <h1>Send Code to Email</h1>
          <input
            name="thegmeil"
            type="email"
            placeholder="Your Gmail"
            className="email-input"
          />
          <p className="newline">.</p>
          <button type="submit" className="email-email-button">
            Send Code to Email
          </button>
        </div>
      </div>
    </>
  );
}
