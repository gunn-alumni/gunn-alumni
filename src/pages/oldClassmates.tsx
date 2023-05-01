// calling profile page import
import { useRouter } from 'next/router';

// searching algo import
import Fuse from 'fuse.js';

// other imports
import Head from 'next/head';
import { useRef, useState, useEffect } from 'react';

// React-Icons Import
import { FaSortAmountDown } from 'react-icons/fa';
import { BsArrowDownCircleFill } from 'react-icons/bs';

// Custom Components
import FilterGroups from '@/components/classmates/FilterGroups';
import UserCard from '@/components/classmates/UserCard';

export default function Classmates() {
  // React Hooks Declarations:
  const indicatorRef = useRef(null);
  const filterGroupsRef = useRef(null);
  const filterGroupsMobileRef = useRef(null); // check later if required or not
  const groupWrapperRef = useRef(null);
  const groupRefs = useRef([]);
  groupRefs.current = [];
  const tagRefs = useRef([]);
  tagRefs.current = [];
  const pageUpDownBtnRef = useRef(null);

  const router = useRouter();

  // data initializers
  let [userCardData, setUserCardData] = useState([]);
  let [staticUserCardData, setStaticUserCardData] = useState([]);
  let [filterTagsData, setFilterTagsData] = useState([]);
  // /Create Elements Using Data
  let [groupsElementsState, setGroupsElementsState] = useState([]);

  // Old Data Structures

  // data management stuff
  function changeDataStructure(newData, fetchedFlag) {
    let userCardDataHelper = [];
    console.log(newData);

    if (fetchedFlag) {
      const datakeys = Object.keys(newData);
      for (let i = 0; i < datakeys.length; i++) {
        // console.log(datakeys[i]);
        const tempKey = datakeys[i];
        const tempData = {};
        tempData[tempKey] = newData[tempKey];
        // console.log(tempData);
        userCardDataHelper.push(tempData);
      }
    } else {
      userCardDataHelper = newData;
    }
    console.log('HELPER DATA = ', userCardDataHelper);

    // add gradYear property to each user
    userCardDataHelper.forEach((obj) => {
      const keys = Object.keys(obj);
      obj[keys[0]].forEach((userObj) => {
        userObj.gradYear = keys[0];
      });
    });

    // Setting the staticUserCardData Once and for all
    staticUserCardData = userCardDataHelper;
    setStaticUserCardData(userCardDataHelper);
    console.log(
      'StaticuserCardData (which will act like a const) = ',
      staticUserCardData
    );

    // for making searching easier extract all users
    extractUsers(userCardDataHelper);

    // initial sorted data when page loads:
    sortUsersByDescendingYear(staticUserCardData);
  }

  function storeAlumsData() {
    // console.log("Data Calling Data!!");

    // Fetch the data
    fetch('/api/alums', {
      method: 'GET'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        if (data) {
          // console.log("Fetched the Data: ",data);
          changeDataStructure(data, true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // /Tags Data Create With Fetching
  function createTagsData(inputData) {
    const filterTagsDataHelper = [];
    for (let i = 0; i < inputData.length; i++) {
      const dataDictKeys = Object.keys(inputData[i]);
      for (let k = 0; k < dataDictKeys.length; k++) {
        filterTagsDataHelper.push(dataDictKeys[k]);
      }
    }
    filterTagsData = filterTagsDataHelper;
    setFilterTagsData(filterTagsDataHelper);
    // /console.log("Dummy Filter Tag Data = ", filterTagsData);
  }

  // New code with fetching
  function createUsersData(usersData) {
    const groupsElementsHelper = [];
    // console.log("Creating Elements: ", usersData);
    usersData.forEach((item, index) => {
      const groupTagName = Object.keys(item)[0];
      groupsElementsHelper.push(
        <>
          <h2
            key={index}
            className={`my-[0.83em] font-bold ${
              index < 1 ? 'mt-[50px]' : 'mt-[75px]'
            }`}
            id={'group_label'}
          >
            {groupTagName}
          </h2>
          <div
            key={groupTagName}
            id={'group_content'}
            className="grid min-[350px]:grid-cols-2 md:flex md:flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all"
          >
            {item[groupTagName].map((data, i) => (
              <UserCard
                key={i}
                uniId={
                  !Object.keys(data).includes('userID')
                    ? 'user' + i
                    : data.userID
                }
                classTitle={'user_card'}
                userPfp={
                  !Object.keys(data).includes('userPfp')
                    ? '/images/userIconx96.png'
                    : data.userPfp
                }
                userName={
                  !Object.keys(data).includes('name')
                    ? 'nameless_user'
                    : data.name
                }
              />
            ))}
          </div>
        </>
      );
    });

    groupsElementsState = groupsElementsHelper;
    setGroupsElementsState(groupsElementsHelper);

    // console testing
    // console.log("GroupElements = ",groupsElements);
    // console.log("GroupElementsHelper = ",groupsElementsHelper);
    // /console.log("GroupElementsState = ",groupsElementsState);
  }

  // searching using fuse.js initialize and functions
  const searchSettings = {
    keys: ['gradYear', 'name'],
    includeMatches: true,
    threshold: 0.2,
    tokenize: true,
    matchAllTokens: true,
    findAllMatches: true,
    ignoreLocation: true
  };
  let [searchFuse, setSearchFuse] = useState();
  let [justUsers, setJustUsers] = useState([]);

  // for searching
  const [searchUsersFlag, setSearchUsersFlag] = useState(false);
  let [query, setQuery] = useState('');
  let [results, setResults] = useState([]);

  // displaying search results
  let [tempElementHolder, setTempElementHolder] = useState();
  const [mainSidebarDisplay, setMainSidebarDisplay] = useState('sm:block');

  // after searching a button is shown to get back the sidebar
  const [displayBtnSidebar, setDisplayBtnSidebar] = useState('sm:hidden');
  const [displayContentWrapper, setDisplayContentWrapper] =
    useState('sm:flex-row');

  function extractUsers(myData) {
    console.log('Hello: ', myData);
    const justUsersHelper = [];
    myData.forEach((outerObj) => {
      const userObj = outerObj[Object.keys(outerObj)[0]];
      userObj.forEach((userDataObj) => {
        // console.log("got it! ", userDataObj);
        justUsersHelper.push(userDataObj);
      });
    });
    justUsers = justUsersHelper;
    setJustUsers(justUsersHelper);
    // console.log("Got'em: ", justUsers);

    // "fuse" the thing
    const fuse = new Fuse(justUsers, searchSettings);
    searchFuse = fuse;
    setSearchFuse(fuse);
    console.log('YAAAY = ', searchFuse);
  }

  // searching functions :)
  function searchUsers(query) {
    return searchFuse.search(query);
  }

  function handleKeyPress(e) {
    // console.log("Rush EEE: ", e.key);
    if (e.key === 'Enter') {
      // Call handleSearch() when the Enter key is pressed
      // console.log("Entered, Now Go");
      handleSearch(e.target);
    }
  }

  function handleSearch(inputElm) {
    // console.log("Elm = ", inputElm);
    tempElementHolder = inputElm;
    setTempElementHolder(inputElm);
    // console.log("Val = ",inputElm.value);
    if (
      inputElm.value != '' &&
      inputElm.value != null &&
      inputElm.value != undefined
    ) {
      setMainSidebarDisplay('sm:hidden');
      setDisplayBtnSidebar('sm:block');

      // change the layout of content wrapper from flex to grid
      setDisplayContentWrapper('sm:flex-col');

      // do the searching magic
      setSearchUsersFlag(true);
      query = inputElm.value;
      setQuery(inputElm.value);
      results = searchUsers(query);
      setResults(searchUsers(query));
      console.log('RES = ', results);
      showSearchResults(results);
    }
  }

  function showSearchResults(showRes) {
    const groupsElementsHelper = [];
    const label =
      showRes.length > 0
        ? 'Showing Search Results Below...'
        : 'No Results Were Found...';
    groupsElementsHelper.push(
      <>
        <h2
          key={'showResultsText'}
          className={'my-[0.83em] font-bold mt-[50px]'}
          id={'group_label'}
        >
          {label}
        </h2>
        <div
          key={'resultItem'}
          id={'group_content'}
          className="grid min-[350px]:grid-cols-2 md:flex md:flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all"
        >
          {showRes.map((fuseItem, index) => (
            <UserCard
              key={index}
              uniId={
                !Object.keys(fuseItem.item).includes('userID')
                  ? 'user' + index
                  : fuseItem.item.userID
              }
              classTitle={'user_card'}
              userPfp={
                !Object.keys(fuseItem.item).includes('userPfp')
                  ? '/images/userIconx96.png'
                  : fuseItem.item.userPfp
              }
              userName={
                !Object.keys(fuseItem.item).includes('name')
                  ? 'nameless_user'
                  : fuseItem.item.name
              }
            />
          ))}
        </div>
      </>
    );

    groupsElementsState = groupsElementsHelper;
    setGroupsElementsState(groupsElementsHelper);
    // console.log("GroupElementsHelper = ",groupsElementsHelper);
  }

  // // Filter Options Sorting Functions

  // //Helpful Functions
  function removeDuplicates(arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }

  function reloadContent(sortedData) {
    // update the usercardData and its elements
    userCardData = sortedData;
    setUserCardData(sortedData);

    // call creating tags data & usersData Elements
    createUsersData(userCardData);
    createTagsData(userCardData);

    setTimeout(() => {
      // re-declaring variables
      reDeclareVariables();

      // hiding indicator
      const group_indicator = indicatorRef.current;
      group_indicator.style.display = 'none';

      // hiding highlighter
      highlightTag('');
    }, 300);
  }

  // //Ascending Order By Year
  function sortUsersByAscendingYear(data) {
    const sortedData = data;

    // reload necessary contents of the page
    reloadContent(sortedData);
  }

  // //Descending Order By Year
  function sortUsersByDescendingYear(data) {
    const oldTagsData = [];
    for (let i = 0; i < data.length; i++) {
      oldTagsData.push(Object.keys(data[i])[0]);
    }
    const sortedData = [];
    const sortedTagsData = quicksort_descending(oldTagsData);

    // rearrange the data structure
    for (let t = 0; t < sortedTagsData.length; t++) {
      const tempData = {};
      const matchingValIndex = oldTagsData.indexOf(sortedTagsData[t]);
      const tempTag = sortedTagsData[t];
      tempData[sortedTagsData[t]] = data[matchingValIndex][tempTag];
      sortedData.push(tempData);
    }

    // reload necessary contents of the page
    reloadContent(sortedData);
  }

  function quicksort_descending(arr) {
    if (arr.length <= 1) {
      return arr;
    } else {
      const pivot = arr[0];
      const left = [];
      const right = [];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i].localeCompare(pivot) >= 0) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }

      return [
        ...quicksort_descending(left),
        pivot,
        ...quicksort_descending(right)
      ];
    }
  }

  function sortUsersAlphabetical(data, filterBy) {
    const allUsersData = [];
    const usersNameData = [];
    data.forEach((item) => {
      const keyName = Object.keys(item)[0];
      item[keyName].forEach((userInfo) => {
        allUsersData.push(userInfo);
        usersNameData.push(userInfo.name);
      });
    });

    const namesData = [];
    for (let n = 0; n < usersNameData.length; n++) {
      const splitName = usersNameData[n].split(' ');
      if (filterBy == 'fn') {
        const firstName = splitName[0];
        namesData.push(firstName);
      } else {
        const lastName = splitName[splitName.length - 1];
        namesData.push(lastName);
      }
    }

    const sortedNamesData = quickSort_alphabetical(namesData);
    const noDuplisSortedNamesData = removeDuplicates(sortedNamesData);
    // /console.log("Sorted Alphabetical Names Only: ", sortedNamesData);
    // /console.log("Sorted Alphabetical Names Only Without Duplicates: ", noDuplisSortedNamesData);

    const sortedData = [];

    noDuplisSortedNamesData.forEach((name, _index) => {
      // /console.log("Checking: ", name, index);
      const tempData = {};
      const tempKey = name.charAt(0);
      const tempVal = [];
      allUsersData.forEach((user) => {
        // /console.log("Condition Says: ", user.name, "  ?has? ", name, (user.name).includes(name));
        // need to get the user that has the same last name as name, not more not less
        if (user.name.indexOf(name) > -1) {
          tempVal.push(user);
        }
      });
      // /console.log("Set Is made: ");
      // /console.log("Key = ", tempKey, " : Value = ", tempVal);

      // check if key exists for different names starting with the same letter
      if (sortedData.hasOwnProperty(tempKey)) {
        // /console.log("Already Exists key, so add to the value");
        const combinedUsers = tempData[tempKey].concat(tempVal);
        // /console.log("Combined: ", combinedUsers);
        tempData[tempKey] = combinedUsers;
      } else {
        // /console.log("Not There, so make a new key");
        tempData[tempKey] = tempVal;
      }
      sortedData.push(tempData);
    });

    // console checks
    // /console.log("Sorting Alphabetical Stufffff!!!!: ");
    // /console.log(sortedData);

    // reload necessary contents of the page
    reloadContent(sortedData);
  }
  function quickSort_alphabetical(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i].localeCompare(pivot) < 0) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return quickSort_alphabetical(left).concat(
      pivot,
      quickSort_alphabetical(right)
    );
  }

  // Js Functions
  // Toggle Filter by either clicking on image or document
  const [filterShowCss, setFilterShowCss] = useState('hidden');

  const toggleFilter = (elm: EventTarget) => {
    console.log('LOOKIE: ', elm);

    if (elm.id == 'filterSortIcon') {
      // // console.log("YAAAAY");
      if (filterShowCss == 'hidden') {
        setFilterShowCss('block');
      } else {
        setFilterShowCss('hidden');
      }
    } else {
      setFilterShowCss('hidden');
    }

    // After Searhing Sidebar Button Toggle
    if (elm.id == 'btn_sidebar') {
      // console.log("ALERT: Sidebar Showing Button Clicked!");

      // change the layout of content wrapper from flex to grid
      setDisplayContentWrapper('sm:flex-row');

      setMainSidebarDisplay('sm:block');
      setDisplayBtnSidebar('sm:hidden');

      // check search flag
      if (searchUsersFlag) {
        setSearchUsersFlag(false);
        // call creating tags data & usersData Elements
        createUsersData(userCardData);
        createTagsData(userCardData);
        setTimeout(() => {
          // re-declaring variables
          reDeclareVariables();

          // hiding indicator
          const group_indicator = indicatorRef.current;
          group_indicator.style.display = 'none';

          // hiding highlighter
          highlightTag('');
        }, 300);
      }

      // clear search input value
      // //console.log("Yo: ",tempElementHolder);
      if (tempElementHolder) {
        tempElementHolder.value = '';
      }
    }

    // Mobile Sidebar Button Toggle
    if (elm.id == 'mobile_btn_sidebar') {
      displayMobileBtnSidebar = 'hidden';
      setDisplayMobileBtnSidebar('hidden');
      showMobileSideBar();
    }

    // Mobile Sidebar Close Button Toggle
    if (elm.id == 'close_mobile_btn_sidebar') {
      displayMobileBtnSidebar = 'block';
      setDisplayMobileBtnSidebar('block');
      showMobileSideBar();
    }

    // When PageUpDownBtn is clicked it clicks it on the "path" tag not its
    if (elm.id == 'pageUpDownBtn') {
      // //console.log("Moving Page!!");
      pageMarkerScroll(elm);
    }
  };

  // scrolling to the top or the bottom of the page
  const [pageMarkerStatus, setPageMarkerStatus] = useState('pg_down');
  const [pageMarkerBtnDir, setPageMarkerBtnDir] = useState('scale-y-100');
  function pageMarkerScroll(_elm) {
    if (pageMarkerStatus == 'pg_down') {
      // /console.log("FullHeight Scrolling!!! ==== ", fullHeight);
      window.scrollTo(0, fullHeight);
      setPageMarkerBtnDir('-scale-y-100');
      setPageMarkerStatus('pg_up');
    } else {
      window.scrollTo(0, 0);
      setPageMarkerBtnDir('scale-y-100');
      setPageMarkerStatus('pg_down');
    }

    // //move indicator
    // if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
    //     var moveToElm;
    //     for(let t=0; t < group_tags.length; t++){
    //         if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
    //             // moveTagYPos = group_tags[t].offsetTop;
    //             moveToElm = group_tags[t];
    //             // console.log("Move to elm = ", moveToElm);
    //             // // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
    //             // // console.log("Checking Other Properties: ", group_tags[t].marginTop);
    //         }
    //     }
    //     // // console.log(changeIndicatorFlag);
    //     moveIndicator(moveToElm);
    // }
  }

  function filterOptionClicked(elm) {
    // console.log("ALERT: FILTER OPTION SELECTED = ", elm);

    // change the layout of content wrapper from flex to grid
    setDisplayContentWrapper('sm:flex-row');

    setMainSidebarDisplay('sm:block');
    setDisplayBtnSidebar('sm:hidden');

    // check search flag
    if (searchUsersFlag) {
      setSearchUsersFlag(false);
      // call creating tags data & usersData Elements
      createUsersData(userCardData);
      createTagsData(userCardData);
      setTimeout(() => {
        // re-declaring variables
        reDeclareVariables();

        // hiding indicator
        const group_indicator = indicatorRef.current;
        group_indicator.style.display = 'none';

        // hiding highlighter
        highlightTag('');
      }, 300);
    }

    // clear search input value
    // //console.log("Yo: ",tempElementHolder);
    if (tempElementHolder) {
      tempElementHolder.value = '';
    }

    // check for the option clicked:
    if (elm.id == 'years_descending') {
      sortUsersByDescendingYear(staticUserCardData);
    } else if (elm.id == 'years_ascending') {
      sortUsersByAscendingYear(staticUserCardData);
    } else if (elm.id == 'alphabetical_ln') {
      sortUsersAlphabetical(staticUserCardData, 'ln');
    } else if (elm.id == 'alphabetical_fn') {
      sortUsersAlphabetical(staticUserCardData, 'fn');
    }
  }

  // // Tag Clicked Logic
  const groupTagsClick = (elm) => {
    // // console.log("No WAYYYY THIS WORKEDDDDD!!!!!");
    // // console.log(elm, elm.innerHTML);
    if (elm.id == 'group_tags') {
      // // console.log("YOU SHALL PASSSSSS");
      showGroup(elm);
    }

    if (elm.id == 'group_mobile_tags') {
      // // console.log("YOU SHALL PASSSSSS");
      showGroup(elm);
    }
  };

  function showGroup(group) {
    const group_tag_clicked = group;
    const group_labels = allGroupLabel;
    // scroll page to label
    let scrollLabelYPos = 0;
    let group_label_clicked = null;
    for (let i = 0; i < group_labels.length; i++) {
      if (group_tag_clicked.innerHTML == group_labels[i].innerHTML) {
        scrollLabelYPos = scrollPosOfElement(group_labels[i]);
        // **alt way
        group_label_clicked = group_labels[i];
        break;
      }
    }
    // Special Case #1: Set new currentGroupLabel
    // // console.log("Special Case #2 Check: ", nextScrollGroupLabel, " = ", group_label_clicked);
    currentGroupLabel = group_label_clicked;
    setCurrentGroupLabel(group_label_clicked);
    // Way #1:
    window.scrollTo(0, scrollLabelYPos);
    // alt way **
    // group_label_clicked.scrollIntoView();
    // scroll indicator to tag clicked
    // var moveTagYPos = group_tag_clicked.offsetTop;
    const moveToElm = group_tag_clicked;
    moveIndicator(moveToElm);
  }

  // / Scroll Logic //
  // Global Variables
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const indicatorBorderSize = 28.8;

  let [group_tags, setGroup_tags] = useState([]);
  var [fullHeight, setFullHeight] = useState(0);
  let [footerHeight, setFooterHeight] = useState(0);
  let [allGroupContent, setAllGroupContent] = useState([]);
  var [allGroupLabel, setAllGroupLabel] = useState([]);
  var [currentGroupLabel, setCurrentGroupLabel] = useState(null);

  // Change indicator Global Vars
  let [changeIndicatorFlag, setChangeIndicatorFlag] = useState(false);
  const changeScreenWidth = 1286;
  let [tagText, setTagText] = useState('');

  // //Better JS LOGIC
  // Window On Load Stuff
  useEffect(() => {
    // This code will run only once when the component mounts
    // /console.log("Component mounted");

    // call data setup function
    storeAlumsData();
  });

  // this function is used for dynamic changes to the page (re-render)
  function reDeclareVariables() {
    // console.log("RE declaring...");
    // // console.log(changeScreenWidth);
    currentGroupLabel = null;
    setCurrentGroupLabel(null);

    changeIndicator();

    group_tags = filterGroupsRef.current.children;
    setGroup_tags(filterGroupsRef.current.children);
    // //console.log(window.document.body.childNodes[0].childNodes[0].childNodes[3].offsetHeight);
    fullHeight = window.document.body.offsetHeight;
    setFullHeight(window.document.body.offsetHeight);
    footerHeight =
      window.document.body.childNodes[0].childNodes[0].childNodes[3]
        .offsetHeight;
    setFooterHeight(
      window.document.body.childNodes[0].childNodes[0].childNodes[3]
        .offsetHeight
    );
    // console.log("FullLLLLLL-Height = ", fullHeight, footerHeight);
    // allGroupContent = groupWrapperRef.current.children;
    const allGroupContentHelper = groupWrapperRef.current.children;
    allGroupContent = allGroupContentHelper;
    setAllGroupContent(allGroupContentHelper);
    // /console.log("AllGroupContent: ",allGroupContent, allGroupContentHelper);
    const allGroupLabelHelper = [];
    for (let i = 0; i < allGroupContent.length; i++) {
      // /console.log(allGroupContent[i].id);
      if (allGroupContent[i].id == 'group_label') {
        allGroupLabelHelper.push(allGroupContent[i]);
      }
    }
    allGroupLabel = allGroupLabelHelper;
    setAllGroupLabel(allGroupLabelHelper);

    // currentGroupLabel = allGroupLabel[0];
    // setCurrentGroupLabel(allGroupLabel[0]);

    // console checks
    // /console.log(allGroupLabel);
    // /console.log("group_tags: ", group_tags);
  }

  function moveIndicator(moveToElm) {
    // additional logic to align the middle of indicator and tag
    // hard coded values!!
    const borderSize_group_indicator = indicatorBorderSize;
    const group_indicator = indicatorRef.current;

    // Is the indicator changed???
    if (changeIndicatorFlag) {
      // /console.log("Highlighter Time!!");
      group_indicator.style.display = 'none';
      highlightTag(moveToElm);
    } else {
      // /console.log("group_indicator = ", group_indicator);
      highlightTag('');
      const moveToTag = moveToElm;
      // /console.log(moveToTag);
      const moveMarginPos =
        moveToTag.getBoundingClientRect().top +
        Math.abs(
          moveToTag.getBoundingClientRect().height / 2 -
            borderSize_group_indicator / 2
        );
      // /console.log("Moving Indicator to: ",moveMarginPos);
      // Move indicator the amount
      group_indicator.style.display = 'block';
      group_indicator.style.marginTop = moveMarginPos + 'px';
    }
  }
  function scrollPosOfElement(elm) {
    let posValue = 0;
    if (elm == '' || elm == undefined || elm == null) {
      posValue = -1;
      return posValue;
    } else {
      const style = elm.currentStyle || window.getComputedStyle(elm);
      posValue = elm.offsetTop - parseInt(style.marginTop) / 2;
      // /console.log("ScrollPosOfElement = ", posValue);
      return posValue;
    }
  }
  function findClosest(posArr) {
    const arr = posArr;
    const goal = window.scrollY;
    const closest = arr.reduce((prev, curr) => {
      return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
    });
    // console.log(closest);
    return closest;
  }
  function scrollChange(directionScroll) {
    const labelPosList = [];
    for (let i = 0; i < allGroupLabel.length; i++) {
      labelPosList.push(scrollPosOfElement(allGroupLabel[i]));
    }
    // /console.log("All Pos: ", labelPosList);
    // /console.log(currentGroupLabel);
    let reducedPosList = [];
    let closestLabelPos = 0;
    const currentLabelPos = scrollPosOfElement(currentGroupLabel);
    // /console.log("POS OF CURRENT LABEL: ", currentLabelPos);
    if (directionScroll == 'down') {
      // /console.log("Going DOWN");
      var nextIndex = labelPosList.indexOf(currentLabelPos) + 1;
      // /console.log("HUH? ", nextIndex);
      if (nextIndex < labelPosList.length - 1) {
        reducedPosList = labelPosList.slice(nextIndex);
        closestLabelPos = findClosest(reducedPosList);
        // /console.log(reducedPosList, closestLabelPos);
        if (window.scrollY >= closestLabelPos) {
          // /console.log("Hit");
          var labelHit = allGroupLabel[labelPosList.indexOf(closestLabelPos)];
          currentGroupLabel = labelHit;
          setCurrentGroupLabel(labelHit);
          // /console.log("Label Hit, so changing current: ", currentGroupLabel);

          // move indicator
          if (
            currentGroupLabel != '' &&
            currentGroupLabel != null &&
            currentGroupLabel != undefined
          ) {
            var moveToElm;
            for (let t = 0; t < group_tags.length; t++) {
              if (group_tags[t].innerHTML == currentGroupLabel.innerHTML) {
                // moveTagYPos = group_tags[t].offsetTop;
                moveToElm = group_tags[t];
                // /console.log("Move to elm = ", moveToElm);
                // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                // console.log("Checking Other Properties: ", group_tags[t].marginTop);
              }
            }
            moveIndicator(moveToElm);
          }
        }
      }
    } else {
      // /console.log("Going UP");
      var nextIndex = labelPosList.indexOf(currentLabelPos);
      // // console.log(nextIndex);
      if (nextIndex > 0) {
        reducedPosList = labelPosList.slice(
          0,
          labelPosList.indexOf(currentLabelPos)
        );
        closestLabelPos = findClosest(reducedPosList);
        // // console.log(reducedPosList);
        if (window.scrollY <= closestLabelPos) {
          // // console.log("Boom");
          var labelHit = allGroupLabel[labelPosList.indexOf(closestLabelPos)];
          currentGroupLabel = labelHit;
          setCurrentGroupLabel(labelHit);

          // move indicator
          if (
            currentGroupLabel != '' &&
            currentGroupLabel != null &&
            currentGroupLabel != undefined
          ) {
            var moveToElm;
            for (let t = 0; t < group_tags.length; t++) {
              if (group_tags[t].innerHTML == currentGroupLabel.innerHTML) {
                // moveTagYPos = group_tags[t].offsetTop;
                moveToElm = group_tags[t];
                // console.log("Move to elm = ", moveToElm);
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
    const currentScrollPos = window.pageYOffset;
    let scrollWay;
    if (prevScrollPos > currentScrollPos) {
      scrollWay = 'up';
    } else if (prevScrollPos < currentScrollPos) {
      scrollWay = 'down';
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

    window.addEventListener('scroll', onScroll);

    return function unMount() {
      window.removeEventListener('scroll', onScroll);
    };
  });

  useEffect(function mount() {
    // // console.log("IN useEffect | Current Scroll Val = BROWWWWWW", ", Previous Scroll Val = ", prevScrollPos);
    function onChangeScreenSize() {
      changeIndicator();
    }

    window.addEventListener('resize', onChangeScreenSize);

    return function unMount() {
      window.removeEventListener('resize', onChangeScreenSize);
    };
  });

  function changeIndicator() {
    // full height and other heights changes on resize
    fullHeight = window.document.body.offsetHeight;
    setFullHeight(window.document.body.offsetHeight);
    footerHeight =
      window.document.body.childNodes[0].childNodes[0].childNodes[3]
        .offsetHeight;
    setFooterHeight(
      window.document.body.childNodes[0].childNodes[0].childNodes[3]
        .offsetHeight
    );
    const pageMarker = pageUpDownBtnRef.current;
    if (pageMarker == null) return;
    pageMarker.style.marginBottom = footerHeight + 10 + 'px';
    // console.log("Full Height From ChangeIndicator Func = ", fullHeight, footerHeight);

    const screenSizeW = window.innerWidth;
    // // console.log(screenSizeW);
    if (screenSizeW <= changeScreenWidth) {
      // /console.log("Screen changed");
      changeIndicatorFlag = true;
      setChangeIndicatorFlag(true);

      // //Update Group Tags Reference
      // group_tags = filterGroupsMobileRef.current.children;
      // setGroup_tags(filterGroupsMobileRef.current.children);
      // console.log("Updated Tags: ",group_tags);
    } else {
      // /console.log("Screen full");
      changeIndicatorFlag = false;
      setChangeIndicatorFlag(false);

      // Update Group Tags Reference
      group_tags = filterGroupsRef.current.children;
      setGroup_tags(filterGroupsRef.current.children);
      // /console.log("Updated Tags: ",group_tags);
    }

    // check for changing sidebar for mobile
    if (screenSizeW <= 640) {
      mobileSidebarFlag = true;
      setMobileSidebarFlag(true);
      if (displayMobileSidebar != 'block') {
        displayMobileBtnSidebar = 'block';
        setDisplayMobileBtnSidebar('block');
      }
    } else {
      mobileSidebarFlag = false;
      setMobileSidebarFlag(false);
      displayMobileSidebar = 'hidden';
      setDisplayMobileSidebar('hidden');
      displayMobileBtnSidebar = 'hidden';
      setDisplayMobileBtnSidebar('hidden');
    }

    // move indicator
    if (
      currentGroupLabel != '' &&
      currentGroupLabel != null &&
      currentGroupLabel != undefined
    ) {
      let moveToElm;
      for (let t = 0; t < group_tags.length; t++) {
        if (group_tags[t].innerHTML == currentGroupLabel.innerHTML) {
          // moveTagYPos = group_tags[t].offsetTop;
          moveToElm = group_tags[t];
          // console.log("Move to elm = ", moveToElm);
          // // console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
          // // console.log("Checking Other Properties: ", group_tags[t].marginTop);
        }
      }
      // // console.log(changeIndicatorFlag);
      moveIndicator(moveToElm);
    }
  }

  function highlightTag(elm) {
    const tagElm = elm;
    // console.log("HIGHLIGHT TAAAAAAAAAAG");
    // console.log(tagElm.style);
    if (tagElm != '') {
      // console.log("Highlighting");
      tagText = tagElm.innerHTML;
      setTagText(tagElm.innerHTML);
    } else {
      // console.log("De-Highlighting");
      tagText = '';
      setTagText('');
    }
  }

  // /MOBILE FUNCTIONS HERE
  // button click to show sidebar
  var [displayMobileSidebar, setDisplayMobileSidebar] = useState('hidden');
  var [mobileSidebarFlag, setMobileSidebarFlag] = useState(false);
  var [displayMobileBtnSidebar, setDisplayMobileBtnSidebar] =
    useState('hidden');
  function showMobileSideBar() {
    // /console.log("SHOW SIDEBAR IS CALLED!!!");
    if (displayMobileSidebar == 'block') {
      displayMobileSidebar = 'hidden';
      setDisplayMobileSidebar('hidden');
    } else {
      displayMobileSidebar = 'block';
      setDisplayMobileSidebar('block');
    }
  }

  // When clicking on a user from classmates page call in a backend request
  function checkUserClicked(clickedElm) {
    console.log('I was Clicked: ', clickedElm);
    if (clickedElm.id == 'group_content') {
    } else if (clickedElm.title == 'user_card') {
      callUserProfile(clickedElm);
    } else {
      console.log('else...');
      let correctParent = clickedElm;
      console.log(correctParent.title, clickedElm.tagName);
      while (correctParent.title != 'user_card') {
        correctParent = correctParent.parentElement;
        console.log('Correct Parent = ', correctParent);
      }
      callUserProfile(correctParent);
    }
  }
  function callUserProfile(user) {
    console.log('Got the right parent = ', user);

    router.push(
      {
        pathname: '/profile',
        query: { message: user.id }
      },
      '/profile'
    );
  }

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
        className={`grid sm:flex ${displayContentWrapper}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFilter(e.target);
        }}
      >
        <div
          id="pageUpDownBtnWrapper"
          ref={pageUpDownBtnRef}
          className={
            'z-[100] fixed text-3xl mb-[78px] ml-0 mr-[10px] mt-0 right-0 bottom-0'
          }
        >
          <BsArrowDownCircleFill
            id="pageUpDownBtn"
            className={pageMarkerBtnDir}
            onClick={(e) => {
              e.stopPropagation();
              // //console.log("clicked: ", e.target.tagName);
              // when clicking on react icons the clicked elment can be an SVG tag or PATH tag (child of SVG)
              if (e.target.tagName == 'path') {
                toggleFilter(e.target.parentElement);
              } else if (e.target.tagName == 'svg') {
                toggleFilter(e.target);
              }
            }}
          />
        </div>
        <div id="siderbar_wrapper">
          <button
            id="btn_sidebar"
            className={`z-[100] ${displayBtnSidebar} hidden relative text-white bg-black hover:bg-gray-700 m-[5px] p-[10px] w-fit h-fit`}
          >
            ☰ Show All
          </button>
          <div
            id="sidebar_content"
            className={`${mainSidebarDisplay} hidden sticky top-0 bg-[rgba(166,22,25,1)] shadow-[0_4px_30px_rgba(0,0,0,0.75)] flex flex-row`}
          >
            <div
              id="group_indicator"
              ref={indicatorRef}
              className={
                'z-[20] absolute mt-[12px] border-[calc(25px_*_0.6)] left-0 top-0 w-0 h-0 ml-[7.5px] border-r-transparent border-y-transparent border-solid border-black hidden'
              }
            />
            <FilterGroups
              id={'group_tags'}
              tags={filterTagsData}
              onTagClick={groupTagsClick}
              tagText={tagText}
              ref={filterGroupsRef}
            />
          </div>
          <button
            id="mobile_btn_sidebar"
            className={`${displayMobileBtnSidebar} sticky text-white bg-black hover:bg-gray-700 m-[5px] p-[10px] w-fit h-fit`}
          >
            ☰ Show Sidebar
          </button>
          <div
            id="mobile_sidebar_content"
            className={`animate-[bounce_1s_ease-in-out_1.5] ${
              mobileSidebarFlag ? displayMobileSidebar : 'hidden'
            } sticky top-0 bg-[rgba(186,22,25,1)] shadow-[0_4px_10px_rgba(0,0,0,0.75)] flex flex-col`}
          >
            <button
              id="close_mobile_btn_sidebar"
              className="font-[1000] w-fit ml-auto mr-[5px] mt-[5px] p-[5px]"
            >
              【X】
            </button>
            <FilterGroups
              id={'group_mobile_tags'}
              tags={filterTagsData}
              onTagClick={groupTagsClick}
              tagText={tagText}
              ref={filterGroupsMobileRef}
            />
          </div>
        </div>
        <div
          id="groups_wrapper"
          className={'sm:ml-[100px] sm:mr-[130px] mt-0 mb-[10%]'}
        >
          <h1
            id="header"
            className={
              'relative sm:absolute w-full left-0 underline mt-6 mb-10 text-[2em] font-extrabold text-center'
            }
          >
            Find Your Classmates
          </h1>
          <div
            id="nav_options"
            className={
              'relative sm:absolute w-[100%] sm:mt-[110px] text-[15px] flex flex-row-reverse min-[350px]:right-[7.5%] items-center min-[350px]:gap-x-4 max-[350px]:justify-between max-[350px]:px-[5px]'
            }
          >
            <div id="filter_wrapper">
              <FaSortAmountDown
                id="filterSortIcon"
                onClick={(e) => {
                  e.stopPropagation();
                  // //console.log("clicked: ", e.target.tagName);
                  // when clicking on react icons the clicked elment can be an SVG tag or PATH tag (child of SVG)
                  if (e.target.tagName == 'path') {
                    toggleFilter(e.target.parentElement);
                  } else if (e.target.tagName == 'svg') {
                    toggleFilter(e.target);
                  }
                }}
                className="w-[30px] h-[30px]"
              />
              <div
                id="filter_options_wrapper"
                onClick={(e) => {
                  filterOptionClicked(e.target);
                }}
                className={`absolute right-0 w-[60%] min-[450px]:w-[35%] max-w-[250px] mt-[10px] text-full sm:text-xl bg-[rgba(255,255,255,0.85)] rounded-[6%] border-2 border-solid border-[black] overflow-hidden max-[350px]:right-[10px] ${filterShowCss}`}
              >
                <div
                  id="years_descending"
                  className="cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]"
                >
                  Recent To Past Years
                </div>
                <div
                  id="years_ascending"
                  className="cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]"
                >
                  Past To Recent Years
                </div>
                <div
                  id="alphabetical_ln"
                  className="cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]"
                >
                  Alphabetical By Last Name
                </div>
                <div
                  id="alphabetical_fn"
                  className="cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]"
                >
                  Alphabetical By First Name
                </div>
              </div>
            </div>
            <input
              type="text"
              placeholder="🔍︎ Search Directory..."
              id="searchbar"
              className="min-[350px]:mx-2.5 mx-0 my-0 p-[5px]"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div
            id="group_content"
            className="w-fit mx-auto sm:mx-0 sm:w-auto sm:mt-[200px]"
            ref={groupWrapperRef}
            onClick={(e) => {
              e.stopPropagation();
              checkUserClicked(e.target);
            }}
          >
            {groupsElementsState}
          </div>
        </div>
      </div>
    </>
  );
}
