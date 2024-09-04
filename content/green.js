
// When the page is double clicked on an image
for (const img of document.querySelectorAll('img')) {
    img.ondblclick = () => {
        const result = window.confirm('Change Background to Pink?');
        if (result) {
            document.body.style.background = 'pink';
        }
    }
}
