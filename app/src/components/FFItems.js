import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {fetchItem} from '../store/actions/itemsActions'
import { FFItem } from "./FFItem";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const FFItems = props => {
    useEffect(() => {
        props.fetchItem()
    }, [])

    return(
        <div>
            <h1>Final Fantasy XIV Items</h1>
            {props.isFetching && (
        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      )}
      
            {props.name.map(item => (
        <Row>
            <Col md='4'>
                <FFItem key={item.ID} name={item.Name} img={item.Icon}/>
            </Col>
        </Row>
      ))}
            
      
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        image: state.image,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {fetchItem})(FFItems)