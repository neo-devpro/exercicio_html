document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-valid');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const valorA = parseFloat(document.getElementById('ValorA').value);
      const valorB = parseFloat(document.getElementById('ValorB').value);
  
      if (isNaN(valorA) || isNaN(valorB)) {
        alert('Por favor, insira valores numéricos válidos em ambos os campos.');
      } else if (valorB <= valorA) {
        alert('O valor B deve ser maior que o Valor A.');
      } else {
        alert('Validação bem-sucedida! Valor B é maior que Valor A.');
        form.reset(); 
      }
    });
  });