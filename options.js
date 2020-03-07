let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

const profiles = ['Fascist', 'Communist', 'I just want to be happy']

function constructOptions(profiles) {
    for (let item of profiles) {
        let button = document.createElement('button');
        button.innerHTML= item;
        button.style.width = "150px";
        button.addEventListener('click', function () {
            chrome.storage.sync.set({profile: item}, function () {
                console.log('profile is ' + item);
            })
        });
        page.appendChild(button);
    }
}

constructOptions(profiles);