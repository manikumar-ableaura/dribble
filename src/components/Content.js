// src/components/Content.js
import React from 'react';
import './content.css';
import myimage from '../assets/my-image.jpg'
import picture from '../assets/pic2.jpg'
import villa from '../assets/home.jpg'
import villa1 from '../assets/p.jpg'
import villa2 from '../assets/t.jpg'
import villa3 from '../assets/a.jpg'
import villa4 from '../assets/b.jpg'
import villa5 from '../assets/c.jpg'
import villa6 from '../assets/d.jpg'
import villa7 from '../assets/e.jpg'
import villa8 from '../assets/f.jpg'
import villa9 from '../assets/g.jpg'
import villa10 from '../assets/h.jpg'
import villa11 from '../assets/last.jpg'
import Form from './Form/Form';

function Content() {



  return (
    <div className='container'>

      <img
        className="content-image"
        src={myimage}
        alt="Preview of ARCHIVTS homepage"
      />
      <h1> Hello Folks!</h1>
      <p className="content">
        In this shot, we're providing a sneak peek of the ARCHIVTS homepage. Our focus for this homepage is to ensure that when users first visit the website.
        Stay tuned for more previews in the next shots! Available on Gumroad. Grab it now!
      </p>
      <button className="gumroad-button">Gumroad</button>

      <div className='secondblock'>
        <h2>TRANSFORMING<br></br> IDEAS ARCHITECTURE</h2>
        <p>We specialize in turning creative concepts<br></br> into immersive expereinces,blending innovation with precision for a digital</p>
      </div>


      {/* <div className='About'>
        <button> About us </button> </div> */}

      <div className='thirdblock'>

        <div><div className='About'>
          <button> About us </button> </div>
          <h2>Agency in the field of<br></br> architecture</h2>
          <p>Experience Archtectural ingeniuty: As a leading agecny in the field of architecture,
            We bring visionary concepts to life through cutting-edge design and technical mastery</p>
          <div className='see'>
            <button> See More </button> </div></div>
            

        <div className='picture'>
          <img
            className="pics"
            src={picture}
            alt="temporary" />
        </div>

      </div>

      <div className='fourthblock'>

        <div><div className='service'>
          <button>Services</button>
          <h2>We provide various best ideas to<br></br> transform your ideas</h2>
        </div>
        </div>

        <div className='villa'>
          <img
            className="home"
            src={villa}
            alt="temporary" />

          <h4>Design Interior</h4>

          <p>The art and science of enchancing the interior of a building to achieve a healthier & more aesthctical pleasing environment for the people using the space.
            An Interior design is someone plans, reaseach, coordinates, and manages such enhancement projects...</p>

        </div>
      </div>
      <br></br><br></br><br></br>
      <div className='fifthblock'>

        <div><div className='service1'></div></div>

        <div className='villa1'>
          <img
            className="home"
            src={villa1}
            alt="temporary" />

          <h4>Architecture</h4>

          <p>Architecture is the process and product of planning, designing, and construction of buildings or other structures</p>
        </div>
      </div>

      <br></br>
      <div class="section">

      </div>

      <div class="divider"></div>

      <div class="section">

      </div>

      <div className='fifthblock'>

        <div><div className='service2'></div></div>

        <div className='villa2'>
          <img
            className="dome"
            src={villa2}
            alt="temporary" />

          <h4>Property Interior</h4>

          <p>The Interior of a room in the form of a physical Arrangement, such as furniture, To meet the facility needs of the room</p>
        </div>
      </div>



      <div className='sixthblock'>

        <div className='new'>
          <button>Our Project</button></div>
        <h3>Explore our projects, where each <br></br>project reflects innovation</h3>


        <div className='villa3'>
          <img
            className="relative"
            src={villa3}
            alt="tentative" />
        </div>
<div className='dupsix'>
        <div><h2>PREMIUM KITCHEN</h2>
          <p>Indonesia / Design Interior</p></div></div>
        {/* 
        <div className='villa4'>

          <img
            className="absolute"
            src={villa4}
            alt="tentative" />
        </div> */}


        <div className='para'>
          <h4></h4>
          <p></p></div>
        <div className='villa6'>

          <img
            className="dung"
            src={villa6}
            alt="tentative" />

         </div><div className='robo'> <h4>LUXARY HOUSE NEW</h4>
          <p>United stated / Design Interior</p></div>


        <div className='tomb'>
          <div className='villa5'>

            <img
              className="ding"
              src={villa5}
              alt="tentative" />
          </div>

          <div className='paras'>
            <h5>BLOCK RESIDENCE</h5>
            <p>United Stated / Architecture</p></div>



        </div>

        <div className='seventhblock'>

          <div className='villa7'>
            <img
              className="bang"
              src={villa7}
              alt="tentative" />

            <p>Are these all projects ? No,<br></br> click to see other projects </p></div>
          <div className='seemore'>
            <button>See more</button></div>
        </div>


        <div className='eighthblock'>
        <div class="divider1"></div>

          <button>Process</button>
          <div className='bun'><h3>Discuss what you want to<br></br> make happen if you have<br></br> in idea</h3>



            <p>Bring your vision to Life: Share your ideas, and we'll craft<br></br> a Digital Masterpiece Tailored to you unique vision</p></div>
        </div>
        <div className='bolt'>

          <div className='villa8'>
            <img
              className="lative"
              src={villa8}
              alt="tentative" />
          </div>

          <div className='villa9'>
            <img
              className="plative"
              src={villa9}
              alt="loading" />
          </div>

          <div className='villa10'>
            <img
              className="clative"
              src={villa10}
              alt="loading" />
          </div>

        </div>

        <div className='ninthblock'>

          <div className='child1'><button>Testimonials</button>
            <h2>Discover what<br></br> clients are saying about us</h2></div>
          <div>
            <p>Working with archivts was a<br></br>transformative experience.
              Their<br></br> innovative approach to website <br></br>architecture not only met our<br></br> needs but elevated our brands to<br></br> new heights</p>
          </div>
          <div>
            <p>Working with archivts was a<br></br>transformative experience.
              Their<br></br> innovative approach to website <br></br>architecture not only met our<br></br> needs but elevated our brands to<br></br> new heights</p>
          </div>
        </div>


        <div className='last'><h1>Looking For Someone Who Can <br></br> transforming Ideas?</h1>

          <button>Let's Discuss</button></div>


        <div className='villa11'>
          <img
            className="captive"
            src={villa11}
            alt="loading" />
        </div>

        <div className='graph'>
          <h2>Thanks for checking it out!</h2>
          <p>Interested in partnering with us? </p>
        </div>

        <div className='dummy'>
          <button>Send Inquiry</button>
        </div>

        <div className='dummy2'>
          <p>Or drop us a line:</p>
          <h3>hellodama@odama.io</h3>
        </div>

        <div className='dummy3'>
          <p>Find more of our work on:</p>
          <h4>Website | Instagram | Behance | Gumroad</h4>
        </div>

        <div class="divider9"></div>
        <div class="divider10"></div>

        <Form />
      </div>
    </div >
  );
}

export default Content;
