import React from 'react'
import styled from 'styled-components/macro'

const FadeInSectionWrapper = styled.div<{ isVisible: boolean; delay?: number }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'none' : 'translateY(10vh)')};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: opacity 1200ms ease-out, transform 600ms ease-out, visibility 1200ms ease-out;
  ${({ delay }) => delay != null && `transition-delay: ${delay}ms;`}
  will-change: opacity, transform, visibility;
`

const FadeInSection = (props: any) => {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible(entry.isIntersecting)
      })
    })
    if (domRef.current) observer.observe(domRef.current)
  }, [])
  return (
    <FadeInSectionWrapper ref={domRef} isVisible={isVisible} delay={props?.delay}>
      {props.children}
    </FadeInSectionWrapper>
  )
}

export default FadeInSection
