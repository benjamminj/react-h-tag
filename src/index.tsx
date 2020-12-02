import React, {
  createContext,
  HTMLProps,
  ReactNode,
  createElement,
  useContext,
} from 'react'

const DEFAULT_HEADING_LEVEL = 2

export const LevelContext = createContext(DEFAULT_HEADING_LEVEL)

type HProps = HTMLProps<HTMLHeadingElement>

export const H = (props: HProps) => {
  const level = useContext(LevelContext)

  const tag = 'h' + Math.min(level, 6)

  return createElement(tag, props, props.children)
}

type HLevelProps = { children: ReactNode }

export const HLevel = ({ children }: HLevelProps) => {
  const level = useContext(LevelContext)

  return (
    <LevelContext.Provider value={level + 1}>{children}</LevelContext.Provider>
  )
}
