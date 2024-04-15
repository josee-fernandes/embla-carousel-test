import { PropsWithChildren } from 'react'

interface LabelProps extends PropsWithChildren {
  color: string
  left?: number
}

export const Label: React.FC<LabelProps> = ({ children, color, left = 0 }) => {
  return (
    <li
      style={{
        marginLeft: `${left}rem`,
      }}
    >
      <div style={{ backgroundColor: color }} />
      <p>{children}</p>
    </li>
  )
}
