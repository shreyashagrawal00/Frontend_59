
const app = document.getElementById('app');

const profileCard = document.getElementById('profileCard');

const profileName = document.getElementById('profileName');

const profileRole = document.getElementById('profileRole');

const profileBio = document.getElementById('profileBio');

const profileImage = document.getElementById('profileImage');

const skillsContainer = document.getElementById('skillsContainer');

const details = document.getElementById('details');


const inputName = document.getElementById('inputName');
const inputRole = document.getElementById('inputRole');
const inputBio = document.getElementById('inputBio');
const inputImageUrl = document.getElementById('inputImageUrl');
const btnSetImage = document.getElementById('btnSetImage');
const imgError = document.getElementById('imgError');

const inputSkill = document.getElementById('inputSkill');
const btnAddSkill = document.getElementById('btnAddSkill');
const btnRemoveLast = document.getElementById('btnRemoveLast');
const btnToggleDetails = document.getElementById('btnToggleDetails');

const themesContainer = document.getElementById('themes');


const skillLiveCollection = document.getElementsByClassName('skill');


const allButtonsCollection = document.getElementsByTagName('button');


const firstThemeButton = document.querySelector('.theme');


const themeButtons = document.querySelectorAll('.theme');


function logCardChildren() {
    console.log('--- profileCard.children ---');
    Array.from(profileCard.children).forEach(child => {
        console.log(child.nodeName, child.classList ? Array.from(child.classList) : []);
    });
    console.log('--- profileCard.childNodes ---', profileCard.childNodes);
}


document.getElementById('btnLogChildren').addEventListener('click', logCardChildren);


inputName.value = profileName.textContent;
inputRole.value = profileRole.textContent;
inputBio.value = profileBio.innerText;


inputName.addEventListener('input', (e) => {
    profileName.textContent = e.target.value;

    profileName.classList.toggle('invalid', e.target.value.trim() === '');
});


inputRole.addEventListener('input', (e) => {
    profileRole.textContent = e.target.value;
});


inputBio.addEventListener('input', (e) => {
    profileBio.innerText = e.target.value;
});

btnSetImage.addEventListener('click', () => {
    const url = inputImageUrl.value.trim();


    imgError.textContent = '';

    if (url === '') {

        profileImage.removeAttribute('src');
        return;
    }


    profileImage.src = url;

    profileImage.setAttribute('alt', `Profile image for ${inputName.value || 'user'}`);
});


profileImage.addEventListener('error', () => {
    imgError.textContent = '❌ Could not load image. Using placeholder.';

    profileImage.src = 'https://via.placeholder.com/400x200?text=No+Image';
});


console.log('Initial image alt attribute:', profileImage.getAttribute('alt'));


themeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {

        const color = btn.dataset.color;

        profileCard.style.backgroundColor = color;


        document.querySelectorAll('.theme').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});


if (firstThemeButton) {
    profileCard.style.backgroundColor = firstThemeButton.dataset.color || 'white';
}



function createSkillChip(text) {
    const chip = document.createElement('div');
    chip.className = 'skill entry';
    const span = document.createElement('span');
    span.className = 'skill-text';
    span.textContent = text;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'skill-remove';
    removeBtn.type = 'button';
    removeBtn.title = `Remove ${text}`;
    removeBtn.textContent = '×';


    chip.appendChild(span);
    chip.appendChild(removeBtn);

    return chip;
}


btnAddSkill.addEventListener('click', () => {
    const raw = inputSkill.value;
    const skill = raw.trim();
    if (!skill) {

        inputSkill.classList.add('invalid-input');
        setTimeout(() => inputSkill.classList.remove('invalid-input'), 350);
        return;
    }

    const chip = createSkillChip(skill);
    skillsContainer.appendChild(chip);


    console.log('skill count (querySelectorAll):', document.querySelectorAll('.skill').length);
    console.log('skill count (getElementsByClassName live):', skillLiveCollection.length);

    inputSkill.value = '';
    inputSkill.focus();
});


btnRemoveLast.addEventListener('click', () => {
    const children = skillsContainer.children;
    if (children.length === 0) return;
    children[children.length - 1].remove();
    console.log('Removed last skill. New count:', document.querySelectorAll('.skill').length);
});


skillsContainer.addEventListener('click', (ev) => {

    if (ev.target && ev.target.matches('.skill-remove')) {
        const chip = ev.target.closest('.skill');
        if (chip && chip.parentElement === skillsContainer) {
            chip.remove();
            console.log('Removed chip via delegation. Count now:', document.querySelectorAll('.skill').length);
        }
    }
});


skillsContainer.addEventListener('animationend', (ev) => {
    const chip = ev.target;
    if (chip.classList && chip.classList.contains('entry')) {
        chip.classList.remove('entry');
    }
});


inputSkill.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        btnAddSkill.click();
    } else if (ev.key === 'Escape') {
        inputSkill.value = '';
    }
});


btnToggleDetails.addEventListener('click', () => {
    const hidden = details.classList.toggle('hidden');
    btnToggleDetails.textContent = hidden ? 'Show details' : 'Hide details';


    inputRole.disabled = hidden;
});


const style = document.createElement('style');
style.textContent = `.invalid-input { outline: 2px solid #fca5a5; animation: shake 220ms ease; }
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
`;
document.head.appendChild(style);



console.log('Buttons on page (getElementsByTagName returns live collection):', allButtonsCollection);
console.dir(profileCard);

const seedSkills = ['HTML', 'CSS', 'JS'];
seedSkills.forEach(s => skillsContainer.appendChild(createSkillChip(s)));


console.log('Initial skill counts: qSA=', document.querySelectorAll('.skill').length, ' live=', skillLiveCollection.length);
