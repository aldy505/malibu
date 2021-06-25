# Contributing

Contributions are always welcome, here's an instruction of how to contribute.

## Local setup

### Install

- Clone the repo first:

```sh
# git
git clone https://github.com/tinyhttp/malibu.git

# (or) hub
hub clone tinyhttp/malibu
```

- Install Node.js (v14 is recommended) and `pnpm`:

```sh
# Install fnm
curl -fsSL https://github.com/Schniz/fnm/raw/master/.ci/install.sh | bash

# Install latest Node.js version
fnm install latest
fnm use latest

# Install pnpm
curl -L https://raw.githubusercontent.com/pnpm/self-installer/master/install.js | node

# Or, via npm
npm i -g pnpm
```

- Install the dependencies at root and in the packages:

```sh
pnpm i
```

### Formatting

If you use VS Code, please install Prettier and ESLint plugins for proper linting and code formatting.

If you use a text editor that doesn't have Prettier integration, you can run `pnpx format:fix"`

## Submitting PRs

### General rules

Here's a small list of requirements for your PR:

- it should be linted and formatted properly using configurations in the root
- it should build without errors and warnings (except edge cases)
- it should have been tested
- PR must have a clear description of what it does, which part of the repo it affects
- if PR is adding a new middleware, it should have an example in the description.

### Adding new example

- Create a folder with the package name in `examples` folder
- Create `package.json` with these fields:

```json
{
  "name": "<name>",
  "type": "module",
  "module": "index.js"
}
```

- create `index.js` (or `index.ts`) file
- create some cool example
- create `README.md` with example title and setup instructions (copy from any near folder and replace needed fields)
- Pull request!

In most other cases, additional steps aren't required. Install, write, test, lint and your code is ready to be submitted!

If everything from the list is done right, feel free to submit a PR! I will look into it asap.

If some further assistance before making a PR is needed, ping [aldy505](https://t.me/aldy505) or [talentlessguy](talentless_guy) on telegram.