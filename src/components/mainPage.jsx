import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainContent() {
    const [cards, setCards] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
            const data = await response.json();
            setCards(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
        try {
            const imageUrls = [];

            for (const card of cards) {
            const response = await fetch(card.url);
            const imageData = await response.json();

            // Cambiar a other.front_default
            const imageUrl = imageData.sprites.other['official-artwork'].front_default;

            imageUrls.push(imageUrl);
            }

            setImages(imageUrls);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
        };

        if (cards.length > 0) {
        fetchImages();
        }
    }, [cards]);

    return (
        <>
        <div className='title-container'>
            <h1 className='main-title'>Pókedex</h1>
            <div className='filter-container'>
            <input type="text"/>
            <div className='search'> <i className="ri-search-line"></i> </div>
            </div>
        </div>

        <main className='pokemon-container'>
            {cards.map((card, index) => (
            <div key={index} className="card" style={{ width: '20rem' }}>
                <div className="card-body">
                <h1 className="card-title">{card.name}</h1>
                {images[index] && <img src={images[index]} className="card-img-top" alt={card.name} />}
                <p className="card-text"></p>
                <Link to={`/pokemon/${index + 1}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            </div>
            ))}
        </main>
        </>
    );
    }

export default MainContent;
