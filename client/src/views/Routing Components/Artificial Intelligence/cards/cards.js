import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import "./cards.css";
import InfoCards from "../InfoCards/infoCards.js";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.card}>
                <h1 id="Technical-Track">Technical Track</h1>
                <div id="cards-div">
                    <div className="CardContentAI">
                        <div className="subDivsAI">
                            <h1>Quarter 1</h1>
                            <p>AI Foundations</p>
                        </div>
                    </div>

                    <div className="CardContentAI">
                        <div className="subDivsAI">
                            <h1>Quarter 2</h1>
                            <p>Introduction to Data Science & Deep <br></br>Learning</p>
                        </div>
                    </div>

                    <div className="CardContentAI">
                        <div className="subDivsAI">
                            <h1>Quarter 3</h1>
                            <p>Deploying AI Solutions</p>
                        </div>
                    </div>

                    <div className="CardContentAI">
                        <div className="subDivsAI">
                            <h1>Quarter 4</h1>
                            <p>AI In Practice</p>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------- other Div ------------------------------------*/}
                <h1 id="compulsory-Track">Compulsory Innovation Track</h1>

                <div className="cards-div2">

                    <div className="CardContentAI2">
                        <img id="image-gif" src="https://www.piaic.org/static/media/IL.348ffc91.gif"></img>
                    </div>

                    <div className="CardContentAI2">
                        <div className="subDivsAI">
                            <h1>Quarter 1</h1>
                            <p>Innovation Methodologies</p>
                        </div>
                    </div>

                    <div className="CardContentAI2">
                        <div className="subDivsAI">
                            <h1>Quarter 2</h1>
                            <p>Infrastructure As Code and DevOps</p>
                        </div>
                    </div>

                    <div className="CardContentAI2">
                        <div className="subDivsAI">
                            <h1>Quarter 3</h1>
                            <p>Lean UI/UX and Bot Design</p>
                        </div>
                    </div>
                </div>
            </Card >
            <InfoCards></InfoCards>
        </>
    );
}
