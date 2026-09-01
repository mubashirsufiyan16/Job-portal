const loginSection = document.getElementById("loginSection");
const employerDashboard = document.getElementById("employerDashboard");
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const createJobSection = document.getElementById("createJobSection");
const createJobBtn = document.getElementById("createJobBtn");
const jobForm = document.getElementById("jobForm");
const userType = document.getElementById("userType");
const login = document.getElementById("submit");
const saveJobBtn = document.getElementById("saveJobBtn");
const jobContainer = document.getElementById("jobContainer");
const jobTitle = document.getElementById("jobTitle");
const companyName = document.getElementById("companyName");
const jobDescription = document.getElementById("jobDescription");
const jobLocation = document.getElementById("location");
const salary = document.getElementById("salary");
const jobType = document.getElementById("jobType");

const emplyeDashboardBlock = () => {
  employerDashboard.style.display = "block";
};

// login section
//switch to employer dashboard
login.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedUser = userType.value;
  if (selectedUser === "employer") {
    console.log("Hello employer dashboard");

    loginSection.style.display = "none";
    emplyeDashboardBlock();
  }
});
// employer dashboard section
// switch to job form
createJobBtn.addEventListener("click", function (event) {
  event.preventDefault();

  employerDashboard.style.display = "none";
  createJobSection.style.display = "block";
});

// employer form
// switch to employer dashboard again

saveJobBtn.addEventListener("click", function () {
  const userObject = {
    jobTitle: jobTitle.value,
    companyName: companyName.value,
    jobDescription: jobDescription.value,
    jobLocation: jobLocation.value,
    salary: salary.value,
    jobType: jobType.value,
    applicantCound:0
    
};
showJob(userObject)

  const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
  jobs.push(userObject);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  console.log("job saved:", userObject);
  jobForm.reset();
  createJobSection.style.display = "none";
  emplyeDashboardBlock();
});

const showJob = (job) => {
  const card = document.createElement("div");
  card.classList.add("job-card");

  const title = document.createElement("h3");
  title.textContent = job.jobTitle;

  const company = document.createElement("p");
  company.textContent = `Company : ${job.companyName}`;

  const description = document.createElement("p");
  description.textContent = `Description : ${job.jobDescription}`;

  const location = document.createElement("p");
  location.textContent = `Location : ${job.jobLocation}`;

  const salary = document.createElement("p");
  salary.textContent = `Salary : ${job.salary}`;

  const type = document.createElement("p");
  type.textContent = `Company : ${job.jobType}`;

  const applicants=document.createElement("p")
  applicants.textContent=`Applicants : ${job.applicantCound}`

  card.append(title, company, description, location, salary, type,applicants);

  jobContainer.appendChild(card)
};

