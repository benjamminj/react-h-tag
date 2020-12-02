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

## Adjusting heading levels

By default, you shouldn't have to worry much about your heading levels. Just drop `H` components throughout your app and they'll figure out what they need to be based on whether they're inside an `HLevel` context or not.

However, occasionally you have two heading levels side by side, like in the following HTML:

```html
<div>
  <h2>heading 2</h2>
  <h3>heading 3</h3>
</div>
```

As a convenience for these situations, you can use the `increase` prop to adjust the level of the current `H` tag

```jsx
<div>
  <H>heading 2</H>
  <H increase={1}>heading 3</H>
</div>
```

## Trade-Offs & Caveats

### `h1` tags

By design, `react-h-tag` **does not allow you to create `h1` tags**. Since you should only have a single `h1` tag on your page, there isn't much need to dynamically figure out `h1` tags. This decisions helps you avoid accidentally shipping multiple `h1` tags and shooting yourself in the foot.
