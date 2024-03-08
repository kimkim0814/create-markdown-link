document.addEventListener('keydown', function(event) {
  keysPressed[event.key] = true;
    if (keysPressed['d'] && keysPressed['v']) {
      copySelectedTextAsMarkdown();
    }
});

document.addEventListener('keyup', function(event) {
    delete keysPressed[event.key];
});


let keysPressed = {};

function getSelectedTextAndUrl() {
  const selectedText = window.getSelection().toString();
  const url = window.location.href;
  return { selectedText, url };
}

function copyAsMarkdown(selectedText, url) {
    let markdownLink = `[${selectedText}](${url})`;
    navigator.clipboard.writeText(markdownLink);
}


function copySelectedTextAsMarkdown() {
    const { selectedText, url } = getSelectedTextAndUrl();
    copyAsMarkdown(selectedText, url);
}





