import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [
        'http://68.media.tumblr.com/7118dd0ef76519b65ba9b8c1dafe77ac/tumblr_n0z0p0Ga1C1qkxrtro4_1280.jpg',
        'http://www.ultimatedesignertoolkit.com/wp-content/uploads/2013/06/preview1.png',
        'https://shechive.files.wordpress.com/2015/04/a-random-awesome-11.jpg',
        'http://img-aws.ehowcdn.com/600x400/cpi.studiod.com/www_ehow_com/i.ehow.com/images/a07/b3/50/fix-random-popping-sound-system-800x800.jpg',
        'http://theshoegame.com/wp-content/uploads/2014/08/nike-flyknit-roshe-run-random-yarn-pack.jpg'
      ]
    };
  }

  componentWillMount() {
    let url = ''
    let arr = [];
    for (let i = 0; i < 5; i++) {
      url = this.state.sources[i];
      arr.push({
        original: url,
        thumbnail: url
      });
    }

    this.setState({ items: arr });
  }

  render() {
    let gallery = '<h1>loading...</h1>';
    if (this.state.items) {
      gallery = (
        <ImageGallery
          items={this.state.items}
          slideInterval={2000}/>
      )
    }

    return (
      <div>
        <div className='App-header'>
          <h2>Natick Wine & Spirits</h2>
          <h4>7 Watson Street (by Roche Bros.) Natick, MA 01760<br/><br/>
          Hours of operation:<br/>
          Mon - Sat: 9 - 10<br/>
          Sun: 10 - 7</h4>
        </div>
        <div className='slide-show'>
          {gallery}
        </div>
      </div>
    );
  }
}

export default Home;
