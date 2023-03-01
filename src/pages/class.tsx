import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRef, useState, useEffect } from 'react';

// User Proile Images Import
import defaultPfp from "@/../public/images/userIconx96.png";
import dylan from "@/../public/images/dylan.png";

// Custom Components
import FilterGroups from "@/components/classmates/FilterGroups";
import UserCard from '@/components/classmates/UserCard';

export default function Class() {
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


    //HELPFUL FUNCTION: document Stuff to react using useRef (how to use in element: ref={(e) => addToRefs(e, groupRefs.current)})
    // const addToRefs = (elm: HTMLHeadingElement | null, refCurrentList: any[]) => {
    //     console.log("Testing.: ",filterGroupsRef.current.children);

    //     if(elm && !refCurrentList.includes(elm)){
    //         refCurrentList.push(elm);
    //     }
    //     console.log("HURRAH!!!: ",refCurrentList);
    // }



    //////////////////////////COMPONENTS INITIAL DATA
    const dummyFilterTagsData = ["2024", "2023", "2022", "2021"];
    const dummyUserCardData2 = [
        {
        "2024": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            }
        ]},
        {
        "2023": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            }
        ]},
        {
        "2022": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            }
        ]},
        {
        "2021": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                userName: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              userName: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              userName: "Ruparel"
            }
        ]}
    ];
    const dummyUserCardDataOg = [
        {
          uniId: "user1",
          userPfp: defaultPfp,
          userName: "Jia Ruparel"
        },
        {
            uniId: "user2",
            userPfp: defaultPfp,
            userName: "Veereeeeeeeeeeeeeeeeeee Ruparel"
        },
        {
            uniId: "user3",
            userPfp: dylan,
            userName: "Dylan Lu"
        },
        {
            uniId: "user4",
            userPfp: defaultPfp,
            userName: "Ruparel"
        }
    ];

    //Way #1:
    let groupsElements: JSX.Element[] = [];
    dummyUserCardData2.forEach((item,index)=>{
        const groupTagName = Object.keys(item)[0];
        groupsElements.push(
            <>
                <h2 className={`my-[0.83em] font-bold mt-[${index < 1 ? "50px" : "75px"}]`} id={"group_label"}>{groupTagName}</h2>
                <div id={groupTagName} className="grid grid-cols-[repeat(6,auto)] gap-x-[0px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
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
        )
    });
    
    // Way #2
    // const groupsElements2 = dummyUserCardData2.map((tagName, tagIndex) =>
    //     <>
    //         <h2 className="my-[0.83em] font-bold mt-[50px]" id={"group"+tagIndex}>{Object.keys(tagName)[0]}</h2>
    //         <div id={Object.keys(tagName)[0]} className="flex flex-row gap-x-[50px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
    //             {tagName[Object.keys(tagName)[0]].map((data, i) => (
    //                 <UserCard
    //                     key={i}
    //                     uniId={data.uniId}
    //                     userPfp={data.userPfp}
    //                     userName={data.userName}
    //                 />
    //             ))}
    //         </div>
    //     </>
    // );



    //////////////////////////////////////////////////////////All Variables
    //Css Variables
    const filterBox_width = "10%";
    const tag_to_indicator_size_ratio = "0.6";
    const tag_fontSize = "25px";
    const marginL_groups = 30;
    const marginR_groups = marginL_groups/2;

    ///////////////////////////////////////////////////////////////////////////////////////Js Functions

    //Forwarding Ref Junk Code
    // const testing = groupTagsClick(indicatorRef);

    // useEffect(() => {
    //     console.log("Ref is passed and returned");
    //     console.log(indicatorRef);
    // }, []);


    //Js Initialization Variables
    var previousDirectionScroll: string;
    var endScrollFlag: boolean;
    // Other Declarations
    var group_tags: any[] | NodeListOf<Element>;
    var stopIndicatorMoveFlag: boolean;
    var keepGroupHeight: number;
    var fullHeight: number;
    var directionScroll: string;
    var allGroupContent: string | any[] | NodeListOf<Element>;
    var allGroupLabel: any[];
    var allGroupLabelName: string[];
    var nextScrollGroupLabel: Element | null;

    //Window On Load Stuff
    useEffect(() => {
        // This code will run only once when the component mounts
        console.log("Component mounted");
    
        // document.getElementById("group_indicator").style.display = "none";
    
        //Define Variables
        declareVariables();
    }, []);

    //Toggle Filter by either clicking on image or document
    const [filterShowCss, setFilterShowCss] = useState("hidden");

    const toggleFilter = (elm: EventTarget) => {
        console.log("LOOKIE: ", elm.id);
        if(elm.id == "filterSortIcon"){
            console.log("YAAAAY");
            if(filterShowCss == "hidden"){
                setFilterShowCss("block");
            }
            else{
                setFilterShowCss("hidden");
            }
        }
        else{
            setFilterShowCss("hidden");
        }
    }


    //////////////////// Tag Click + Scroll Event Functions ////////////////////////////////////////

    //Declarations 
    function declareVariables(){
        console.log("Declaring...............");
        previousDirectionScroll = "";
        endScrollFlag = false;
        // Other Declarations
        group_tags = filterGroupsRef.current.children;
        console.log(group_tags);
        stopIndicatorMoveFlag = false;
        keepGroupHeight = 0;
        fullHeight = document.body.offsetHeight;
        console.log("Full-Height = ", fullHeight);
        directionScroll = "down";
        allGroupContent = groupWrapperRef.current.children;
        allGroupLabelName = [];
        allGroupLabel = [];
        for(let i=0; i < allGroupContent.length; i++){
            if(allGroupContent[i].id == "group_label"){
                allGroupLabel.push(allGroupContent[i]);
                allGroupLabelName.push(allGroupContent[i].innerHTML);
            }
        }
        nextScrollGroupLabel = allGroupLabel[0];
    
        //console checks
        console.log(allGroupLabel);
        console.log("I AM HERE IN THE CODE!!!!   ", allGroupLabelName);
        console.log(nextScrollGroupLabel);
    }
    function scrollPosOfElement(elm){
        var posValue = 0;
        var style = elm.currentStyle || window.getComputedStyle(elm);
        posValue = elm.offsetTop - (parseInt(style.marginTop)/2);
        console.log("ScrollPosOfElement = ", posValue);
        return posValue;
    }
    function moveIndicator(moveToPos){
        var group_indicator = indicatorRef;
        console.log(group_indicator);
        group_indicator.style.display = "block";
        group_indicator.style.marginTop = moveToPos+"px";
    }
    function showGroup(group){
        var group_tag_clicked = group;
        var group_labels = allGroupLabel;
        //scroll page to label
        var scrollLabelYPos = 0;
        var group_label_clicked = null;
        for(let i = 0; i < group_labels.length; i++){
            if(group_tag_clicked.innerHTML == group_labels[i].innerHTML){
                scrollLabelYPos = scrollPosOfElement(group_labels[i]);
                // **alt way
                group_label_clicked = group_labels[i];
                break;
            }     
        } 
        //Special Case #2: Set new nextGroupLabel
        nextScrollGroupLabel = group_label_clicked;
        //Way #1:
        window.scrollTo(0, scrollLabelYPos);
        //alt way **
        // group_label_clicked.scrollIntoView();
        //scroll indicator to tag clicked
        var moveTagYPos = group_tag_clicked.offsetTop;
        moveIndicator(moveTagYPos);
      }

    // When Group Tag Clicked Event
    //React Way:
    const groupTagsClick = (elm) => {
        console.log("No WAYYYY THIS WORKEDDDDD!!!!!");
        console.log(elm, elm.innerHTML);
        // showGroup(elm);
    };

      // JS WAY:
      // document.getElementById("filter_groups").addEventListener('click', (e)=> {
      //     // check what was clicked
      //     if(e.target.matches(".group_tags")){
      //         showGroup(e.target);    
      //     }
      //     else{
      //         return;
      //     }
      // });
   
        //React Scroll Direction Function: 
        // function scrollDirection() {
        //   const [scrollDir, setScrollDir] = useState("down");
        //   const [prevScrollPos, setPrevScrollPos] = useState(0);
        
        //     const currentScrollPos = window.pageYOffset;
        
        //     if (prevScrollPos > currentScrollPos) {
        //       setScrollDir("up");
        //     } else if (prevScrollPos < currentScrollPos) {
        //       setScrollDir("down");
        //     }
    
        //     setPrevScrollPos(currentScrollPos);
        
        //   return scrollDir;
        // }
    
    
    
        // function scrollDirection(){
        //     var direction = this.oldScroll > this.scrollY;
        //     this.oldScroll = this.scrollY;
        //     return direction;
        // } 
    
        function setNextGroupLabel(currentGroup, direction){
          console.log("SetNextGroupLabel Funct:::::::: ", allGroupLabelName);
            var currentIndex;  
            currentIndex = allGroupLabelName.indexOf(currentGroup.innerHTML);
            if(direction == "down"){
                var nextIndex = currentIndex + 1;
                if(nextIndex < 0 || nextIndex > allGroupLabel.length - 1){
                    endScrollFlag = true;
                    stopIndicatorMoveFlag = true;
                    keepGroupHeight = fullHeight;
                    nextScrollGroupLabel = allGroupLabel[currentIndex];
                }
                else{
                    nextScrollGroupLabel = allGroupLabel[nextIndex];    
                }
            }
            else{
              var nextIndex;
              nextIndex = currentIndex - 1;
                if(nextIndex < 0 || nextIndex > allGroupLabel.length){
                    endScrollFlag = true;
                    stopIndicatorMoveFlag = true;
                    keepGroupHeight = 0;
                    nextScrollGroupLabel = allGroupLabel[currentIndex];
                }
                else{
                    nextScrollGroupLabel = allGroupLabel[nextIndex];    
                }
            }
        }
        function altScrollDirectionCheck(){
          console.log("CHECK IF ALTERNATING");
          console.log(directionScroll);
          console.log(previousDirectionScroll);
          console.log(directionScroll != previousDirectionScroll && previousDirectionScroll != "" && previousDirectionScroll != undefined && previousDirectionScroll != null);
            if(directionScroll != previousDirectionScroll && previousDirectionScroll != "" && previousDirectionScroll != undefined && previousDirectionScroll != null){
                if(!endScrollFlag){
                    return true;
                }
                else{
                    endScrollFlag = false;
                    return false;
                }
            }
            else{
                return false;
            }
        }
        function scrollToGroups(scrollDirection) {
            //Detecting Scroll Direction: false == down ; true == up
            console.log("################ SCROLL TO GROUPS FUNCTION STARTS HERE ######################");
            directionScroll = scrollDirection;
            console.log(directionScroll);
            //Indicator Move Way #2:
            if(directionScroll == "down"){
                //Special Case #1 Check:
                console.log("Down We Go");
                var alternatingScrollFlag = altScrollDirectionCheck();
                if(alternatingScrollFlag){
                  console.log("SPECIAL CASE #1");
                    setNextGroupLabel(nextScrollGroupLabel, directionScroll);
                }
                var nextGroupPos = 0;
                if(stopIndicatorMoveFlag){
                    if(keepGroupHeight == 0){
                        stopIndicatorMoveFlag = false;
                        nextGroupPos = 0;
                    }
                    else{
                        nextGroupPos = keepGroupHeight;
                    }
                }
                else{
                    console.log("HAHAHAHAHAHAHA::: ", nextScrollGroupLabel)
                    nextGroupPos = scrollPosOfElement(nextScrollGroupLabel);    
                }
                if(window.scrollY > nextGroupPos || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                  console.log("HIT!!!!!!!");
                    stopIndicatorMoveFlag = false;
                    //scroll indicator to tag scrolled to
                    var moveTagYPos = 0; 
                    group_tags.forEach((tag) => {
                        if(tag.innerHTML == nextScrollGroupLabel.innerHTML){
                            moveTagYPos = tag.offsetTop;
                        }
                    });
                    moveIndicator(moveTagYPos);
                    setNextGroupLabel(nextScrollGroupLabel, directionScroll);
                }
            }
            else{
                console.log("Up We Go");
                //////////////////////// Direction = "down" ////////////////////////////
                //Special Case #1 Check:
                var alternatingScrollFlag = altScrollDirectionCheck();
                if(alternatingScrollFlag){
                    setNextGroupLabel(nextScrollGroupLabel, directionScroll);
                }
                var nextGroupPos = 0;
                if(stopIndicatorMoveFlag){
                    if(keepGroupHeight == fullHeight){
                        stopIndicatorMoveFlag = false;
                        nextGroupPos = fullHeight;
                    }
                    else{
                        nextGroupPos = 0;
                        keepGroupHeight = 0;
                    }
                }
                else{
                    nextGroupPos = scrollPosOfElement(nextScrollGroupLabel);    
                }
                if(window.scrollY < nextGroupPos){
                    stopIndicatorMoveFlag = false;
                    //scroll indicator to tag scrolled to
                    var moveTagYPos = 0; 
                    group_tags.forEach((tag) => {
                        if(tag.innerHTML == nextScrollGroupLabel.innerHTML){
                            moveTagYPos = tag.offsetTop;
                        }
                    });
                    moveIndicator(moveTagYPos);
                    setNextGroupLabel(nextScrollGroupLabel, directionScroll);
                }
            }
            //update trackers
            console.log("UPDATING::::", directionScroll, previousDirectionScroll);
            previousDirectionScroll = directionScroll;
      }
    
      function useScrollDirection() {
        var scrollWay: string;
        const [scrollDir, setScrollDir] = useState<string | null>(null);
        const [prevScrollPos, setPrevScrollPos] = useState(0);
      
        useEffect(() => {
          function handleScroll() {
            const currentScrollPos = window.pageYOffset;
      
            if (prevScrollPos > currentScrollPos) {
              setScrollDir("up");
              scrollWay = "up";
            } else if (prevScrollPos < currentScrollPos) {
              setScrollDir("down");
              scrollWay = "down";
            }
      
            setPrevScrollPos(currentScrollPos);
          }
      
          window.addEventListener("scroll", () => {
            handleScroll();
            console.log("Calling ScrollToGroups");
            scrollToGroups(scrollWay);
          });
      
          return () => window.removeEventListener("scroll", () => {});
        }, [prevScrollPos, scrollDir]);
      
        return scrollDir;
      }
    
    //   //End Of Js Code
    
      const scrollDir = useScrollDirection();
      // console.log(scrollDir);
    
    

  return (
    <>
        <Head>
          <title>Gunn Alumni | Classmates</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="images/titanIcon_1.png" />
        </Head>
        
        <div id="content_wrapper" className={`grid grid-flow-row grid-cols-1 sm:grid-cols-[10%_auto]`} 
            onClick={(e) => {
                e.stopPropagation();
                toggleFilter(e.target);
            }}>
            
            <div id="tag_wrapper" className="flex flex-row">
                <div id="group_indicator" ref={indicatorRef} className={`z-10 fixed border-[calc(25px_*_0.6)] left-0 top-0 w-0 h-0 ml-[7.5px] border-r-transparent border-y-transparent border-solid border-blue-500 ${visibleIndicator ? "block" : "hidden"}`}/>
                <FilterGroups tags={dummyFilterTagsData} onTagClick={groupTagsClick} ref={filterGroupsRef} />
            </div>
            
            <div id="groups_wrapper" className={`ml-[7.5%] mr-[5%] mt-0 mb-[30px]`}>
                <h1 id="header" className = {`my-3 text-[2em] font-extrabold  text-center ml-[calc(calc(-1*10%)-10%)]`}>Find Your Classmates</h1>
                <div id="nav_options" className={`text-[15px] flex flex-row-reverse mr-[10%] items-center gap-x-2.5`}>
                    <div id="filter_wrapper">
                        <img
                            src="images/filterSortIconx64.png"
                            alt="filterSortIcon"
                            id="filterSortIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFilter(e.target);
                              }}/>
                        <div id="filter_options_wrapper" className={`absolute text-xl right-[10%] bg-[rgba(255,255,255,0.85)] rounded-[10%] border-2 border-solid border-[black] ` + filterShowCss}>
                            <div id="years" className='text-center px-[25px] py-[5px] hover:bg-[lightblue] hover:rounded-[17%_17%_0_0]'>Past Years</div>
                            <div id="alphabetical" className='text-center px-[25px] py-[5px] hover:bg-[lightblue]'>Alphabetical</div>
                            <div id="other" className='text-center px-[25px] py-[5px] hover:bg-[lightblue] hover:rounded-[0_0_17%_17%]'>Other</div>
                        </div>
                    </div>
                    <input
                    type="text"
                    placeholder="🔍︎ Search Directory..."
                    id="searchbar"
                    className='mx-2.5 my-0 p-[5px]'/>
                </div>
                <div id='group_wrapper' ref={groupWrapperRef}>
                    {groupsElements}
                </div>
            </div>
        </div>
    </>

  )
}