# eslint-plugin-eslint-file-description

A plugin to lint for a descriptive comment that tells what&#39;s the purpose of the file

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-file-description`:

```sh
npm install @abdulrehmanmehar/eslint-file-description --save-dev
```

## Usage

Add `@abdulrehmanmehar/eslint-file-description` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "@abdulrehmanmehar/eslint-file-description"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "@abdulrehmanmehar/eslint-file-description/eslint-file-description/file-description": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


```
    file-description
```