// const loginSection = document.getElementById("loginSection");
// const employerDashboard = document.getElementById("employerDashboard");
// const loginForm = document.getElementById("loginForm");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const createJobSection = document.getElementById("createJobSection");
// const createJobBtn = document.getElementById("createJobBtn");
// const jobForm = document.getElementById("jobForm");
// const userType = document.getElementById("userType");
// const login = document.getElementById("submit");
// const saveJobBtn = document.getElementById("saveJobBtn");
// const jobContainer = document.getElementById("jobContainer");
// const jobSeekerContainer = document.getElementById("jobSeekerContainer");
// const jobTitle = document.getElementById("jobTitle");
// const companyName = document.getElementById("companyName");
// const jobDescription = document.getElementById("jobDescription");
// const jobLocation = document.getElementById("location");
// const salary = document.getElementById("salary");
// const jobType = document.getElementById("jobType");
// const logOutBtn = document.querySelector(".logout-btn");
// const jobSeekerDashboard = document.getElementById("jobSeekerDashboard");
// let selectedUser;
// let applicants=Number(0)


// logOutBtn.addEventListener("click", function () {
//   employerDashboard.style.display = "none";
//   jobSeekerDashboard.style.display = "none";
//   createJobSection.style.display = "none";
//   loginSection.style.display = "block";

//   localStorage.removeItem("USERTYPE");
// });

// const emplyeDashboardBlock = () => {
//   employerDashboard.style.display = "block";
//   jobSeekerDashboard.style.display = "none";
// };

// // login section
// // switch to employer dashboard

// login.addEventListener("click", function (event) {
//   event.preventDefault();

//   selectedUser = userType.value;

//   console.log(selectedUser);
//   localStorage.setItem("USERTYPE", JSON.stringify(selectedUser));
//   selectedUser = JSON.parse(localStorage.getItem("USERTYPE"));
//   console.log(selectedUser);
//   if (selectedUser === "employer") {
//     employerDashboard.style.display = "block";
//     jobSeekerDashboard.style.display = "none";
//     loginSection.style.display = "none";

//     console.log("usertype save in local storage");
//   } else if (selectedUser === "jobSeeker") {
//     console.log(selectedUser);

//     localStorage.setItem("USERTYPE", JSON.stringify(selectedUser));

//     jobSeekerDashboard.style.display = "block";
//     employerDashboard.style.display = "none";
//     loginSection.style.display = "none";

//     console.log("usertype save in local storage");
//   }
// });

// // employer dashboard section
// // switch to job form

// // stop page reload

// document.addEventListener("DOMContentLoaded", () => {
//   let selectedUser = JSON.parse(localStorage.getItem("USERTYPE"));

//   if (selectedUser === "employer") {
//     employerDashboard.style.display = "block";
//     jobSeekerDashboard.style.display = "none";
//     loginSection.style.display = "none";
//   } else if (selectedUser === "jobSeeker") {
//     employerDashboard.style.display = "none";
//     jobSeekerDashboard.style.display = "block";
//     loginSection.style.display = "none";
//   } else {
//     employerDashboard.style.display = "none";
//     jobSeekerDashboard.style.display = "none";
//     loginSection.style.display = "block";
//   }
// });

// createJobBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   employerDashboard.style.display = "none";
//   createJobSection.style.display = "block";
// });

// // job cards

// function createJobCard(job, userType) {
//   const card = document.createElement("div");
//   card.classList.add("job-card");

//   const title = document.createElement("h3");
//   title.textContent = job.jobTitle;

//   const company = document.createElement("p");
//   company.textContent = `Company : ${job.companyName}`;

//   const description = document.createElement("p");
//   description.textContent = `Description : ${job.jobDescription}`;

//   const location = document.createElement("p");
//   location.textContent = `Location : ${job.jobLocation}`;

//   const salary = document.createElement("p");
//   salary.textContent = `Salary : ${job.salary}`;

//   const type = document.createElement("p");
//   type.textContent = `Job Type : ${job.jobType}`;

//   let applicantCount = document.createElement("p");
//   applicantCount.innerHTML = "Applicants :" + applicants +" ";

//   const button = document.createElement("button");
//   button.textContent = "Apply Now";
//   button.classList.add("logOut-btn");

//   //apply now button functionality

//   button.addEventListener("click", function () {
    
    
    
// });

//   if (userType === "jobSeeker") {
//     card.append(title, company, description, location, salary, type, button);
//   } else {
//     card.append(
//       title,
//       company,
//       description,
//       location,
//       salary,
//       type,
//       applicantCount,
//       button,
//     );
//   }

//   return card;
// }

// document.addEventListener("DOMContentLoaded", () => {
//   let list = localStorage.getItem("jobs");

//   if (list) {
//     let jobs = JSON.parse(list);

//     jobs.forEach((job) => {
//       // employer dashboard

//       const card = createJobCard(job, "employer");

//       jobContainer.appendChild(card);

//       // jobseeker dashboard

//       const jobSeekerCard = createJobCard(job, "jobSeeker");

//       jobSeekerContainer.appendChild(jobSeekerCard);
//     });
//   }
// });

// // employer form
// // switch to employer dashboard again

// saveJobBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   const userObject = {
//     jobTitle: jobTitle.value,
//     companyName: companyName.value,
//     jobDescription: jobDescription.value,
//     jobLocation: jobLocation.value,
//     salary: salary.value,
//     jobType: jobType.value,
//     applicantCount: 0,
//   };

//   showJob(userObject);

//   const jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//   jobs.push(userObject);

//   localStorage.setItem("jobs", JSON.stringify(jobs));

//   console.log("job saved:", userObject);

//   jobForm.reset();

//   createJobSection.style.display = "none";

//   emplyeDashboardBlock();
// });

// const showJob = (job) => {
//   const employerCard = createJobCard(job,"employer");

//   jobContainer.appendChild(employerCard);

//   const jobSeekerCard = createJobCard(job,"jobSeeker");

//   jobSeekerContainer.appendChild(jobSeekerCard);
// };

const jobForm = document.getElementById("jobForm");
const submit = document.querySelector("#submit");
const createJob = document.getElementById("createJob");
const login=document.getElementById("submit")
const userTypeInput=document.getElementById("userType")
const employerDashboard=document.getElementById("employerDashboard")
const jobSeekerDashboard=document.getElementById("jobSeekerDashboard")
const createJobBtn=document.getElementById("createJobBtn")
const loginSection=document.getElementById("loginSection")
const jobsContainer=document.getElementById("jobsContainer")
const jobSeekerContainer=document.getElementById("jobSeekerContainer")
const jobContainer=document.getElementById("jobContainer")


// login section
login.addEventListener("click",function(){
    let userType=userTypeInput.value
    localStorage.setItem("USERTYPE",JSON.stringify(userType))
    if(userType==="employer"){
        console.log("employer")
    employerDashboard.style.display="block"
    loginSection.style.display="none"
    jobSeekerDashboard.style.display="none"
    jobsContainer.style.display="none"
    }
})


// jobSection
createJobBtn.addEventListener("click",function(){
    jobForm.style.display="block"
    login.style.display="none"
    employerDashboard.style.display="none"
    
})
console.log(submit);

createJob.addEventListener("click",function(){
    jobForm.style.display="none"
    employerDashboard.style.display="block"
    
})



createJob.addEventListener("click", function () {
    renderJobs()
    console.log("job");
});

function getJobs() {
    return JSON.parse(localStorage.getItem("jobs")) || [];
}

function saveJobs(jobs) {
    localStorage.setItem("jobs", JSON.stringify(jobs));
}

function renderJobs() {
    const jobs = getJobs();

    jobsContainer.innerHTML = jobs
        .map((job, index) => {
            return `
                <div class="job-card">
                    <h2>${job.title}</h2>

                    <p>${job.description}</p>

                    <p>
                        <strong>Price:</strong> $${job.price}
                    </p>

                    <p>
                        <strong>Location:</strong>
                        ${job.country}, ${job.city}
                    </p>

                    <p>
                        <strong>Applied:</strong> ${job.appliedCount}
                    </p>

                    <button onclick="applyJob(${index})">
                        Apply
                    </button>
                </div>
            `;
        })
        .join("");
}

jobForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const jobs = getJobs();

    const newJob = {
        title: document.getElementById("jobTitle").value,
        description: document.getElementById("jobDescription").value,
        price: document.getElementById("jobPrice").value,
        country: document.getElementById("country").value,
        city: document.getElementById("city").value,
        appliedCount: 0
    };

    jobs.push(newJob);

    saveJobs(jobs);

    jobForm.reset();

    renderJobs();
});

console.log(getJobs())


function applyJob(appliedindex) {
    const jobs = getJobs();

    if (!jobs) return;

    console.log(jobs);

    jobs[appliedindex].appliedCount++;

    console.log("jobs", jobs);

    saveJobs(jobs);

    renderJobs();
}

//job Seeker dashboard
login.addEventListener("click",function(){
     let userType=userTypeInput.value

    localStorage.setItem("USERTYPE",JSON.stringify(userType))
    if(userType==="jobSeeker"){

        jobSeekerDashboard.style.display="block"
        loginSection.style.display="none"
        renderJobs()
            
    }
})

