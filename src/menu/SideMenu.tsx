import send from "./send.png";

export function SideMenu() {
  return (
    <div id="side-menu">
      <section id="firs-section">
        <form action="" method="post">
          <h3>Contact Form</h3>
          <label htmlFor="userEmail">Email:</label>
          <input type="email" name="email" id="userEmail" placeholder="example.@me.com" required />
          <label htmlFor="userName"> Name:</label>
          <input type="text" id="userName" name="Name" placeholder="please enter your name" required />
          <label>Message:</label>
          <textarea></textarea>
          <div id="send-button-div">
            <button type="submit" id="send-button">
              <img src={send} width="16px" height="16px" />
              <b>SEND</b>
            </button>
          </div>
        </form>
      </section>
      <section id="second-section"></section>
    </div>
  );
}
