// React Components
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

// react icons: social media
import { BsYoutube, BsDiscord, BsLinkedin, BsSnapchat } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { TiSocialTwitter } from 'react-icons/ti';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import AutoResizingTextArea from '@/components/shared/AutoResizingTextArea';

// defaults

// TODO: store this type somewhere else!
type ProfileData = {
  userId: string,
  userPfp: string,
  name: string,
  bio: string,
  contact: {
    location: string,
    phone: string,
    email: string,
    socialMedia: {
      facebook: string,
      instagram: string,
      linkedin: string,
      twitter: string,
      youtube: string,
      discord: string,
      snapchat: string,
      tiktok: string
    }
  }
}

const oldDummyProfileData: ProfileData = {
  userId: '0000',
  userPfp: '/images/dylan.png',
  name: 'Dylan Lu',
  bio: 'I’m currently studying computer engineering at Stanford. Contact me if you wanna work at my startup. I am also fine making a small donation of one million dollars as an investor for any student project by asking my uncle Elon for some Buckaroos!!',
  contact: {
    location: 'Palo Alto, CA',
    phone: '650-555-5555',
    email: 'lol@lol.com',
    socialMedia: {
      facebook: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      instagram: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      linkedin: 'https://www.linkedin.com/in/dylanelu',
      twitter: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      youtube: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      discord: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      snapchat: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      tiktok: 'https://www.youtube.com/watch?v=QKr_0DMYV5g'
    }
  }
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
    socialMedia: {
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com/',
      youtube: 'https://www.youtube.com/watch?v=QKr_0DMYV5g',
      discord: 'https://discord.com/',
      snapchat: 'https://www.snapchat.com/',
      tiktok: 'https://www.tiktok.com/'
    }
  }
};

// These two arrays are corresponding with each other
const socialMediaNamesList = [
  'youtube',
  'discord',
  'facebook',
  'instagram',
  'linkedin',
  'snapchat',
  'twitter',
  'tiktok'
];
const socialMediaIconsList = [
  BsYoutube,
  BsDiscord,
  FaFacebook,
  FaInstagram,
  BsLinkedin,
  BsSnapchat,
  TiSocialTwitter,
  FaTiktok
];

export default function ProfilePage() {
  const router = useRouter();
  const queryMessage = router?.query;

  useEffect(() => {
    console.log('Welcome to profile: ', queryMessage);

    // Fetch the user's data on mount
    fetch(`http://localhost:4000/user?userId=${queryMessage.message}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log('Fetched the Data: ', data);
          setProfileData(data);
        }
      }).catch((error) => {
        console.log('ERRORRRRRR: ', error);
        setProfileData(dummyProfileData);
      });
  }, []);

  const [lockState, setLockState] = useState<'locked' | 'unlocked'>('locked');

  const [profileName, setProfileName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [profileBio, setProfileBio] = useState('');
  const [socialMedias, setSocialMedias] = useState(dummyProfileData.contact.socialMedia);

  const [profileContact, setProfileContact] = useState([]);

  function setProfileData(userData: ProfileData) {
    setProfileName(userData.name);

    if ('userPfp' in userData && userData.userPfp) {
      setProfileImage(userData.userPfp);
    } else {
      setProfileImage('/images/userIconx96.png');
    }

    if ('bio' in userData && userData.bio) {
      setProfileBio(userData.bio);
    }

    setSocialMedias(userData.contact.socialMedia);

    let contactHelper = [];
    let contactInfoKeys =
      'contact' in userData ? Object.keys(userData.contact) : [];
    contactInfoKeys.forEach((key) => {
      let valueForKey = userData.contact[key];
      let lowerCaseKey = key.toLowerCase();
      let titleKey =
        lowerCaseKey.charAt(0).toUpperCase() + lowerCaseKey.slice(1);

      if (key != 'socialMedia') {
        contactHelper.push(
          <div
            title="contact_wrapper"
            id={lowerCaseKey + '_wrapper'}
            className="mb-6"
          >
            <div
              title="contact_title"
              id={lowerCaseKey + '_title'}
              className="font-bold underline"
            >
              {titleKey}
            </div>
            <div
              title="contact_content"
              id={lowerCaseKey + '_content'}
              className="w-full"
            >
              <AutoResizingTextArea
                id="ta-content"
                rows={1}
                disabled
                className="w-full p-[5px] resize-none bg-white"
                // ref={addTARefs}
              >
                {valueForKey}
              </AutoResizingTextArea>
            </div>
          </div>
        );
      }
    });
    setProfileContact(contactHelper);
  }

  function toggleLock() {
    if (lockState == 'locked') {
      setLockState('unlocked');
      turnEditsOn();
    } else {
      setLockState('locked');
      turnEditsOff();
    }
  }

  const textAreaRefs = useRef<HTMLTextAreaElement[]>([]);
  const pfpRef = useRef(null);

  const [pfpChangeBtn, setPfpChangeBtn] = useState('hidden');
  const profileNameRef = useRef(null);
  const [displayEditMediaIcons, setDisplayEditMediaIcons] = useState('block');
  const [displayEditMediaLink, setDisplayEditMediaLink] = useState('hidden');

  function turnEditsOff() {
    console.log('Edits Off :{: ', textAreaRefs.current);
    console.log(textAreaRefs.current.length);
    for (let i = 0; i < textAreaRefs.current.length; i++) {
      const taElm = textAreaRefs.current[i];
      taElm.disabled = true;
      taElm.style.backgroundColor = 'white';
      taElm.style.resize = 'none';
      taElm.style.border = 'none';
    }

    //image editable off
    pfpRef.current.style.opacity = '1';
    setPfpChangeBtn('hidden');

    //name change off
    profileNameRef.current.disabled = true;
    profileNameRef.current.style.backgroundColor = 'white';
    profileNameRef.current.style.border = 'none';

    //social media icons and link change on
    setDisplayEditMediaIcons('block');
    setDisplayEditMediaLink('hidden');
  }

  function turnEditsOn() {
    console.log('Edits Off :{: ', textAreaRefs.current);
    var taElms = textAreaRefs.current;
    console.log(taElms.length);
    for (let i = 0; i < taElms.length; i++) {
      // console.log(taElms[i]);
      var taElm = taElms[i];
      taElm.disabled = false;
      taElm.style.backgroundColor = 'white';
      taElm.style.resize = 'vertical';
      taElm.style.border = '2px dashed black';
    }

    //image editable on
    var pfp = pfpRef.current;
    pfp.style.opacity = 0.75;
    pfpChangeBtn = 'block';
    setPfpChangeBtn('block');

    //name change off
    var name = profileNameRef.current;
    name.disabled = false;
    name.style.backgroundColor = 'white';
    name.style.borderBottom = '3px solid gray';

    //social media icons and link change on
    setDisplayEditMediaIcons('hidden');
    setDisplayEditMediaLink('block');
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
            className="w-fit relative mx-auto mb-4 overflow-hidden rounded-full border-[3px] border-[black]"
          >
            <Image
              src={profileImage}
              alt="Profile Image"
              ref={pfpRef}
              className="rounded-full"
              width={200}
              height={200}
            />
            <button
              id="pfp_change"
              className={`absolute w-full h-[50px] bottom-0 text-white bg-black ${pfpChangeBtn}`}
            >
              Change Avatar
            </button>
          </div>
        </div>
        <input
          id="name"
          type="text"
          placeholder="Enter Name Here"
          value={profileName}
          onChange={(e) => setProfileName(e.target.value)}
          ref={profileNameRef}
          className="placeholder:text-stone-600 font-bold place-content-center text-center mb-4 w-[75%] outline-0 border-0 mx-[12.5%]"
        />

        <div id="profileSocial_wrapper">
          <div
            className={`flex gap-4 mx-auto flex-wrap justify-center mb-4 ${displayEditMediaIcons}`}
          >
            {/* TODO: abstract into component? */}
            {Object.entries(socialMedias).map(([key, value]) => {
              const MediaIcon = socialMediaIconsList[socialMediaNamesList.indexOf(key)];
              return (
                <button className="bg-primary p-1 font-semibold text-white rounded" key={key}>
                  <Link href={value} target="_blank">
                    <MediaIcon
                        id={key + '_icon'}
                        className="w-8 h-8 fill-current"
                    />
                  </Link>
                </button>
              )
            })}
          </div>
          <div className={`grid gap-4 mb-4 ${displayEditMediaLink}`}>
            {/* TODO: see above */}
            {Object.entries(socialMedias).map(([key, value]) => (
              <div className="w-full flex" key={key}>
                <div className="bg-slate-400 text-center font-bold w-[200px] p-[5px_10px] border-[black] border-l-[3px] border-y-[3px] rounded-tl-[50px] rounded-bl-[50px]">
                  {key.charAt(0).toUpperCase() + key.toLowerCase().slice(1)}
                </div>
                <div className="bg-black font-bold w-[10px] border-[black] border-y-[3px]"></div>
                <input
                  type="text"
                  placeholder="Enter Link Here"
                  className="w-full placeholder:text-stone-600 px-[5px] outline-0 border-[black] border-x-[none] border-y-[3px]"
                />
                <button className="bg-slate-400 font-bold w-fit p-[5px_10px] border-[black] border-x-[3px] border-y-[3px] rounded-tr-[50px] rounded-br-[50px]">
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="profile_components"
        className="col-span-2 w-[100%] max-w-[650px]"
      >
        <div id="bio_wrapper" className="mb-6">
          <div id="bio_title" className="font-bold underline">
            About Me
          </div>
          <div id="bio_content_wrapper" className="w-full">
            <AutoResizingTextArea
              id="ta_content"
              rows={5}
              disabled
              className="w-full p-[5px] resize-none bg-white"
            >
              {profileBio}
            </AutoResizingTextArea>
          </div>
        </div>

        {profileContact}
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
