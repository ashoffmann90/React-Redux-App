import React, { useEffect } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import {fetchItem} from '../store/actions/itemsActions'
import { FFItem } from "./FFItem";

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
          <FFItem key={item.ID} name={item.Name}/>
      ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, {fetchItem})(FFItems)