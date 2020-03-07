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
        Sverigedemokraterna: 'Anders soldater',
        vansterpartiet: 'SD2',
        "vänsterpartiet": 'SD3'
    }

    let wordMapAsArray = Object.entries(wordMap)

    for (const [toBeReplaced, replacement] of wordMapAsArray) {
        var regex = new RegExp(toBeReplaced, "gmi");
        const str = element.innerHTML;
        const result = str.replace(regex, replacement);
        element.innerHTML = result
    }
}
