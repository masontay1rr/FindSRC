(function() {
    function openInNewTab(url) {
        window.open(url, '_blank');
    }

    function findAndOpenSrcFiles() {
        var images = document.querySelectorAll('img[src]');
        var audio = document.querySelectorAll('audio[src]');

        images.forEach(function(img) {
            openInNewTab(img.src);
        });

        audio.forEach(function(aud) {
            openInNewTab(aud.src);
        });
    }

    var button = document.createElement('button');
    button.innerText = 'Find SRC';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.fontFamily = 'Pixelify Sans, sans-serif';
    button.style.fontWeight = 'bold';
    button.style.padding = '10px 20px';
    button.style.border = '2px solid transparent';
    button.style.backgroundImage = 'linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red)';
    button.style.backgroundSize = '400% 400%';
    button.style.animation = 'rainbow 5s linear infinite';
    button.style.textShadow = '1px 1px 2px black'; // Add text shadow for outline
    button.onclick = findAndOpenSrcFiles;

    var credits = document.createElement('div');
    credits.innerText = 'by masontay1rr';
    credits.style.position = 'fixed';
    credits.style.top = '35px';
    credits.style.right = '10px';
    credits.style.zIndex = '9999';
    credits.style.color = 'white';

    // Define CSS animation
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbow {
            0% {
                background-position: 0% 50%;
            }
            100% {
                background-position: 100% 50%;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(button);
    document.body.appendChild(credits);

    // Load Google Fonts
    var link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Pixelify+Sans';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
})();