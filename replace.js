let originalSource = document.body.innerHTML;

function replaceWords(element, source, wordMapAsArray) {
    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        var regex = new RegExp(toBeReplaced + "(?![^<]*>)", "gmi");
        source = source.replace(regex, replacement);
        element.innerHTML = source
    }
}

chrome.storage.sync.get(['profiles', 'profile'], function (result) {
    let wordMap = result.profiles[result.profile]
    let wordMapAsArray = Object.entries(wordMap)
    replaceWords(document.body, document.body.innerHTML, wordMapAsArray);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    chrome.storage.sync.get(['profiles', 'profile'], function (result) {
        let wordMap = result.profiles[result.profile]
        let wordMapAsArray = Object.entries(wordMap)
        replaceWords(document.body, originalSource, wordMapAsArray);
    });
})