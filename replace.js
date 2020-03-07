const targetTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'];

const config = {attributes: true, childList: true, subtree: true};

for (let x = 0, len = targetTags.length; x < len; x++) {
    const targetNodes = document.getElementsByTagName(targetTags[x]);
    for (let i = 0, len = targetNodes.length; i < len; i++) {

        replaceWords(targetNodes[i]);
    }
}

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

    let activeProfile = "fascist"

    let wordMap = profiles[activeProfile]

    let wordMapAsArray = Object.entries(wordMap)

    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        var regex = new RegExp(toBeReplaced, "gmi");
        const str = element.innerHTML;
        const result = str.replace(regex, replacement);
        element.innerHTML = result
    }
}
