chrome.runtime.onInstalled.addListener(function (details) {
    var settings = {
        "template": "your template\nPrease edit this."
    };
    chrome.storage.sync.set(settings, () => {
    });
    const parent = chrome.contextMenus.create({
        title : 'Paste Template',
        type : 'normal',
        contexts : ['all'],
        id: 'testid'
    });
});

function sendMessage(id, message) {
    if (id >= 0) {
        chrome.tabs.sendMessage(id, message, () => {});
    }
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('clicked');
    sendMessage(tab.id, {hello: 'hello'})
})

chrome.commands.onCommand.addListener((command, tab) => {
    console.log(command)
    console.log(tab.id)
    if (command === "cmd") {
        sendMessage(tab.id, {hello: 'hello'})
    }
});
