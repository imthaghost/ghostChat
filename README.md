# ghostChat

<img src="docs/media/thaghost.png" title="Icon"></a>

## Description

For people who want anonymity in a chat server without having to waste time configuring your computer. ghostChat provides onion routing configuration while establishing intial connection via clearnet.

### Prerequisites

What things you need to install the software and how to install them

```bash
- Pipenv
- Python 3.4+
- postgreSQL
```

## Getting Started

### mac OS Mojave-Catalina

```bash
# clone the repo
git clone https://github.com/imthaghost/ghostChat
# change into ghostChat directory
cd ghostChat
# instantiate postgre database
brew services start postgresql
# start django server
python3 manage.py runserver
```

## Todo

-   [x] Import Template
-   [ ] User authentication
-   [ ] Host server from EC2 instance
-   [ ] Allow connected clients

## Built With

-   [Django](https://www.djangoproject.com/) - Web Framework used

# Contribution Guidlines

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

-   Reporting a bug
-   Discussing the current state of the code
-   Submitting a fix
-   Proposing new features
-   Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Clone the repo and create your branch from `master`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/briandk/transcriptase-atom/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](); it's that easy!

## Write bug reports with detail, background, and sample code

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

## Use a Consistent Coding Style

I'm again borrowing these from [Facebook's Guidelines](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)

-   2 spaces for indentation rather than tabs (or tabs that convert to spaces)
-   You can try running `pipenv install autopep8 --dev` for style unification

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Authors

-   **Gary Frederick** - _Contributor_ - [imthaghost](https://github.com/imthaghost)
