import { CloseCircle, HambergerMenu } from 'iconsax-react'
import React, { ReactNode, useEffect, useState } from 'react'
import { animated, config, useTransition } from 'react-spring'

import IconButton from 'theme/Button/IconButton'
import { Flex } from 'theme/base'

const MobileMenu = ({ activeIndex, children }: { activeIndex: number; children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [activeIndex])

  const fullscreenMenu = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: 'scale(0.80)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
      background: '#000',
      position: 'fixed',
      maxHeight: '100vh',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: { opacity: 0, transform: 'scale(0.80)' },
    config: config.default,
  })

  const openButton = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: 'scale(0)',
      position: 'absolute',
      top: -20,
      right: 4,
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: config.default,
  })

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div style={{ position: 'relative', zIndex: 20, marginLeft: 'auto' }}>
        {openButton((props: any, item) =>
          !item ? (
            <animated.div style={props}>
              <IconButton variant="ghost" onClick={toggleMenu} icon={<HambergerMenu />} mt={0} />
            </animated.div>
          ) : (
            <animated.div style={props}>
              <IconButton variant="ghost" onClick={toggleMenu} icon={<CloseCircle />} />
            </animated.div>
          )
        )}
      </div>

      <div>
        {fullscreenMenu(
          (props, item) =>
            item && (
              <animated.div style={props}>
                <Flex alignItems="center" justifyContent="center" flexDirection="column" width="100%" height="100%">
                  {children}
                </Flex>
              </animated.div>
            )
        )}
      </div>
    </>
  )
}

export default MobileMenu
