replaceWords(document.body);

function replaceWords(element) {
    const profiles = {
        // faschist = moderater och nazister
        fascist: {
          "Stefan Löfven": "Svetsarn",
          "Socialdemokraterna": "Såssarna",
          "corona": "Marknadsekonomi",
        },
        communist: {
          "Ulf Kristersson": "Ulf Krister Pyssling",
          "corona": "Kapitalism",
        },
        happy: {
          "corona": "lycka",
          Stefan: "Steffo",
          coronafall: "barnkalas",
          smittade: "botade",
          viruset: "partyt",
        }
    }

    let activeProfile = "happy"

    chrome.storage.sync.get(['profile'], function(profile) {
      activeProfile = profile;
    });

    let wordMap = profiles[activeProfile]

    let wordMapAsArray = Object.entries(wordMap)

    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        var regex = new RegExp(toBeReplaced, "gmi");
        const str = element.innerHTML;
        const result = str.replace(regex, replacement);
        element.innerHTML = result
    }
}
