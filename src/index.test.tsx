import * as React from 'react'
import { render } from '@testing-library/react'
import { H, HLevel } from './index'

describe('headings', () => {
  test('renders a h2 if using <H> outside of <HLevel>', () => {
    let { container } = render(<H>content</H>)
    let $h2 = container.querySelector('h2') as HTMLElement
    expect($h2.outerHTML).toEqual('<h2>content</h2>')
  })

  test('renders dynamic heading levels', () => {
    let { container, debug } = render(
      <div>
        <H>should be an h2</H>
        <HLevel>
          <H>should be an h3</H>

          <HLevel>
            <H>should be an h4</H>
          </HLevel>
        </HLevel>
      </div>
    )

    let tags = ['h2', 'h3', 'h4']

    for (let tag of tags) {
      let $h = container.querySelector(tag) as HTMLElement

      expect($h.outerHTML).toEqual(`<${tag}>should be an ${tag}</${tag}>`)
    }
  })

  test("doesn't render past an h6", () => {
    let { container, getByText } = render(
      <div>
        <HLevel>
          <HLevel>
            <HLevel>
              <HLevel>
                <HLevel>
                  <HLevel>
                    <HLevel>
                      <HLevel>
                        <H>this is a heading</H>
                      </HLevel>
                    </HLevel>
                  </HLevel>
                </HLevel>
              </HLevel>
            </HLevel>
          </HLevel>
        </HLevel>
      </div>
    )

    let $h = getByText('this is a heading')
    expect($h.outerHTML).toEqual('<h6>this is a heading</h6>')
  })
})
