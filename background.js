let table;

chrome.runtime.getPackageDirectoryEntry(function(root) {
    root.getFile("matrix.json", {}, function(fileEntry) {
        fileEntry.file(function(file) {
            let reader = new FileReader();
            reader.onloadend = function(e) {
                table = JSON.parse(this.result).matrix;
            };
            reader.readAsText(file);
        });
    });
});


chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.getSelected(null, (tab) => {
        let param = {table : table};
        console.log(table)
        chrome.tabs.sendRequest(tab.id, param, (response) => {
            console.log("password view: complete");
        });
        return true;
    });
});
