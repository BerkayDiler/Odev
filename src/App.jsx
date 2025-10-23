
import React, { useState, useMemo, useEffect } from 'react';
import { tumKitaplar } from './kitaplar'; 
import AramaCubugu from './AramaCubugu';
import KategoriFiltre from './KategoriFiltre';
import KitapListe from './KitapListe';
import FavoriPaneli from './FavoriPaneli';
import './App.css'; 


const getLocalStorageItem = (key, defaultValue) => {
    try {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    } catch (error) {
        console.error("Local storage okuma hatası:", error);
        return defaultValue;
    }
};

const setLocalStorageItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Local storage yazma hatası:", error);
    }
};

function App() {
    
    const [aramaMetni, setAramaMetni] = useState(() =>
        getLocalStorageItem('aramaMetni', '')
    );
    const [kategori, setKategori] = useState(() =>
        getLocalStorageItem('kategori', 'Tümü')
    );
 
    // Görseldeki gibi id: 1 ve 2'yi favori olarak başlatıyoruz
    const [favoriler, setFavoriler] = useState(() =>
        getLocalStorageItem('favoriler', [1, 2]) 
    );

    
    // Local Storage senkronizasyonu
    useEffect(() => {
        setLocalStorageItem('aramaMetni', aramaMetni);
    }, [aramaMetni]);

    useEffect(() => {
        setLocalStorageItem('favoriler', favoriler);
    }, [favoriler]);

    useEffect(() => {
        setLocalStorageItem('kategori', kategori);
    }, [kategori]);

    
    const toggleFavori = (kitapId) => {
        setFavoriler(prevFavoriler => {
            if (prevFavoriler.includes(kitapId)) {
                return prevFavoriler.filter(id => id !== kitapId);
            } else {
                return [...prevFavoriler, kitapId];
            }
        });
    };

 
    const filtreliKitaplar = useMemo(() => {
        return tumKitaplar.filter((kitap) => {
            
            // Kategori filtrelemesi
            const kategoriUygun = kategori === 'Tümü' || kitap.kategori === kategori;

            // Arama filtrelemesi
            const aramaMetniKucuk = aramaMetni.toLowerCase();
            const aramaUygun = kitap.baslik.toLowerCase().includes(aramaMetniKucuk) ||
                                 kitap.yazar.toLowerCase().includes(aramaMetniKucuk);

            return kategoriUygun && aramaUygun;
        });
    }, [aramaMetni, kategori]);

    return (
        <div className="mini-kitaplik-container">
            <h1>Mini Kitaplık</h1>
            <div className="arama-filtre-container">
                <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
                <KategoriFiltre kategori={kategori} setKategori={setKategori} />
            </div>

            <div className="ana-icerik">
                <KitapListe
                    filtreliKitaplar={filtreliKitaplar}
                    favoriler={favoriler}
                    toggleFavori={toggleFavori}
                />
                <FavoriPaneli favoriler={favoriler} toggleFavori={toggleFavori} />
            </div>
        </div>
    );
}

export default App;