import React from 'react';
import GoNews from './../../../components/molecules/GoNews';
import AskSee from './../../../components/atoms/AskSee';

const WebPerpusPasim = () => {
  return (
    <>
      <GoNews
        title="WEB-PERPUS"
        desc="Kunjungi juga web perpustakaan universitas nasional pasim untuk
          informasi lebih lanjut."
        onPress={() => AskSee('http://pustaka.pasim.ac.id/')}
        image={require('../../../assets/images/dummy/perpusfoto.jpg')}
      />
    </>
  );
};

export default WebPerpusPasim;
