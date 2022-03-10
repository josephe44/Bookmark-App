function BookmarkItem({ data }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl mb-2 w-11/12">
        <div className="card-body">
          <h4 className="card-title capitalize">{data.name}</h4>
          <p className="text-xs">{data.desc}</p>
          <div className="card-actions justify-end">
            <a href={data.website} className="btn btn-primary">
              vist
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookmarkItem
