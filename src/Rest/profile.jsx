import React from 'react';


const Profile = () => {
  return (
    <div>
      <header>
        <a href="index.html">
          <img
            src="https://cdn.prod.website-files.com/65c4a9636687ae3b0294350e/65fbe8183743ea9b19f75ccc_shipway-logo-1.svg"
            alt="Company Logo"
            className="company-logo"
          />
        </a>
        <h1>Your Profile</h1>
      </header>

      <main>
        <h2>User Details</h2>
        <p>Email: user@example.com</p>
        <p>Account Created: [Add date here]</p>
        <button onClick={() => window.location.href = 'edit.html'}>Edit Your Profile</button>
      </main>
    </div>
  );
};

export default Profile;
