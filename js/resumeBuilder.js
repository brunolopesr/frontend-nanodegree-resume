var bio = {
    name: "Bruno Lopes",
    role: "Desenvolvedor Web Front-End",
    contacts: {
        mobile: "(11) 98761-0579",
        email: "bruno_lopes@live.com",
        github: "https://github.com/brunolopesr",
        location: "Estrada do M Boi Mirim, 2912 - Jardim Regina, São Paulo - SP"
    },
    welcomeMessage: "Este é o projeto de curriculo do Nanodegree",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Design Responsivo", "PHP"],
    biopic: "images/bruno.jpg",
    display: function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $(formattedRole).insertAfter("#name");

        for(var contactType in bio.contacts) {
            var contact = bio.contacts[contactType];

            var formattedTag = eval("HTML" + contactType);
            formattedTag = formattedTag.replace("%data%", contact);

            $("#topContacts").append(formattedTag);
            $("#footerContacts").append(formattedTag);
        }

        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);

        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMsg);

        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace("%data%", skill);
                $("#skills").append(formattedSkill);
            })
        }
    }
}

var work = {
    jobs: [
        {
            employer: "Locaweb",
            title: "Analista de Suporte",
            location: "R. Itapaiúna, 2434 - Jardim Morumbi, São Paulo - SP",
            dates: "11/2013 - 10/2014",
            description: "Fornecer suporte técnico para clientes contratantes dos serviços de Hospedagem da Locaweb"
        },
        {
            employer: "Colégio Benjamin Constant",
            title: "Especialista em T.I",
            location: "Rua Eça de Queiroz, 75 - Vila Mariana, São Paulo - SP",
            dates: "12/2015 até hoje",
            description: "Prestar consultoria e suporte técnico em infraestrutura de rede, hardware e software de T.I"
        }
    ],
    display: function() {
        var formattedTag;
        if(work.jobs.length > 0) {
            work.jobs.forEach(function(job) {
                var workEntry = $(HTMLworkStart);

                var jobEmployer = HTMLworkEmployer.replace("%data%", job.employer);
                var jobTitle = HTMLworkTitle.replace("%data%", job.title);
                var jobDate = HTMLworkDates.replace("%data%", job.dates);
                var jobLocation = HTMLworkLocation.replace("%data%", job.location);
                var jobDescription = HTMLworkDescription.replace("%data%", job.description);

                workEntry.append(jobEmployer + jobTitle);
                workEntry.append(jobDate);
                workEntry.append(jobLocation);
                workEntry.append(jobDescription);



                $("#workExperience").append(workEntry);
            })
        }
    }
}

var projects = {
    projects: [
        {
            title: "Projeto de Exemplo",
            dates: "01/2016 até 08/2016",
            description: "Projeto que não existe, mas que eu coloquei aqui para exemplo no curriculum",
            images: ["images/197x148.gif"]
        }
    ],
    display: function() {
        if(projects.projects.length > 0) {
            projects.projects.forEach(function(project) {
                var projectEntry = $(HTMLprojectStart);

                var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
                projectEntry.append(projectTitle);

                var projectDates = HTMLprojectDates.replace("%data%", project.dates);
                projectEntry.append(projectDates);

                var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
                projectEntry.append(projectDescription);

                if(project.images.length > 0) {
                    for(var j = 0; j < project.images.length; j++) {
                        var projectImage = HTMLprojectImage.replace("%data%", project.images[j]);
                        projectEntry.append(projectImage);
                    }
                }

                $("#projects").append(projectEntry);
            })
        }
    }
}

var education = {
    schools: [
        {
            name: "Centro Universitário IBTA",
            location: "Av. Paulista, 302 - Bela Vista, São Paulo - SP",
            degree: "Bacharelado em Ciências da Computação",
            majors: ["CS"],
            dates: "2014-2018",
        },
        {
            name: "ETEC Zona Sul",
            location: "Rua Frederico Grotte, 322 - Jardim Vergueiro, São Paulo - SP",
            degree: "Ensino Médio",
            majors: ["CS"],
            dates: "2008-2010",
        }
    ],
    onlineCourses: [
        {
            title: "Front-End Web Developer Nanodegree",
            school: "Udacity",
            dates: "2017",
            url: "http://udacity.com.br/"
        }
    ],
    display: function() {
        if(education.schools.length > 0) {
            education.schools.forEach(function(school) {
                var schoolEntry = $(HTMLschoolStart);

                var schoolName = HTMLschoolName.replace("%data%", school.name);
                var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

                schoolEntry.append(schoolName + schoolDegree);

                var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
                schoolEntry.append(schoolDates);

                var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
                schoolEntry.append(schoolLocation);

                /* Não tenho a mínima ideia do que seja um Major na Educação Brasileira */
                school.majors.forEach(function(element) {
                    var schoolMajor = HTMLschoolMajor.replace("%data%", element);
                    schoolEntry.append(schoolMajor);
                })

                $("#education").append(schoolEntry);
            })
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(course) {
                var schoolEntry = $(HTMLschoolStart);

                var courseTitle = HTMLonlineTitle.replace("%data%", course.title);
                var courseSchool = HTMLonlineSchool.replace("%data%", course.school);
                schoolEntry.append(courseTitle + courseSchool);

                var courseDates = HTMLonlineDates.replace("%data%", course.dates);
                schoolEntry.append(courseDates);

                var courseURL = HTMLonlineURL.replace("%data%", course.url);
                schoolEntry.append(courseURL);

                $("#education").append(schoolEntry);
            })
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

// Google Maps

$("#mapDiv").append(googleMap);

// Traduções de algumas coisas

$("#lets-connect").find("h2").text("Entre em contato");
$("#workExperience").find("h2").text("Experiência");
$("#projects").find("h2").text("Projetos");
$("#education").find("h2").text("Educação");
$("#mapDiv").find("h2").text("Onde morei e trabalhei");
