import "./Swipers.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SwipersImages = [
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-05-27/pBbegfLejqOchYPZP0Hkn1Blo2Ok1jfNFBq46vRZ0YQ0LT35CC5mffcXaa7r.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-25/KBQBHgU9UG1TC0LLmZHCOj4OVXT9Rv7WKnMS5xHaqPqg9ARGh81Xz63J5OWW.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-01-27/08L6BDqIEHLkzTJXQZhkunCn6rZQWjslpBNSDqu4wNXCa6ttuH7e40FsPWo3.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/eD44YbvcWxdjW3A6z1jAC5ZFhhA7eS6LUxiJt21BD28v8QUUQ8Lc0yrwrX6a.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/Xh8dn6Pn29v1G2AK1g9dbkoxBXfiDB9mAhl94oy41NYSzyHwTvLrW2WLhpTD.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/KXOVWPtPtCLdlw9kz60Y3l8qDXLT4IS76T4HAtBGOjfNDrKSuRKPyQ9eF2nw.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/YcyksWmTRV0qBT3zx30r1JwPrONORWEn8vXTstBUNT4sxl1XgAGjSFyWztOW.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/iJkfOIpCVuM4ljhLyDndilY5CwWidse6C5po32VZcnSFWOmEkiMXdXT1czCl.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/phZQnMmiOM8mDgYzQTv5wxNO6HyoJFwb19cunBTfn8pPE8ENjLDnVNKcYulx.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/PpPmWt8Kd0kVK0XESnhj7HH39ZLQhhrHrxngTTSEdIpEfIVyWNuOp3jujVX7.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-01-27/OV5HcLmsTegjoid5XaDARctbT8wwXpDqy21oSeNMSMKKPRX6uxP8IYLY60yL.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2025-02-07/GJOd1a55WNLyOwH5cSidwV57cLowXNpuSdEPgUX6Hqj5kYgXkEqUDtctNay2.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-10/cSIwzbC9z3YZhzZeFcgmiUPpjJFKBxehzstSAIZcOqSyJr1P5TasMeqo6Mna.jpg",
  "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-23/hTWifEsGQFrhhXzPZNiwigqNPf2LZcZbuzfagswU37ziuRaqbt9J2xXmR6fQ.png",
];

const SwipersImagesCard = [
  "https://olcha.uz/image/220x220/products/7aJtfBC8lTOhxrMBveKfISmlRS6Fzy4e8w3InbAvt5CuTqSKJelVRZ1pEJ3r.jpg",
  "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-12-23/DkF1egwAT2HZhYTgnviTJsuIWSXcz3h5rVngXoO4upSOTJbkLRmuuSXOCovS.png",
  "https://olcha.uz/image/220x220/products/cdn_1/supplier/stores/1/2024-06-24/fSsuQs1AB3Tuq81pfrMIJwjZOJndnSv5U2LL8bKBIirmEFVFvKucTb1XFILu.JPG",
];

const Swipers = () => {
  return (
    <div className="container">
      <section className="swipers-swipers">
        {/* Asosiy Swiper */}
        <Swiper
          className="swipers-swiper"
          slidesPerView={1}
          spaceBetween={10}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {SwipersImages.map((itemUrl, indexUrl) => (
            <SwiperSlide key={indexUrl}>
              <Link>
                <img src={itemUrl} alt={`Slide ${indexUrl + 1}`} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Kichik kartalar Swiper */}
        <aside>
          <Swiper
            className="swipers-cards-swiper"
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {SwipersImagesCard.map((itemUrl, indexUrl) => (
              <SwiperSlide key={indexUrl}>
                <Link to={`/product/${indexUrl + 1}`}>
                  <img src={itemUrl} alt={`Slide ${indexUrl + 1}`} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </aside>
      </section>
    </div>
  );
};

export default Swipers;
