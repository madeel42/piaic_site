import React from "react";
import "./infoCards.css";
import Footer from "../Blockchain/footer/footer.js";

export default class InfoCards extends React.Component {
    render() {
        return <>
            <br></br>
            <div id="overAllDiv">
                <div className="IotDiv">
                    <div className="box-container-iot">
                        <h4 className="heading">What Is IOT ?</h4>
                        <p className="para-data">
                            <img alt="" src="/pic.png" align="left" class="my-thumbnail"></img>
                            This course will start by providing a definition of the term.
                            We will talk about how various trends have enabled the Internet of Things, and how it
                            changes the way programming is done.
                We will also discuss some of the ramifications that IoT is having on society today.</p>
                    </div>
                    <div id="circle-div-iot-1A" className="circle">
                        <span id="text-1A">1A</span>
                        <div id="line-div-1A" className="circle-line"></div>
                    </div>
                </div>
                {/*-------------------------------------------------------------*/}
                <div className="embedDiv">
                    <div className="box-container-embed-system">
                        <h4 className="heading">Embedded Systems</h4>
                        <p className="para-data">
                            <img alt="" src="/pic.png" align="left" class="my-thumbnail"></img>
                            In this module we explore some of the details involved in the design and implementation
                            of IoT devices.
                            Unlike traditional computer-based systems, IoT devices are “embedded” within other
                            devices in order to
                            provide enhanced functionality without exposing the user to the complexities of a
                            computer. The users
                            interact with the device in a natural way, similar to their interactions with any other
                            objects in the
                            world. In this module we will discuss the structure of embedded systems and describe
                        these interactions with the physical world.</p>
                    </div>
                    <div id="circle-div-1B" className="circle">
                        <span id="text-1B">1B</span>
                    </div>
                </div>
                {/* ------------------------------------------------------------ */}
                <div id="softwareForIotDiv">
                    <div className="box-container-softwae-iot">
                        <h4 className="heading">Hardware and Software for IoT</h4>
                        <p className="para-data">
                            IoT devices are implemented using both hardware and software components.
                            Dedicated hardware components are used to implement the interface with the physical
                            world, and to perform tasks which are more computationally complex. Microcontrollers
                            are used to execute software that interprets inputs and controls the system. This
                            module discusses the roles of both the hardware and software components
                        in the system.</p>
                    </div>
                    <div id="circle-div-1C" className="circle">
                        <span id="text-1C">1C</span>
                    </div>
                </div>
                {/* ---------------------------------------------------------------- */}
                <div id="networkingDiv">
                    <div className="box-container-networking-iot">
                        <h4 className="heading">Networking and the Internet for IoT</h4>
                        <p className="para-data">
                            This course will start by providing a definition of the term.
                            We will talk about how various trends have enabled the Internet of Things, and
                            how it changes the way programming is done. We will also discuss some of the
                            ramifications that IoT is having on society today.
                    </p>
                    </div>
                    <div id="circle-div-1D" className="circle">
                        <span id="text-1D">1D</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------- */}
                <div id="cloudDiv">
                    <div className="box-container-cloud-computing">
                        <h4 className="heading">Edge and Cloud Computing for IoT</h4>
                        <p className="para-data">
                            In IoT architecture, edge computing is a distributed computing paradigm which brings
                            computer data storage closer to the location where it is needed. Computation is largely
                            or completely performed on distributed device nodes. Edge computing pushes applications
                            , data and computing power (services) away from centralized cloud points to locations
                            closer to the user. Edge computing does not need contact with any centralized cloud,
                            although in IoT archetectures it interacts with one.
                    </p>
                    </div>
                    <div id="circle-div-1E" className="circle">
                        <span id="text-1E">1E</span>
                    </div>
                </div>
                {/* -------------------------------------------------------------------- */}
                <div id="gitDiv">
                    <div className="box-container-git">
                        <h4 className="heading">Version Control with Git</h4>
                        <p className="para-data">
                            <img alt="" src="/git.png" align="left" class="my-thumbnail"></img>
                            You won't find a top programmer, web developer, or AI enginner who doesn't use version
                            control. Because it helps you produce better results and makes collaboration easy.
                            Around the world, in teams large and small, Git is an essential part of the tool chain.
                        We will start learning our learning process by covering Git and Github.</p>
                    </div>
                    <div id="circle-div-1F" className="circle">
                        <span id="text-1F">1F</span>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------ */}
                <div id="rustDiv">
                    <div className="box-container-rust-programming">
                        <h4 className="heading">Fundamentals of Rust Programming</h4>
                        <p className="para-data">
                            This module explores key Rust concepts in depth, such as ownership, the type system,
                            error handling, and fearless concurrency. This Rust programming language introduction
                            will also show you how to: - Grasp important concepts unique to Rust, like ownership,
                            borrowing, and lifetimes - Use Cargo, Rust’s built-in package manager, to build and
                            maintain your code, including downloading and building dependencies - Effectively use
                            Rust’s zero-cost abstractions and employ your own You’ll learn to develop reliable code
                            that’s speed and memory efficient, while avoiding the infamous and arcane programming
                            pitfalls common at the systems level.
                    </p>
                    </div>
                    <div id="circle-div-1G" className="circle">
                        <span id="text-1G">1G</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div id="systemDiv">
                    <div className="box-container-SystemsProgramming">
                        <h4 className="heading">Embedded Rust and Real-time Systems Programming</h4>
                        <p className="para-data">
                            A hands-on module teaches the Rust programming language in the context of embedded
                            ems. As well as giving students a full grounding in the Rust programming language, this
                            module teaches delegates how to program a modern embedded microcontroller using real-time
                            development tools. The examples and exercises are tuned to the practical requirements of
                            embedded microcontroller programming. What will you learn? The syntax and semantics of the
                            Rust language for embedded programming The principles of embedded software programming and
                            real-time programming How to program an embedded microcontroller in Rust A practical
                            introduction to real-time development tools How to debug a Rust program on an STM32F3
                            Discovery device How to access memory-mapped peripherals using Rust How to write
                            interrupt handlers in Rust An introduction to Real Time For the Masses (RTFM) framework
                            An introduction to low power software design Best practices for embedded programming
                    </p>
                    </div>
                    <div id="circle-div-SystemsProgramming" className="circle" className="color">
                        <span id="text-SystemsProgramming">2</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div id="linuxDiv">
                    <div className="box-container-linux">
                        <h4 className="heading">Introduction to Linux and Bas</h4>
                        <p className="para-data">
                            <img alt="" src="/linux.png" align="left" class="my-thumbnail"></img>
                            Linux containers are poised to take over the world; we will start this module with an
                            introduction of Linux and the command line. For many non-technical people, the command
                            line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery.
                            However, you only have to know a handful of basic commands to start feeling comfortable.
                            In this module we will cover the basic commands to get you started.
                    </p>
                    </div>
                    <div id="circle-div-linux" className="circle" className="color">
                        <span id="text-linux">3A</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------*/}
                <div id="dockerDiv">
                    <div className="box-container-docker">
                        <h4 className="heading">Docker Deep Dive</h4>
                        <p className="para-data">
                            <img alt="" src="/docker.png" align="left" class="my-thumbnail"></img>
                            This module provides a soup-to-nuts learning experience for core Docker technologies,
                            including the Docker Engine, Images, Containers, Registries, Networking, Storage, and
                            more. All of the behind the scenes theory is explained, and all concepts are clearly.
                    </p>
                    </div>
                    <div id="circle-div-docker" className="circle" className="color">
                        <span id="text-docker">3B</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------*/}
                <div id="kubernetDiv">
                    <div className="box-container-kubernet">
                        <h4 className="heading">Fundamentals of Kubernetes for Edge and Cloud Computing</h4>
                        <p className="para-data">
                            <img alt="" src="/kubernets.png" align="left" class="my-thumbnail"></img>
                            Linux containers are poised to take over the world; we will start this module with an
                            introduction of Linux and the command line. For many non-technical people, the command
                            line (also referred to as CLI, Terminal, bash, or shell) is a place of mystery.
                            However, you only have to know a handful of basic commands to start feeling comfortable.
                            In this module we will cover the basic commands to get you started.
                    </p>
                    </div>
                    <div id="circle-div-kubernet" className="circle" className="color">
                        <span id="text-kubernet">3C</span>
                    </div>
                </div>
                {/* -------------------------------------------------------------------------- */}
                <div id="nodeDiv">
                    <div className="box-container-nojejs">
                        <h4 className="heading">Developing Cloud Native IoT Microservices</h4>
                        <p className="para-data">
                            <img alt="" src="/nodejs.png" align="left" class="my-thumbnail"></img>
                            This module teaches you how to build microservices using Node.js and WebAssembly/Rust.
                            It starts by introducing Node's powerful traits and shows you how they map to the
                            features of microservices using JavaScript and WebAssembly/Rust. You'll explore key
                            development techniques, meet the rich ecosystem of companion tools and libraries,
                            and get a glimpse into its inner workings. In recent years REST (REpresentational
                            State Transfer) has emerged as the standard architectural design for web services and
                            web APIs. In this module we are going to show you how easy it is to create a RESTful
                            web service using Node.js, WebAssembly/Rust and the Express microframework. We will
                            also learn gRPC and GraphQL based microservices. By the end of the module, you'll be
                            able to use JavaScript/WebAssembly to build a Node microservice and know how to test
                            it, hook it up to a database, and automate the development process.
                    </p>
                    </div>
                    <div id="circle-div-nojejs" className="circle" className="color">
                        <span id="text-nojejs">3D</span>
                    </div>
                </div>
                {/* ----------------------------------------------------------------------------- */}
                <div id="kuberedgeDiv">
                    <div className="box-container-kuberEdge">
                        <h4 className="heading">Fundamentals of KubeEdge</h4>
                        <p className="para-data">
                            <img alt="" src="/kuberEdge.png" align="left" class="my-thumbnail"></img>
                            The key goal for KubeEdge is extending Kubernetes ecosystem from cloud to edge.
                            KubeEdge provides a containerized edge computing platform, which is inherently
                            scalable. The rise of AI makes edge computing more important. Complex models
                            trained in the cloud are deployed at the edge for inferencing. In this module we
                            will go through the fundaments of KubeEdge technology.
                    </p>
                    </div>
                    <div id="circle-div-kuberEdge" className="circle" className="color">
                        <span id="text-kuberEdge">3E</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div id="voiceDiv">
                    <div className="box-container-voiceComputing">
                        <h4 className="heading">Voice Computing for Device Control</h4>
                        <p className="para-data">
                            In this module we will learn to control IoT devices with the Google Assistant by building
                            apps that integrate Smart functionality.
                    </p>
                    </div>
                    <div id="circle-div-voiceComputing" className="circle" className="color">
                        <span id="text-voiceComputing">4</span>
                    </div>
                </div>
                {/* ---------------------------------------------------------------------------- */}
                <div id="AiDiv">
                    <div className="box-container-AI-for-IOT">
                        <h4 className="heading">Artificial Intelligence (AI) for Internet of Things (IoT)</h4>
                        <p className="para-data">
                            Before implementing deep-learning algorithms in this quarter, we will first familiarize
                            ourselves with mathematical blocks of neural networks theory. We going to start by getting
                            our hands dirty writing some simple TensorFlow 2.0 code in Rust. And then move on to
                            advanced deep learning concepts applicable to IoT projects. This module will also cover
                            some essential advantages of TensorFlow 2.0 to convince you it’s the deep-learning library
                             of choice.
                    </p>
                    </div>
                    <div id="circle-div-AI-for-IOT" className="circle" className="color">
                        <span id="text-AI-for-IOT">5</span>
                    </div>
                </div>
                {/* ------------------------------------------------------------------------- */}
                <div id="blockchainDiv">
                    <div className="box-container-blockchain">
                        <h4 className="heading">Blockchain and IOTA Technologies for IoT (Optional)</h4>
                        <p className="para-data">
                            In last optional quarter we will discuss and implement an emerging aspect of the blockchain
                            conomy, machine-to-machine (M2M) transactions. We will cover, how machines can use IOTA
                            blockchain to become autonomous market participants with their own bank accounts. We will
                            then merge these blockcain concepts with artificial intelligence (AI) concepts learned in
                            the previous quarters. These combine IoT, AI and Blockchain technologies allow machines in
                            the Internet of Things to be able to lease themselves out, schedule and pay for their own
                            maintenance, purchase their own replacement parts and keep their own transactional records,
                            using blockchain.
                    </p>
                    </div>
                    <div id="circle-div-blockchain" className="circle" className="color">
                        <span id="text-blockchain" className="circle-line">6</span>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
            </div>
            <Footer></Footer>
        </>
    }
} 