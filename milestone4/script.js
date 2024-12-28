var form = document.getElementById("reume");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); // Prevent page reload
    // Collect values
    var name = ((_a = document.getElementById("Name")) === null || _a === void 0 ? void 0 : _a.value) || "";
    var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
    var phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || "";
    var Education = ((_d = document.getElementById("Education")) === null || _d === void 0 ? void 0 : _d.value) || "";
    var experience = ((_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value) || "";
    var skills = ((_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value) || "";
    // Generate resume content
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3> Personal Information</h3>\n    <P><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></P>\n    <P><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></P>\n    <P><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></P>\n\n    <h3>Education</h3> \n    <p contenteditable=\"true\">").concat(Education, "</p>\n\n    <h3>Experience</h3> \n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3> \n    <p contenteditable=\"true\">").concat(skills, "</p>\n  ");
    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("something is missing");
    }
});
