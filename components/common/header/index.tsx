import HeaderDesktop from './header-desktop'
import HeaderMobile from './header-mobile'

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
}
