const form = document.getElementById("reume") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent page reload

  // Collect values
  const name = (document.getElementById("name") as HTMLInputElement)?.value || "";
  const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
  const phone = (document.getElementById("phone") as HTMLInputElement)?.value || "";
  const Education = (document.getElementById("Education") as HTMLInputElement)?.value || "";
  const experience = (document.getElementById("experience") as HTMLInputElement)?.value || "";
  const skills = (document.getElementById("skills") as HTMLInputElement)?.value || "";

  // Generate resume content
  const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3> Personal Information</h3>
    <P><b>Name:</b>${name}</P>
    <P><b>email:</b>${email}</P>
    <P><b>phone:</b>${phone}</P>

    <h3>Education</h3> 
    <p>${Education}</p>

    <h3>Experience</h3> 
    <p>${experience}</p>

    <h3>Skills</h3> 
    <p>${skills}</p>
  `;

  // Display generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("something is missing");
  }
});