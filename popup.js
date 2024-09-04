// Register content scripts
document.getElementById('btn-orange').onclick = () => {

    //remove existing content script
    document.getElementById('btn-remove').click();


    const scripts = [
        {
            id: "orange",
            matches: ["https://*.google.com/", "https://*.google.com/*"],
            js: ["/content/orange.js"],
            css: ["/content/orange.css"]
        }
    ]

    // add content script
    chrome.scripting.registerContentScripts(scripts);
    alert('Content Script added for Orange theme');
}

document.getElementById('btn-green').onclick = () => {

    //remove existing content script
    document.getElementById('btn-remove').click();

    const scripts = [
        {
            id: "green",
            matches: ["https://*.google.com/", "https://*.google.com/*"],
            js: ["/content/green.js"],
            css: ["/content/green.css"]
        }
    ]

    // add content script
    chrome.scripting.registerContentScripts(scripts);
    alert('Content Script register for Green theme');
}

document.getElementById('btn-remove').onclick = () => {
    // get all registered content scripts
    chrome.scripting.getRegisteredContentScripts().then((scripts) => {

        // get ids
        const scriptIds = scripts.map(script => script.id);

        //unregister content scripts
        chrome.scripting.unregisterContentScripts(scriptIds);
    });
}