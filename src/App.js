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
        },
        {
          'name': 'Escondido Falls',
          'imageurl':'https://www.hikespeak.com/img/la/Escondido/Escondido_Falls_2615.jpg',
          'location': 'Malibu, CA',
          'length': '3.8 miles (out and back)',
          'elevation_change': '400 ft',
          'hiking_time': '1 hour 45 minutes',
          'id': '3'
        },
        {
          'name': 'La Jolla Canyon Loop',
          'imageurl':'https://www.hikespeak.com/img/la/Mugu/Ray_Miller_Trail_IMG_7120.jpg',
          'location': 'Malibu, CA',
          'length': '11.75 miles (loop)',
          'elevation_change': '1225 feet',
          'hiking_time': '5 hours 45 minutes',
          'id': '4'
        },
        {
          'name': 'Mugu Peak',
          'imageurl':'https://www.hikespeak.com/img/la/Mugu/La_jolla_Valley_Loop_Trail_IMG_7417.jpg',
          'location': 'Malibu, CA',
          'length': '6.5 miles (out and back)',
          'elevation_change': '1225 feet',
          'hiking_time': '3 hours 30 minutes',
          'id': '5'
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
