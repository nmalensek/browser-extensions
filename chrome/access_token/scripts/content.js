let pressed = new Set();

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return;
    }

    switch (event.key) {
        case 'Shift':
            pressed.add('Shift');
            break;
        case 'Control':
            pressed.add('Control');
            break;
        case 'C':
            if (pressed.has('Shift') && pressed.has('Control')) {
                navigator.permissions.query({name: 'clipboard-write'}).then((result) => {
                    if (result.state === 'granted' || result.state === 'prompt') {
                        navigator.clipboard.writeText(localStorage.accessToken);
                    }
                });

                pressed = new Set();
            }
            
            break;
    }
});