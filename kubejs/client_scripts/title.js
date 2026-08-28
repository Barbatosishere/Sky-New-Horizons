// client_scripts/title.js
// ─────────────────────────────────────────────────────────
// 设置客户端窗口标题。
// Client.setTitle 底层是 GLFW 原生调用（Minecraft.setTitle → Window.setTitle）。
// GLFW 在 macOS 上强制要求主线程执行，而脚本加载阶段通常在非主线程，
// 直接调用会导致 macOS 秒崩（Windows 对此宽容，所以只有 mac 出事）。
// 按系统分支：
//   - Windows：加载时直接设置（实测稳定）
//   - macOS / Linux：投递到主渲染线程执行（Minecraft.execute），
//     并用 try/catch 兜底，失败只打日志不崩游戏
// ─────────────────────────────────────────────────────────
const TITLE = 'SkyNH 0.3.7-beta';

// KubeJS Rhino 未暴露裸 java 包，必须走 Java.loadClass（与 sieve_moss_flowers.js 等一致）
let osName = '';
try {
    osName = Java.loadClass('java.lang.System').getProperty('os.name', '').toLowerCase();
} catch (err) {
    // 检测失败时 osName 保持空串 → 走下方安全分支（主线程投递，全平台可用）
    console.warn('[title.js] cannot detect OS: ' + err);
}

if (osName.includes('win')) {
    Client.setTitle(TITLE);
} else {
    // macOS / Linux：GLFW 原生调用必须回到主线程
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
