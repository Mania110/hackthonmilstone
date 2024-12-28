const form = document.getElementById("reume") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // Prevent page reload

  // Collect values
  const name = (document.getElementById("Name") as HTMLInputElement)?.value || "";
  const email = (document.getElementById("email") as HTMLInputElement)?.value || "";
  const phone = (document.getElementById("phone") as HTMLInputElement)?.value || "";
  const Education = (document.getElementById("Education") as HTMLInputElement)?.value || "";
  const experience = (document.getElementById("experience") as HTMLInputElement)?.value || "";
  const skills = (document.getElementById("skills") as HTMLInputElement)?.value || "";

  // Generate resume content
  const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3> Personal Information</h3>
    <P><b>Name:</b><span contenteditable="true">${name}</span></P>
    <P><b>email:</b><span contenteditable="true">${email}</span></P>
    <P><b>phone:</b><span contenteditable="true">${phone}</span></P>

    <h3>Education</h3> 
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3> 
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3> 
    <p contenteditable="true">${skills}</p>
  `;

  // Display generated resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("something is missing");
  }
});