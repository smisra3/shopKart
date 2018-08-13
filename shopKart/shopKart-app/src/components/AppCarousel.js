import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const AppCarousel = props => {
  return (
    <Carousel swipeable={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
      <div>
        <img alt="" height="400" src="http://cdn.grofers.com/app/images/promotions/merchant/1533282658_Sm_452_web.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//www.bigbasket.com/media/uploads/banner_images/ColdCut-1200X300-25June2018.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/d32a030d-f482-446b-90af-635479ad5762/4e7f9cf3-b899-4301-950c-4d95fd116d06/T1_All_BAsmatiLaunch_DT_1_1130x400_25thjun.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/d32a030d-f482-446b-90af-635479ad5762/4e7f9cf3-b899-4301-950c-4d95fd116d06/T1_All_GoodDIet_1130x400_DT_2_25thjun.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//cdn.grofers.com/app/images/promotions/merchant/1532955798_monsoon_web.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//cdn.grofers.com/app/images/promotions/merchant/1533363790_HS_422_new_Happy-day-Savemore-web.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//cdn.grofers.com/app/images/promotions/merchant/1532332350_sp_4433_web.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//cdn.grofers.com/app/images/promotions/merchant/1532324445_HS_4656-happy-day-ketch-up--web_2.jpg" />
      </div>
      <div>
        <img alt="" height="400" src="//cdn.grofers.com/app/images/promotions/merchant/1533119390_PL_Web_Tea_DelhiNCR.jpg" />
      </div>

    </Carousel>
  )
};

export default AppCarousel;

