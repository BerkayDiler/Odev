import React from 'react';
import { tumKategoriler } from './Kitaplar';

const KategoriFiltre = ({ kategori, setKategori }) => {
    return (
        <div className="kategori-filtre">
            <select 
                value={kategori} 
                onChange={(e) => setKategori(e.target.value)}
            >
                {tumKategoriler.map((kat) => (
                    <option key={kat} value={kat}>
                        {kat}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default KategoriFiltre;