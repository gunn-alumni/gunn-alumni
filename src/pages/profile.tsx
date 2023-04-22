// React Components
import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// react icons: social media
import { BsYoutube, BsDiscord, BsLinkedin, BsSnapchat } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'
import Link from 'next/link'
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

// defaults

const dummyProfileData = {
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
}

// These two arrays are corresponding with each other
const socialMediaNamesList = ['youtube', 'discord', 'facebook', 'instagram', 'linkedin', 'snapchat', 'twitter', 'tiktok']
const socialMediaIconsList = [BsYoutube, BsDiscord, FaFacebook, FaInstagram, BsLinkedin, BsSnapchat, TiSocialTwitter, FaTiktok]

const ProfilePage = () => {
  const router = useRouter()
  const queryMessage = router?.query

  useEffect(() => {
    console.log('Welcome to profile: ', queryMessage)
    getUserProfile(queryMessage.message)
  }, [])

  function getUserProfile (userId) {
    // Fetch the data
    fetch(`http://localhost:4000/user?userId=${userId}`, {
      method: 'GET'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        if (data) {
          console.log('Fetched the Data: ', data)
          profileData = data
          setProfileData(data)
          makeProfile(profileData)
        }
      })
      .catch(error => {
        console.log('ERRORRRRRR: ', error)
        profileData = dummyProfileData
        setProfileData(dummyProfileData)
        // console.log("YIU(IUJHIHHBHUIUHBHUBHIBF: ", profileData.userPfp);
        makeProfile(profileData)
      })
  }

  // Set the profile data stuff

  // All Profile Data Initializers
  var [profileData, setProfileData] = useState()
  let [profileName, setProfileName] = useState()
  let [profileImage, setProfileImage] = useState()
  let [profileMediaIcons, setProfileMediaIcons] = useState([])
  let [profileBio, setProfileBio] = useState([])
  let [profileContact, setProfileContact] = useState([])

  // The functions
  function makeProfile (userData) {
    profileName = userData.name
    setProfileName(userData.name)
    if ('userPfp' in userData) {
      if (userData.userPfp) {
        profileImage = userData.userPfp
        setProfileImage(userData.userPfp)
      }
    } else {
      profileImage = '/images/userIconx96.png'
      setProfileImage('/images/userIconx96.png')
    }

    // Make Bio Stuff
    if ('bio' in userData) {
      if (userData.bio && userData.bio != '') {
        const profileBioHelper = addBio(userData.bio)
        profileBio = profileBioHelper
        setProfileBio(profileBioHelper)
        // console.log(profileBio);
      }
    }

    // Make Contact Stuff
    const contactHelper = []
    // console.log("Creating Elements: ", userData);
    const contactInfoKeys = 'contact' in userData ? Object.keys(userData.contact) : []
    contactInfoKeys.forEach(key => {
      const valueForKey = userData.contact[key]
      const lowerCaseKey = key.toLowerCase()
      const titleKey = lowerCaseKey.charAt(0).toUpperCase() + lowerCaseKey.slice(1)
      // console test
      // console.log(lowerCaseKey);
      // console.log(valueForKey);

      if (key == 'socialMedia') {
        // stub
        addSocialMedia(valueForKey)
      } else {
        contactHelper.push(
          <>
            <div title="contact_wrapper" id={lowerCaseKey + '_wrapper'} className="mb-6">
              <div title="contact_title" id={lowerCaseKey + '_title'} className="font-bold">{titleKey}</div>
              <div title="contact_content" id={lowerCaseKey + '_content'}>{valueForKey}</div>
            </div>
          </>
        )
      }
    })

    profileContact = contactHelper
    setProfileContact(contactHelper)

    // console testing
    // console.log("ContactHelper = ",contactHelper);
    // console.log("ProfileContact = ", profileContact);
  }

  function addBio (userBio) {
    return (
      <>
        <div id="bio_wrapper" className="mb-6">
          <div id="bio_title" className="font-bold">About Me</div>
          <div id="bio_content">
            {userBio}
          </div>
        </div>
      </>
    )
  }

  function addSocialMedia (socialData) {
    // stub
    const mediaIconsHelper = []
    const socialMediaKeys = Object.keys(socialData)
    const blueBgNum = 500
    socialMediaKeys.forEach(social => {
      const shadeBlueBg = 'bg-blue-' + blueBgNum
      // console.log(social);
      const indexSocial = socialMediaNamesList.indexOf(social)
      const MediaIcon = socialMediaIconsList[indexSocial]
      // console.log("YOOOOO: ", indexSocial);

      mediaIconsHelper.push(
        <>
          <button className={`${shadeBlueBg} p-1 font-semibold text-white rounded`}>
            <Link href={socialData[social]} >
              <MediaIcon id={social + '_icon'} className="w-8 h-8 fill-current"/>
            </Link>
          </button>
        </>
      )
      // blueBgNum += 100;
    })

    profileMediaIcons = mediaIconsHelper
    setProfileMediaIcons(mediaIconsHelper)

    // console testing
    // console.log("mediaIconsHelper = ",mediaIconsHelper);
    // console.log("ProfileMediaIcons = ", profileMediaIcons);
  }

  /// //////////////End of functions

  return (
    <>
      <Head>
        <title>Gunn Alumni | Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="profile_wrapper" className="flex sm:flex-row flex-col gap-12 mx-auto w-full sm:p-[50px] p-[25px] justify-center">
        <div className="col-span-1 w-auto sm:min-w-[150px] max-w-[300px] sm:m-0 m-auto">
          <div>
            <Image
              src={profileImage}
              alt="Profile Image"
              className="rounded-full mb-4 mx-auto"
              width={200}
              height={200}
            />
          </div>
          <div id="name" className="font-bold place-content-center text-center mb-4">
            {profileName}
          </div>

          <div className="flex gap-4 mx-auto flex-wrap justify-center">
            {profileMediaIcons}

            {/* <button className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </button> */}

          </div>
        </div>

        <div className="col-span-2 max-w-[650px]">
          {profileBio}
          {/* <div id="bio_wrapper" className="mb-6">
            <div id="bio_title" className="font-bold">About Me</div>
            <div id="bio_content">
              {profileBio}
            </div>
          </div> */}
          {profileContact}
        </div>
      </div>
    </>
  )
}

export default ProfilePage
