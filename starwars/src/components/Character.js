import React from 'react';
import { Card, CardImgOverlay, CardTitle, CardText, CardImg, Col } from 'reactstrap';

const Characters = ({name, status, image}) => {
	return(
		<Col sm="12" md={{ size: 4 }}>
			<Card style={{border:'solid 2px black', margin: '10px auto'}}>
				<CardImgOverlay>
				<CardTitle style={{color: 'red'}}>
				{name}
				</CardTitle>
				<CardText style={{color: 'red'}}>
					{status}
				</CardText>
				</CardImgOverlay>
				<CardImg src={image} />
			</Card>
		</Col>
		);
}

export default Characters;