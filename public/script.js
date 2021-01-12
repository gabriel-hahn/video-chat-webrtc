const socket = io('/');

const videoGridEl = document.getElementsByClassName('video-grid')[0];
const currentVideoEl = document.createElement('video');

currentVideoEl.muted = true;

const peers = {};

const currentPeer = new Peer(undefined, {
  host: '/',
  port: '3001',
});

const addVideoStream = (video, stream) => {
  video.srcObject = stream;

  video.addEventListener('loadedmetadata', () => {
    video.play();
  });

  videoGridEl.append(video);
};

const connectToNewUser = (userId, stream) => {
  const call = currentPeer.call(userId, stream);
  const video = document.createElement('video');

  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream);
  });

  call.on('close', () => {
    video.remove();
  });

  peers[userId] = call;
};

const startStream = (stream) => {
  addVideoStream(currentVideoEl, stream);

  currentPeer.on('call', call => {
    call.answer(stream);

    const video = document.createElement('video');

    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream);
    })
  });

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream);
  });
};

const getUserMedia = () => {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(startStream);
};

currentPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id);
});

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close();
});

getUserMedia();
