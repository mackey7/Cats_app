import React, { Component } from "react";
import axios from 'axios';

import ArrowRigth from "./ArrowRigth.jsx";
import ArrowLeft from './ArrowLeft.jsx';
import Image from "./Image.jsx";

class CatImageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            currentIndex: 0,
            translateValue: 0
        }
    }
    prevImg = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }
    nextImg = () => {

        if (this.state.currentIndex === this.state.cats.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }
    componentDidMount() {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=100&page=1&order=Desc`)
            .then(res => {
                const cats = res.data;
                this.setState({ cats });
            })
    }

    render() {
        return (
            <div className="mainContainer">
                <div className="slider">
                    <div className="slider-wrapper"
                        style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                        }}>
                        {this.state.cats.map((image, i) => (
                            <Image like={this.addToLike} key={i} image={image.url} />
                        ))
                        }
                    </div>


                </div >
                <ArrowLeft click={this.prevImg} />
                <ArrowRigth click={this.nextImg} />

            </div >
        );
    }

}




export default CatImageContainer;
