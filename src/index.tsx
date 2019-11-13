import React, {
  createContext,
  HTMLProps,
  ReactNode,
  createElement,
  useContext,
} from 'react'

let DEFAULT_HEADING_LEVEL = 2

export let LevelContext = createContext(DEFAULT_HEADING_LEVEL)

type HProps = HTMLProps<HTMLHeadingElement>

export let H = (props: HProps) => {
  let level = useContext(LevelContext)

  let tag = 'h' + Math.min(level, 6)

  return createElement(tag, props, props.children)
}

type HLevelProps = { children: ReactNode }

export let HLevel = ({ children }: HLevelProps) => {
  let level = useContext(LevelContext)

  return (
    <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
  )
}
