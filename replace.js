replaceWords(document.body);

function replaceWords(element) {
    const profiles = {
        happy: {
          "corona": "superduper",
          "Stefan": "Steffo",
          "fall": "barnkalas",
          "smittade": "botade",
          "viruset": "partyt",
          "vaccin": "hallonsaft",
          "rånad": "kramad",
          "misshandlad": "pussad",
          "Vladimir Putin": "Lilla Putte",
          "dog": "överlevde",
          "skadade": "jätteglada",
          "klimatsmart": "svinig",
          "mörda": "laga god mat",
          "sjuk": "frisk",
        },
        fascist: {
          "Stefan Löfven": "Svetsarn",
          "Socialdemokraterna": "Såssarna",
          "corona": "Marknadsekonomi",
        },
        communist: {
          "Ulf Kristersson": "Ulf Krister Pyssling",
          "corona": "Kapitalism",
          "sverigedemokrater": "svejevänner"
        },
    }

    let activeProfile = "happy"

    chrome.storage.sync.get(['profile'], function(profile) {
      console.log(profile.profile)
      activeProfile = profile.profile;
      let wordMap = profiles[activeProfile]
  
      let wordMapAsArray = Object.entries(wordMap)
  
      for (const [toBeReplaced, replacement] of wordMapAsArray) {
          var regex = new RegExp(toBeReplaced, "gmi");
          const str = element.innerHTML;
          const result = str.replace(regex, replacement);
          element.innerHTML = result
      }
    });
}
