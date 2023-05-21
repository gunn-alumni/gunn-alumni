// React Components
import Head from 'next/head';
import AutoResizingTextArea from '@/components/shared/AutoResizingTextArea';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SocialIcon } from 'react-social-icons';
import { HiOutlineX, HiPlus } from 'react-icons/hi';
import Script from 'next/script';

// TODO: store this type somewhere else!

type ProfileData = {
  userId: string;
  userPfp: string;
  name: string;
  bio: string;
  contact: {
    location: string;
    phone: string;
    email: string;
    socialMedia: string[];
  };
};

const dummyProfileData: ProfileData = {
  userId: '0001',
  userPfp: '/images/dylan.png',
  name: 'Lorem Ipsum',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n \n << Add Bio Above >>',
  contact: {
    location: 'City, State',
    phone: '000-000-0000',
    email: 'lorem.ipsum@gmail.com',
    socialMedia: [
      'https://www.facebook.com/',
      'https://www.instagram.com/',
      'https://www.linkedin.com',
      'https://twitter.com/',
      'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      'https://discord.com/',
      'https://www.snapchat.com/',
      'https://www.tiktok.com/'
    ]
  }
};

export default function ProfilePage() {
  const router = useRouter();
  const queryMessage = router?.query;
  <Script
    src="https://code.jquery.com/jquery-3.7.0.js"
    integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM="
    crossOrigin="anonymous"
  ></Script>;

  useEffect(() => {
    console.log('Welcome to profile: ', queryMessage);
    fetch(`http://localhost:4000/user?userId=${queryMessage.message}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log('Fetched the Data: ', data);
          setProfileData(data);
        }
        console.log('Hello');
      })
      .catch((error) => {
        console.log('ERRORRRRRR: ', error);
        setProfileData(dummyProfileData);
      });
  }, []);

  const [lockState, setLockState] = useState<'locked' | 'unlocked'>('locked');

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileBio, setProfileBio] = useState('');
  const [socialMedias, setSocialMedias] = useState<string[]>([]);
  const [contacts, setContacts] = useState<
    Omit<ProfileData['contact'], 'socialMedia'>
  >(dummyProfileData.contact); // TODO: hacky typing, but the awkward object structure somewhat forces my hand here

  function setProfileData(userData: ProfileData) {
    setProfileName(userData.name);
    setProfileImage(userData.userPfp || '/images/userIconx96.png');
    setProfileBio(userData.bio);

    const { socialMedia, ...contacts } = userData.contact;
    setSocialMedias(socialMedia);
    setContacts(contacts);
  }

  function toggleLock() {
    if (lockState == 'locked') {
      setLockState('unlocked');
    } else {
      setLockState('locked');
    }
  }

  function removeLink() {
    socialMedias.pop();
    $('.links').load(location.href + ' .links');
  }

  function addLink() {
    socialMedias.push('');
  }
  return (
    <div
      id="profile_wrapper"
      className="flex min-[900px]:flex-row flex-col gap-12 mx-auto w-full min-[900px]:p-[50px] p-[25px] justify-center"
    >
      <Head>
        <title>Gunn Alumni | Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="col-span-1 w-auto min-[900px]:min-w-[150px] max-w-[300px] min-[900px]:m-0 m-auto">
        <div id="pfp_wrapper">
          <div
            id="pfp_content"
            className="w-max relative mx-auto mb-4 group rounded-full overflow-hidden"
          >
            <img
              src={profileImage}
              alt="Profile Image"
              className="h-[200px] max-w-[200px] object-cover object-center"
            />
            {lockState === 'unlocked' && (
              <button
                id="pfp_change"
                className="hidden group-hover:block absolute inset-0 text-white bg-black/40"
              >
                Change avatar
              </button>
            )}
          </div>
        </div>
        <input
          id="name"
          type="text"
          placeholder="Enter Name Here"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          disabled={lockState === 'locked'}
          className="placeholder:text-stone-600 font-bold place-content-center text-center mb-4 w-[75%] outline-0 border-0 mx-[12.5%]"
        />

        <div id="profileSocial_wrapper">
          {lockState === 'locked' ? (
            <div className="flex gap-4 mx-auto flex-wrap justify-center mb-4">
              {/* TODO: abstract into component? */}
              {socialMedias.map((v, i) => (
                //v is currently gunnalumni/social_media_link
                <SocialIcon key={i} url={v} />
              ))}
            </div>
          ) : (
            <div className="grid gap-4 mb-4">
              {/* TODO: see above */}

              {socialMedias.map((v, i) => (
                <div className="w-full flex" key={i}>
                  <div
                    id="links"
                    className="bg-black font-bold border-[black] border-y-3"
                  ></div>
                  <input
                    type="text"
                    placeholder="Enter Link Here"
                    className="w-full placeholder:text-stone-600 px-[5px] outline-0 border-[black] border-x-[2px] border-y-[2px]"
                    onChange={(e) => (socialMedias[i] = e.target.value)}
                  />
                </div>
              ))}
              <div className="items-stretch flex justify-between">
                <button onClick={removeLink}>
                  {' '}
                  <HiOutlineX></HiOutlineX>
                </button>
                <button onClick={addLink}>
                  {' '}
                  <HiPlus></HiPlus>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        id="profile_components"
        className="col-span-2 w-[100%] max-w-[650px]"
      >
        <div id="bio_wrapper" className="mb-6">
          <div id="bio_title" className="font-bold mb-1">
            About Me
          </div>
          <AutoResizingTextArea
            id="ta_content"
            rows={5}
            disabled={lockState === 'locked'}
            className="w-full px-3.5 py-2 resize-none bg-white border rounded-lg disabled:bg-gray-100 focus:outline-none focus-visible:ring-[3px]"
          >
            {profileBio}
          </AutoResizingTextArea>
        </div>

        {Object.entries(contacts).map(([key, value]) => (
          <div
            title="contact_wrapper"
            id={key.toLowerCase() + '_wrapper'}
            className="mb-6"
            key={key}
          >
            <div
              title="contact_title"
              id={key.toLowerCase() + '_title'}
              className="font-bold mb-1"
            >
              {key.charAt(0).toUpperCase() + key.toLowerCase().slice(1)}
            </div>
            <AutoResizingTextArea
              id="ta-content"
              rows={1}
              disabled={lockState === 'locked'}
              placeholder={value}
              className="w-full px-3.5 py-2 resize-none bg-white border rounded-lg disabled:bg-gray-100 focus:outline-none focus-visible:ring-[3px]"
            />
          </div>
        ))}
      </div>

      {/* Edit Profile */}
      <div id="edit_lock_icon" className="self-end">
        {lockState === 'locked' ? (
          <button
            className="w-fit px-[15px] py-[5px] text-white bg-black rounded"
            onClick={toggleLock}
          >
            EDIT
          </button>
        ) : (
          <button
            className="w-fit px-[15px] py-[5px] text-white bg-blue-900 rounded"
            onClick={toggleLock}
          >
            SAVE CHANGES
          </button>
        )}
      </div>
    </div>
  );
}
