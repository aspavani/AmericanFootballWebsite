"use strict";

window.onload = load_teams;

let teams = [
  {
    teamcode: "DAL",
    name: "Dallas Cowboys",
    locatedIn: "Arlington, TX"
  },
  {
    teamcode: "DEN",
    name: "Denver Broncos",
    locatedIn: "Denver, CO"
  },
  {
    teamcode: "HOU",
    name: "Houston Texans",
    locatedIn: "Houston, TX"
  },
  {
    teamcode: "KAN",
    name: "Kansas City Chiefs",
    locatedIn: "Kansas City, MO"
  }
];


function load_teams() {
  const teamList = document.getElementById("teamlist");

  //Create option element with text "Select a team" and value " "
  let theOptionN = new Option("Select a team", "");
  teamList.appendChild(theOptionN);

  //Load teams
  for (let i = 0; i < teams.length; i++) {

    //Create the option element and set the 
    //text and value
    let theOption = new Option(teams[i].name, teams[i].teamcode);
    teamList.appendChild(theOption);

  }

    const enterbutton = document.getElementById("enterbutton");
    enterbutton.onclick = onEnterButtonClicked;
  
}

function ftbyname(arrayele) {
  const teamList = document.getElementById("teamlist");
  let selected_team = teamlist.value;

  if (arrayele.teamcode == selected_team) {
    console.log("Here");
    return true;
  }
  else
    return false;

}


function onEnterButtonClicked() {

  let msgpara_ele = document.getElementById("msgpara");
  let div1 = document.getElementById("div1");

  if (msgpara_ele)
    div1.removeChild(msgpara_ele);

  const teamList = document.getElementById("teamlist");
  let selected_team = teamlist.value;

  if(selected_team=="") {
    return;

  }


  let teamsarrayele = teams.find(ftbyname);

  let pmsg = `You selected the ${teamsarrayele.name}  (${teamsarrayele.teamcode}) who play in ${teamsarrayele.locatedIn}`;
  let p_ele = document.createElement("p");
  p_ele.innerHTML = pmsg;
  p_ele.id = "msgpara";
  p_ele.style.fontWeight = "bold";

  div1.appendChild(p_ele);

}
