import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function PokemonDetail() {
    const { id } = useParams();
    const [pokemonDetail, setPokemonDetail] = useState(null);

    useEffect(() => {
        const fetchPokemonDetail = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokemonDetail(data);
        } catch (error) {
            console.error('Error fetching Pokemon detail:', error);
        }
        };

        fetchPokemonDetail();
    }, [id]);


const getTypeClass = (typeName) => {
    switch (typeName) {
        case "fire":
        return "fire-type";
        case "water":
        return "water-type";
        case "grass":
        return "grass-type";
        case "electric":
        return "electric-type";
        case "ground":
        return "ground-type";
        case "ice":
        return "ice-type";
        case "poison":
        return "poison-type";
        case "flying":
        return "flying-type";
        case "bug":
        return "bug-type";
        case "normal":
        return "normal-type";
        case "fighting":
        return "fighting-type";
        case "psychic":
        return "psychic-type";
        case "rock":
        return "rock-type";
        case "ghost":
        return "ghost-type";
        case "dark":
        return "dark-type";
        case "steel":
        return "steel-type";
        case "fairy":
        return "fairy-type";
        default:
        return "default-type";
    }
    };

    return (
        <>
            <div className='head'>
                <Link className='link-arrow' to="/"><i className="ri-arrow-left-line"></i></Link>
                <h1 className='pokemon-details'>Detalles del pokemon</h1>
                
            </div>
            {pokemonDetail && (
                <div className='main-container'>
                    <h2>{pokemonDetail.name} <span>{   pokemonDetail.id}</span></h2>
                    <img className='new-pg-img' src={`${pokemonDetail.sprites.other.dream_world.front_default}`} alt="" />
                    <p>
                        Tipos:{" "}
                        {pokemonDetail.types.map((type, index) => (
                            <span
                                key={index}
                                className={getTypeClass(type.type.name)}
                                >
                                {type.type.name}
                            </span>
                        ))}
                    </p>

                </div>
                
            )}
            <div className="figure"></div>
            <div className="figure left"></div>
            <div className="bottom"></div>
            <div className="right"></div>
        </>
    );
    }

export default PokemonDetail;





