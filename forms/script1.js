function skilladd(){
        var skillsContainer = document.getElementById("skillsContainer");
        var input = document.createElement("input");
        input.type = "text";
        input.name = "skills[]";
        input.required = true;
        input.setAttribute('class','btn');
        skillsContainer.appendChild(input);
    };

function Educationadd() {
        var educationContainer = document.getElementById("educationContainer");
        var educationEntry = document.createElement("div");
        educationEntry.classList.add("educationEntry");
        educationEntry.innerHTML = `
            <input class="btn" type="text" name="university[]" placeholder="College/University" required>
            <input class="btn" type="text" name="course[]" placeholder="Course Enrolled" required>
            <input class="btn" type="text" name="year[]" placeholder="Year - 2024-2025" required>
            <input class="btn" type="text" name="location[]" placeholder="Location" required>
        `;
        educationContainer.insertBefore(educationEntry, document.getElementById("addEducation"));
    };


function certificateadd() {
        var certificatesContainer = document.getElementById("certificatesContainer");
        var input = document.createElement("input");
        input.type = "text";
        input.name = "certificates[]";
        input.required = true;
        input.setAttribute('class','btn');
        certificatesContainer.appendChild(input);
    };

function interestadd(){
        var interestsContainer = document.getElementById("interestsContainer");
        var input = document.createElement("input");
        input.type = "text";
        input.name = "interests[]";
        input.required = true;
        input.setAttribute('class','btn');
        interestsContainer.appendChild(input);
    };

function languageadd(){
        var languagesContainer = document.getElementById("languagesContainer");
        var input = document.createElement("input");
        input.type = "text";
        input.name = "languages[]";
        input.required = true;
        input.setAttribute('class','btn');
        languagesContainer.appendChild(input);
    };