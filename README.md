# react-h-tag

Automate heading levels for your React app.

## <!-- TODO: tags / chips (build, gzip, prettier, etc.) -->

## Installation

```bash
npm install react-h-tag
```

Or, if you prefer [`yarn`](https://yarnpkg.com):

```bash
yarn add react-h-tag
```

## Requirements

`react-h-tag` uses React 16.9.0+ as a peer dependency.

## Usage

In order to create a heading element, use the `H` component.

```jsx
import { H } from 'react-h-tag'

function App() {
  return (
    <div>
      <h1>some fancy big h1</h1>

      <H>this will be an h2</H>
    </div>
  )
}
```

By default all `H` components will render as `<h2>` elements—in order to automatically increase heading levels all you need to do is wrap `H` in an `HLevel`.

```jsx
import { H, HLevel } from 'react-h-tag'

function App() {
  return (
    <div>
      <h1>some fancy big h1</h1>

      <H>second best, this is a h2</H>

      <HLevel>
        <H>just a modest h3</H>
      </HLevel>
    </div>
  )
}
```

You can nest `HLevels` to let the heading system increase the heading level even further. However, the heading level maxes out at `<h6>` since there's no such thing as `<h7>`, `<h8>`, etc.

```jsx
import { H, HLevel } from 'react-h-tag'

function App() {
  return (
    <div>
      <h1>some fancy big h1</h1>

      <H>second best, this is a h2</H>

      <HLevel>
        <H>just a modest h3</H>

        <HLevel>
          <H>smaller now, it's a h4</H>

          <HLevel>
            <H>h5</H>

            <HLevel>
              <H>h6</H>

              <HLevel>
                <H>still an h6, we maxed it out.</H>
              </HLevel>
            </HLevel>
          </HLevel>
        </HLevel>
      </HLevel>
    </div>
  )
}
```
