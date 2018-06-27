import React, {Component} from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import Card from '../components/Card';
import Footer from '../components/Footer';

class Main extends Component {
	images = [
	{
		number: 1,
		href: 'http://www.aquariadise.com/wp-content/uploads/2016/09/19958060962_87277e084b_b.jpg',
		alt: 'fish'
	}
	{
		number: 2,
		href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLbxfD-LkUGD58ZxoWmvid7CIhkUYNNvjyLdaM18Qf9djw4eE1Q',
		alt: 'fish'
	}
	{
		number: 3,
		href: 'https://i.ebayimg.com/images/g/x0wAAOSwh-1W35MS/s-l300.jpg',
		alt: 'fish'
	}
	{
		number: 4,
		href: 'https://5.imimg.com/data5/MH/DT/MY-46256876/albino-aquarium-fish-500x500.jpg',
		alt: 'fish'
	}
	{
		number: 5,
		href: 'https://www.cve.edu.au/sites/default/files/styles/node_header/public/course/goldfish-hero.png?itok=_0MyH96i&sc=88d84b22b4062dbb8b4618860cbcb2a1',
		alt: 'fish'
	}
	{
		number: 6,
		href: 'http://cdn.shopify.com/s/files/1/1044/6774/files/Clownfish_large.jpg?16639005357555961674',
		alt: 'fish'
	}
	{
		number: 7,
		href: 'http://petshomey.com/wp-content/uploads/2017/09/tiger-barb-fish-5.jpg',
		alt: 'fish'
	}
	{
		number: 8,
		href: 'https://s7d2.scene7.com/is/image/PetSmart/ARTHMB-HowDoISetUpMyAquariumForMultipleFish-20160818?$AR1104$',
		alt: 'fish'
	}
	{
		number: 9,
		href: 'http://fishkeepingadvice.com/wp-content/uploads/beta-fish.jpg',
		alt: 'fish'
	}
	{
		number: 10,
		href: 'https://ae01.alicdn.com/kf/HTB1mPZlKpXXXXc.XVXXq6xXFXXXp/Silicone-tropical-aquarium-fish-decor-Aquarium-noctilucent-style-fish-decoration-pattern-angelfish-aquatic-animals-for-aquarium.jpg_640x640.jpg',
		alt: 'fish'
	}
	{
		number: 11,
		href: 'https://images-na.ssl-images-amazon.com/images/I/51lrd6rb78L._SX425_.jpg',
		alt: 'fish'
	}
	{
		number: 12,
		href: 'https://aquariumwaterpump.files.wordpress.com/2013/05/1334240304_351784551_1-saltwater-aquarium-fish-supplies-elliot-road.jpg',
		alt: 'fish'
	}
	];
	state = {};

	componentDidMount() {
		// loadImages()
	}

	loadImages(){
		shuffleImages(images)

	}

	shuffleImages(array) {
	    for (let i = array.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [array[i], array[j]] = [array[j], array[i]];
	    }
	    return array;
	}

	handleClick = event => {

	}


render(){
	return(
		<div>
			<Container>
				<Row>
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
				</Row>
				<Row>
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
				</Row>
				<Row>
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
					< Card href=images[0].href />
				</Row>
			</Container>
		</div>
	)
}


}