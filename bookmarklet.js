xhr=new XMLHttpRequest();
xhr.open('GET','https://gdata.youtube.com/feeds/api/videos/'+yt.config_.VIDEO_ID+'?v=2&alt=json',false);
xhr.send();
data = eval('('+xhr.responseText+')');
yt.www.watch.player.seekTo(Math.floor(data.entry.media$group.yt$duration.seconds*0.3));
