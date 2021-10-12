import React from 'react';
import { Parallax } from 'react-parallax';
import { Button } from 'react-bootstrap';
import Header from '../Header';

const insideStyles = {
    background: "white",
    color: 'black',
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: 50,
    borderWidth: 0
};


const Paralax = () => {
    return (
        <div>

            <Parallax bgImage={'https://media4.giphy.com/media/f1UIawDR7zQd4RJlS4/giphy.gif?cid=790b761159bc3284a3f61556b4b46717acf8818404904d98&rid=giphy.gif&ct=g'} strength={500}>
                <Header className='header' />
                <div style={{ height: 800 }}>
                    <Button style={insideStyles}>Animation Showreel</Button>
                </div>
            </Parallax>

        </div>
    )
}

export default Paralax
