function insertTemplate() {
    chrome.storage.sync.get(null, items => {
        var selectedArea = document.activeElement;
        console.log(selectedArea)
        if (typeof selectedArea.value !== "undefined") {
            selectedArea.value = selectedArea.value.substr(0, selectedArea.selectionStart)
                + items.template
                + selectedArea.value.substr(selectedArea.selectionStart);
        }
    });
}

chrome.runtime.onMessage.addListener(
    function(id, msg, f) {
        console.log('received');
        insertTemplate();
        f();
        return true;
    }
);
