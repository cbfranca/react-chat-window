export default [
  { type: 'text', author: "me", data: { text: "Why don't they have salsa on the table?" } },
  { type: 'text', author: "them", data: { text: "What do you need salsa for?" } },
  { type: 'text', author: "me", data: { text: "Salsa is now the number one condiment in America." } },
  { type: 'text', author: "them", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } },
  { type: 'text', author: "me", data: { text: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'" } },
  { type: 'text', author: "them", data: { text: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!" } },
  { type: 'text', author: "me", data: { text: "See, this should be a show. This is the show. " } },
  { type: 'text', author: "them", data: { text: "What?" } },
  { type: 'text', author: "me", data: { text: "This. Just talking." } },
  { type: 'text', author: "them", data: { text: "Yeah, right." } },
  { type: 'text', author: "me", data: { text: "I'm really serious. I think that's a good idea. " } },
  { type: 'text', author: "them", data: { text: "Just talking? Well what's the show about?" } },
  { type: 'text', author: "me", data: { text: "It's about nothing." } },
  { type: 'text', author: "them", data: { text: "No story?" } },
  { type: 'text', author: "me", data: { text: "No forget the story. " } },
  { type: 'text', author: "them", data: { text: "You've got to have a story." } },
  { type: 'emoji', author: "me", data: { emoji: "😋" } },
  {
    type: 'option',
    author: "them",
    data: {
      "title": "Qual das análises avançadas você gostaria de ter mais informações?",
      "options": [
        {
          "label": "Análise de Produtos",
          "value": {
            "input": {
              "text": "Análise de Produtos"
            }
          }
        },
        {
          "label": "Rentabilidade Real",
          "value": {
            "input": {
              "text": "Rentabilidade Real"
            }
          }
        },
        {
          "label": "Projeção da Carteira",
          "value": {
            "input": {
              "text": "Projeção da Carteira"
            }
          }
        },
        {
          "label": "Sensibilidade dos Ativos",
          "value": {
            "input": {
              "text": "Sensibilidade dos Ativos"
            }
          }
        },
        {
          "label": "Risco x Retorno",
          "value": {
            "input": {
              "text": "Risco x Retorno"
            }
          }
        },
        {
          "label": "Cobertura do FGC",
          "value": {
            "input": {
              "text": "Cobertura do FGC"
            }
          }
        },
        {
          "label": "Multiplas Carteiras",
          "value": {
            "input": {
              "text": "Multiplas Carteiras"
            }
          }
        }
      ]
    }
  }]