<h1 align="center">Welcome to ghostChat 👻</h1>
<img align="center" src="docs/media/icon.png" title="Icon"></a>
<p>
    <a href="https://www.npmjs.com/package/readme-md-generator">
    <img alt="downloads" src="https://img.shields.io/github/contributors/imthaghost/ghostChat?color=green" target="_blank" />

  </a> 
  
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
   <a href="https://github.com/imthaghost/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
  
</p>

> Offering anonymous chatting services for people who do not want to waste time configuring computer settings. ghostChat provides [onion routing](https://en.wikipedia.org/wiki/Onion_routing) configuration while establishing intial connection via [clearnet](<https://en.wikipedia.org/wiki/Clearnet_(networking)>).

> Running on AWS [here](http://3.18.215.82:1234/) - linux server

![Example](/docs/media/clean.png)

### 💻 Prerequisites

What things you need to run the software

```bash
- Python 3.4+
- Pipenv
- Brew
- postgreSQL
- Redis
- Node
```

## 🚀 Getting Started - Local

### macOS Mojave 10.0+, Catalina 10.1+

```bash
# clone the repo
git clone https://github.com/imthaghost/ghostChat
# start redis service
brew services start redis
# install tor
brew install tor
# start tor services
tor
# change into clearnet directory
cd clearnet
# create your own superuser
python manange.py createsuperuser
# start django server
python manage.py runserver
# in a new shell
cd frontend
# install parcel
npm install parcel
# start node service
npm start
```
## 🚀 Deployment Server
```bash
# server
You can go to ip address: http://3.18.215.82:1234/
# credentials
You can login with credentials:
username: ghost
password: ouoyou12
```

> Currently there is a bug, in order to create a chat with a new user you have to manually add them as a contact in the admin panel.

## :white_check_mark: Todo

-   [x] Import Template
-   [x] Login/Signup Template
-   [x] Link postgreSQL database
-   [x] User Authentication
-   [x] single room/user chat
-   [x] allow each user to create chats with other users
-   [x] Allow client connections with Websockets
-   [x] Websockets with Nginx
-   [x] Host server from EC2 instance
-   [x] Tor websockets

## :hammer: Built With

-   [Django](https://www.djangoproject.com/) - Web Framework used
-   [nginx](https://www.nginx.com/)- web serving, reverse proxying, caching, load balancing, media streaming, and more.
-   [Channels 2](https://channels.readthedocs.io/en/latest/) - Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It’s built on a Python specification called ASGI.
-   [Redis](https://pypi.org/project/redis/) - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.
-   [daphne](https://pypi.org/project/daphne/) - Daphne is a HTTP, HTTP2 and WebSocket protocol server for ASGI and ASGI-HTTP, developed to power Django Channels.
-   [psycopg2-binary](https://pypi.org/project/psycopg2-binary/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language.
-   [django-rest-auth](https://django-rest-auth.readthedocs.io/en/latest/) - library provides a set of REST API endpoints for registration, authentication (including social media authentication), password reset, retrieve and update user details, etc.
-   [async-timeout](https://pypi.org/project/async-timeout/) - Timeout context manager for asyncio programs
-   [hiredis](https://pypi.org/project/hiredis/) - Python wrapper for hiredis
-   [requests](https://pypi.org/project/requests/) - Python HTTP for Humans.
-   [lazy-object-proxy](https://pypi.org/project/lazy-object-proxy/) - A fast and thorough lazy object proxy.
-   [pytz](https://pypi.org/project/pytz/) - World timezone definitions, modern and historical

## 🤝 Contribution Guidlines


### Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

### We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

### Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

### Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

### Write bug reports with detail, background, and sample code

[This is an example](http://stackoverflow.com/q/12488905/180626) of a bug report I foun, and I think it's not a bad model. Here's [another example from Craig Hockenberry](http://www.openradar.me/11905408), an app developer whom I greatly respect.

**Great Bug Reports** tend to have:

-   A quick summary and/or background
-   Steps to reproduce
    -   Be specific!
    -   Give sample code if you can. [My stackoverflow question](http://stackoverflow.com/q/12488905/180626) includes sample code that _anyone_ with a base R setup can run to reproduce what I was seeing
-   What you expected would happen
-   What actually happens
-   Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

### Use a Consistent Coding Style

-   PEP 8 style unification
-   2 spaces for indentation rather than tabs (or tabs that convert to spaces)
-   You can try running `pipenv install autopep8 --dev` for style unification

## 📝 License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/imthaghost"><img src="https://avatars3.githubusercontent.com/u/46610773?s=460&v=4" width="75px;" alt="Gary Frederick"/><br /><sub><b>Gary Frederick</b></sub></a><br /><a href="https://github.com/imthaghost/ghostChat/commits/master" title="Code">💻</a></td>
    </tr>
</table>

## ✨ Show your support

<a href="https://www.buymeacoffee.com/imthaghost" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
