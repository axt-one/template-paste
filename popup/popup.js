window.onload = () => {
    const templateEl = document.getElementById('template');
    const messageEl = document.getElementById('message');
    const submitBtnEl = document.getElementById('submit');

    chrome.storage.sync.get(null, items => {
        console.log(items)
        templateEl.value = items.template;
    });

    submitBtnEl.onclick = () => {
        chrome.storage.sync.set({
            template: templateEl.value,
        }, () => {
            messageEl.textContent = 'Saved';
            setTimeout(() => messageEl.textContent = '', 750);
        });
    }
};
