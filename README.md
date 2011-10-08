Wadsworth Constant Bookmarklet
==============================

http://i.imgur.com/yxfpC.png

Instructions
------------

Create a bookmark in your browser with the bookmarklet.js contents as the URL.

If your browser does not allow you to do this, open the bookmarklet.htm file and drag the link to your bookmark toolbar or bookmarks folder.

Click the bookmarklet once on a Youtube video page to skip the first third of the video.

Notes
-----

The bookmarklet makes a request to the Youtube API to retrieve the duration of the video. This meta information is normally not loaded into the DOM until the video starts playing. If the video has not started playing, this will still skip forward. This can take a second or two depending on the internet connection speed.

License
-------

This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

http://creativecommons.org/licenses/by-nc-sa/3.0/
