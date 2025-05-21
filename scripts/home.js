document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll('.btn-iniciar');

    // Gabriel - Inglês
    botoes[0].addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>What is Financial Difficulty?</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, Helvetica, sans-serif; background: linear-gradient(135deg, #e3f0ff 0%, #f9fafc 100%); margin:0; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh;}
                    .box { background:#fff; border-radius:18px; box-shadow:0 8px 32px #1a8cff22; padding:38px 30px; max-width:650px; margin:32px auto; font-size:1.18em; color:#333;}
                    h1 { color:#1a8cff; margin-bottom:24px; font-size:2em; }
                    p { margin-bottom: 18px; line-height: 1.7; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>What is Financial Difficulty?</h1>
                    <p>
                        Financial difficulty is when a person or family cannot afford to pay for all their essential needs, such as food, housing, bills, and debts. This situation can happen for many reasons, including job loss, reduced income, unexpected expenses, illness, or a lack of financial planning.
                    </p>
                    <p>
                        Facing financial hardship can cause stress, anxiety, and affect your quality of life and relationships. It may feel overwhelming, but recognizing the problem is the first step to finding solutions.
                    </p>
                    <p>
                        Overcoming financial difficulty is possible with information, discipline, and support. Start by understanding your financial reality, organizing your budget, cutting unnecessary expenses, and seeking guidance if needed. Remember, you are not alone—many people face similar challenges, and with the right attitude and knowledge, you can regain control of your finances and build a more secure future.
                    </p>
                    <p style="color:#1a8cff; font-weight:bold; text-align:center;">
                        Take the first step today towards a healthier and more secure financial life!
                    </p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    });

    // Guilherme - Espanhol
    botoes[1].addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>¿Qué es la Dificultad Financiera?</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, Helvetica, sans-serif; background: linear-gradient(135deg, #e3f0ff 0%, #f9fafc 100%); margin:0; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh;}
                    .box { background:#fff; border-radius:18px; box-shadow:0 8px 32px #1a8cff22; padding:38px 30px; max-width:650px; margin:32px auto; font-size:1.18em; color:#333;}
                    h1 { color:#1a8cff; margin-bottom:24px; font-size:2em; }
                    p { margin-bottom: 18px; line-height: 1.7; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>¿Qué es la Dificultad Financiera?</h1>
                    <p>
                        La dificultad financiera ocurre cuando una persona o familia no puede cubrir todas sus necesidades básicas, como alimentación, vivienda, cuentas y deudas. Esta situación puede surgir por muchas razones, como la pérdida de empleo, reducción de ingresos, gastos inesperados, enfermedad o falta de planificación financiera.
                    </p>
                    <p>
                        Enfrentar problemas financieros puede causar estrés, ansiedad y afectar la calidad de vida y las relaciones personales. Puede parecer abrumador, pero reconocer el problema es el primer paso para buscar soluciones.
                    </p>
                    <p>
                        Superar la dificultad financiera es posible con información, disciplina y apoyo. Comienza entendiendo tu realidad financiera, organizando tu presupuesto, eliminando gastos innecesarios y buscando orientación si es necesario. Recuerda, no estás solo: muchas personas pasan por lo mismo y, con la actitud y el conocimiento correctos, puedes recuperar el control de tus finanzas y construir un futuro más seguro.
                    </p>
                    <p style="color:#1a8cff; font-weight:bold; text-align:center;">
                        ¡Da hoy el primer paso hacia una vida financiera más saludable y segura!
                    </p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    });

    // Camilly - Francês
    botoes[2].addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>Qu'est-ce que la difficulté financière ?</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, Helvetica, sans-serif; background: linear-gradient(135deg, #e3f0ff 0%, #f9fafc 100%); margin:0; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh;}
                    .box { background:#fff; border-radius:18px; box-shadow:0 8px 32px #1a8cff22; padding:38px 30px; max-width:650px; margin:32px auto; font-size:1.18em; color:#333;}
                    h1 { color:#1a8cff; margin-bottom:24px; font-size:2em; }
                    p { margin-bottom: 18px; line-height: 1.7; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>Qu'est-ce que la difficulté financière ?</h1>
                    <p>
                        La difficulté financière se produit lorsqu'une personne ou une famille n'arrive pas à couvrir tous ses besoins essentiels, comme la nourriture, le logement, les factures et les dettes. Cette situation peut survenir pour de nombreuses raisons, telles que la perte d'emploi, la baisse de revenus, des dépenses imprévues, la maladie ou le manque de planification financière.
                    </p>
                    <p>
                        Faire face à des problèmes financiers peut provoquer du stress, de l'anxiété et affecter la qualité de vie et les relations. Cela peut sembler accablant, mais reconnaître le problème est la première étape pour trouver des solutions.
                    </p>
                    <p>
                        Surmonter la difficulté financière est possible avec de l'information, de la discipline et du soutien. Commencez par comprendre votre réalité financière, organiser votre budget, réduire les dépenses inutiles et demander conseil si besoin. N'oubliez pas : vous n'êtes pas seul, beaucoup de personnes traversent la même chose et, avec la bonne attitude et les bons outils, vous pouvez reprendre le contrôle de vos finances et construire un avenir plus sûr.
                    </p>
                    <p style="color:#1a8cff; font-weight:bold; text-align:center;">
                        Faites le premier pas aujourd'hui vers une vie financière plus saine et plus sûre !
                    </p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    });

    // Ana Sofia - Português
    botoes[3].addEventListener('click', () => {
        const win = window.open('about:blank', '_blank');
        win.document.write(`
            <html>
            <head>
                <title>O Que é Dificuldade Financeira?</title>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, Helvetica, sans-serif; background: linear-gradient(135deg, #e3f0ff 0%, #f9fafc 100%); margin:0; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:100vh;}
                    .box { background:#fff; border-radius:18px; box-shadow:0 8px 32px #1a8cff22; padding:38px 30px; max-width:650px; margin:32px auto; font-size:1.18em; color:#333;}
                    h1 { color:#1a8cff; margin-bottom:24px; font-size:2em; }
                    p { margin-bottom: 18px; line-height: 1.7; }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>O Que é Dificuldade Financeira?</h1>
                    <p>
                        Dificuldade financeira é quando uma pessoa ou família não consegue pagar todas as suas necessidades essenciais, como alimentação, moradia, contas e dívidas. Essa situação pode acontecer por vários motivos, como perda de emprego, redução de renda, gastos inesperados, doença ou falta de planejamento financeiro.
                    </p>
                    <p>
                        Enfrentar dificuldades financeiras pode causar estresse, ansiedade e afetar a qualidade de vida e os relacionamentos. Pode parecer algo difícil de superar, mas reconhecer o problema é o primeiro passo para buscar soluções.
                    </p>
                    <p>
                        Superar a dificuldade financeira é possível com informação, disciplina e apoio. Comece entendendo sua realidade financeira, organizando seu orçamento, cortando gastos desnecessários e buscando orientação se necessário. Lembre-se: você não está sozinho, muitas pessoas passam por isso e, com atitude e conhecimento, é possível retomar o controle das finanças e construir um futuro mais seguro.
                    </p>
                    <p style="color:#1a8cff; font-weight:bold; text-align:center;">
                        Dê o primeiro passo hoje para uma vida financeira mais saudável e segura!
                    </p>
                </div>
            </body>
            </html>
        `);
        win.document.close();
    });
});