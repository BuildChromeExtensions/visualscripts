// when extensions is installed
chrome.runtime.onInstalled.addListener((details) => {

    //create context menu
    chrome.contextMenus.create({
        id: "random",
        title: "Random Background",
        contexts: ["page", "action"]
    });

    chrome.contextMenus.create({
        id: "orange",
        title: "Run Orange Theme",
        contexts: ["page", "action"]
    });

    chrome.contextMenus.create({
        id: "green",
        title: "Run Green Theme",
        contexts: ["page", "action"]
    });

    chrome.contextMenus.create({
        id: "remove",
        title: "Remove CSS",
        contexts: ["page", "action"]
    });
});


chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "random":
            // Inject and Run Function
            function getRandomColor() {
                const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink'];
                const index = parseInt(Math.random() * colors.length);
                return colors[index];
            }
            chrome.scripting.executeScript({

                // the target tab to inject to
                target: {
                    tabId: tab.id
                },

                // the function that will be injected
                func: (color, textColor) => {
                    document.body.style.backgroundColor = color;
                    document.body.style.color = textColor;
                },

                // arguments for the function
                args: [getRandomColor(), "white"],
            });
            break;
        case "orange":
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['/content/orange.js'],
            });
            chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                files: ['/content/orange.css'],
            })
            break;
        case "green":
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['/content/green.js'],
            });
            chrome.scripting.insertCSS({
                target: { tabId: tab.id },
                files: ['/content/green.css'],
            })
            break;
        case "remove":
            chrome.scripting.removeCSS({
                target: { tabId: tab.id },
                files: ['/content/green.css', '/content/orange.css'],
            });
            break;
        default:
            break;
    }
})


