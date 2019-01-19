import React from "react";

const Image = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return <div className="slide" style={styles}>


    </div>
}

export default Image;