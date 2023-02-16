import FadeInLib from 'react-fade-in'

export const FadeIn = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <FadeInLib transitionDuration={1000} className={'no-overflow'}>
      {children}
    </FadeInLib>
  )
}
