// client_scripts/title.js
const TITLE = 'SkyNH 0.3.8';

try {
    Client.setTitle(TITLE);
} catch (err) {
    try {
        Client.execute(() => {
            try {
                Client.setTitle(TITLE);
            } catch (inner) {
                console.warn('[title.js] failed to set window title: ' + inner);
            }
        });
    } catch (scheduleErr) {
        console.warn('[title.js] cannot schedule title update: ' + scheduleErr);
    }
}
