MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var observer = new MutationObserver(function(mutations, observer) {
  // fired when a mutation occurs
  console.log(mutations, observer);

  const wordMap = {
    Stefan: "Steffo",
    coronafall: "barnkalas",
    vaccin: "bomb",
    smittade: "botade",
    viruset: "partyt",
  }

  let wordMapAsArray = Object.entries(wordMap)

  for (const [toBeReplaced, replacement] of wordMapAsArray) {
    document.body.innerHTML = document.body.innerHTML.replace(toBeReplaced, replacement);
  }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});