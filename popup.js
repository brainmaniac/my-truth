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

chrome.storage.sync.get(['profiles'], function (result) {
    let buttonGroup = document.getElementById("buttonDiv")
    for (let profile in result.profiles) {
        let button = document.createElement('button');
        button.innerHTML = profile;
        button.style.width = "150px";
        button.addEventListener('click', function () {
            chrome.storage.sync.set({profile: profile}, function () {
                console.log('profile is ' + profile);
            })
        });
        buttonGroup.appendChild(button);
    }
});