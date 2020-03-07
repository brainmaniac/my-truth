// const targetTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'span'];
//
// const config = {attributes: true, childList: true, subtree: true};
//
// for (let x = 0, len = targetTags.length; x < len; x++) {
//     const targetNodes = document.getElementsByTagName(targetTags[x]);
//     for (let i = 0, len = targetNodes.length; i < len; i++) {
//         let element = targetNodes[i];
//
//         if (element.dataset.mytruth == "true") {
//             console.log(element)
//             continue;
//         }
//
//         replaceWords(targetNodes[i]);
//     }
// }
//

replaceWords(document.body)

function replaceWords(element) {
    const wordMap = {
        Stefan: "Steffo",
        coronafall: "barnkalas",
        vaccin: "bomb",
        smittade: "botade",
        viruset: "partyt",
        SD: 'Vänsterpartiet',
        Sverigedemokraterna: 'Anders soldater',
        "Vänsterpartiet": 'SD2'
    }

    let wordMapAsArray = Object.entries(wordMap)

    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        element.innerHTML = element.innerHTML.replace(toBeReplaced, '<span data-mytruth="true">' + replacement + '</span>');
    }
}
