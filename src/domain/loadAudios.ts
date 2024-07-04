import {TSounds} from "../types/types";

async function loadAudio(soundFile: string) {
    const module = await import(`../assets/sounds/${soundFile}`);
    return new Audio(module.default);
}

export async function loadAudios(sounds: TSounds) {
    sounds.summer = await loadAudio('summer.mp3');
    sounds.winter = await loadAudio('winter.mp3');
    sounds.rain = await loadAudio('rain.mp3');
}
