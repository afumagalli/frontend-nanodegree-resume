// This file contains four JSONs each representing a different part of the resume project.

var bio = {
    name: "Anthony Fumagalli",
    role: "Computer science educator",
    contacts: {
        mobile: "(619) 341-9571",
        email: "anthony.fumagalli@gmail.com",
        github: "afumagalli",
        twitter: "@roastedTofu",
        location: "San Francisco, CA"
    },
    welcomeMessage: "Welcome to my resume",
    skills: [
        "programming", "web development", "teaching"
    ],
    bioPic: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAALBAAAAJDFmNjlhOTI4LTA0ZDAtNGZlNi04YWY3LWFhYzA2ZDUxNjZjNg.jpg",
    display: function displayBio() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedLocation);

        var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);

        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

var work = {
    jobs: [
        {
            employer: "Udacity",
            title: "Course manager",
            location: "Mountain View, CA",
            dates: "July 2015 - present",
            description: "I support students in Udacity's Intro to Programming Nanodegree by hosting \
                live office hours, webcasts, and tutoring sessions. I am also the point person on content \
                for the Nanodegree and work with course developers and project managers to create new \
                content and improve existing course materials."
        },
        {
            employer: "Dwight Hall at Yale",
            title: "Co-coordinator, Public School Interns",
            location: "New Haven, CT",
            dates: "August 2012 - May 2015",
            description: "After serving as a Public School Intern for two years by volunteering in classrooms \
            and conducting after school tutoring, I then coordinated the program during my senior year. We \
            had 14 interns working in 14 New Haven Public Schools with a focus on engaging students with \
            current issues in public education."
        },
        {
            employer: "Recovery School District",
            title: "Education policy intern",
            location: "New Orleans, LA",
            dates: "June 2014 - August 2014",
            description: "I worked with Executive Director of Policy Holly Reid to prepare the Recovery \
            School District for its first year as an all-charter school district. My projects included \
            writing policy reports on early childhood education and tracking school renovation funding."
        }
    ],
    display: function displayWork() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    projects: [
        {
            title: "Intro to Programming Notes",
            dates: "July 2015",
            description: "My first webpage, a collection of notes for Udacity's Intro to Programming \
            Nanodegree <a href='http://ipnd-notes.appspot.com/'>Click here to check it out</a>",
            images: [
                "images/ipnd.png"
            ]
        }
    ],
    display: function displayProjects() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            for (image in projects.projects[project].images)
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
        }
    }
};

var education = {
    schools: [
        {
            name: "Yale University",
            location: "New Haven, CT",
            degree: "Bachelor of Arts",
            major: "Computer Science & Mathematics",
            dates: "2015",
            url: "http://www.yale.edu"
        }
    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "2015",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            title: "Full Stack Web Developer Nanodegree",
            school: "Udacity",
            dates: "2015",
            url: "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        }
    ],
    display: function displayEducation() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedMajor);
        }
        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDates);

            // var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            // $(".education-entry:last").append(formattedURL);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// function inName(name) {
//     var intName = name;
//     names = intName.trim().split(" ");
//     names[1] = names[1].toUpperCase();
//     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
//     intName = names.join(" ");
//     return intName;
// }

// $("#main").append(internationalizeButton);
