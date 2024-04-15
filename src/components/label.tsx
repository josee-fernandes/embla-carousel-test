import { PropsWithChildren } from 'react'

interface LabelProps extends PropsWithChildren {
  color: string
}

export const Label: React.FC<LabelProps> = ({ children, color }) => {
  return (
    <li>
      <div style={{ backgroundColor: color }} />
      <p>{children}</p>
    </li>
  )
}
