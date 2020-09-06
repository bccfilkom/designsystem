# Contributing Guidelines

This project is bound by a [Code of Conduct](CODE_OF_CONDUCT.md).

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

1. [Fork the repository](https://github.com/)
2. Create your own branch:  
   We suggest to use this branch prefix name:  
   a. bugfix  `git checkout -b bugfix/image-not-loaded`  
      please use this prefix if you want to resolve some issues in our project  
   b. feature `git checkout -b feature/add-circle-images`  
      please use this prefix if you want to add something new  
3. Commit your changes: `git commit -am 'Add/Resolve some feature'`
4. Push to the branch: `git push -u origin <prefix>/<your branch name>`
5. Create a [Pull Request](https://github.com/)!

To keep your fork of in sync with this repository, [follow this guide](https://help.github.com/articles/syncing-a-fork/).

For members of the BCC organisation, or if you have push access to this repository, just clone directly from the repo and push your branches here. It's fine.

## Prerequisites

### Windows, macOS and Linux

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (10.0.0+)
- [Yarn](https://yarnpkg.com/) (1.x)
- Text Editor with [EditorConfig](http://editorconfig.org/) & [Prettier](https://prettier.io/) support. (We recommend [Visual Studio Code](https://code.visualstudio.com/))

In general, contributors should use Node v10 and Yarn v1.x

#### Prerequisite Check

Run these commands inside the Terminal (PowerShell/Command Prompt for Windows).

**Git:** You should see the version number:

```sh-session
$ git version
git version 2.18.0
```

**Node.js:** You should see the version number:

> Note that we use `.nvmrc` in the root of this repository, to run `nvm use` automatically please kindly follow this [documentation](https://github.com/nvm-sh/nvm#nvmrc)

```sh-session
$ node -v
v10.17.0
```

**Yarn:** You should see the version number:

```sh-session
$ yarn -v
1.9.4
```

## Setting Up

First, you should clone the repository that you forked.

```sh-session
$ git clone https://github.com/
```

For example:

```sh-session
$ git clone https://github.com/
```

After this repository has been cloned, `cd` into the repository:

```sh-session
$ cd design-system
```

Install the project's dependencies. Note that we use Yarn, not npm:

```sh-session
$ yarn
```
