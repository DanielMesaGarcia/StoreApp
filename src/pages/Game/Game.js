import React from 'react';
import './Game.css';
import Header from '../../components/header';
import { Button, Input, Radio, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Game = () => {
    return (
        <div className='Game'>
            <Header />
            <div className='nameSearchs'>
                <Input />
            </div>
            <div className='gameContent'>
                <div className='leftRectangle'>
                    <img src='img\CounterStrike.webp' alt='counter' />
                    <h2>Game Title</h2>
                    <p>Description of the game goes here.</p>
                    <Rate allowHalf defaultValue={2.5} />
                    <div className='radioButtons'>
                        <Radio.Group>
                            <Radio value={1}>Option 1</Radio>
                            <Radio value={2}>Option 2</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className='rightRectangles'>
                    <div className='smallRectangle'>
                        <div>
                            <p>


                                - Tax Rate: 10% <br />
                                - Game Price: $49.99 <br />
                                - Total Price (including taxes): $54.99 <br />
                            </p>
                            <Button >Pay</Button>
                        </div>
                    </div>
                    <div className='smallRectangle'>
                        <div>
                            <p>Your Review</p>
                            <div>
                                <Rate allowHalf defaultValue={2.5} />
                                <TextArea rows={4} placeholder="Your review..." maxLength={6} />
                                <Button>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Game;
