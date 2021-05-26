document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('#job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
	expirienceData += `<section class="mb-5">`;
	expirienceData += `<h4 class="company-name mb-2">${item.company} - ${item.city}  <i class = "years">${item.from} - ${item.to} </i></h4>`;
	expirienceData += `<h5 class="position">${item.position}</h5>`;
	expirienceData += `<p class="description mt-3">${item.description}</p>`;
	expirienceData += `<a class='link-to-work' href="${item.link}" target="_blank">Link to work</a>`;
	expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;
document.getElementsByClassName('years')[0].style = "display: none";
document.getElementsByClassName('years')[1].style = "display: none";
document.getElementsByClassName('years')[2].style = "display: none";
document.getElementsByClassName('years')[3].style = "display: none";
document.getElementsByClassName('link-to-work')[2].style = "display: none";
document.getElementsByClassName('link-to-work')[3].style = "display: none";
document.getElementsByClassName('description')[3].style = "display: none";
document.getElementsByClassName('position')[3].style = "display: none";

/**
 * contact data
 */

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}" target="_blank">Phone: ${data.phone}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}" target="_blank">Mail: ${data.email}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}" target="_blank">Skype: ${data.skype}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}" target="_blank">Linkedin</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.git}" target="_blank">My GitHub</a></li>`
document.querySelector('.address').innerHTML = `<p>Location: ${data.address}, Ukraine</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
	skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
	educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
	achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;