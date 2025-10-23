import React from 'react';

const KitapKartı = ({ kitap, favoriler, toggleFavori, favoriButonStili }) => {
    const isFavori = favoriler.includes(kitap.id);

    // Favori butonunun içeriği ve sınıfı, görseldeki "Favoride" veya "Favori Ekle" metnine göre ayarlanmıştır.
    const butonMetni = isFavori 
        ? (favoriButonStili === 'kaldır' ? 'Kaldır' : 'Favoride')
        : '☆ Favori Ekle';
        
    const butonSinifi = isFavori ? 'favori-ekli' : 'favori-ekle';

    return (
        <div className="kitap-kart" key={kitap.id}>
            <div className="kitap-bilgi">
                <h3 className="kitap-baslik">{kitap.baslik}</h3>
                <p className="kitap-yazar">{kitap.yazar} · {kitap.kategori}</p>
                
                <button 
                    className={`favori-buton ${butonSinifi} ${favoriButonStili}`}
                    onClick={() => toggleFavori(kitap.id)}
                >
                    {butonMetni}
                </button>
            </div>
        </div>
    );
};

export default KitapKartı;