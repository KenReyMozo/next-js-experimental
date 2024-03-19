type LayoutT = {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}

const Layout = (props: LayoutT) => {
  const { children, team, analytics } = props;
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}

export default Layout