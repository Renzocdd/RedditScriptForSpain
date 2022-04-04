// ==UserScript==
// @name         Habla hispana ataca
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Viva cultura hispanica
// @author       someguy
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://camo.githubusercontent.com/83274ccf216eba22faa12a741ff8b88e786534a224326324c657b89927f8ce24/687474703a2f2f692e696d6775722e636f6d2f4b4649654956712e706e67
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/Renzocdd/RedditScriptForSpain/main/overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}

