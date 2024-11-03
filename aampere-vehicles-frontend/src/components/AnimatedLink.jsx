import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { flushSync } from 'react-dom'

export const AnimatedLink = ({ to, children, className }) => {
  const navigate = useNavigate()

  return (
    <a
      href={to}
      onClick={(ev) => {
        ev.preventDefault()
        document.startViewTransition(() => {
          flushSync(() => {
            navigate(to)
          })
        })
      }}
      className={className}
    >
      {children}
    </a>
  )
}

AnimatedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
