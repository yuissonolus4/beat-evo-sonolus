# Projeto Sonolus — primeira etapa

Este é um primeiro protótipo do engine, baseado no template Sonolus.js que você enviou.

## O que foi preparado
- Removi a opção de Skin da configuração, porque você pediu para deixar skins para depois.
- O Stage agora tenta desenhar a linha de julgamento padrão do Sonolus.
- A linha fica um pouco mais visível quando há toque na tela.
- Removi o `debug.log(time.now)` que só mostrava valores de tempo.

## Importante
Este ainda não é o jogo completo: ainda faltam as notas, o julgamento de acertos, a pontuação e a interface final. O ZIP original não continha `node_modules`, então não consegui executar o compilador deste projeto aqui. A implementação usa os nomes de API mostrados no guia oficial do Sonolus.js, mas precisa ser testada no seu Termux.

## Como testar no Termux
1. Faça uma cópia de segurança da pasta antiga.
2. Extraia este ZIP e substitua os arquivos do projeto pelos arquivos desta versão.
3. Dentro da pasta do projeto, rode:
   `npm run dev-play`

Se o Termux mostrar um erro, envie o texto do erro ou uma captura de tela. Não precisa executar vários comandos de diagnóstico antes.
