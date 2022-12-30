var script = {
    version: function() {
        ver = ScriptEngine() + ' V ';
        ver += ScriptEngineMajorVersion() + '.';
        ver += ScriptEngineMinorVersion() + '.';
        ver += ScriptEngineBuildVersion();
        alert(ver);
        return ver;
    }
}

function isExist(value) {
    return !(value == undefined || value == null || value == '');
}

function isNotExist(value) {
    return !isExist(value);
}

function getElementValue(elementId) {
    obj = document.getElementById(elementId);
    return String(obj.value);
}
function setElementValue(elementId, value) {
    obj = document.getElementById(elementId);
    obj.value = String(value);
}
function removeStrings(text, removes) {
    removes.forEach(function (remove, index, removes) {
        text = text.replace(remove, '');
    })
    return text;
}
function copy(text) {
    if (isNotExist(window.clipboardData))
        return false;
    window.clipboardData.setData("text", text);
}
function paste() {
    if (isNotExist(window.clipboardData))
        return false;
    return window.clipboardData.getData("text");
}