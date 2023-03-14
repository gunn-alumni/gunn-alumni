import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRef, useState, useEffect } from 'react';

//React-Icons Import
import { GoTriangleRight } from 'react-icons/go';
import { FaSortAmountDown } from 'react-icons/fa';
import { GiSideswipe } from 'react-icons/gi';

// User Proile Images Import
import defaultPfp from "@/../public/images/userIconx96.png";
import dylan from "@/../public/images/dylan.png";

// Custom Components
import FilterGroups from "@/components/classmates/FilterGroups";
import UserCard from '@/components/classmates/UserCard';

export default function Classmates() {
    //////////////////////////////////////////////////////////////////////////////Start of Js Code
    //React Hooks:
    const [visibleIndicator, setVisibleIndicator] = useState(false);
    const indicatorRef = useRef(null);
    const filterGroupsRef = useRef(null);
    const filterGroupsMobileRef = useRef(null);
    const groupWrapperRef = useRef(null);
    const groupRefs = useRef([]);
    groupRefs.current = [];
    const tagRefs = useRef([]);
    tagRefs.current = [];

    ///////////////////////////////////data initializers
    var [userCardData, setUserCardData] = useState([]);
    var [staticUserCardData, setStaticUserCardData] = useState([]);
    var [filterTagsData, setFilterTagsData] = useState([]);
    ////Create Elements Using Data 
    // const groupsElements: JSX.Element[] = [];
    var [groupsElementsState, setGroupsElementsState] = useState([]);

    ///////////////////////////Sorting Function Data Structures


    //////////////////////////COMPONENTS INITIAL DATA

    //Hard-Coded Data
    const dummyUserCardData = [
        {
        "2024": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            }
        ]},
        {
        "2023": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            }
        ]},
        {
        "2022": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            }
        ]},
        {
        "2021": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            },
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
              uniId: "user3",
              userPfp: dylan,
              name: "Dylan Lu"
            },
            {
              uniId: "user4",
              userPfp: defaultPfp,
              name: "Ruparel"
            }
        ]},
        {
        "2020": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2019": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2018": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2017": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2016": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2015": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2014": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
        "2013": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
            "2012": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
            "2011": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
            "2010": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]}
    ];


    //Old Data Structures
    const dummyFilterTagsData = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];
    const dummyFilterTagsDataOg = ["2013", "2012", "2011", "2010"];
    const dummyUserCardDataOg = [
        {
        "2013": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            }
        ]},
        {
            "2012": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            }
        ]},
        {
            "2011": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]},
        {
            "2010": [
            {
                uniId: "user1",
                userPfp: defaultPfp,
                name: "Jia Ruparel"
            },
            {
                uniId: "user2",
                userPfp: defaultPfp,
                name: "Veereeeeeeeeeeeeeeeeeee Ruparel"
            },
            {
                uniId: "user3",
                userPfp: dylan,
                name: "Dylan Lu"
            },
            {
                uniId: "user4",
                userPfp: defaultPfp,
                name: "Ruparel"
            }
        ]}
    ];

    function changeDataStructure(newData, fetchedFlag){
        var userCardDataHelper = [];

        if(fetchedFlag){
            var datakeys = Object.keys(newData);
            for(let i=0; i < datakeys.length; i++){
                // //console.log(datakeys[i]);
                var tempKey = datakeys[i];
                var tempData = {}
                tempData[tempKey] = newData[tempKey];
                // //console.log(tempData);
                userCardDataHelper.push(tempData);
            }
        }
        else{
            userCardDataHelper = newData;
        }
        // //console.log("HELPER DATA = ", userCardDataHelper);

        //Setting the staticUserCardData Once and for all
        staticUserCardData = userCardDataHelper;
        setStaticUserCardData(userCardDataHelper);
        //console.log("StaticuserCardData (which will act like a const) = ", staticUserCardData);

        //Define Variables
        // declareVariables();

        //initial sorted data when page loads:
        sortUsersByDescendingYear(staticUserCardData);
    }

    function storeAlumsData() {
        // //console.log("Data Calling Data!!");

        //Fetch the data
        fetch('http://localhost:4000/alums')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                //console.log("Fetched the Data: ",data);
                changeDataStructure(data, true);
            }
        })
        .catch(error => {
            // console.log(error);
            changeDataStructure(dummyUserCardData, false);
        })
    }

    // //call the data storing function
    // storeAlumsData();

    ////Tags Data Create With Fetching
    function createTagsData(inputData){
        var filterTagsDataHelper = [];
        for(let i=0; i < inputData.length; i++){
            var dataDictKeys = Object.keys(inputData[i]);
            for(let k=0; k < dataDictKeys.length; k++){
                filterTagsDataHelper.push(dataDictKeys[k]);
            }
        }
        filterTagsData = filterTagsDataHelper;
        setFilterTagsData(filterTagsDataHelper);
        //console.log("Dummy Filter Tag Data = ", filterTagsData);
    }
    
    //New code with fetching
    function createUsersData(usersData){
        var groupsElementsHelper  = [];
        // //console.log("Creating Elements: ", usersData);
        usersData.forEach((item, index)=>{
            const groupTagName = Object.keys(item)[0];
            // groupsElements.push(
            //     <>
            //         <h2 key={index} className={`my-[0.83em] font-bold ${index < 1 ? "mt-[50px]" : "mt-[75px]"}`} id={"group_label"}>{groupTagName}</h2>
            //         <div key={groupTagName} id={"group_content"} className="grid sm:grid-cols-2 md:flex md:flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
            //             {item[groupTagName].map((data, i) => (
            //                 <UserCard
            //                     key={i}
            //                     uniId={(Object.keys(data).indexOf("uniId") < 0)? ("user"+i) : data.uniId}
            //                     userPfp={(Object.keys(data).indexOf("userPfp") < 0)? defaultPfp : data.userPfp}
            //                     userName={(Object.keys(data).indexOf("name") < 0)? "nameless_user" : data.name}
            //                 />
            //             ))}
            //         </div>
            //     </>
            // )
            groupsElementsHelper.push(
                <>
                    <h2 key={index} className={`my-[0.83em] font-bold ${index < 1 ? "mt-[50px]" : "mt-[75px]"}`} id={"group_label"}>{groupTagName}</h2>
                    <div key={groupTagName} id={"group_content"} className="grid min-[350px]:grid-cols-2 md:flex md:flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
                        {item[groupTagName].map((data, i) => (
                            <UserCard
                                key={i}
                                uniId={(Object.keys(data).indexOf("uniId") < 0)? ("user"+i) : data.uniId}
                                userPfp={(Object.keys(data).indexOf("userPfp") < 0)? defaultPfp : data.userPfp}
                                userName={(Object.keys(data).indexOf("name") < 0)? "nameless_user" : data.name}
                            />
                        ))}
                    </div>
                </>
            )
        });
        
        
        groupsElementsState = groupsElementsHelper;
        setGroupsElementsState(groupsElementsHelper);


        //console testing
        // //console.log("GroupElements = ",groupsElements);
        // //console.log("GroupElementsHelper = ",groupsElementsHelper);
        //console.log("GroupElementsState = ",groupsElementsState);
    }

    ////////////////////////Old Code!!!!
    // userCardData.forEach((item, index)=>{
    //     //console.log("CALLING THIS FUNC:::::: YEAAAAAHHAHAHAHAAHHA");
    //     const groupTagName = Object.keys(item)[0];
    //     groupsElements.push(
    //         <>
    //             <h2 key={index} className={`my-[0.83em] font-bold ${index < 1 ? "mt-[50px]" : "mt-[75px]"}`} id={"group_label"}>{groupTagName}</h2>
    //             <div key={groupTagName} id={"group_content"} className="grid grid-cols-2 md:flex md:flex-row gap-x-[75px] gap-y-[25px] flex-wrap overflow-x-hidden break-all">
    //                 {item[groupTagName].map((data, i) => (
    //                     <UserCard
    //                         key={i}
    //                         uniId={(Object.keys(data).indexOf("uniId") < 0)? ("user"+i) : data.uniId}
    //                         userPfp={(Object.keys(data).indexOf("userPfp") < 0)? defaultPfp : data.userPfp}
    //                         userName={(Object.keys(data).indexOf("name") < 0)? "nameless_user" : data.name}
    //                     />
    //                 ))}
    //             </div>
    //         </>
    //     )
    // });


    
    ////////////////////////////////////////////////////// Filter Options Data Constructors: 
    
    /////Helpful Functions
    function removeDuplicates(arr) {
        return arr.filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
    }

    function reloadContent(sortedData){
        //console.log("reloading...");
        //update the usercardData and its elements
        userCardData = sortedData;
        setUserCardData(sortedData);
        // //console.log("Changing userCardData = ", userCardData);

        //call creating tags data & usersData Elements
        createUsersData(userCardData);
        createTagsData(userCardData);

        setTimeout(() => {
            //re-declaring variables 
            reDeclareVariables();

            //hiding indicator 
            var group_indicator = indicatorRef.current;
            group_indicator.style.display = "none";

            //hiding highlighter
            highlightTag("");
        }, 300);
    }


    /////////Ascending Order By Year
    function sortUsersByAscendingYear(data){
        //console.log("Let The ASCENDING Sorting Begin....");
        var sortedData = data;

        //console checks
        //console.log("Sorting Ascending Stufffff!!!!: ");
        //console.log(sortedData);

        //reload necessary contents of the page
        reloadContent(sortedData);
    }

    /////////Descending Order By Year
    function sortUsersByDescendingYear(data){
        //console.log("Let The DESCENDING Sorting Begin....");
        var oldTagsData = [];
        for(let i=0; i < data.length; i++){
            oldTagsData.push(Object.keys(data[i])[0]);
        }
        var sortedData = [];
        var sortedTagsData = quicksort_descending(oldTagsData);

        //rearrange the data structure
        for(let t=0; t < sortedTagsData.length; t++){
            var tempData = {};
            var matchingValIndex = oldTagsData.indexOf(sortedTagsData[t]);
            var tempTag = sortedTagsData[t];
            // //console.log(data[matchingValIndex]);    
            // //console.log(sortedTagsData[t]);
            tempData[sortedTagsData[t]] = data[matchingValIndex][tempTag];
            // //console.log("Checking: ", tempData);
            sortedData.push(tempData);
        }

        //console checks
        // //console.log("Sorting Descending Stufffff!!!!: ", sortedTagsData);
        // //console.log(sortedData);

        //reload necessary contents of the page
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
      
          return [...quicksort_descending(left), pivot, ...quicksort_descending(right)];
        }
    }
    

    function sortUsersAlphabetical(data, filterBy){
        //console.log("Let the ALPHABETICAL Sorting Begin....");
        var allUsersData = [];
        var usersNameData = [];
        data.forEach((item) => {
            //console.log(item);
            var keyName = Object.keys(item)[0];
            item[keyName].forEach((userInfo) => {
                allUsersData.push(userInfo);
                usersNameData.push(userInfo.name);
            });
        });
        //console.log("ALL USERS GOT IT | ", allUsersData, usersNameData);

        var namesData = [];
        for(let n=0; n < usersNameData.length; n++){
            var splitName = usersNameData[n].split(" ");
            if(filterBy == "fn"){
                var firstName = splitName[0];
                namesData.push(firstName);
            }
            else{
                var lastName = splitName[splitName.length - 1];
                namesData.push(lastName);
            }
        }

        var sortedNamesData = quickSort_alphabetical(namesData);
        var noDuplisSortedNamesData = removeDuplicates(sortedNamesData);
        //console.log("Sorted Alphabetical Names Only: ", sortedNamesData);
        //console.log("Sorted Alphabetical Names Only Without Duplicates: ", noDuplisSortedNamesData);

        var sortedData = [];

        noDuplisSortedNamesData.forEach((name, index) => {
            //console.log("Checking: ", name, index);
            var tempData = {};
            var tempKey = name.charAt(0);
            var tempVal = [];
            allUsersData.forEach((user) => {
                //console.log("Condition Says: ", user.name, "  ?has? ", name, (user.name).includes(name));
                //need to get the user that has the same last name as name, not more not less
                if((user.name).indexOf(name) > -1){
                    tempVal.push(user); 
                }
            });
            //console.log("Set Is made: ");
            //console.log("Key = ", tempKey, " : Value = ", tempVal);

            //check if key exists for different names starting with the same letter
            if(sortedData.hasOwnProperty(tempKey)){
                //console.log("Already Exists key, so add to the value");
                var combinedUsers = tempData[tempKey].concat(tempVal);
                //console.log("Combined: ", combinedUsers);
                tempData[tempKey] = combinedUsers;
            }
            else{
                //console.log("Not There, so make a new key");
                tempData[tempKey] = tempVal;
            }
            sortedData.push(tempData);


        });

        //console checks
        //console.log("Sorting Alphabetical Stufffff!!!!: ");
        //console.log(sortedData);
        
        //reload necessary contents of the page
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
      
        return quickSort_alphabetical(left).concat(pivot, quickSort_alphabetical(right));
    }











    ////////////////////////////////////////////////// All Variables After DATAs Has Been Initialized///////////////////////////////////////////////
    
    
    
    
    
    
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
    //     // //console.log("Ref is passed and returned");
    //     // //console.log(indicatorRef);
    // }, []);

    //Toggle Filter by either clicking on image or document
    const [filterShowCss, setFilterShowCss] = useState("hidden");

    const toggleFilter = (elm: EventTarget) => {
        //console.log("LOOKIE: ", elm.id);

        // sortUsersAlphabetical(staticUserCardData, "ln");
        // sortUsersByDescendingYear(staticUserCardData);

        if(elm.id == "filterSortIcon"){
            // // //console.log("YAAAAY");
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


        //Mobile Sidebar Button Toggle
        if(elm.id == "btn_sidebar"){
            displayBtnSidebar = "hidden";
            setDisplayBtnSidebar("hidden");
            showMobileSideBar();
        }

        //Mobile Sidebar Close Button Toggle
        if(elm.id == "close_btn_sidebar"){
            displayBtnSidebar = "block";
            setDisplayBtnSidebar("block");
            showMobileSideBar();
        }
    }
    
    function filterOptionClicked(elm){
        //console.log("ALERT: FILTER OPTION SELECTED = ", elm);
        //check for the option clicked:
        if(elm.id == "years_descending"){
            sortUsersByDescendingYear(staticUserCardData);
        }
        else if(elm.id == "years_ascending"){
            sortUsersByAscendingYear(staticUserCardData);
        }
        else if(elm.id == "alphabetical_ln"){
            sortUsersAlphabetical(staticUserCardData, "ln");
        }
        else if(elm.id == "alphabetical_fn"){
            sortUsersAlphabetical(staticUserCardData, "fn");
        }
    }

    ///////////////////////////////// Tag Clicked Logic ////////////////////////////////////////
    const groupTagsClick = (elm) => {
        // // //console.log("No WAYYYY THIS WORKEDDDDD!!!!!");
        // // //console.log(elm, elm.innerHTML);
        if(elm.id == "group_tags"){
            // // //console.log("YOU SHALL PASSSSSS");
            showGroup(elm);
        }

        if(elm.id == "group_mobile_tags"){
            // // //console.log("YOU SHALL PASSSSSS");
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
        // // //console.log("Special Case #2 Check: ", nextScrollGroupLabel, " = ", group_label_clicked);
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
        //console.log("Component mounted");

        //call data setup function
        storeAlumsData();

    }, []);

    function declareVariables(){
        //console.log("declaring...");
        // // //console.log(changeScreenWidth);
        changeIndicator();
        
        group_tags = filterGroupsRef.current.children;
        setGroup_tags(filterGroupsRef.current.children);
        // // //console.log(group_tags);
        fullHeight = window.document.body.offsetHeight;
        setFullHeight(window.document.body.offsetHeight);
        // // //console.log("FullLLLLLL-Height = ", fullHeight);
        // allGroupContent = groupWrapperRef.current.children;
        var allGroupContentHelper = groupWrapperRef.current.children;
        allGroupContent = allGroupContentHelper; 
        setAllGroupContent(allGroupContentHelper);
        //console.log("AllGroupContent: ",allGroupContent, allGroupContent.length);
        var allGroupLabelHelper = [];
        for(let i=0; i < allGroupContent.length; i++){
            if(allGroupContent[i].id == "group_label"){
                allGroupLabelHelper.push(allGroupContent[i]);
            }
        }
        allGroupLabel = allGroupLabelHelper;
        setAllGroupLabel(allGroupLabelHelper);

        // console checks
        //console.log(allGroupLabel);
        //console.log("group_tags: ", group_tags);
    }

    //this function is used for dynamic changes to the page (re-render)
    function reDeclareVariables(){
        //console.log("RE declaring...");
        // // //console.log(changeScreenWidth);
        currentGroupLabel = null;
        setCurrentGroupLabel(null);

        changeIndicator();
        
        group_tags = filterGroupsRef.current.children;
        setGroup_tags(filterGroupsRef.current.children);
        //console.log(group_tags);
        fullHeight = window.document.body.offsetHeight;
        setFullHeight(window.document.body.offsetHeight);
        //console.log("FullLLLLLL-Height = ", fullHeight);
        // allGroupContent = groupWrapperRef.current.children;
        var allGroupContentHelper = groupWrapperRef.current.children;
        allGroupContent = allGroupContentHelper; 
        setAllGroupContent(allGroupContentHelper);
        //console.log("AllGroupContent: ",allGroupContent, allGroupContentHelper);
        var allGroupLabelHelper = [];
        for(let i=0; i < allGroupContent.length; i++){
            //console.log(allGroupContent[i].id); 
            if(allGroupContent[i].id == "group_label"){
                allGroupLabelHelper.push(allGroupContent[i]);
            }
        }
        allGroupLabel = allGroupLabelHelper;
        setAllGroupLabel(allGroupLabelHelper);

        // currentGroupLabel = allGroupLabel[0];
        // setCurrentGroupLabel(allGroupLabel[0]);

        // console checks
        //console.log(allGroupLabel);
        //console.log("group_tags: ", group_tags);
    }


    function moveIndicator(moveToElm){
        //additional logic to align the middle of indicator and tag
        //hard coded values!!
        var borderSize_group_indicator = indicatorBorderSize;
        var group_indicator = indicatorRef.current;

        //Is the indicator changed???
        if(changeIndicatorFlag){
            //console.log("Highlighter Time!!");
            group_indicator.style.display = "none";
            highlightTag(moveToElm);
        }
        else{
            //console.log("group_indicator = ", group_indicator);
            highlightTag("");
            var moveToTag = moveToElm;
            //console.log(moveToTag);
            var moveMarginPos = moveToTag.getBoundingClientRect().top + (Math.abs((moveToTag.getBoundingClientRect().height / 2) - (borderSize_group_indicator / 2)))
            //console Checks for logic
            //console.log(moveToTag.getBoundingClientRect());
            //console.log(moveToTag.style.offsetTop);
            //console.log((moveToTag.getBoundingClientRect().height / 2));
            //console.log((borderSize_group_indicator / 2));
            //console.log(Math.abs((moveToTag.getBoundingClientRect().height / 2) - (borderSize_group_indicator / 2)));
            //console.log("Moving Indicator to: ",moveMarginPos);
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
            //console.log("ScrollPosOfElement = ", posValue);
            return posValue;
        }
    }
    function findClosest(posArr){
        const arr = posArr;
        const goal = window.scrollY;
        const closest = arr.reduce((prev, curr) => {
          return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
        });
        // //console.log(closest);
        return closest;   
    }
    function scrollChange(directionScroll){
        var labelPosList = [];
        for(let i=0; i < allGroupLabel.length; i++){
            labelPosList.push(scrollPosOfElement(allGroupLabel[i]));
        }
        //console.log("All Pos: ", labelPosList);
        //console.log(currentGroupLabel);
        var reducedPosList = [];
        var closestLabelPos = 0;
        var currentLabelPos = scrollPosOfElement(currentGroupLabel);
        //console.log("POS OF CURRENT LABEL: ", currentLabelPos);
        if(directionScroll == "down"){
            //console.log("Going DOWN");
            var nextIndex = labelPosList.indexOf(currentLabelPos) + 1;
            //console.log("HUH? ", nextIndex);
            if(nextIndex < labelPosList.length - 1){
                reducedPosList = labelPosList.slice(nextIndex);
                closestLabelPos = findClosest(reducedPosList);
                //console.log(reducedPosList, closestLabelPos);
                if(window.scrollY >= closestLabelPos){
                    //console.log("Hit");
                    var labelHit = allGroupLabel[labelPosList.indexOf(closestLabelPos)];
                    currentGroupLabel = labelHit;
                    setCurrentGroupLabel(labelHit);
                    //console.log("Label Hit, so changing current: ", currentGroupLabel);

                    //move indicator
                    if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
                        var moveToElm;
                        for(let t=0; t < group_tags.length; t++){
                            if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
                                // moveTagYPos = group_tags[t].offsetTop;
                                moveToElm = group_tags[t];
                                //console.log("Move to elm = ", moveToElm);
                                // //console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                                // //console.log("Checking Other Properties: ", group_tags[t].marginTop);
                            }
                        }
                        moveIndicator(moveToElm);
                    }
                }
            }
        }
        else{
            //console.log("Going UP");
            var nextIndex = labelPosList.indexOf(currentLabelPos);
            // // //console.log(nextIndex);
            if(nextIndex > 0){
                reducedPosList = labelPosList.slice(0, labelPosList.indexOf(currentLabelPos));
                closestLabelPos = findClosest(reducedPosList);
                // // //console.log(reducedPosList);
                if(window.scrollY <= closestLabelPos){
                    // // //console.log("Boom");
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
                                // //console.log("Move to elm = ", moveToElm);
                                // // //console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                                // // //console.log("Checking Other Properties: ", group_tags[t].marginTop);
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
        // // //console.log("setting current to previous: ");
        setPrevScrollPos(currentScrollPos);
        // // //console.log("IN handleScroll | Current Scroll Val = ", currentScrollPos, ", Previous Scroll Val = ", prevScrollPos);
        scrollChange(scrollWay);
    }

    useEffect(function mount() {
        // // //console.log("IN useEffect | Current Scroll Val = BROWWWWWW", ", Previous Scroll Val = ", prevScrollPos);
        function onScroll() {
          handleScroll();
        }
    
        window.addEventListener("scroll", onScroll);
    
        return function unMount() {
          window.removeEventListener("scroll", onScroll);
        };
    });

    useEffect(function mount() {
        // // //console.log("IN useEffect | Current Scroll Val = BROWWWWWW", ", Previous Scroll Val = ", prevScrollPos);
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
        // // //console.log(screenSizeW);
        if(screenSizeW <= changeScreenWidth){
            //console.log("Screen changed");
            changeIndicatorFlag = true;
            setChangeIndicatorFlag(true);

            //Update Group Tags Reference 
            group_tags = filterGroupsMobileRef.current.children;
            setGroup_tags(filterGroupsMobileRef.current.children);
            //console.log("Updated Tags: ",group_tags);

        }
        else{
            //console.log("Screen full");
            changeIndicatorFlag = false;
            setChangeIndicatorFlag(false);

            //Update Group Tags Reference 
            group_tags = filterGroupsRef.current.children;
            setGroup_tags(filterGroupsRef.current.children);
            //console.log("Updated Tags: ",group_tags);
        }

        //check for changing sidebar for mobile
        if(screenSizeW <= 640){
            mobileSidebarFlag = true;
            setMobileSidebarFlag(true);
            if(displaySidebar != "block"){
                displayBtnSidebar = "block";
                setDisplayBtnSidebar("block");
            }

        }
        else{
            mobileSidebarFlag = false;
            setMobileSidebarFlag(false);
            displaySidebar = "hidden";
            setDisplaySidebar("hidden");
            displayBtnSidebar = "hidden";
            setDisplayBtnSidebar("hidden");
        }

        // //hiding indicator 
        // var group_indicator = indicatorRef.current;
        // group_indicator.style.display = "none";

        // //hiding highlighter
        // highlightTag("");
        

        //move indicator
        if(currentGroupLabel != "" && currentGroupLabel != null && currentGroupLabel != undefined){
            var moveToElm;
            for(let t=0; t < group_tags.length; t++){
                if(group_tags[t].innerHTML == currentGroupLabel.innerHTML){
                    // moveTagYPos = group_tags[t].offsetTop;
                    moveToElm = group_tags[t];
                    // //console.log("Move to elm = ", moveToElm);
                    // // //console.log("Checking Other Properties: ", group_tags[t].getBoundingClientRect());
                    // // //console.log("Checking Other Properties: ", group_tags[t].marginTop);
                }
            }
            // // //console.log(changeIndicatorFlag);
            moveIndicator(moveToElm);   
        }
    }

    function highlightTag(elm){
        var tagElm = elm;
        // //console.log("HIGHLIGHT TAAAAAAAAAAG");
        // //console.log(tagElm.style);
        if(tagElm != ""){
            // //console.log("Highlighting");
            tagText = tagElm.innerHTML;
            setTagText(tagElm.innerHTML);
        }
        else{
            // //console.log("De-Highlighting");
            tagText = "";
            setTagText("");
        }
    }


    ////////////////MOBILE FUNCTIONS HERE
    //button click to show sidebar
    var [displaySidebar, setDisplaySidebar] = useState("hidden");
    var [mobileSidebarFlag, setMobileSidebarFlag] = useState(false);
    var [displayBtnSidebar, setDisplayBtnSidebar] = useState("hidden");
    function showMobileSideBar(){
        //console.log("SHOW SIDEBAR IS CALLED!!!");
        if(displaySidebar == "block"){
            displaySidebar = "hidden";
            setDisplaySidebar("hidden");
        }
        else{
            displaySidebar = "block";
            setDisplaySidebar("block");
        }
    }
   
   
    //////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////// END OF JS CODE
    /////////////////////////////////////////////////////////////////

  return (
    <>
        <Head>
          <title>Gunn Alumni | Classmates</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="images/titanIcon_1.png" />
        </Head>
        
        <div id="content_wrapper" className={`grid sm:flex sm:flex-row`} 
            onClick={(e) => {
                e.stopPropagation();
                toggleFilter(e.target);
            }}>
            
            <div id='siderbar_wrapper'>
                <div id='sidebar_content' className={`sm:block hidden sticky top-0 bg-[rgba(166,22,25,1)] shadow-[0_4px_30px_rgba(0,0,0,0.75)] flex flex-row`}>
                    <div id="group_indicator" ref={indicatorRef} className={`z-[20] absolute mt-[12px] border-[calc(25px_*_0.6)] left-0 top-0 w-0 h-0 ml-[7.5px] border-r-transparent border-y-transparent border-solid border-black hidden`}/>
                    <FilterGroups id={"group_tags"} tags={filterTagsData} onTagClick={groupTagsClick} tagText={tagText} ref={filterGroupsRef} />
                </div>
                <button id='btn_sidebar' className={`${displayBtnSidebar} sticky text-white bg-black hover:bg-gray-700 m-[5px] p-[10px] w-fit h-fit`}>☰ Show Sidebar</button>
                <div id='mobile_sidebar_content' className={`animate-[bounce_1s_ease-in-out_1.5] ${mobileSidebarFlag? displaySidebar : "hidden"} sticky top-0 bg-[rgba(186,22,25,1)] shadow-[0_4px_10px_rgba(0,0,0,0.75)] flex flex-col`}>
                    <button id='close_btn_sidebar' className='font-[1000] w-fit ml-auto mr-[5px] mt-[5px] p-[5px]'>【X】</button>
                    <FilterGroups id={"group_mobile_tags"} tags={filterTagsData} onTagClick={groupTagsClick} tagText={tagText} ref={filterGroupsMobileRef} />
                </div>    
            </div>
            
            <div id="groups_wrapper" className={`sm:ml-[100px] sm:mr-[130px] mt-0 mb-[10%]`}>
                <h1 id="header" className = {`relative sm:absolute w-full left-0 underline mt-6 mb-10 text-[2em] font-extrabold text-center`}>Find Your Classmates</h1>
                <div id="nav_options" className={`relative sm:absolute w-[100%] sm:mt-[110px] text-[15px] flex flex-row-reverse min-[350px]:right-[7.5%] items-center min-[350px]:gap-x-4 max-[350px]:justify-between max-[350px]:px-[5px]`}>
                    <div id="filter_wrapper">
                        <FaSortAmountDown 
                            id="filterSortIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFilter(e.target);
                                }}
                                className="w-[30px] h-[30px]"/>
                        <div id="filter_options_wrapper" 
                             onClick={(e) => {
                                filterOptionClicked(e.target);
                             }}
                             className={`absolute right-0 w-[60%] min-[450px]:w-[35%] max-w-[250px] mt-[10px] text-full sm:text-xl bg-[rgba(255,255,255,0.85)] rounded-[6%] border-2 border-solid border-[black] overflow-hidden max-[350px]:right-[10px] ${filterShowCss}`}>
                            <div id="years_descending" className='cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]'>Recent To Past Years</div>
                            <div id="years_ascending" className='cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]'>Past To Recent Years</div>
                            <div id="alphabetical_ln" className='cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]'>Alphabetical By Last Name</div>
                            <div id="alphabetical_fn" className='cursor-pointer text-center min-[450px]:px-[25px] p-[5px] hover:bg-[lightblue]'>Alphabetical By First Name</div>
                        </div>
                    </div>
                    <input
                    type="text"
                    placeholder="🔍︎ Search Directory..."
                    id="searchbar"
                    className='min-[350px]:mx-2.5 mx-0 my-0 p-[5px]'/>
                </div>
                <div id='group_content' className='w-fit mx-auto sm:mx-0 sm:w-auto sm:mt-[200px]' ref={groupWrapperRef}>
                    {groupsElementsState}
                </div>
            </div>
        </div>
    </>

  )
}