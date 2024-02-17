player = new Clappr.Player({
    source: "https://edge3-moblive.yuppcdn.net/trans1sd/smil:starsports1.smil/chunklist.m3u8",
    type: "application/x-mpegURL",
   mute:false,
    height: 290,
    width: "90%",
    autostart: false,
    poster: 'https://w0.peakpx.com/wallpaper/175/566/HD-wallpaper-santiago-bernabeu-stadium-football-stadium-real-madrid-stadium-soccer-football.jpg',
    parentId: "#clappr",
});

function castChannel(channelNumber) {

    // Check if a player instance already exists, and if so, destroy it.
    if (player) {
        player.destroy();
    }

    // Create a new Clappr player instance.
    player = new Clappr.Player({
        source: "", // Leave this empty initially
        type: "application/x-mpegURL",
        mute: false,
        height: 290,
        width: "90%",
        autostart: false,
        poster: 'https://w0.peakpx.com/wallpaper/175/566/HD-wallpaper-santiago-bernabeu-stadium-football-stadium-real-madrid-stadium-soccer-football.jpg',
        parentId: "#clappr",
    });

    // Define video sources for each channel.                  
    const videoSources = {
        0: "https://ctrl.laotv.la/live/Bsport1/index.m3u8",
        1: "https://ctrl.laotv.la/live/Bsport2/index.m3u8",
        2: "https://edge4-moblive.yuppcdn.net/trans1sd/smil:tensports1.smil/playlist.m3u8",
        3: "https://ctrl.laotv.la/live/TSport1/index.m3u8",
        4: "https://ctrl.laotv.la/live/TSport2/index.m3u8",
        5: "https://hls.streambtw.com/live/stream_5.m3u8",
        6: "https://edge4-moblive.yuppcdn.net/trans1sd/smil:tensports2.smil/playlist.m3u8",
        7: "https://hls.streambtw.com/live/stream_7.m3u8",
        8: "https://hls.streambtw.com/live/stream_8.m3u8",
        9: "https://hls083.vipdracdn.net/streamhls2024/79924c57a3d7d68cd4527999d667a5f4/ep.1.v0.1707617825.m3u8",


        // Add more channels as needed
    };

    // Check if the channelNumber exists in the videoSources object.
    if (videoSources.hasOwnProperty(channelNumber)) {
        // Set the video source and unmute.
        player.load(videoSources[channelNumber]);
        // player.setVolume(0.5); // Unmute the player
    } else {
        console.error("Channel not found");
    }
}

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};
