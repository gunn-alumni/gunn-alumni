import Head from "next/head";
import Image from "next/Image";
import { Inter } from "@next/font/google";
import { useRef, useState, useEffect } from "react";

// User Proile Images Import
import defaultPfp from "@/../public/images/userIconx96.png";
import dylan from "@/../public/images/dylan.png";

// Custom Components
import FilterGroups from "@/components/classmates/FilterGroups";
import UserCard from "@/components/classmates/UserCard";
import { AiFillFilter } from "react-icons/ai";

export default function OldClassmates() {
  //////////////////////////////////////////////////////////////////////////////Start of Js Code
  //React Hooks:
  const [visibleIndicator, setVisibleIndicator] = useState(false);
  const indicatorRef = useRef(null);
  const filterGroupsRef = useRef(null);
  const groupWrapperRef = useRef(null);
  const groupRefs = useRef([]);
  groupRefs.current = [];
  const tagRefs = useRef([]);
  tagRefs.current = [];

  //////////////////////////COMPONENTS INITIAL DATA
  const dummyFilterTagsData = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
  ];
  const dummyUserCardData2 = [
    {
      "2024": [
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Albert Lee",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Alan Jiang",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Riya Singh",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "David Li",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Ethan Zhang",
        },
      ],
    },
    {
      "2023": [
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Ian",
        },
      ],
    },
    {
      "2022": [
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "John Li",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
      ],
    },
    {
      "2021": [
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel",
        },
        {
          uniId: "user2",
          userPfp: defaultPfp,
          userName: "Veereeeeeeeeeeeeeeeeeee Ruparel",
        },
        {
          uniId: "user3",
          userPfp: dylan,
          userName: "Dylan Lu",
        },
        {
          uniId: "user4",
          userPfp: defaultPfp,
          userName: "Mr. Paley",
        },
      ],
    },
  ];

  //Way #1:
  let groupsElements: JSX.Element[] = [];
  dummyUserCardData2.forEach((item, index) => {
    const groupTagName = Object.keys(item)[0];
    groupsElements.push(
      <>
        <h2
          className={`my-[0.83em] font-bold mt-[${
            index < 1 ? "50px" : "75px"
          }]`}
          id={"group_label"}
        >
          {groupTagName}
        </h2>
        <div
          id={groupTagName}
          className="flex flex-row gap-x-[50px] gap-y-[25px] flex-wrap overflow-x-hidden break-all"
        >
          {item[groupTagName].map((data, i) => (
            <UserCard
              key={i}
              uniId={data.uniId}
              userPfp={data.userPfp}
              userName={data.userName}
            />
          ))}
        </div>
      </>
    );
  });

  //////////////////////////////////////////////////////////All Variables
  //Css Variables
  const filterBox_width = "10%";
  const tag_to_indicator_size_ratio = "0.6";
  const tag_fontSize = "25px";
  const marginL_groups = 30;
  const marginR_groups = marginL_groups / 2;

  //Toggle Filter by either clicking on image or document
  const [filterShowCss, setFilterShowCss] = useState("hidden");

  const toggleFilter = (isIcon = false) => {
    if (isIcon) {
      console.log("YAAAAY");
      if (filterShowCss == "hidden") {
        setFilterShowCss("block");
      } else {
        setFilterShowCss("hidden");
      }
    } else {
      setFilterShowCss("hidden");
    }
  };

  //React Way:
  const groupTagsClick = (elm) => {
    console.log("No WAYYYY THIS WORKEDDDDD!!!!!");
    console.log(elm, elm.innerHTML);
    // showGroup(elm);
  };

  return (
    <>
      <Head>
        <title>Gunn Alumni | Classmates</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/titanIcon_1.png" />
      </Head>

      <div
        id="content_wrapper"
        className={`relative h-[calc(100vh-138px)] flex top-0 overflow-hidden`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFilter();
        }}
      >
        <div id="tag_wrapper" className="flex flex-row">
          <div
            id="group_indicator"
            ref={indicatorRef}
            className={`z-10 fixed border-[calc(25px_*_0.6)] left-0 top-0 w-0 h-0 ml-[7.5px] border-r-transparent border-y-transparent border-solid border-blue-500 ${
              visibleIndicator ? "block" : "hidden"
            }`}
          />
          <FilterGroups
            tags={dummyFilterTagsData}
            onTagClick={groupTagsClick}
            ref={filterGroupsRef}
          />
        </div>
        <div id="groups_wrapper" className={`ml-16 overflow-y-scroll`}>
          <h1
            id="header"
            className={`my-3 text-[2em] font-extrabold  text-center ml-[calc(calc(-1*10%)-10%)]`}
          >
            Find Your Classmates
          </h1>
          <div
            id="nav_options"
            className={`flex flex-row-reverse mr-[10%] items-center gap-x-2.5`}
          >
            <div id="filter_wrapper">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFilter(true);
                }}
              >
                <AiFillFilter size={28} />
              </button>
              <div
                id="filter_options_wrapper"
                className={
                  `absolute text-xl right-[10%] bg-[rgba(255,255,255,0.85)] rounded-[10%] border-2 border-solid border-[black] ` +
                  filterShowCss
                }
              >
                <div
                  id="years"
                  className="text-center px-[25px] py-[5px] hover:bg-[lightblue] hover:rounded-[17%_17%_0_0]"
                >
                  Past Years
                </div>
                <div
                  id="alphabetical"
                  className="text-center px-[25px] py-[5px] hover:bg-[lightblue]"
                >
                  Alphabetical
                </div>
                <div
                  id="other"
                  className="text-center px-[25px] py-[5px] hover:bg-[lightblue] hover:rounded-[0_0_17%_17%]"
                >
                  Other
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="🔍︎ Search Directory..."
              id="searchbar"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block p-1 mr-4"
            />
          </div>
          <div id="group_wrapper" ref={groupWrapperRef}>
            {groupsElements}
          </div>
        </div>
      </div>
    </>
  );
}
