import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


export const FFItem = (props) => {
    console.log(props.name)
    return(
        <Card>
            <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardImg src={`https://xivapi.com/${props.img}`}></CardImg>
            </CardBody>
        </Card>
    )
}
