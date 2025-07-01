import { useState } from 'react';
import './App.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [entradas, setEntradas] = useState([
    {
      titulo: 'Bienvenido a mi blog',
      contenido: 'Este es un espacio donde comparto ideas, proyectos y más.'
    }
  ]);

  const [modoOscuro, setModoOscuro] = useState(true);

  const alternarModo = () => {
    setModoOscuro(!modoOscuro);
  };

  const agregarEntrada = () => {
    if (titulo.trim() !== '' && contenido.trim() !== '') {
      const nuevasEntradas = [...entradas, { titulo, contenido }];
      setEntradas(nuevasEntradas);
      setTitulo('');
      setContenido('');
    }
  };

  return (
    <div className={`blog-container ${modoOscuro ? 'oscuro' : 'claro'}`}>
      {/* 1. Header */}
      <header className="seccion header">
        <h1>Mi Blog Personal</h1>
        <button className="toggle-modo" onClick={alternarModo}>
          {modoOscuro ? '☀️' : '🌙'}
        </button>
      </header>

      {/* 2. Presentación */}
      <section className="seccion presentacion">
        <div className="presentacion-contenido">
          <img
            src="public/luna.jpg"
            alt="Foto de Humberto"
            className="foto-perfil"
          />
          <div className="datos-personales">
            <h2>Humberto Aponte Gonzales</h2>
            <p><strong>Edad:</strong> 23 años</p>
            <p><strong>Fecha de nacimiento:</strong> 20 de julio de 2001</p>
            <p><strong>Sexo:</strong> Masculino</p>
            <p>
              Soy un estudiante apasionado por la tecnología, la programación y el desarrollo web.
              Siempre listo para aprender cosas nuevas.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Entradas del blog */}
      <section className="seccion entradas">
        <h2>Entradas Recientes</h2>
        {entradas.length > 0 ? (
          entradas.map((entrada, i) => (
            <article key={i} className="entrada">
              <h3>{entrada.titulo}</h3>
              <p>{entrada.contenido}</p>
            </article>
          ))
        ) : (
          <p>No hay entradas todavía.</p>
        )}
      </section>

      {/* 4. Formulario para nueva entrada */}
      <section className="seccion nueva-entrada">
        <h2>Agregar nueva entrada</h2>
        <input
          type="text"
          placeholder="Título de la entrada"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <textarea
          placeholder="Contenido de la entrada"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        />
        <button onClick={agregarEntrada}>Publicar</button>
      </section>

      {/* 5. Footer */}
      <footer className="seccion footer">
        <p>© 2025 - Blog React</p>
      </footer>
    </div>
  );
}

export default App;
