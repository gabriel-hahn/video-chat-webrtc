# Video Chat - WebRTC

A simple video chat app developed using Socket.io and WebRTC :movie_camera:

## Getting Started

First of all, you must install all dependencies using [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/) (``yarn`` or ``npm i``) as package manager and than run ``yarn dev`` or ``npm run dev``. The project will opens at ``localhost:3000``.

You have to use [PeerJS](https://peerjs.com/) which simplifies WebRTC for us, connecting users. You can install it globally using [NPM](https://www.npmjs.com/) and run the following command:

``peerjs --port 3001``

Now, you can access ``localhost:3000`` and it will generate a random room hash for you. If you open a new browser tab using the same hash, a new connection will be open and connect both users (video and audio permissions must be allowed).

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/video-chat-webrtc/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/video-chat-webrtc/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
