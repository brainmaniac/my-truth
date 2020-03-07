let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// const profiles = ['Fascist', 'Communist', 'I just want to be happy']

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
        button.innerHTML= value;
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