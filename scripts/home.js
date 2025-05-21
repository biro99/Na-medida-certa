document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll('.btn-iniciar');
    // Apenas para o botão do Gabriel (primeiro professor)
    botoes[0].addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        win.focus();
        win.document.write(`
            <html>
            <head>
                <title>O Que é Dificuldade Financeira</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; background: #f4f6fa; margin:0; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh;}
                    .box { background:#fff; border-radius:16px; box-shadow:0 4px 16px #1a8cff22; padding:32px 24px; max-width:540px; margin:32px auto; font-size:1.15em; color:#333;}
                    h1 { color:#1a8cff; margin-bottom:24px; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>O Que é Dificuldade Financeira?</h1>
                    <p>
                        Dificuldade financeira é uma situação em que uma pessoa ou família não consegue arcar com todas as suas despesas essenciais, como alimentação, moradia, contas básicas e dívidas. 
                        Essa condição pode surgir por diversos motivos, como perda de emprego, redução de renda, gastos inesperados, doenças ou até mesmo falta de planejamento financeiro.
                    </p>
                    <p>
                        Enfrentar dificuldades financeiras pode gerar ansiedade, estresse e impactar a qualidade de vida. 
                        Reconhecer o problema é o primeiro passo para buscar soluções, como reorganizar o orçamento, cortar gastos desnecessários e procurar orientação financeira.
                    </p>
                    <p>
                        Lembre-se: é possível superar a dificuldade financeira com informação, disciplina e apoio. Buscar conhecimento e agir cedo faz toda a diferença para retomar o controle da sua vida financeira.
                    </p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    });
});