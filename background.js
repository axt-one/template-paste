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

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('clicked');
    chrome.tabs.sendMessage(tab.id, {hello: 'hello'}, () => {});
})

chrome.commands.onCommand.addListener((command, tab) => {
    console.log(command)
    if (command === "cmd") {
        chrome.tabs.sendMessage(tab.id, {hello: 'hello'}, () => {});
    }
});
