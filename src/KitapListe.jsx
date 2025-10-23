import React from 'react';
import KitapKartı from './KitapKarti';

const Kitap_Listele = ({ filtreliKitaplar, favoriler, toggleFavori }) => {
    if (filtreliKitaplar.length === 0) {
        return <p className="sonuc-yok">Filtrenize uygun kitap bulunamadı.</p>;
    }

    return (
        <div className="kitap-liste">
            {filtreliKitaplar.map((kitap) => (
                <KitapKartı
                    key={kitap.id}
                    kitap={kitap}
                    favoriler={favoriler}
                    toggleFavori={toggleFavori}
                    favoriButonStili="liste" // Liste butonları için stil
                />
            ))}
        </div>
    );
};

export default Kitap_Listele;
