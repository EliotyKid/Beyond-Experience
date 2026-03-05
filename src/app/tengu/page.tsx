const Tengu = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex justify-center">
      <div className="max-w-3xl p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center">Regras do Jogo Tengu</h1>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Objetivo</h2>
          <p>
            O objetivo do jogo é derrotar seu oponente utilizando cartas de
            ataque, defesa e habilidade estratégica.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Preparação</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cada jogador embaralha seu baralho.</li>
            <li>Cada jogador compra 5 cartas.</li>
            <li>Escolha aleatoriamente quem começa.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Turno</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Compre 1 carta.</li>
            <li>Jogue uma carta da mão.</li>
            <li>Resolva os efeitos da carta.</li>
            <li>Passe o turno.</li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">Vitória</h2>
          <p>
            O jogador vence quando o oponente ficar sem pontos de vida ou não
            puder mais realizar jogadas.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Tengu;
