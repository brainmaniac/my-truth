// MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
// var observer = new MutationObserver(function (mutations, observer) {
//     // fired when a mutation occurs
//     console.log(mutations, observer);
//
//     const wordMap = {
//         Stefan: "Steffo",
//         coronafall: "barnkalas",
//         vaccin: "bomb",
//         smittade: "botade",
//         viruset: "partyt",
//     }
//
//     let wordMapAsArray = Object.entries(wordMap)
//
//     for (const [toBeReplaced, replacement] of wordMapAsArray) {
//         document.body.innerHTML = document.body.innerHTML.replace(toBeReplaced, replacement);
//     }
// });
//
// // define what element should be observed by the observer
// // and what types of mutations trigger the callback
// observer.observe(document, {
//     subtree: true,
//     attributes: true
// })

const targetTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span', 'div'];

const config = {attributes: true, childList: true, subtree: true};

const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        } else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

for (let x = 0, len = targetTags.length; x < len; x++) {
    const targetNodes = document.getElementsByTagName(targetTags[x]);
    for (let i = 0, len = targetNodes.length; i < len; i++) {
        // const observer = new MutationObserver(callback);

        // observer.observe(targetNodes[i], config);

        replaceWords(targetNodes[i]);

        // observer.disconnect();
    }
}

function replaceWords(element) {
    const wordMap = {
        Stefan: "Steffo",
        coronafall: "barnkalas",
        vaccin: "bomb",
        smittade: "botade",
        viruset: "partyt",
    }

    let wordMapAsArray = Object.entries(wordMap)

    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        element.innerHTML = element.innerHTML.replace(toBeReplaced, replacement);
    }
}
