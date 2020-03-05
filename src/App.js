import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      trails: [],
      searchField: ''
    };

  }
  componentDidMount(){
    const mountains = {
        "seedTrails":[
          {
          'name': 'Towsley View Loop Trail',
          'imageurl':'https://www.hikespeak.com/img/la/Towsley_Canyon/Towsley_View_Loop_IMG_9436.jpg',
          'location': 'Newhall, CA',
          'length': '5.4 mi (loop)',
          'elevation_change': '1075 ft',
          'hiking_time': '3 hrs',
          'id': '0'
        },
        {
          'name': 'Los Pinetos Waterfall via Canyon Trail & Waterfall Trail',
          'imageurl':'https://www.hikespeak.com/img/la/Placerita/Placerita_Canyon_Trail_IMG_9331.jpg',
          'location': 'Newhall, CA',
          'length': '5.33 mi (out and back)',
          'elevation_change': '560 ft',
          'hiking_time': '2 hrs and 30 mins',
          'id': '1'
        },
        {
          'name': 'Ecology Trail',
          'imageurl':'https://www.hikespeak.com/img/la/Placerita/Placerita_Canyon_Ecology_Trail_IMG_9587.jpg',
          'location': 'Newhall, CA',
          'length': '.65 mi (lollipop loop)',
          'elevation_change': '100 ft',
          'hiking_time': '15 mins',
          'id': '2'
        }
      ] 
    }
    this.setState({
      trails: mountains.seedTrails
    });
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  }


  render(){
    const { trails, searchField } = this.state;
    const filteredTrails = trails.filter(trail =>
      trail.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <header className="App-header">
          <h1>Trails List</h1>
          <SearchBox placeholder='Search Trails by Name' 
          handleChange={this.handleChange}/>
          <p><br></br></p>
        <CardList trails = {filteredTrails}>
        </CardList>
        </header>
      </div>
    );
  }
}

export default App;
