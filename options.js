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