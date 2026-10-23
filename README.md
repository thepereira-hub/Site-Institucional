# Modelo de site institucional — Pulveriza Tech

Site institucional responsivo feito com React e Vite, sem dependências de UI adicionais. Os textos, serviços, diferenciais, logo e contato ficam reunidos em `src/siteConfig.js` para facilitar a reutilização com outras empresas.

## Personalizar para outra empresa

1. Abra `src/siteConfig.js` e altere `brand`, `location` e `serviceRegion`.
2. Atualize `heroTitle`, `heroEmphasis`, `heroDescription`, `solutionsIntro`, `benefitsIntro` e `about`.
3. Edite as listas `services` e `benefits` para refletir os serviços e diferenciais reais da empresa. Itens podem ser adicionados ou removidos.
4. Informe `whatsapp` com código do país e DDD, somente números. Exemplo: `"5566991234567"`. Sem esse número, o formulário avisa que falta configurar o WhatsApp e não abre um link inválido.
5. Para usar o logotipo da empresa, coloque o arquivo em `public` (por exemplo, `public/assets/logo.svg`) e informe `"/assets/logo.svg"` em `logo`. Deixe vazio para usar o símbolo e o nome em texto.
6. Se necessário, ajuste a descrição SEO em `index.html` e os textos fixos das seções em `src/App.jsx`.

O formulário abre uma conversa no WhatsApp; ele não armazena nem envia dados para um servidor. Antes de publicar, confirme que os serviços, diferenciais e informações de contato correspondem à empresa.

## Executar localmente

Instale o [Node.js](https://nodejs.org/) e execute:

```bash
npm install
npm run dev
```

Para gerar uma versão de produção, execute `npm run build`. Os arquivos finais serão criados na pasta `dist`.
