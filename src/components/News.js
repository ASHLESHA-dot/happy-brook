import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      article: [],
    };
  }
  async componentDidMount() {
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=us&max=10&apikey=98d9f458f1fae84caa2afb8a1e461213`;
    let data = await fetch(url);
    this.props.setProgresss(30);
    let parsedData = await data.json();
    this.props.setProgresss(60);
    console.log(parsedData.totalArticles);
    console.log(parsedData.articles);
    this.setState({ article: parsedData.articles });
    this.props.setProgresss(100);
  }
  render() {
    let { category, setProgresss } = this.props;
    console.log(category);
    // const fetchMoreData = () => {
    //   console.log("fetched");

    //   // a fake async api call like which sends
    //   // 20 more records in 1.5 secs
    //   setTimeout(() => {
    //     this.setState({
    //       article: this.state.article.concat(Array.from({ length: 20 })),
    //     });
    //   }, 1500);
    // };

    return (
      <>
        <div>
          <h2 className="text-center my-2">
            Top News Headlines on {this.props.category}{" "}
          </h2>
        </div>
        {/* <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        > */}
        <div className="row mx-5">
          {this.state.article.map((e) => {
            return (
              <div className="container col-md-4 mx-auto" key={e.url}>
                <NewsItem
                  title={e.title}
                  description={e.description}
                  imgurl={e.image}
                  url={e.url}
                  author={e.name}
                  time={e.publishedAt}
                />
              </div>
            );
          })}{" "}
        </div>
        {/* </InfiniteScroll> */}
      </>
    );
  }
}

export default App;
