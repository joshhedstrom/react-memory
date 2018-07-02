import React, { Component } from 'react';
import './foundation.css';
import './App.css';
import Container from './components/Container';
import Row from './components/Row';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

const images = [
  {
    number: 0,
    href: require('./assets/images/fish-1.jpg')
  },
  {
    number: 1,
    href: require('./assets/images/fish-2.jpg')
  },
  {
    number: 2,
    href: require('./assets/images/fish-3.jpg')
  },
  {
    number: 3,
    href: require('./assets/images/fish-4.jpg')
  },
  {
    number: 4,
    href: require('./assets/images/fish-5.jpg')
  },
  {
    number: 5,
    href: require('./assets/images/fish-6.jpg')
  },
  {
    number: 6,
    href: require('./assets/images/fish-7.jpg')
  },
  {
    number: 7,
    href: require('./assets/images/fish-8.jpg')
  },
  {
    number: 8,
    href: require('./assets/images/fish-9.jpg')
  },
  {
    number: 9,
    href: require('./assets/images/fish-10.jpg')
  },
  {
    number: 10,
    href: require('./assets/images/fish-11.jpg')
  },
  {
    number: 11,
    href: require('./assets/images/fish-12.jpg')
  }
];

const shuffleImages = array => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
};

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    pickedPics: [],
    message:
      'Click on any picture, but make sure not to click on the same picture twice!',
    images: images
  };

  componentDidMount() {
    this.setState({ images: shuffleImages(this.state.images) });
  }

  handleClick = event => {
    let number = event.target.getAttribute('data');
    let pickedPics = this.state.pickedPics;
    let currentScore = this.state.currentScore;
    let highScore = this.state.highScore;
    let index = pickedPics.indexOf(number);

    if (pickedPics.length === 0) {
      pickedPics.push(number);
      this.setState({
        pickedPics: pickedPics,
        currentScore: 1,
        message: 'So far so good...',
        images: shuffleImages(images)
      });
    } else {
      if (index !== -1) {
        this.setState({
          pickedPics: [],
          currentScore: 0,
          message: 'So close! Try again!',
          images: shuffleImages(images)
        });
      } else if (index === -1) {
        currentScore++;
        pickedPics.push(number);
        if (currentScore <= highScore) {
          this.setState({
            pickedPics: pickedPics,
            currentScore: currentScore,
            message: 'So far so good...',
            images: shuffleImages(images)
          });
        } else if (currentScore > highScore) {
          this.setState({
            pickedPics: pickedPics,
            currentScore: currentScore,
            highScore: currentScore,
            message: 'So far so good...',
            images: shuffleImages(images)
          });
        }
      }
    }
  };

  render() {
    return (
      <div>
        <Header
          highScore={this.state.highScore}
          currentScore={this.state.currentScore}
          message={this.state.message}
        />
        <Container>
          <Row>
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[0].href}
              data={this.state.images[0].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[1].href}
              data={this.state.images[1].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[2].href}
              data={this.state.images[2].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[3].href}
              data={this.state.images[3].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[4].href}
              data={this.state.images[4].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[5].href}
              data={this.state.images[5].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[6].href}
              data={this.state.images[6].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[7].href}
              data={this.state.images[7].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[8].href}
              data={this.state.images[8].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[9].href}
              data={this.state.images[9].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[10].href}
              data={this.state.images[10].number.toString()}
            />
            <Card
              clickHandler={this.handleClick.bind()}
              href={this.state.images[11].href}
              data={this.state.images[11].number.toString()}
            />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
