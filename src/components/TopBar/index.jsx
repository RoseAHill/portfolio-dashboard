const TopBar = () => {
  return (
    <div className='flex justify-between'>
      <div className="left-leaning">
        <PageTitle />
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


export default TopBar