import React, { Component } from 'react';
import { connect } from "react-redux";
import './index.scss'
import $ from 'jquery';
class Customer extends Component {
    constructor(props, context) {
        super(props, context)
    }
    componentDidMount() {
        // $('.owl-carousel').owlCarousel({
        //     items:1,
        //     merge:true,
        //     loop:true,
        //     margin:10,
        //     video:true,
        //     lazyLoad:true,
        //     center:true,
        //     responsive:{
        //         480:{
        //             items:2
        //         },
        //         600:{
        //             items:4
        //         }
        //     }
        // })
    }
    render() {
        const {category, videos, ...props} = this.props;
        return (
            <div class='list-video'>
                <h1>{category.name}</h1>
                {/* <div class="owl-carousel owl-theme">
                    <div class="item-video" data-merge="3"><a class="owl-video" href="https://vimeo.com/23924346"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a></div>
                    <div class="item-video" data-merge="3"><a class="owl-video" href="https://www.youtube.com/watch?v=g3J4VxWIM6s"></a></div>
                    <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=0fhoIate4qI"></a></div>
                    <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=EF_kj2ojZaE"></a></div>
                </div> */}
                <div className='row'>
                    {videos && videos.map(e => {
                        return (
                            <div class='col-4 col-md-2 video'>
                                <a target='_blank' href={e.url}>
                                    <div class='thumbnail'>
                                        <img src={e.thumbnails ? e.thumbnails[0] : ""}/>
                                    </div>
                                    <div class='text-center'>
                                        <p>{e.title}</p>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapState = state => ({
    
});

const mapDispatch = dispatch => ({
    
});
export default connect(mapState, mapDispatch)(Customer);



