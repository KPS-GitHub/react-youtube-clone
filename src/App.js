import React, { Component } from 'react';
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import { Container, Row, Col } from "reactstrap";
import YouTubeSearch from "youtube-api-search";
const apiKey = "AIzaSyDAblNm4P8AM7tI4vQr384Petc7cCE1o6c";


class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
      // note: ajax calls are asynchronous => it could load before the component mounts
      //        -this is bad because you would then be trying to use the return from the ajax call to affect the state of
      //         a component that hasn't mounted yet (component must mount before you can affect the state)
    this.runSearch("fish sticks");
  }

  // when writing functions in components, always consider whether it should be normal (runSearch() {}) or an arrow function
  runSearch = (term) => {
    // note: 'videos' below is the return of the search, aka the videos that are returned when we successfully run YouTubeSearch()
    //        with a valid apiKey and a term
    YouTubeSearch({ key: apiKey, term: term }, videos => {
      console.log(videos);
      this.setState({videos: videos, selectedVideo: videos[0]});
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar/>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <VideoDetail selectedVideo={this.state.selectedVideo} exampleAddtlProp="exAddtlPropText" />
          </Col>
          <Col md="4">
            <VideoList />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
