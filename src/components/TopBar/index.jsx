import { Link, useLocation } from "react-router-dom"

const TopBar = () => {


  return (
    <div className='flex justify-between'>
      <div className="left-leaning">
        <PageTitle />
        <Breadcrumbs />
      </div>
      <div className="right-leaning">
        
      </div>
    </div>
  )
}

const PageTitle = () => {
  return (
    <div>Dashboard</div>
  )
}

const Breadcrumbs = () => {
  const location = useLocation()
  console.log(location);
  let currentLink = ''

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== "").map((crumb, idx) => {
    currentLink += `${crumb}`
    return (
      <div className="crumb" key={`${crumb}-${idx}`}>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    )
  })
  return (
    <>
      {crumbs}
    </>
  )
}

export default TopBar