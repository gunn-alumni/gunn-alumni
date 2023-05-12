import { useId, useState } from 'react';

type ProfileData = {
  name: string;
  bio: string;
  bioPublic: boolean;
};

const dummyData: ProfileData = {
  name: 'David Li',
  bio: 'Hi.',
  bioPublic: true
};

export default function Profile() {
  const bioId = useId();

  const [bio, setBio] = useState(dummyData.bio);
  const [bioPublic, setBioPublic] = useState(dummyData.bioPublic);
  const [editMode, setEditMode] = useState(false);

  const saveChanges = () => {
    // save changes here. for example:
    dummyData.bio = bio;
    dummyData.bioPublic = bioPublic;
    console.log(dummyData); // it changes!

    setEditMode(false);
  };

  return (
    <>
      <h1>{dummyData.name}</h1>
      {editMode ? (
        <>
          <label htmlFor={bioId}>Bio: </label>
          <button onClick={() => setBioPublic(!bioPublic)}>
            {bioPublic ? 'Public' : 'Private'}
          </button>
          <br />
          <textarea
            id={bioId}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <div>
            <button onClick={saveChanges}>Save Changes</button>
          </div>
        </>
      ) : (
        <>
          <p>{bio}</p>
          <div>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
