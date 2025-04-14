import React from "react";
import { SectionHeader } from "../../components";
import {
  KawtarBamo,
  RajaeBelmir,
  OmarBelmir,
  RachidGoudi,
  Soufia,
  NouhaliaBarbie,
} from "./index";
import Testimonial from "../../components/testimonial/Testimonial";
import "./testimonials.css";

function Testimonials() {
  return (
    <div className="princedlf__testimonials section__margin" id="testimonials">
      <SectionHeader
        title={"آراء بعض المشاهير و الزبناء"}
        subTitle={"جودة استثنائية بشهادة أبرز المؤثرين في المغرب."}
      />
      <div className="princedlf__testimonials-container">
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={KawtarBamo}
            name={"Kawtar Bamo"}
            content={
              "Merci infiniment pour ce joli colis tbarklah 3likom rwayah ghzaaaalin je suis tres satisfaite"
            }
          />
        </div>
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={RajaeBelmir}
            name={"Rajae Belmir"}
            content={
              "Chokran likum mn ahssan les parfums li dert fhyaati sarahaa"
            }
          />
        </div>
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={OmarBelmir}
            name={"Omar Belmir"}
            content={
              "اخيرا لقيت منين غ نبقا ناخد ليا و لعائلتي الروايح، تبارك الله عليكم"
            }
          />
        </div>
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={Soufia}
            name={"Soufia"}
            content={
              "Commande bien recu o la qualite vraiment zwiiiiiiiiina zwina bzaf tbarkallah 3likom"
            }
          />
        </div>
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={RachidGoudi}
            name={"Rachid Goudi"}
            content={
              "Mn lyouma mab9itch nkhser floussi f les parfums originaux w Prince kaynin"
            }
          />
        </div>
        <div className="princedlf__testimonial" data-aos="zoom-in">
          <Testimonial
            image={NouhaliaBarbie}
            name={"Nouhalia Barbie"}
            content={
              "Vraiment la qualité w le service dyal PRINCE kaan magnifique mn confirmation tal livreur"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
