import React from "react";
import "./infoCardsAI.css";
import Footer from "../../BlockChain-component/Dashboard/footer/footer.js";

export default class InfoCards extends React.Component {
    render() {
        return <>
            <br></br>
            <div id="someText">
                <h1>Detailed Program Structure</h1>
            </div>
            <br></br>
            <div id="overAllDiv">
                <div className="IotDiv">
                    <div className="box-container-iot">
                        <h4 className="heading">Version Control with Git</h4>
                        <p className="para-data">
                            <img alt="" src="/git.png" align="left" class="my-thumbnail"></img>
                            You won't find a top programmer, web developer, or AI engineer who doesn't use version control. This is true because version control helps developers produce better results and makes collaboration easy. Around the world, in teams both large and small, Git is an essential part of the toolchain. This module covers Git and Github.</p>
                    </div>
                    <div id="circle-div1" className="circle">
                        <span id="text-1A">1A</span>
                        <div id="line-div-AI" className="circle-line"></div>
                    </div>
                </div>
                {/*-------------------------------------------------------------*/}
                <div className="embedDiv">
                    <div className="box-container-embed-system">
                        <h4 className="heading">Object Oriented and Functional Programming using Python</h4>
                        <p className="para-data">
                            <img alt="" src="/oop.png" align="left" class="my-thumbnail"></img>
                            In the second module of the program, students will learn about basic programming concepts such as lists, dictionaries, classes, functions and loops, and practice writing clean and readable code with exercises for each topic. Students will also learn how to make programs interactive and how to test code safely before adding it to a project. It is a fast-paced, thorough introduction to programming with Python 3.6 that will have students writing programs, solving problems, and making things that work in no time.</p>
                    </div>
                    <div id="circle-div2" className="circle">
                        <span id="text-1B">1B</span>
                    </div>
                </div>
                {/* ------------------------------------------------------------ */}
                <div id="softwareForIotDiv">
                    <div className="box-container-softwae-iot">
                        <h4 className="heading">Introduction to Linear Algebra and Statistics</h4>
                        <p className="para-data">
                        <img alt="" src="/LA.png" align="left" class="my-thumbnail"></img>
                            In this module, students will learn the basic mathematical and statistical concepts that are needed to practice data science and understand deep learning. Students will also implement these concepts in Python and TensorFlow.</p>
                    </div>
                    <div id="circle-div3" className="circle">
                        <span id="text-1C">1C</span>
                    </div>
                </div>
                {/* ---------------------------------------------------------------- */}
                <div id="networkingDiv">
                    <div className="box-container-networking-iot">
                        <h4 className="heading">Advanced Python Libraries with Anaconda</h4>
                        <p className="para-data">
                        <img alt="" src="/anaconda.png" align="left" class="my-thumbnail"></img>
                            In this module, students will be introduced to Anaconda, the leading open data science platform powered by Python. The open source version of Anaconda is a high performance distribution of Python and R and includes over 100 of the most popular Python and R packages for data science, such as NumPy, Matplotlib, etc.
                    </p>
                    </div>
                    <div id="circle-div4" className="circle">
                        <span id="text-1D">2A</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------- */}
                <div id="cloudDiv">
                    <div className="box-container-cloud-computing">
                        <h4 className="heading">Data Science Essentials</h4>
                        <p className="para-data">
                        <img alt="" src="/data.png" align="left" class="my-thumbnail"></img>
                            In this module, students will learn key concepts and techniques used to perform data science; including statistical analysis, data cleansing and transformation, and data visualization with Python.
                    </p>
                    </div>
                    <div id="circle-div5" className="circle">
                        <span id="text-1E">2B</span>
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
                <div id="gitDiv">
                    <div className="box-container-git">
                        <h4 className="heading">The Fundamentals of Deep Learning with Keras with TensorFlow Backend</h4>
                        <p className="para-data">
                            <img alt="" src="/keras.png" align="left" class="my-thumbnail"></img>
                            Before implementing deep-learning algorithms, students will first become familiar with the mathematical blocks of the neural networks theory. Students will get a chance to get their hands dirty writing some simple Keras code right away! Then they will move on to advanced deep learning concepts. This module will also cover some essential advantages of Keras to prove it’s the deep-learning library of choice.</p>
                    </div>
                    <div id="circle-div6" className="circle">
                        <span id="text-1F">2C</span>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div id="rustDiv">
                    <div className="box-container-rust-programming">
                        <h4 className="heading">Introduction to Linux and Bash</h4>
                        <p className="para-data">
                        <img alt="" src="/linux.png" align="left" class="my-thumbnail"></img>
                            Linux containers are poised to take over the world. In this module, students will begin learning with an introduction of Linux and the command line interface. For many non-technical people, the command line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery. However, knowledge of only a handful of basic commands is enough to start feeling comfortable. In this module, we will cover the basic commands to get you started.
                    </p>
                    </div>
                    <div id="circle-div7" className="circle">
                        <span id="text-1G">3A</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div id="systemDiv">
                    <div className="box-container-SystemsProgramming">
                        <h4 className="heading">Docker Deep Dive</h4>
                        <p className="para-data">
                        <img alt="" src="/docker.png" align="left" class="my-thumbnail"></img>
                            This module provides a soup-to-nuts learning experience for core Docker technologies, including the Docker Engine, Images, Containers, Registries, Networking, Storage, and more. All of the behind the scenes theory is explained, and all concepts are clearly demonstrated on the command line. No prior knowledge of Docker or Linux is required.
                    </p>
                    </div>
                    <div id="circle-div8" className="circle" className="color1">
                        <span id="text-SystemsProgramming">3B</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div id="linuxDiv">
                    <div className="box-container-linux">
                        <h4 className="heading">Python Microservices Development</h4>
                        <p className="para-data">
                            <img alt="" src="/micro.png" align="left" class="my-thumbnail"></img>
                            In recent years, REST (REpresentational State Transfer) has emerged as the standard architectural design for web services and web APIs. In this module, students will learn how easy it is to create a RESTfulweb service using Python and Flask.
                    </p>
                    </div>
                    <div id="circle-div9" className="circle" className="color1">
                        <span id="text-linux">3C</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------*/}
                <div id="dockerDiv">
                    <div className="box-container-docker">
                        <h4 className="heading">Build AI Microservices for ContainerDeployments</h4>
                        <p className="para-data">
                            <img alt="" src="/build.png" align="left" class="my-thumbnail"></img>
                            In this module, students will learn to use containers to simplify AI solution deployments and implement continuous integration and deployment strategies.
                    </p>
                    </div>
                    <div id="circle-div10" className="circle" className="color1">
                        <span id="text-docker">3D</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------*/}
                <div id="kubernetDiv">
                    <div className="box-container-kubernet">
                        <h4 className="heading">Artificial Intelligence (AI) in Practice</h4>
                        <p className="para-data">
                            <img alt="" src="/AI.png" align="left" class="my-thumbnail"></img>
                            This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.
                    </p>
                    </div>
                    <div id="circle-div11" className="circle" className="color1">
                        <span id="text-kubernet">4</span>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------- */}
            </div>
            <Footer></Footer>
        </>
    }
} 