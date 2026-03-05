import styles from "./styles.module.scss";

const RULES = [
  {
    title: "1. Objetivo do jogo",
    items: [
      "Ser o último jogador com vidas restantes.",
      "Em cada rodada, você aposta quantos rounds vai vencer (0 até o número de cartas na mão).",
    ],
  },
  {
    title: "2. Jogadores",
    items: [
      "Mínimo: 2 jogadores (sem limite).",
      "Cada jogador começa com 3 vidas.",
    ],
  },
  {
    title: "3. Preparação",
    items: [
      "Escolha um jogador para embaralhar e distribuir na 1ª rodada.",
      "Todos começam com 3 vidas.",
      "O jogo é dividido em rodadas.",
    ],
  },
  {
    title: "4. Turno de embaralhar",
    items: [
      "A cada rodada, quem embaralha e distribui passa a ser o jogador à direita de quem embaralhou na rodada anterior.",
    ],
  },
  {
    title: "5. Estrutura das rodadas (cartas por jogador)",
    items: [
      "Rodada 1: 1 carta por jogador.",
      "A cada rodada, aumenta +1 carta por jogador até atingir o máximo possível com o baralho.",
      "Ao atingir o máximo, passa a diminuir 1 carta por rodada até voltar a 1 carta.",
      "Quando voltar a 1 carta, o ciclo recomeça aumentando novamente.",
      "Após cada rodada, recolha as cartas, embaralhe e redistribua.",
    ],
  },
  {
    title: "6. Primeira rodada (modo oculto)",
    items: [
      "Cada jogador recebe 1 carta.",
      "Você não pode ver a sua própria carta.",
      "Você pode ver a carta dos outros jogadores.",
    ],
  },
  {
    title: "7. Rodadas seguintes",
    items: [
      "A partir da 2ª rodada, você pode ver suas cartas.",
      "Não pode ver as cartas dos outros jogadores.",
    ],
  },
  {
    title: "8. Palpites",
    items: [
      "Antes de jogar, cada jogador declara quantos rounds vai vencer na rodada.",
      "O palpite deve ser um número de 0 até o total de cartas na mão.",
      "A ordem dos palpites começa pelo jogador à direita de quem distribuiu e segue no sentido horário.",
    ],
  },
  {
    title: "9. Como jogar os rounds",
    items: [
      "Cada carta jogada equivale a 1 round.",
      "O jogador à direita de quem distribuiu inicia o 1º round jogando uma carta.",
      "Em seguida, todos jogam 1 carta (na ordem).",
      "A maior carta vence o round.",
      "O vencedor do round começa o próximo round.",
      "Repita até todas as cartas da rodada serem jogadas.",
    ],
  },
  {
    title: "10. Resultado da rodada",
    items: [
      "Conte quantos rounds cada jogador venceu.",
      "Compare com o palpite feito no início da rodada.",
    ],
  },
  {
    title: "11. Penalidade",
    items: [
      "Se o jogador acertar exatamente o palpite: nada acontece.",
      "Se errar o palpite: perde 1 vida.",
    ],
  },
  {
    title: "12. Eliminação",
    items: [
      "Quem perder todas as vidas é eliminado e não joga as próximas rodadas.",
    ],
  },
  {
    title: "13. Vitória",
    items: [
      "O jogo termina quando restar apenas um jogador com vidas. Ele vence.",
    ],
  },
  {
    title: "14. Desempate (regra da partida)",
    items: [
      "Se houver empate ao determinar um vencedor (ex.: maior carta igual em um round decisivo), o desempate é pela segunda maior carta jogada na partida.",
      "Vence quem tiver jogado essa segunda maior carta.",
    ],
  },
];

export default function Page() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.badge}>Regras Oficiais</div>
        <h1 className={styles.title}>Jogo de Cartas — Regras Completas</h1>
        <p className={styles.subtitle}>
          Leia abaixo ou use o QR Code no verso da carta para acessar esta
          página.
        </p>
      </header>

      <section className={styles.grid}>
        {RULES.map((sec) => (
          <article key={sec.title} className={styles.card}>
            <h2 className={styles.h2}>{sec.title}</h2>
            <ul className={styles.list}>
              {sec.items.map((it, idx) => (
                <li key={idx} className={styles.li}>
                  {it}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
