import Footer from "../Components/Footer";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import Nav from "../Components/Nav";

const Contact = () => {
  return (
    <>
      <Nav/>
      <section className="contact-form section">
        <h4 className="sectionHeader">
          Toko kita adalah platform yang bertujuan untuk membantu para penjual
          UMKM
        </h4>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
          inventore omnis aliquid rerum alias molestias. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officia, alias. Alias doloribus
          minus repellat nemo beatae corrupti excepturi asperiores reiciendis
          numquam voluptas quas illo, vel recusandae incidunt totam vitae
          debitis!
        </p>
        <div className="kita">
          <button className="jelajah">Jelajahi Toko Kita</button>
        </div>

        <div className="contactForm">
          <form className="form-masAgung">
            <input type="text" className="input" placeholder="your name" />
            <input type="text" className="input" placeholder="your email" />
            <input type="text" className="input" placeholder="your Subject" />
            <textarea
              className="input"
              cols="30"
              rows="5"
              placeholder="Your message..."
            ></textarea>
            <input
              type="submit"
              className="input submit1"
              value="Send Message"
            />
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
