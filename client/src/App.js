import React, {Component} from 'react';
import Container from './components/Container';
import Row from './components/Row';
import Card from './components/Card';
import Header from './components/Header';
// import Footer from './components/Footer';
import './App.css';

  const images = [
            {
              number: 0,
              href: 'https://aquariumwaterpump.files.wordpress.com/2013/05/1334240304_351784551_1-saltwater-aquarium-fish-supplies-elliot-road.jpg',
            },
            {
              number: 1,
              href: 'http://www.aquariadise.com/wp-content/uploads/2016/09/19958060962_87277e084b_b.jpg',
            },
            {
              number: 2,
              href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLbxfD-LkUGD58ZxoWmvid7CIhkUYNNvjyLdaM18Qf9djw4eE1Q',
            },
            {
              number: 3,
              href: 'https://i.ebayimg.com/images/g/x0wAAOSwh-1W35MS/s-l300.jpg',
            },
            {
              number: 4,
              href: 'https://5.imimg.com/data5/MH/DT/MY-46256876/albino-aquarium-fish-500x500.jpg',
            },
            {
              number: 5,
              href: 'https://www.cve.edu.au/sites/default/files/styles/node_header/public/course/goldfish-hero.png?itok=_0MyH96i&sc=88d84b22b4062dbb8b4618860cbcb2a1',
            },
            {
              number: 6,
              href: 'http://cdn.shopify.com/s/files/1/1044/6774/files/Clownfish_large.jpg?16639005357555961674',
            },
            {
              number: 7,
              href: 'http://petshomey.com/wp-content/uploads/2017/09/tiger-barb-fish-5.jpg',
            },
            {
              number: 8,
              href: 'https://s7d2.scene7.com/is/image/PetSmart/ARTHMB-HowDoISetUpMyAquariumForMultipleFish-20160818?$AR1104$',
            },
            {
              number: 9,
              href: 'http://fishkeepingadvice.com/wp-content/uploads/beta-fish.jpg',
            },
            {
              number: 10,
              href: 'https://ae01.alicdn.com/kf/HTB1mPZlKpXXXXc.XVXXq6xXFXXXp/Silicone-tropical-aquarium-fish-decor-Aquarium-noctilucent-style-fish-decoration-pattern-angelfish-aquatic-animals-for-aquarium.jpg_640x640.jpg',
            },
            {
              number: 11,
              href: 'https://images-na.ssl-images-amazon.com/images/I/51lrd6rb78L._SX425_.jpg',
            },
  ];


  const shuffleImages = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


class App extends Component {
  state = {
    currentScore: '',
    highScore: '',
    images: images
  }

  componentDidMount() {
    this.setState({images: shuffleImages(this.state.images)})
  }

  handleClick = event => {
    console.log(event.target.getAttribute('data'))
    this.setState({images: shuffleImages(this.state.images)})
  }

  render(){
    return(
      <div>
        < Header />
        <Container>
          <Row>
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[0].href} data={(this.state.images[0].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[1].href} data={(this.state.images[1].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[2].href} data={(this.state.images[2].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[3].href} data={(this.state.images[3].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[4].href} data={(this.state.images[4].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[5].href} data={(this.state.images[5].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[6].href} data={(this.state.images[6].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[7].href} data={(this.state.images[7].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[8].href} data={(this.state.images[8].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[9].href} data={(this.state.images[9].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[10].href} data={(this.state.images[10].number).toString()} />
            < Card clickHandler={this.handleClick.bind()} href={this.state.images[11].href} data={(this.state.images[11].number).toString()} />
          </Row>
        </Container>
      </div>
    )
  }

}

export default App;
