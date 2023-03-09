import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRef, useState, useEffect } from 'react';

//React-Icons Import
import { GoTriangleRight } from 'react-icons/go';
import { FaSortAmountDown } from 'react-icons/fa';

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
    //     // console.log("Testing.: ",filterGroupsRef.current.children);

    //     if(elm && !refCurrentList.includes(elm)){
    //         refCurrentList.push(elm);
    //     }
    //     // console.log("HURRAH!!!: ",refCurrentList);
    // }



    //////////////////////////COMPONENTS INITIAL DATA
    const dummyUserCardData = [
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
        ]},
        {
        "2020": [
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
        "2019": [
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
        "2018": [
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
        "2017": [
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
        "2016": [
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
        "2015": [
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
        "2014": [
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
        "2013": [
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
            "2012": [
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
            "2011": [
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
            "2010": [
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
    const dummyFilterTagsData = [];
    for(let i=0; i < dummyUserCardData.length; i++){
        var dataDictKeys = Object.keys(dummyUserCardData[i]);
        for(let k=0; k < dataDictKeys.length; k++){
            dummyFilterTagsData.push(dataDictKeys[k]);
        }
    }
    // // console.log("DummyDataCheck = ",dummyFilterTagsData);


    //Old Data Structures
    const dummyFilterTagsDataOg = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];
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
    const groupsElements: JSX.Element[] = [];
    dummyUserCardData.forEach((item,index)=>{
        const groupTagName = Object.keys(item)[0];
        groupsElements.push(
            <>
                <h2 key={index} className={`my-[0.83em] font-bold ${index < 1 ? "mt-[50px]" : "mt-[75px]"}`} id={"group_label"}>{groupTagName}</h2>
                <div key={groupTagName} id={"group_content"} className="flex flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
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
    // const groupsElements2 = dummyUserCardData.map((tagName, tagIndex) =>
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
    //     // console.log("Ref is passed and returned");
    //     // console.log(indicatorRef);
    // }, []);

    //Toggle Filter by either clicking on image or document
    const [filterShowCss, setFilterShowCss] = useState("hidden");

    const toggleFilter = (elm: EventTarget) => {
        // // console.log("LOOKIE: ", elm.id);
        if(elm.id == "filterSortIcon"){
            // // console.log("YAAAAY");
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

    ///////////////////////////////// Tag Clicked Logic ////////////////////////////////////////
    const groupTagsClick = (elm) => {
        // // console.log("No WAYYYY THIS WORKEDDDDD!!!!!");
        // // console.log(elm, elm.innerHTML);
        if(elm.id == "group_tags"){
            // // console.log("YOU SHALL PASSSSSS");
            showGroup(elm);
        }
    };

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
        //Special Case #1: Set new currentGroupLabel
        // // console.log("Special Case #2 Check: ", nextScrollGroupLabel, " = ", group_label_clicked);
        currentGroupLabel = group_label_clicked;
        setCurrentGroupLabel(group_label_clicked);
        //Way #1:
        window.scrollTo(0, scrollLabelYPos);
        //alt way **
        // group_label_clicked.scrollIntoView();
        //scroll indicator to tag clicked
        // var moveTagYPos = group_tag_clicked.offsetTop;
        var moveToElm = group_tag_clicked;
        moveIndicator(moveToElm);
    }

    //////////////////////////////////////// Scroll Logic //////////////////////////////////////////////////////
    //Global Variables
    const [scrollDir, setScrollDir] = useState<string | null>(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const indicatorBorderSize = 28.8;

    var [group_tags, setGroup_tags] = useState([]);
    var [fullHeight, setFullHeight] = useState(0);
    var [allGroupContent, setAllGroupContent] = useState([]);
    var [allGroupLabel, setAllGroupLabel] = useState([]);
    var [currentGroupLabel, setCurrentGroupLabel] = useState(null);

    //Change indicator Global Vars
    var [changeIndicatorFlag, setChangeIndicatorFlag] = useState(false);
    const changeScreenWidth = 1286;
    var [tagText, setTagText] = useState("");
    
    //////////////////////////Better JS LOGIC
    //Window On Load Stuff
    useEffect(() => {
        // This code will run only once when the component mounts
        // // console.log("Component mounted");

        //Define Variables
        declareVariables();
    }, []);

    function declareVariables(){
        // // console.log("declaring...");
        // // console.log(changeScreenWidth);
        changeIndicator();
        
        group_tags = filterGroupsRef.current.children;
        setGroup_tags(filterGroupsRef.current.children);
        // // console.log(group_tags);
        fullHeight = window.document.body.offsetHeight;
        setFullHeight(window.document.body.offsetHeight);
        // // console.log("FullLLLLLL-Height = ", fullHeight);
        // allGroupContent = groupWrapperRef.current.children;
        var allGroupContentHelper = groupWrapperRef.current.children;
        allGroupContent = allGroupContentHelper; 
        setAllGroupContent(allGroupContentHelper);
        // // console.log("AllGroupContent: ",allGroupContent, allGroupContent.length);
        var allGroupLabelHelper = [];
        for(let i=0; i < allGroupContent.length; i++){
            if(allGroupContent[i].id == "group_label"){
                allGroupLabelHelper.push(allGroupContent[i]);
            }
        }
        allGroupLabel = allGroupLabelHelper;
        setAllGroupLabel(allGroupLabelHelper);

        //console checks
        // // console.log(allGroupLabel);
        // // console.log("group_tags: ", group_tags);
        
    }


    function moveIndicator(moveToElm){
        //additional logic to align the middle of indicator and tag
        //hard coded values!!
        var borderSize_group_indicator = indicatorBorderSize;
        var group_indicator = indicatorRef.current;

        //Is the indicator changed???
        if(changeIndicatorFlag){
            group_indicator.style.display = "none";
            highlightTag(moveToElm);
        }
        else{
            // // console.log("group_indicator = ", group_indicator);
            highlightTag("");
            var moveToTag = moveToElm;
            var moveMarginPos = moveToTag.getBoundingClientRect().top + (Math.abs((moveToTag.getBoundingClientRect().height / 2) - (borderSize_group_indicator / 2)))
            //console Checks for logic
            // // console.log(group_indicator.borderWidth);
            // // console.log(moveToTag.getBoundingClientRect().height / 2);
            // // console.log(Math.abs((moveToTag.getBoundingClientRect().height / 2) - (borderSize_group_indicator / 2)));
            // // console.log(moveMarginPos);
            //Move indicator the amount
            group_indicator.style.display = "block";
            group_indicator.style.marginTop = moveMarginPos+"px";
        }
    }
    function scrollPosOfElement(elm){
        var posValue = 0;
        if(elm == "" || elm == undefined || elm == null){
            posValue = -1;
            return posValue;
        }
        else{
            var style = elm.currentStyle || window.getComputedStyle(elm);
            posValue = elm.offsetTop - (parseInt(style.marginTop)/2);
            // // console.log("ScrollPosOfElement = ", posValue);
            return posValue;
        }
    }
    function findClosest(posArr){
        const arr = posArr;
        const goal = window.scrollY;
        const closest = arr.reduce((prev, curr) => {
          return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        // // console.log(closest);
        return closest;   
    }
    function scrollChange(directionScroll){
        var labelPosList = [];
        for(let i=0; i < allGroupLabel.length; i++){
            labelPosList.push(scrollPosOfElement(allGroupLabel[i]));
        }
        // // console.log("All Pos: ", labelPosList);
        // // console.log(currentGroupLabel);
        var reducedPosList = [];
        var closestLabelPos = 0;
        var currentLabelPos = scrollPosOfElement(currentGroupLabel);
        if(directionScroll == "down"){
            // // console.log("Going DOWN");
            var nextIndex = labelPosList.indexOf(currentLabelPos) + 1;
            if(nextIndex < labelPosList.length - 1){
                reducedPosList = labelPosList.slice(nextIndex);
                closestLabelPos = findClosest(reducedPosList);
                // // console.log(reducedPosList);
                if(window.scrollY >= closestLabelPos){
                    // // console.log("Hit");
                    var labelHit = allGroupLabel[labelPosList.indexOf(closestLabelPos)];
                    currentGroupLabel = labelHit;
                    setCurrentGroupLabel(labelHit);

                    //move indicator
                    if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
                        var moveToElm;
                        for(let t=0; t < group_tags.length; t++){
                            if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
                                // moveTagYPos = group_tags[t].offsetTop;
                                moveToElm = group_tags[t];
                                // // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                                // // console.log("Checking Other Properties: ", group_tags[t].marginTop);
                            }
                        }
                        moveIndicator(moveToElm);
                    }
                }
            }
        }
        else{
            // // console.log("Going UP");
            var nextIndex = labelPosList.indexOf(currentLabelPos);
            // // console.log(nextIndex);
            if(nextIndex > 0){
                reducedPosList = labelPosList.slice(0, labelPosList.indexOf(currentLabelPos));
                closestLabelPos = findClosest(reducedPosList);
                // // console.log(reducedPosList);
                if(window.scrollY <= closestLabelPos){
                    // // console.log("Boom");
                    var labelHit = allGroupLabel[labelPosList.indexOf(closestLabelPos)];
                    currentGroupLabel = labelHit;
                    setCurrentGroupLabel(labelHit);

                    //move indicator
                    if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
                        var moveToElm;
                        for(let t=0; t < group_tags.length; t++){
                            if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
                                // moveTagYPos = group_tags[t].offsetTop;
                                moveToElm = group_tags[t];
                                // // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                                // // console.log("Checking Other Properties: ", group_tags[t].marginTop);
                            }
                        }
                        moveIndicator(moveToElm);
                    }
                }
            }
        }

    }

    function handleScroll() {
        var currentScrollPos = window.pageYOffset;
        var scrollWay;
        if (prevScrollPos > currentScrollPos) {
          scrollWay = "up";
        } else if (prevScrollPos < currentScrollPos) {
          scrollWay = "down";
        }
        // // console.log("setting current to previous: ");
        setPrevScrollPos(currentScrollPos);
        // // console.log("IN handleScroll | Current Scroll Val = ", currentScrollPos, ", Previous Scroll Val = ", prevScrollPos);
        scrollChange(scrollWay);
    }

    useEffect(function mount() {
        // // console.log("IN useEffect | Current Scroll Val = BROWWWWWW", ", Previous Scroll Val = ", prevScrollPos);
        function onScroll() {
          handleScroll();
        }
    
        window.addEventListener("scroll", onScroll);
    
        return function unMount() {
          window.removeEventListener("scroll", onScroll);
        };
    });

    useEffect(function mount() {
        // // console.log("IN useEffect | Current Scroll Val = BROWWWWWW", ", Previous Scroll Val = ", prevScrollPos);
        function onChangeScreenSize() {
          changeIndicator();
        }
    
        window.addEventListener("resize", onChangeScreenSize);
    
        return function unMount() {
          window.removeEventListener("resize", onChangeScreenSize);
        };
    });

    function changeIndicator() {
        var screenSizeW = window.innerWidth;
        // // console.log(screenSizeW);
        if(screenSizeW <= changeScreenWidth){
            // // console.log("Screen changed");
            changeIndicatorFlag = true;
            setChangeIndicatorFlag(true);

        }
        else{
            // // console.log("Screen full");
            changeIndicatorFlag = false;
            setChangeIndicatorFlag(false);
        }

        //move indicator
        if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
            var moveToElm;
            for(let t=0; t < group_tags.length; t++){
                if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
                    // moveTagYPos = group_tags[t].offsetTop;
                    moveToElm = group_tags[t];
                    // // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                    // // console.log("Checking Other Properties: ", group_tags[t].marginTop);
                }
            }
            // // console.log(changeIndicatorFlag);
            moveIndicator(moveToElm);   
        }
    }

    function highlightTag(elm){
        var tagElm = elm;
        // console.log("HIGHLIGHT TAAAAAAAAAAG");
        // console.log(tagElm.style);
        if(tagElm != ""){
            // console.log("Highlighting");
            tagText = tagElm.innerHTML;
            setTagText(tagElm.innerHTML);
        }
        else{
            // console.log("De-Highlighting");
            tagText = "";
            setTagText("");
        }
    }
    /// END OF JS CODE

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
                {/* <div><GoTriangleRight className='w-[45px] h-[45px] z-10 fixed left-0 top-0 ml-[7.5px]'/></div> */}
                <div id="group_indicator" ref={indicatorRef} className={`z-10 fixed border-[calc(25px_*_0.6)] left-0 top-0 w-0 h-0 ml-[7.5px] border-r-transparent border-y-transparent border-solid border-black ${visibleIndicator ? "block" : "hidden"}`}/>
                <FilterGroups tags={dummyFilterTagsDataOg} onTagClick={groupTagsClick} tagText={tagText} ref={filterGroupsRef} />
            </div>
            
            <div id="groups_wrapper" className={`ml-[7.5%] mr-[5%] mt-0 mb-[30px]`}>
                <h1 id="header" className = {`my-3 text-[2em] font-extrabold  text-center ml-[calc(calc(-1*10%)-10%)]`}>Find Your Classmates</h1>
                <div id="nav_options" className={`text-[15px] flex flex-row-reverse mr-[10%] items-center gap-x-2.5`}>
                    <div id="filter_wrapper">
                        {/* <img
                            src="images/filterSortIconx64.png"
                            alt="filterSortIcon"
                            id="filterSortIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFilter(e.target);
                              }}/> */}
                        <FaSortAmountDown 
                            id="filterSortIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFilter(e.target);
                                }}
                                className="w-[30px] h-[30px]"/>
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