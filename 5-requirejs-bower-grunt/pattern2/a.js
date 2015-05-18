function someFunctionToCallBeforeRequireIsSetup() {
    $.find("#runningLog")[0].innerHTML += "<br/>In someFunctionToCallBeforeRequireIsSetup";
}

function someFunctionToCallAfterRequireIsSetup() {
    $.find("#runningLog")[0].innerHTML += "<br/>In someFunctionToCallAfterRequireIsSetup";
}

someFunctionToCallBeforeRequireIsSetup();