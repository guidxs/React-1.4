import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../routes/estilo.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Home() {
  /*Hooks */
  const [slidePreview, setSlidePreview] = useState(1);

  /*criando o objeto de imagens*/
  const imagens = [
    { id: '1', image: './src/assets/img1.jpg' },
    { id: '2', image: './src/assets/img2.jpg' },
    { id: '3', image: './src/assets/img3.jpg' },
  ];
  /* useEffect é um hook de efeitos colaterais */

  useEffect(() => {
    /*crinado a função de responsividade do slideshow */
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePreview(1);
      } else {
        setSlidePreview(2);
      }
    }
    /*chamando a função */
    handleResize();

    /*evento para modificar toda vez o que usuario diminuir a tela */
    window.addEventListener('resize', handleResize);
    /*removendo o efeito quando aumentar a tela  */
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <Swiper
        slidePreview={slidePreview}
        pagination={{ clickable: true }}
        navigation
      >
        {imagens.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slides" className={styles.slideItem} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export default Home;
