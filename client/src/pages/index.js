import React, { Component } from 'react';
import { connect } from "react-redux";

import Video from '../components/video'
class Customer extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        this.props.getListCategories();
        this.props.getListVideos()
    }
    render() {
        const {list_categories, list_videos, ...props} = this.props;
        return (
            <div className='container py-5'>
                {list_categories && list_categories.map(e => {
                    return (
                        <Video category={e} videos={list_videos.filter(v => v.categories.find(i => i === e.code))} {...props}/>
                    )
                })}
            </div>
        )
    }
}

const mapState = state => ({
    list_categories: state.categories.list_categories,
    list_videos: state.videos.list_videos
});

const mapDispatch = dispatch => ({
    getListCategories: dispatch.categories.getList,
    getListVideos: dispatch.videos.getList,
});
export default connect(mapState, mapDispatch)(Customer);



