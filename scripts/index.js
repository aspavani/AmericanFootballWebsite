"use strict";

window.onload = load_teams;

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];
  

  function load_teams() {
    const teamList = document.getElementById("teamlist");
    for(let i=0; i<teams.length; i++) {

        //Create the option element and set the 
        //text and value
        let theOption = new Option(teams[i].name, teams[i].teamcode);
        teamList.appendChild(theOption);


    }
  }
  