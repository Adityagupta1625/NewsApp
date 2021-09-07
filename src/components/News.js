import React, { Component } from "react";
import PropTypes from 'prop-types'
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps={
      country:'in',
      pageSize:8,
      category:'general',
      totalresult:0,
    }
    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
    articles= [];
   
  constructor(props){
      super(props);
      this.state={
          articles:this.articles,
          loading: true,
          page:1,
          totalresult: this.totalresult
        
    }
    document.title=`${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1).toLowerCase()}-News`;
  }
  fetchMoreData= async ()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page+1})
    let data=await fetch(url);
    
    let parsedData=await data.json();
    
    this.setState({articles:this.state.articles.concat(parsedData.articles),totalresult: parsedData.totalResults});
    
  }
  async componentDidMount(){
   
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles,totalresult: parsedData.totalResults});

  }

    render() {

    return (
      <>
     
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalresult}
          loader={'Loading....'}
        >
        <h2 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>Top {this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1).toLowerCase()} Headlines </h2>
         <div className="container">
        
          <div className="row">
          {this.state.articles.map((element) => {
            if(element.urlToImage){

             return <div key={element.url}className="col-md-4">
             <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedat={element.publishedAt} source={element.source.name}></NewsItem></div>
            }
           
          })}
        </div>
        </div>
        </InfiniteScroll>
  
        
      
      </>
    );
  }
}
