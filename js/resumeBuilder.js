// This file contains four JSONs each representing a different part of the resume project.
'use strict';

var bio = {
    name: "Anthony Fumagalli",
    role: "Full stack developer",
    contacts: {
        mobile: "(619) 341-9571",
        email: "anthony.fumagalli@gmail.com",
        github: "afumagalli",
        twitter: "@roastedTofu",
        location: "San Francisco, CA"
    },
    welcomeMessage: "I'm a full stack engineer with a passion for education. I say my passion is education because I believe education to be one of our most important human rights - and improving access to high quality education is one of our most important social justice challenges today. I believe education technology is fundamental to this cause and that well developed technology can not only increase accessibility, but also change the way people learn entirely.",
    skills: [
        "Python", "JavaScript", "C", "Google App Engine", "PostgreSQL", "Linux server administration", "Configuration management"
    ],
    biopic: "images/anthony.jpg",
    display: function displayBio() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
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
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
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
            description: "I support students in Udacity's Intro to Programming Nanodegree by hosting live office hours, webcasts, and tutoring sessions. I am also the point person on content for the Nanodegree and work with course developers and project managers to create new content and improve existing course materials."
        },
        {
            employer: "Dwight Hall at Yale",
            title: "Co-coordinator, Public School Interns",
            location: "New Haven, CT",
            dates: "August 2012 - May 2015",
            description: "After serving as a Public School Intern for two years by volunteering in classrooms and conducting after school tutoring, I then coordinated the program during my senior year. We had 14 interns working in 14 New Haven Public Schools with a focus on engaging students with current issues in public education."
        },
        {
            employer: "Recovery School District",
            title: "Education policy intern",
            location: "New Orleans, LA",
            dates: "June 2014 - August 2014",
            description: "I worked with Executive Director of Policy Holly Reid to prepare the Recovery School District for its first year as an all-charter school district. My projects included writing policy reports on early childhood education and tracking school renovation funding."
        }
    ],
    display: function displayWork() {
        for (var i = 0; i < work.jobs.length; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

var projects = {
    projects: [
        {
            title: "Intro to Programming Notes",
            dates: "July 2015",
            description: "My first webpage, a collection of notes for Udacity's Intro to Programming Nanodegree <a href='http://ipnd-notes.appspot.com/'>Click here to check it out</a>",
            images: [
                "images/ipnd.png"
            ]
        }
    ],
    display: function displayProjects() {
        for (var i = 0; i < projects.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);
            for (var j = 0; j < projects.projects[i].images.length; j++)
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
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
            majors: ["Computer Science & Mathematics"],
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
        for (var i = 0; i < education.schools.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedNameDegree = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedNameDegree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:last").append(formattedLocation);
            for (var j = 0; j < education.schools[i].majors.length; j++) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                $(".education-entry:last").append(formattedMajor);
            }
        }
        $("#education").append(HTMLonlineClasses);
        for (i = 0; i < education.onlineCourses.length; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[i].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedTitleSchool = formattedTitle + formattedSchool;
            $(".education-entry:last").append(formattedTitleSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry:last").append(formattedDates);
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
