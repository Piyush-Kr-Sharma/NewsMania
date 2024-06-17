import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;  // this is how we use props in class based components
    return (
      <div className='my-3'>
        <div className="card">

        <div style={{display: 'flex',position: 'absolute', justifyContent: 'flex-end', right: '0'}}>
          <span className="badge rounded-pill bg-danger" style={{left: '85%', zIndex:'1'}}> {source} </span>
        </div>

        <img src={imageUrl?imageUrl:"https://fdn.gsmarena.com/imgroot/news/23/08/apple-ipad-pro-2024/-952x498w6/gsmarena_000.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
         </div>
       </div>
      </div>
    )
  
}

export default NewsItem
