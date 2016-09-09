 // Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

// One more Example Album
 var albumSharada = {
     title: 'The Mountains',
     artist: 'Sharada Thimmaiah',
     label: 'EM',
     year: '2016',
     albumArtUrl: 'assets/images/album_covers/21.png',
     songs: [
         { title: 'Life is beautiful', duration: '1:01' },
         { title: 'Take care of nature', duration: '5:01' },
         { title: 'Birds are flying', duration: '3:21'},
         { title: 'Water flowing', duration: '3:14' },
         { title: 'Trees waving', duration: '2:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return $(template);
 };
     // elements to populate dynamically

     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
     
     
var setCurrentAlbum = function(album) {
    
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
     $albumSongList.empty();
 
     for (var i = 0; i < album.songs.length; i++) {
       var $newRow = createSongRow(i + 1, album.songs[i].title,album.songs[i].duration);
         $albumSongList.append($newRow);
        
     }
 };

var findParentByClassName = function(element, targetClass) {
    if (element) {

        var currentParent = element.parentElement;

        if(currentParent === null){
           alert('No parent found')
        }

        while (currentParent !== null && currentParent.className !== targetClass && currentParent.className !== null) {
          currentParent = currentParent.parentElement  
        }

        if(currentParent === null) {
          alert("No parent found with that class name");
        }

        return currentParent;
    }
};

var getSongItem = function(element){
  switch (element.className) {
      case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
          return;
    }
};

var clickHandler = function(targetElement) {
  
  var songItem = getSongItem(targetElement);  
  
  if (currentlyPlayingSong === null) {
      songItem.innerHTML = pauseButtonTemplate;
      currentlyPlayingSong = songItem.getAttribute('data-song-number');
  } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
  } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
  }

};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 // Store state of playing songs
 var currentlyPlayingSong = null;
 
 window.onload = function() {
   setCurrentAlbum(albumPicasso);
   
   songListContainer.addEventListener('mouseover', function(event){
     
      if (event.target.parentElement.className === 'album-view-song-item') {
        
         var songItem = getSongItem(event.target);

            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
                songItem.innerHTML = playButtonTemplate;
            }
      }
   });
   
   var albums = [albumPicasso, albumMarconi, albumSharada];
   index = 0;
     albumImage.addEventListener("click", function(event){
       setCurrentAlbum(albums[index++]);
       if (index == albums.length){
         index = 0;
       }                          
    });
      for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
     
         var songItem = getSongItem(event.target);
         var songItemNumber = songItem.getAttribute('data-song-number');
           
         if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }
 
     });
         songRows[i].addEventListener('click', function(event) {
           clickHandler(event.target);
         });
     }
 };