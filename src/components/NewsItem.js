import React, { Component } from "react";

export default class NewsItem extends Component {
 
  render() {
    let { title, description,imgurl,newsUrl,author,publishedat,source } = this.props;
    return (
    <div className="my-3">
      <div className="card">
      <span className=" badge rounded-pill bg-danger" style={{ 
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'}} >
      <span>{source}</span>

  </span>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
         
          <p className="card-text"><small className="text-muted">Last updated by {author?author:"Unknown"} on {new Date(publishedat).toGMTString()}</small></p>
          <a href={newsUrl}  className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
      </div>
    );
  }
}
