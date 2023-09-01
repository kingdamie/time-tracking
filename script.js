const lists = document.querySelectorAll(".list");
const workTime = document.getElementById("work-time");
const workStatement = document.getElementById("work-statement");
const exeTime = document.getElementById("exe-time");
const exeStatement = document.getElementById("exe-statement");
const playTime = document.getElementById("play-time");
const playStatement = document.getElementById("play-statement");
const socialTime = document.getElementById("social-time");
const socialStatement = document.getElementById("social-statement");
const studyTime = document.getElementById("study-time");
const studyStatement = document.getElementById("study-statement");
const selfTime = document.getElementById("self-time");
const selfStatement = document.getElementById("self-statement");

let task = Array.from(lists);
task.forEach((list) => {
  list.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Weekly") {
      list.classList.add('active')
      lists[0].classList.remove('active')
      lists[2].classList.remove("active");
      workTime.textContent = "32hrs";
      workStatement.textContent = "Last week - 36hrs";
      exeTime.textContent = "4hrs";
      exeStatement.textContent = "Last week - 5hrs";
      playTime.textContent = "10hrs";
      playStatement.textContent = "Last week - 8hrs";
      socialTime.textContent = "5hrs";
      socialStatement.textContent = "Last week - 10hrs";
      studyTime.textContent = "4hrs";
      studyStatement.textContent = "Last week - 7hrs";
      selfTime.textContent = "2hrs";
      selfStatement.textContent = "Last week - 2hrs";
    } else if (e.target.innerHTML == "Monthly") {
        list.classList.add("active");
        lists[0].classList.remove("active");
        lists[1].classList.remove("active");
      workTime.textContent = "103hrs";
      workStatement.textContent = "Last month - 128hrs";
      exeTime.textContent = "11hrs";
      exeStatement.textContent = "Last month - 18hrs";
      playTime.textContent = "23hrs";
      playStatement.textContent = "Last month - 28hrs";
      socialTime.textContent = "21hrs";
      socialStatement.textContent = "Last month - 23hrs";
      studyTime.textContent = "13hrs";
      studyStatement.textContent = "Last month - 19hrs";
      selfTime.textContent = "7hrs";
      selfStatement.textContent = "Last month - 11hrs";
    } else {
        list.classList.add("active");
        lists[1].classList.remove("active");
        lists[2].classList.remove("active");
      workTime.textContent = "5hrs";
      workStatement.textContent = "Yesterday - 7hrs";
      exeTime.textContent = "1hrs";
      exeStatement.textContent = "Yesterday - 1hrs";
      playTime.textContent = "1hrs";
      playStatement.textContent = "Yesterday - 2hrs";
      socialTime.textContent = "1hrs";
      socialStatement.textContent = "Yesterday - 3hrs";
      studyTime.textContent = "0hrs";
      studyStatement.textContent = "Yesterday - 1hrs";
      selfTime.textContent = "0hrs";
      selfStatement.textContent = "Yesterday - 1hrs";
    }
  });
});
