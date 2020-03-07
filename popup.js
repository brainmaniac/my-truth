function getCurrentProfile() {
    let ProfileSpan = document.getElementById('profile');

    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    status.classList.add('show')
    setTimeout(function () {
        status.classList.remove('show')
    }, 750);

    chrome.storage.sync.get(['profile'], function (result) {
        ProfileSpan.innerText = result.profile
        console.log('Value currently is ' + result.key);
    });
}

chrome.storage.onChanged.addListener(function (changes, namespace) {
    getCurrentProfile();
})

getCurrentProfile();


let page = document.getElementById('buttonDiv');

const profiles = {
    fascist: "Fascist",
    communist: "Communist",
    happy: "I just want to be happy!",
}

let profilesAsArray = Object.entries(profiles)


function constructOptions(profiles) {
    for (const [key, value] of profilesAsArray) {
        // for (let item of profiles) {
        let button = document.createElement('button');
        button.innerHTML = value;
        button.style.width = "150px";
        button.addEventListener('click', function () {
            chrome.storage.sync.set({profile: key}, function () {
                console.log('profile is ' + key);
            })
        });
        page.appendChild(button);
    }
}

constructOptions(profiles);