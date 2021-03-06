let originalSource = document.body.innerHTML;

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span']

function replaceWords(qqqqq, source, wordMapAsArray) {

    for (let tag in tags) {
        let elements = document.body.getElementsByTagName(tags[tag]);

        for (let element in elements) {
            let el = elements[element]
            for (const [toBeReplaced, replacement] of wordMapAsArray) {
                var regex = new RegExp(toBeReplaced + "(?![^<]*>)", "gmi");
                if (regex.test(el.innerHTML) && el.innerHTML)
                    el.innerHTML = el.innerHTML.replace(regex, replacement);
            }
        }
    }
}

chrome.storage.sync.get(['profiles', 'profile'], function (result) {
    let wordMap = result.profiles[result.profile]
    let wordMapAsArray = Object.entries(wordMap).sort(function(first, second){
      return second[0].length - first[0].length
    })
    replaceWords(document.body, document.body.innerHTML, wordMapAsArray);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    window.location.reload(true);
})