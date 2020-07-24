import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Slider } from './slider';

const Wrapper = styled.div`
    padding: 4rem;
`;

class StorySlider extends React.Component {
    //
    state = {
        percentage: 20,
        // 3 minutes and 23 seconds
        maxTime: (3 * 60 + 23) * 1000,
        currentTime: 0,
    };

    timer = null;

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState(({ currentTime }) => ({
                currentTime: currentTime + 500,
            }));
        }, 500);
    }
    /**
 * 

 * styled.input. 
 Consider using the attrs method, together with a style object for frequently changed styles.
 Example:
   const Component = styled.div.attrs(props => ({
     style: {
       background: props.background,
     },
   }))`width: 100%;`
 
   <Component />} percentage 
 */
    onChange(percentage) {
        console.log({ percentage });
        this.setState(
            {
                percentage: +percentage,
                currentTime:
                    (Math.floor(percentage) / 100) * this.state.maxTime,
            },
            () => {
                console.log(this.state);
            }
        );
    }

    onSelectionEnd() {
        console.log(`User selected ${this.state.percentage}%`);

        this.timer = setInterval(() => {
            this.setState(({ currentTime }) => ({
                currentTime: currentTime + 500,
            }));
        }, 500);
    }

    onSelectionStart() {
        console.log('User started dragging');

        clearInterval(this.timer);
    }

    render() {
        return (
            <div style={{ display: 'flex', width: '600px' }}>
                <p>{this.state.currentTime}</p>
                <Slider
                    value={(this.state.currentTime / this.state.maxTime) * 100}
                    onSelectionEnd={this.onSelectionEnd.bind(this)}
                    onSelectionStart={this.onSelectionStart.bind(this)}
                    onChange={this.onChange.bind(this)}
                ></Slider>
                <p>{this.state.maxTime}</p>
            </div>
        );
    }
}

storiesOf('Slider', module)
    .add('Music Slider', () => (
        <>
            <Wrapper>
                <StorySlider></StorySlider>
            </Wrapper>
        </>
    ))
    .add('Normal Slider', () => {
        class NormalSlider extends React.Component {
            state = {
                value: 50,
            };

            handleChange(value) {
                this.setState({ value });
            }
            render() {
                return (
                    <Slider
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    ></Slider>
                );
            }
        }

        return <NormalSlider></NormalSlider>;
    });
