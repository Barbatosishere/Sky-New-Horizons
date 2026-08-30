// client_scripts/title.js
const TITLE = 'SkyNH 0.3.7-beta';

let osName = '';
try {
    osName = Java.loadClass('java.lang.System').getProperty('os.name', '').toLowerCase();
} catch (err) {

    console.warn('[title.js] cannot detect OS: ' + err);
}

if (osName.includes('win')) {
    Client.setTitle(TITLE);
} else {

    try {
        Client.execute(() => {
            try {
                Client.setTitle(TITLE);
            } catch (err) {
                console.warn('[title.js] failed to set window title: ' + err);
            }
        });
    } catch (err) {
        console.warn('[title.js] cannot schedule title update: ' + err);
    }
}
