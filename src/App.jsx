import React, { useState } from 'react';

const MOVIES_BY_GENRE = {
  Acao: ["Mad Max: Estrada da Fúria", "John Wick", "Gladiador", "Batman: O Cavaleiro das Trevas", "Top Gun: Maverick"],
  Comedia: ["As Branquelas", "Se Beber, Não Case!", "Superbad", "Gente Grande", "O Auto da Compadecida"],
  Drama: ["Um Sonho de Liberdade", "Forrest Gump", "O Poderoso Chefão", "A Lista de Schindler", "Interstellar"],
  Terror: ["O Exorcista", "Invocação do Mal", "Hereditário", "Corra!", "O Iluminado"],
  Romance: ["Diário de uma Paixão", "Como Eu Era Antes de Você", "Orgulho e Preconceito", "Questão de Tempo", "Titanic"]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [drawnMovie, setDrawnMovie] = useState("");

  const handleDraw = (genre) => {
    const movies = genre 
      ? MOVIES_BY_GENRE[genre] 
      : Object.values(MOVIES_BY_GENRE).flat();
    
    const randomIndex = Math.floor(Math.random() * movies.length);
    setDrawnMovie(movies[randomIndex]);
    setSelectedGenre(genre || "Todos");
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111827',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: '#1f2937',
        padding: '30px',
        borderRadius: '12px',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#f59e0b' }}>
          🍿 DECIDE LOGO!
        </h1>
        <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '14px' }}>
          Não sabe o que assistir? Escolha um gênero ou deixe o destino decidir.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
          {Object.keys(MOVIES_BY_GENRE).map((genre) => (
            <button
              key={genre}
              onClick={() => handleDraw(genre)}
              style={{
                backgroundColor: '#374151',
                color: '#fff',
                border: 'none',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleDraw(null)}
          style={{
            width: '100%',
            backgroundColor: '#d97706',
            color: '#fff',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '5px'
          }}
        >
          🎲 Me Surpreenda!
        </button>

        {drawnMovie && (
          <div style={{
            marginTop: '25px',
            padding: '15px',
            backgroundColor: '#111827',
            borderRadius: '8px',
            borderLeft: '4px solid #f59e0b'
          }}>
            <span style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '4px' }}>
              Filme sorteado ({selectedGenre}):
            </span>
            <strong style={{ fontSize: '18px', color: '#fff' }}>{drawnMovie}</strong>
          </div>
        )}
      </div>
    </div>
  );
                                   }
          
