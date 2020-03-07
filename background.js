function loadProfiles(json) {
    chrome.storage.sync.set({profiles: json}, function () {
        chrome.storage.sync.get(['profiles'], function (result) {
            for (let profile in result.profiles) {
                if (profile == "happy") {
                    chrome.storage.sync.set({profile: profile}, function () {

                    })
                    break;
                }
            }
        })
    })
}

chrome.runtime.onInstalled.addListener(function () {
    const url = chrome.runtime.getURL('profiles/profiles.json');
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => loadProfiles(json));
});
