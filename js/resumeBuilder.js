// $("#main").append("Anthony Fumagalli");
// var awesomeThoughts = "My name is Anthony and I am AWESOME!";
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $("#main").append(funThoughts);

var name = "Anthony Fumagalli";
var role = "Computer science educator";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    name: "Anthony Fumagalli",
    role: "Computer science educator",
    welcomeMessage: "Welcome to my resume",
    contacts: {
        mobile: "(619) 341-9571",
        email: "anthony.fumagalli@gmail.com",
        github: "afumagalli",
        twitter: "@roastedTofu",
        location: "San Francisco, CA"
    },
    skills: [
        "programming", "web development", "teaching"
    ],
    bioPic: "images/fry.jpg"
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
    ]
};

var projects = {
    projects: [
        {
            title: "Intro to Programming notes",
            dates: "July 2015",
            description: "My first webpage, a collection of notes for Udacity's Intro to Programming \
            Nanodegree",
            images: [
                "http://cdn.sheknows.com/articles/2013/04/Puppy_2.jpg"
            ]
        }
    ]
};

var education = {
    schools: [
        {
            name: "Yale University",
            location: "New Haven, CT",
            degree: "Bachelor of Arts",
            major: "Computer Science & Mathematics",
            dates: "August 2011 - May 2015",
            url: "http://www.yale.edu"
        }
    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            years: "August 2015 - present",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

function inName(name) {
    var intName = name;
    names = intName.trim().split(" ");
    names[1] = names[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    intName = names.join(" ");
    return intName;
}

$("#main").append(internationalizeButton);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
}

function displayWork() {
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

displayWork();

projects.display = function() {
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

projects.display();

function displayEducation() {
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
}

displayEducation();

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
