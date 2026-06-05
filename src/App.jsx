import React, { useState } from 'react';

const MOVIES_BY_GENRE = {
  "🍿 Ação": [
    "Mad Max: Estrada da Fúria", "John Wick 4: Baba Yaga", "Gladiador", "Batman: O Cavaleiro das Trevas", 
    "Top Gun: Maverick", "Avatar: O Caminho da Água", "Duna: Parte Dois", "Missão: Impossível - Acerto de Contas", 
    "Vingadores: Ultimato", "Tropa de Elite", "O Resgate do Soldado Ryan", "Busca Implacável"
  ],
  "😂 Comédia": [
    "As Branquelas", "Se Beber, Não Case!", "Superbad: É Hoje", "Gente Grande", "O Auto da Compadecida", 
    "Minha Mãe é uma Peça", "Todo Mundo em Pânico", "De Pernas pro Ar", "Click", "Quase Irmãos", 
    "Deadpool", "O Máskara"
  ],
  "🎭 Drama": [
    "Um Sonho de Liberdade", "Forrest Gump: O Contador de Histórias", "O Poderoso Chefão", "A Lista de Schindler", 
    "O Clube da Luta", "A Procura da Felicidade", "O Castelo Animado", "À Espera de um Milagre", 
    "Coringa", "Parasita", "Interestelar", "Cidade de Deus"
  ],
  "👻 Terror / Suspense": [
    "O Exorcista", "Invocação do Mal", "Hereditário", "Corra!", "O Iluminado", "A Bruxa", 
    "Fragmentado", "O Sexto Sentido", "Um Lugar Silencioso", "Midsommar", "Sorria", "Pânico"
  ],
  "❤️ Romance": [
    "Diário de uma Paixão", "Como Eu Era Antes de Você", "Orgulho e Preconceito", "Questão de Tempo", 
    "Titanic", "La La Land: Cantando Estações", "A Culpa é das Estrelas", "Nasce uma Estrela", 
    "10 Coisas que Eu Odeio em Você", "Amor e Outras Drogas", "Antes do Amanhecer", "Simplesmente Amor"
  ],
  "🚀 Ficção / Fantasia": [
    "A Origem", "Matrix", "O Senhor dos Anéis: A Sociedade do Anel", "Star Wars: O Império Contra-Ataca", 
    "Harry Potter e o Prisioneiro de Azkaban", "Blade Runner 2049", "De Volta para o Futuro", "Jurassic Park", 
    "Tudo em Todo o Lugar ao Mesmo Tempo", "Perdido em Marte", "Interestelar", "Ready Player One"
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [drawnMovie, setDrawnMovie] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDraw = (genre) => {
    setIsAnimating(true);
    setDrawnMovie(""); // Limpa o filme anterior para dar efeito

    setTimeout(() => {
      const movies = genre 
        ? MOVIES_BY_GENRE[genre] 
        : Object.values(MOVIES_BY_GENRE).flat();
      
      const randomIndex = Math.floor(Math.random() * movies.length);
      setDrawnMovie(movies[randomIndex]);
      setSelectedGenre(genre ? genre.substring(2) : "Todos os Gêneros");
      setIsAnimating(false);
    }, 400); // Pequeno delay charmoso para simular o sorteio
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      color: '#f8fafc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '32px 24px',
        borderRadius: '20px',
        maxWidth: '440px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)'
      }}>
        
        {/* Cabeçalho */}
        <div style={{ marginBottom: '28px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '800', 
            letterSpacing: '-0.5px', 
            marginBottom: '8px', 
            background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎬 DECIDE LOGO!
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.5' }}>
            Chega de perder horas escolhendo. Toque em um gênero ou mande o destino decidir por você!
          </p>
        </div>

        {/* Grade de Gêneros */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '12px', 
          marginBottom: '20px' 
        }}>
          {Object.keys(MOVIES_BY_GENRE).map((genre) => (
            <button
              key={genre}
              onClick={() => handleDraw(genre)}
              style={{
                backgroundColor: 'rgba(51, 65, 85, 0.6)',
                color: '#f1f5f9',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '14px 10px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(71, 85, 105, 0.8)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(51, 65, 85, 0.6)'}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Botão de Sorteio Geral */}
        <button
          onClick={() => handleDraw(null)}
          style={{
            width: '100%',
            background: 'linear-gradient(90deg, #ea580c 0%, #d97706 100%)',
            color: '#ffffff',
            border: 'none',
            padding: '16px',
            borderRadius: '14px',
            cursor: 'pointer',
            fontWeight: '700',
            fontSize: '16px',
            boxShadow: '0 4px 12px rgba(234, 88, 12, 0.3)',
            transition: 'transform 0.1s ease'
          }}
        >
          🎲 Me Surpreenda com Qualquer Um!
        </button>

        {/* Container do Resultado */}
        {(drawnMovie || isAnimating) && (
          <div style={{
            marginTop: '32px',
            padding: '20px',
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            borderRadius: '14px',
            border: '1px dashed rgba(245, 158, 11, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            {isAnimating ? (
              <span style={{ fontSize: '15px', color: '#fbbf24', fontWeight: '500' }}>
                🍿 Olhando o catálogo...
              </span>
            ) : (
              <>
                <span style={{ 
                  fontSize: '11px', 
                  color: '#94a3b8', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px',
                  display: 'block', 
                  marginBottom: '8px' 
                }}>
                  Sugerido de: <strong>{selectedGenre}</strong>
                </span>
                <strong style={{ 
                  fontSize: '20px', 
                  color: '#ffffff',
                  display: 'block',
                  lineHeight: '1.4'
                }}>
                  {drawnMovie}
                </strong>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
        }
          
