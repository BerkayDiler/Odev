import React from 'react';
import { tumKitaplar } from './Kitaplar.js';
import KitapKarti from './KitapKarti.jsx';

const FavoriPaneli = ({ favoriler, toggleFavori }) => {
    
    const favoriKitaplar = tumKitaplar.filter(kitap => favoriler.includes(kitap.id));

    return (
        <div className="favori-panel">
            <h2>Favoriler ({favoriKitaplar.length})</h2>
            <div className="favori-liste">
                {favoriKitaplar.length === 0 ? (
                    <p className="favori-yok">Henüz favori kitabınız yok.</p>
                ) : (
                    <ul className="favori-kitaplar-listesi">
                        {favoriKitaplar.map(kitap => (
                            <li key={kitap.id}>
                                {kitap.baslik}
                                <button 
                                    className="favori-kaldır-buton"
                                    onClick={() => toggleFavori(kitap.id)}
                                >
                                    Kaldır
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FavoriPaneli;
