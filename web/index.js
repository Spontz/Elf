function gotSystemInfo(info) {
    document.getElementById("launch").innerHTML = '<a href="Launch: start notepad">Launch demo at ' + info.width + " × " + info.height + '</a>';
}