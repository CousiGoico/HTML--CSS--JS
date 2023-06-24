
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("AddSubtitle").addEventListener("click", (e) => {    
        var subtitle = document.getElementById("SubtitleText").value;
        var start = document.getElementById("Start").value;
        var end = document.getElementById("End").value;
        var video = document.getElementById("video1");
        addSubTitle(subtitle, video, start, end);
    });    

    document.getElementById("AddSubtitleInmediate").addEventListener("click", (e) => {        
        var subtitle = document.getElementById("SubtitleText").value;
        var video = document.getElementById("video1");
        addSubtitleInmediate(subtitle, video);
    });

});

function addSubTitle(subtitle, video, startTime, endTime) {
    let track = video.addTextTrack("captions", "Captions", "en");
    track.mode = "showing";
    track.addCue(new VTTCue(startTime, endTime, subtitle));
}

function addSubtitleInmediate(subtitle, video){
    var currentTime = video.currentTime;
    addSubTitle(subtitle, video, currentTime, currentTime + 1);
}