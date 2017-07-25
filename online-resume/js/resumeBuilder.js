/*
建立简历的代码将会在这个文件里写出
*/

//解除下面代码的注释, 添加高德地图到 mapDiv 上，使得简历拥有地图
$("#mapDiv").append(gaodeMap);

// $('#main').append(internationalizeButton);

function inName(str){
	var newName = str;
	newName = newName.split(' ')[0] + ' ' + newName.split(' ')[1].toUpperCase();
	return newName;
}

/*function displayContacts(el) {
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$(el).append(formattedMobile);
	$(el).append(formattedEmail);
	$(el).append(formattedGithub);
	$(el).append(formattedLocation);
}*/

/* 简介 */
var bio = {
	name: 'Tracy Sun',
	role: 'Front-end developer',
	contacts: {
		mobile: '13207160013',
		email: 'kiki20100908@163.com',
		github: 'kiki20100908@163.com',
		twitter: '@sunqi',
		location: '深圳市'
	},
	welcomeMessage: 'Hello guys, welcome to my website!',
	skills: ['programming', 'English'],
	biopic: 'images/fry.jpg',
	display: function(){
		/*add fun displayContacts to bio.display*/
		function displayContacts(el) {
			var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
			var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
			var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
			var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
			var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
			$(el).append(formattedMobile);
			$(el).append(formattedEmail);
			$(el).append(formattedGithub);
			$(el).append(formattedLocation);
		}
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

		/*$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);*/
		$('#header').prepend(formattedName, formattedRole);
		displayContacts('#topContacts');
		displayContacts('#footerContacts');

		/*$('#header').append(formattedBioPic);
		$('#header').append(formattedMsg);
		$('#header').append(HTMLskillsStart);*/
		$('#header').append(formattedBioPic, formattedMsg, HTMLskillsStart);
		bio.skills.forEach(function(skill){
			var formattedSkills = HTMLskills.replace('%data%', skill);
			$('#skills').append(formattedSkills);
		});
	}
};


/* 教育 */
var education = {
	schools: [
		{
			name: '学校1',
			location: '湖北省武汉市',
			degree: '本科',
			majors: ['通信工程',''],
			dates: '2010.09-2014.06',
			url: 'http://google.com/'
		},
		{
			name: '学校2',
			location: '湖北省武汉市',
			degree: '硕士',
			majors: ['计算机技术'],
			dates: '2014.09-2016.06',
			url: 'http://google.com/'
		}
	],
	onlineCourses: [
		{
			title: '前端入门',
			school: 'Udacity',
			dates: '2017.05',
			url: 'http://udacity.com'
		}
	],
	display: function(){
		$('#education').append(HTMLschoolStart);
		education.schools.forEach(function(school){
			var schoolName = HTMLschoolName.replace('%data%', school.name);
			/*add school url to schoolName*/
			schoolName = schoolName.replace('#', school.url);
			var schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
			schoolName += schoolDegree;
			var schoolDate = HTMLschoolDates.replace('%data%', school.dates);
			/*$('.education-entry:last').append(schoolName);
			$('.education-entry:last').append(schoolDate);*/
			$('.education-entry:last').append(schoolName, schoolDate);
			school.majors.forEach(function(major){
				if (major) {
					var schoolMajor = HTMLschoolMajor.replace('%data%', major);
					$('.education-entry:last').append(schoolMajor);
				}
			});
		});
		education.onlineCourses.forEach(function(course){
			$('.education-entry:last').append(HTMLonlineClasses);
			var courseTitle = HTMLonlineTitle.replace('%data%', course.title);
			var courseSchool = HTMLonlineSchool.replace('%data%', course.school);
			courseTitle += courseSchool;
			var courseDate = HTMLonlineDates.replace('%data%', course.dates);
			var courseUrl = HTMLonlineURL.replace('%data%', course.url);
			/*$('.education-entry:last').append(courseTitle);
			$('.education-entry:last').append(courseDate);
			$('.education-entry:last').append(courseUrl);*/
			$('.education-entry:last').append(courseTitle, courseDate, courseUrl);
		});
	}
};


/* 工作 */
var work = {
	jobs: [
		{
			"employer": "深圳市xxxx有限公司",
			"title": "前端开发工程师",
			"location": "深圳市",
			"dates": "2016.07-2017.07",
			"description": "利用原生js开发电视增值应用，例如水费查询应用，广场舞应用，旅游应用等等"
		}
	],
	display: function(){
		$("#workExperience").append(HTMLworkStart);
		work.jobs.forEach(function(job){
			var workEmployer = HTMLworkEmployer.replace('%data%', job.employer);
			var workTitle = HTMLworkTitle.replace('%data%', job.title);
			var workCompany = workEmployer + workTitle;
			var workDate = HTMLworkDates.replace('%data%', job.dates);
			var workDesc = HTMLworkDescription.replace('%data%', job.description);
			/*$('.work-entry:last').append(workCompany);
			$('.work-entry:last').append(workDate);
			$('.work-entry:last').append(workDesc);*/
			$('.work-entry:last').append(workCompany, workDate, workDesc);
		});
		// var workEmployer = HTMLworkEmployer.replace('%data%', work.jobs);
	}
};


/* 项目 */
var projects = {
	projects: [
		{
			title: 'project-1',
			dates: '2016.08',
			description: 'description1',
			images: ['images/fry.jpg','images/fry.jpg']
		},
		{
			title: 'project-2',
			dates: '2017.06',
			description: 'description2',
			images: ['images/fry.jpg','images/fry.jpg']
		}
	]
};

projects.display = function(){
	$("#projects").append(HTMLprojectStart);
	projects.projects.forEach(function(project){
		var projectTitle = HTMLprojectTitle.replace('%data%', project.title);
		var projectDate = HTMLprojectDates.replace('%data%', project.dates);
		var projectDesc = HTMLprojectDescription.replace('%data%', project.description);
		/*$(".project-entry").append(projectTitle);
		$(".project-entry").append(projectDate);
		$(".project-entry").append(projectDesc);*/
		$(".project-entry").append(projectTitle, projectDate, projectDesc);
		if (project.images.length > 0) {
			project.images.forEach(function(image){
				if (image) {
					var projectImage = HTMLprojectImage.replace('%data%', image);
					$(".project-entry:last").append(projectImage);
				}
			});
		}
	});
};

/* 信息的显示 */
bio.display();
work.display();
projects.display();
education.display();

// displayContacts('#footerContacts');