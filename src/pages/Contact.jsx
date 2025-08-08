import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email us at <a href="mailto:contact@dolpo.ai">contact@dolpo.ai</a>.</p>
      <form action="mailto:contact@dolpo.ai" method="post" encType="text/plain">
        <label>
          Name<br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email<br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message<br />
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
