let ProfileSpan = document.getElementById('profile');

chrome.storage.sync.get(['profile'], function(result) {
    ProfileSpan.innerText = result.profile
    console.log('Value currently is ' + result.key);
});