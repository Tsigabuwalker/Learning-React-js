import React from 'react';
import profileImage from './assets/profile2.png'; // Adjust the path as necessary

function ProfilePicture() {
    const handleClick = () => console.log("OUCH");

    return (
        <img onClick={handleClick} src={profileImage} alt="Profile Picture" />
    );
}

export default ProfilePicture;