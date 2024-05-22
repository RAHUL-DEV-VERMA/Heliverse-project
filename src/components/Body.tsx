import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from '../assets/motionarteffect-img1.png';
import img2 from '../assets/motionarteffect-img2.png';
import img3 from '../assets/motionarteffect-img3.png';
import img4 from '../assets/motionarteffect-img4.png';
import img5 from '../assets/motionarteffect-img5.png';
import img6 from '../assets/motionarteffect-img6.png';
import img7 from '../assets/motionarteffect-img7.png';
import img8 from '../assets/motionarteffect-img8.png';
import img9 from '../assets/motionarteffect-img9.png';
import img10 from '../assets/motionarteffect-img10.png';
import img11 from '../assets/motionarteffect-img11.png';

const Body = () => {
  useEffect(() => {
    const lightWave = document.getElementById('lightWave');

    const handleMouseMove = (e: MouseEvent) => {
      if (lightWave) {
        const { clientX: x, clientY: y } = e;
        lightWave.style.backgroundPosition = `${x-1000}px ${y-1000}px`;
        lightWave.classList.add('show-wave');
      }
    };

    const handleMouseStop = () => {
      if (lightWave) {
        lightWave.classList.remove('show-wave');
      }
    };

    let timer: NodeJS.Timeout;
    // let timer: number | undefined = undefined;
    const handleMouseMoveDebounced = (e: MouseEvent) => {
      clearTimeout(timer);
      handleMouseMove(e);
      timer = setTimeout(handleMouseStop, 200);
    };

    window.addEventListener('mousemove', handleMouseMoveDebounced);
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveDebounced);
    };
  }, []);

  return (
    <div className="body">
      <div className="light-wave" id="lightWave"></div>
      <section className="body-container">
        <aside>
          <div>Transform Your Website</div>
          <div>With Motion Art Effect</div>
        </aside>
        <main>
          <div>
            Atrract Your Visitors Attention With Colourful
            <div>Motion Art Effect</div>
          </div>
          <div>
            <span>
              Unleash the power of creativity with Motion Art for Elementor -
              your ultimate solution for seamlessly integrating captivating
              animations into your website.
            </span>
            <div>Trusted by thousands of users around the world</div>
          </div>
        </main>
      </section>

      <section className="rating-container">
        <Star
          logoimg={img1}
          score={4.2}
          review={35}
        />
        <Star
          logoimg={img2}
          score={4.5}
          review={89}
        />
        <Star
          logoimg={img3}
          score={3.8}
          review={65}
        />
      </section>
      <section className="magic-stick">
        <div>
          <div>
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </div>
          <div>
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </div>
          <div>Purchase From Envato {<FaArrowRight />}</div>
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
      </section>
      <section className="apply-container">
        <div>Apply On Any Section Or Enable For Whole Page</div>
        <div>
          <div>
            <Apply
              heading="Apply On Section"
              content="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
              img={img11}
            />
          </div>
          <div>
            <Apply
              heading="Apply On Page"
              content="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. "
              img={img10}
            />
          </div>
        </div>
      </section>
      <section className="browser">
        <div>Supported by All Popular Browsers</div>
        <div>
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </div>
        <div>
          <img src={img8} alt="" />
        </div>
      </section>
      <section className="plugin">
        <div>An All-Round Plugin With Powerful Features</div>
        <div>
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </div>
      </section>
      <section className="value-container">
        <div>
          <Value
            logo={img9}
            heading="Light Weight"
            content="Motion Art for Elementor is designed to be lightweight."
          />
        </div>
        <div>
          <Value
            logo={img6}
            heading="Light Weight"
            content="Motion Art for Elementor is designed to be lightweight."
          />
        </div>
        <div>
          <Value
            logo={img7}
            heading="Light Weight"
            content="Motion Art for Elementor is designed to be lightweight."
          />
        </div>
      </section>
    </div>
  );
};

interface starProps {
  logoimg: string;
  score: number;
  review: number;
}

const Star = ({ logoimg, score, review }: starProps) => {
  return (
    <div className="star-container">
      <img src={logoimg} alt="" />
      <span>
        <img src={img4} alt="" />
        <div>
          {score}Score, {review} Reviews
        </div>
      </span>
    </div>
  );
};

interface applyProps {
  heading: string;
  content: string;
  img: string;
}

const Apply = ({ heading, content, img }: applyProps) => {
  return (
    <div className="apply">
      <div>{heading}</div>
      <div>{content}</div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

interface valueProps {
  logo: string;
  heading: string;
  content: string;
}

const Value = ({ logo, heading, content }: valueProps) => {
  return (
    <div className="value">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>{heading}</div>
      <div>{content}</div>
    </div>
  );
};

export default Body;
