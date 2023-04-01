import './Gigs.scss'

const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <div className="breadcrumbs">Fiverr/Graphics & Design</div>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <div className="price">Price:</div>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <p>Sort by:</p>
            <div>Recommended</div>
            <span>&#709;</span>
          </div>
        </div>
        <div className="gigs__listings">
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
          <div className="gig-card"></div>
        </div>
      </div>
    </div>
  )
}

export default Gigs