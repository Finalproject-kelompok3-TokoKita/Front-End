import Footer from "../Components/Footer"
import Nav from "../Components/Nav"

const Contact = () => {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <section className="contact-form">
                <h4 className="sectionHeader">Toko kita adalah platform yang bertujuan untuk membantu para penjual UMKM</h4>
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eos
                    inventore omnis aliquid rerum alias molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, alias. Alias doloribus minus repellat nemo beatae corrupti excepturi asperiores reiciendis
                    numquam voluptas quas illo, vel recusandae incidunt totam vitae debitis!</p>
                <div className="kita">
                    <button className="jelajah">Jelajahi Toko Kita</button>
                </div>

                <div className="contactForm">
                    <form className="#">
                        <input type="text" className="input" placeholder="your name" />
                        <input type="text" className="input" placeholder="your email" />
                        <input type="text" className="input" placeholder="your Subject" />
                        <textarea className="input" cols="30" rows="5" placeholder="Your message..."></textarea>
                        <input type="submit" className="input submit" value="Send Message" />
                    </form>

                    <div className="map-container">
                        <div className="mapBg"></div>
                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0434073897177!2d108.98516917356676!3d-7.004171568600308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fa2d11c8c0b31%3A0x21d7432180cf7b40!2sBalai%20Desa%20Gegerkunci!5e0!3m2!1sid!2sid!4v1704086935528!5m2!1sid!2sid"
                                width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Contact