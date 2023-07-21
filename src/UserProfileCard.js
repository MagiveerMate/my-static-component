// src/UserProfileCard.js

function UserProfileCard() {
    return (
      <div className="user-profile-card">
        <img src="./profile.jpg" alt="profile" />
        <h2>Jarred von Allemann</h2>
        <h4>Frontend Developer</h4>
        <p>Hey there 👋  I'm your friendly neighborhood coding whiz 🤓. 
            Tackling complex problems head on and turning them into simple solutions is my kind of fun. 
            Get to know me better and let's connect on <a href = "https://www.linkedin.com/in/jarred-von-allemann/">LinkedIn</a>. 
            Let's code our way to success together! 🚀</p>
            <div className="card-footer">
      <div className="footer-item">
        <p className="status">2k</p>
        <small className="item-name">Followers</small>
      </div>
      <div className="footer-item">
        <p className="status">803</p>
        <small className="item-name">Following</small>
      </div>
      <div className="footer-items">
        <p className="status">59</p>
        <small className="item-name">Projects</small>
      </div>
    </div>
    <button className = "folo-btn"type="submit">Follow</button>
    <button className = "folo-btn1"type="submit">View Profile</button>
      </div>
    );
  }
  
  export default UserProfileCard;
  