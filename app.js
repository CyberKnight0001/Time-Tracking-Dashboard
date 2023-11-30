let dailyOption = document.getElementById("daily");
let weeklyOption = document.getElementById("weekly");
let monthlyOption = document.getElementById("monthly");
let workCurrentTime = document.getElementById("workCurrentTime");
let workPreviousTime = document.getElementById("workPrevious");
let playCurrentTime = document.getElementById("playCurrentTime");
let playPreviousTime = document.getElementById("playPrevious");
let studyCurrentTime = document.getElementById("studyCurrentTime");
let studyPreviousTime = document.getElementById("studyPrevious");
let exerciseCurrentTime = document.getElementById("exerciseCurrentTime");
let exercisePreviousTime = document.getElementById("exercisePrevious");
let socialCurrentTime = document.getElementById("socialCurrentTime");
let socialPreviousTime = document.getElementById("socialPrevious");
let selfCareCurrentTime = document.getElementById("selfCareCurrentTime");
let selfCarePreviousTime = document.getElementById("selfCarePrevious");

dailyOption.onclick = function() {
    workCurrentTime.innerText = "0hrs";
    workPreviousTime.innerText = "Las Week - 0hrs";
    playCurrentTime.innerText = "4hr";
    playPreviousTime.innerText = "Las Week - 0hrs";
    studyCurrentTime.innerText = "12hrs";
    studyPreviousTime.innerText = "Las Week - 0hr";
    exerciseCurrentTime.innerText = "2hr";
    exercisePreviousTime.innerText = "Las Week - 0hr";
    socialCurrentTime.innerText = "1hr";
    socialPreviousTime.innerText = "Las Week - 0hrs";
    selfCareCurrentTime.innerText = "5hrs";
    selfCarePreviousTime.innerText = "Las Week - 0hr";
    dailyOption.classList.add("clicked");
    weeklyOption.classList.remove("clicked");
    monthlyOption.classList.remove("clicked");
};

weeklyOption.onclick = function() {
    workCurrentTime.innerText = "0hrs";
    workPreviousTime.innerText = "Las Week - 0hrs";
    playCurrentTime.innerText = "28hrs";
    playPreviousTime.innerText = "Las week - 0hrs";
    studyCurrentTime.innerText = "84hrs";
    studyPreviousTime.innerText = "Last Week - 0hrs";
    exerciseCurrentTime.innerText = "14hrs";
    exercisePreviousTime.innerText = "Last Week - 0hrs";
    socialCurrentTime.innerText = "7hrs";
    socialPreviousTime.innerText = "Last Week - 0hrs";
    selfCareCurrentTime.innerText = "35hrs";
    selfCarePreviousTime.innerText = "Last Week - 0hrs";
    dailyOption.classList.remove("clicked");
    weeklyOption.classList.add("clicked");
    monthlyOption.classList.remove("clicked");
};

monthlyOption.onclick = function() {
    workCurrentTime.innerText = "0hrs";
    workPreviousTime.innerText = "Las Week - 0hrs";
    playCurrentTime.innerText = "120hrs";
    playPreviousTime.innerText = "Las week - 20hrs";
    studyCurrentTime.innerText = "360hrs";
    studyPreviousTime.innerText = "Last Week - 10hrs";
    exerciseCurrentTime.innerText = "60hrs";
    exercisePreviousTime.innerText = "Last Week - 0hrs";
    socialCurrentTime.innerText = "30hrs";
    socialPreviousTime.innerText = "Last Week - 0hrs";
    selfCareCurrentTime.innerText = "150hrs";
    selfCarePreviousTime.innerText = "Last Week - 0hrs";
    dailyOption.classList.remove("clicked");
    weeklyOption.classList.remove("clicked");
    monthlyOption.classList.add("clicked");
};