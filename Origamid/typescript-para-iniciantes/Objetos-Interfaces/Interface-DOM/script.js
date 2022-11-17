"use strict";
const video = document.querySelector('#videoprincipal');
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList); // true
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement)
        console.log(link);
    else
        typeof link;
});
// Nodelist(QuerySelectorAll) - não possúi filter 
// Array -  
const arrayLinks = Array.from(links); // transformando Node List em Array
const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorLinks);
