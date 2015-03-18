// sound 
if (isMobile == false) {
	console.log("buzz.sound");
    var musicVolume = 20;
    var soundBreathing1 = new buzz.sound("music/Breathing1", {
        formats: ["mp3"],
        preload: true,
        autoload: true,
        loop: true
    });
    var soundRunning3 = new buzz.sound("music/Running3", {
        formats: ["mp3"],
        preload: true,
        autoload: true,
        loop: true
    });
    var soundWipe2 = new buzz.sound("music/wipe_medium", {
        formats: ["mp3"],
        preload: true,
        autoload: true,
        loop: true
    });
    
    window.groupSound = new buzz.group([soundBreathing1, soundRunning3, soundWipe2]);
    
    // sound mute
    $("#sound").bind("click", function() {
        window.groupSound.toggleMute();
    });
    
    soundBreathing1.fadeTo(musicVolume, 600);
}