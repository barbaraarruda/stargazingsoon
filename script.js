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
    const numberOfStars = 400;
    const starsContainer = document.querySelector('.stars');
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
    }

    //atualizando periodicamente a posição das estrelas
    setInterval(updateStarsPosition, 20000);
  }
  //função para atualizar a posição das estrelas
  function updateStarsPosition(){
    const stars =  document.querySelectorAll('.star');

    stars.forEach(star => {
      const movementX = (Math.random() - 0.5) * 10; //movimento horizontal
      const movementY = (Math.random() - 0.5) * 10; //movimento vertical
      const currentLeft = parseFloat(star.style.left);
      const currentTop = parseFloat(star.style.top);
      const newLeft = `${Math.max(0, Math.min(100, currentLeft + movementX))}%`;
      const newTop = `${Math.max(0, Math.min(100, currentTop + movementY))}%`;
      star.style.left = newLeft;
      star.style.top = newTop;
    });
  }
  
  // Chame a função para criar estrelas quando a página carregar
  window.onload = createStars;

  //adicionar classe ao corpo quando a página carrega
  document.body.classList.add('scroll-animation');

  //removendo a classe ao rolar para cima
  window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
      document.body.classList.add('scroll-animation');
    } else {
      document.body.classList.remove('scroll-animation');
    }
  });

  //adiciona e remove a classe glow com base no evento de rolagem
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollGlowClass = 'scroll-glow';

    if(scrollPosition > 0) {
      document.body.classList.add(scrollGlowClass);
    } else {
      document.body.classList.remove(scrollGlowClass);
    }
  });

  //esconder o email
  const email = 'systemstargazing@gmail.com';
  const encodedEmail = encodeURIComponent(email);
  const url = `https://formsubmit.co/${encodedEmail}`;