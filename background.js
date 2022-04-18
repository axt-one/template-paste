chrome.runtime.onInstalled.addListener(function (details) {
    var settings = {
        "template": "1. 修了時の目標\n    - \n2. 月単位程度の計画\n    - \n3. 今週やったこと\n    - \n4. 来週やること\n    - "
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
