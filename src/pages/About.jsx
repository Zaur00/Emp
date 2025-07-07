import React from 'react'
import "../CSS/About.css"
function About() {

  return (
    <div className="about-container">
      <h1 className="about-title">Emporium haqqında</h1>

      <p className="about-lead">
        Emporium 2005-ci ildə qurulmuş multibrend konseptli lüks və dəb məkanıdır.
        Şəhərin mərkəzində, dəbdəbəli Port Baku Mall-da yerləşən EMPORIUM yüksək səviyyəli kişi və qadın geyimləri,
        zərgərlik brendləri, kütləvi makiyaj və bədənə qulluq məhsulları, ətirlər və dizayner ev əşyaları var.
      </p>

      <div className="about-row">
        <img
          src="https://cdn.emporium.az/images/about1.jpg"
          alt="Port Baku Emporium"
          className="about-img"
        />
        <p className="about-text">
          EMPORIUM mağazası qlobal moda sənayesi tərəfindən yüksək qiymətləndirilən unikal qardaşı
          Bakıdakı lüks ticarət mərkəzi ilə birləşdirir. Emporium komandası hər biri mükəmməl dostluq
          əlaqələri qurulmuş 500-dən çox dünyaca məşhur lüks brendləri və həyat tərzi dizaynerlərini
          bir arada təqdim edir. Bizim bestsellerlərimiz: Bottega Veneta, Fendi, Miu Miu, Balenciaga,
          Givenchy və s. Emporium 50-dən çox mağaza və butikə malik olmaqla Qafqaz regionunda ən böyük
          və ən uğurlu pərakəndə satış şirkətlərindən biri olan Sinteks Şirkətlər Qrupunun ayrılmaz hissəsidir.
        </p>
      </div>

      <div className="about-gallery">
        <img
          src="https://cdn.emporium.az/images/about2.jpg"
          alt="Ralph Lauren"
        />
        <img
          src="https://cdn.emporium.az/images/about3.jpg"
          alt="Zərgərlik"
        />
      </div>
    </div>
  );
}
export default About;
