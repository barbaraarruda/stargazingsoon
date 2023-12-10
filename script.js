// Função para formatar os valores com zero à esquerda, se necessário
function formatTime(value) {
    return value < 10 ? `0${value}` : value;
  }
  
  // Definindo a data para a contagem regressiva (exemplo: 1 de janeiro de 2024)
  const targetDate = new Date('June 18, 2024 00:00:00').getTime();
  
  // Função para atualizar a contagem regressiva
  function updateCountdown() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
  
    if (remainingTime < 0) {
      clearInterval(countdown);
      document.getElementById('countdown').innerHTML = 'Tempo esgotado!';
      return;
    }
  
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
    // Atualizando o conteúdo do countdown com rótulos
    document.getElementById('countdown').innerHTML = `
      <div class="countdown-item">
        <div class="countdown-numeros">${formatTime(days)}</div>
        <div class="countdown-texto">dias</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-numeros">${formatTime(hours)}</div>
        <div class="countdown-texto">horas</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-numeros">${formatTime(minutes)}</div>
        <div class="countdown-texto">minutos</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-numeros">${formatTime(seconds)}</div>
        <div class="countdown-texto">segundos</div>
      </div>
    `;
  }
  
  // Atualizando a contagem regressiva a cada segundo
  const countdown = setInterval(updateCountdown, 1000);
  
  // Chamando a função pela primeira vez para evitar um atraso inicial
  updateCountdown();
  

// Função chamada ao clicar no botão "Quero me Inscrever"
function inscrever() {
  alert('Inscrição realizada com sucesso!');
}
// Função para criar estrelas dinamicamente
function createStars() {
    const numberOfStars = 100;
    const starsContainer = document.querySelector('.stars');
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }
  }
  
  // Chame a função para criar estrelas quando a página carregar
  window.onload = createStars;