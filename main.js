import data from './data.json'

const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly');
/*
const workTime = document.querySelector('#work-time');
const prevWorkTime = document.querySelector('#prev-work-time');
const playTime = document.querySelector('#play-time');
const prevPlayTime = document.querySelector('#prev-play-time');
const studyTime = document.querySelector('#study-time');
const prevStudyTime = document.querySelector('#prev-study-time');
const exerciseTime = document.querySelector('#exercise-time');
const prevExerciseTime = document.querySelector('#prev-exercise-time');
const socialTime = document.querySelector('#social-time');
const prevSocialTime = document.querySelector('#prev-social-time');
const selfCareTime = document.querySelector('#self-care-time');
const prevSelfCareTime = document.querySelector('#prev-self-care-time');
*/

const time = document.getElementsByClassName('time');
const prevTime = document.getElementsByClassName('prev-time');

const loadInitState = () => {
  for(let i = 0; i < time.length; i++){
    time[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
    prevTime[i].innerHTML = `Last Day - ${data[i].timeframes.daily.previous}hrs`;
  }
  daily.classList.add('selected');

  return
}

const handleClick= (e) =>{
  daily.classList.remove('selected');
  weekly.classList.remove('selected');
  monthly.classList.remove('selected');

  const freq = e.target.innerHTML.toLowerCase()

  for(let i = 0; i < time.length; i++){
    time[i].innerHTML = `${data[i].timeframes[freq].current}hrs`
    prevTime[i].innerHTML = `${freq == 'daily' ? 'Last Day - '
      : freq == 'weekly' ? 'Last Week - ' : freq == 'monthly' ? 'Last Month - ' : "" } 
      ${data[i].timeframes[freq].previous}hrs`;
  }

  e.target.classList.add('selected');
}

loadInitState()
daily.addEventListener("click", handleClick);
weekly.addEventListener("click", handleClick);
monthly.addEventListener("click", handleClick);



