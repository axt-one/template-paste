chrome.runtime.onInstalled.addListener(function (details) {
    const settings = {
        "template": "1. 修了時の目標\n    - \n2. 月単位程度の計画\n    - \n3. 今週やったこと\n    - \n4. 来週やること\n    - "
    };
    chrome.storage.sync.set(settings, () => {
    });
    const parent = chrome.contextMenus.create({
        title: 'Paste Template',
        type: 'normal',
        contexts: ['all'],
        id: 'testid'
    });
});

function sendMessage(id, message) {
    if (id >= 0) {
        chrome.tabs.sendMessage(id, message, () => { });
    }
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
    console.log('clicked');
    sendMessage(tab.id, {})
})

chrome.commands.onCommand.addListener((command, tab) => {
    console.log(command)
    console.log(tab.id)
    if (command === "cmd") {
        sendMessage(tab.id, {})
    }
});
