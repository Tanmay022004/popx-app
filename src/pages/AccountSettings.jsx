import './AccountSettings.css';

const AccountSettings = () => {
  const userName = localStorage.getItem('userName') || 'Marry Doe';
  const userEmail = localStorage.getItem('userEmail') || 'Marry@Gmail.Com';

  // Get initials for avatar placeholder
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2 className="settings-title">Account Settings</h2>
      </div>

      <div className="settings-body">
        <div className="profile-section">
          <div className="avatar-wrapper">
            <div className="avatar-initials">
              {getInitials(userName)}
            </div>
            <div className="avatar-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
                  stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="profile-info">
            <p className="profile-name">{userName}</p>
            <p className="profile-email">{userEmail}</p>
          </div>
        </div>

        <p className="settings-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod
          Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className="settings-divider" />
      </div>
    </div>
  );
};

export default AccountSettings;