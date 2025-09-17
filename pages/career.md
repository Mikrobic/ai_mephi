---
layout: page
permalink: /career/
---

## Календарь мероприятий

<div class="calendar-wrapper">
  <div class="calendar-scroll-container">
    <div class="calendar-container">
      <iframe 
        src="https://calendar.yandex.ru/embed/week?layer_ids=34640123&layer_names=Онлайн-магистратура&tz_id=Europe%2FMoscow&uid=2246487652" 
        class="yandex-calendar"
        frameborder="0"
        scrolling="no"
        allowfullscreen
        loading="lazy">
      </iframe>
    </div>
  </div>
  <div class="scroll-hint">← Листайте в стороны →</div>
</div>

<style>
.calendar-wrapper {
  width: 100%;
  margin: 2rem 0;
}

.calendar-scroll-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #6a9fb5 transparent;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.calendar-scroll-container::-webkit-scrollbar {
  height: 8px;
}

.calendar-scroll-container::-webkit-scrollbar-track {
  background: transparent;
}

.calendar-scroll-container::-webkit-scrollbar-thumb {
  background: #6a9fb5;
  border-radius: 4px;
}

/* Десктоп - МЕНЕЕ вертикальный */
.calendar-container {
  position: relative;
  width: 1000px; /* Увеличил ширину для десктопа */
  min-width: 1000px;
  padding-bottom: 70%; /* МЕНЬШЕ вертикального пространства (16:9 ≈ 56%, 4:3 ≈ 75%) */
  height: 0;
}

.yandex-calendar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: white;
}

.scroll-hint {
  text-align: center;
  color: #6a9fb5;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: none;
}

/* Планшет */
@media (max-width: 1024px) {
  .calendar-container {
    width: 800px;
    min-width: 800px;
    padding-bottom: 90%; /* Немного более вертикальный */
  }
}

/* Мобильная адаптация - БОЛЕЕ вертикальный */
@media (max-width: 768px) {
  .calendar-container {
    width: 600px;
    min-width: 600px;
    padding-bottom: 130%; /* ЗНАЧИТЕЛЬНО более вертикальный */
  }
  
  .scroll-hint {
    display: block;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    width: 500px;
    min-width: 500px;
    padding-bottom: 160%; /* ОЧЕНЬ вертикальный */
  }
}

@media (max-width: 320px) {
  .calendar-container {
    width: 450px;
    min-width: 450px;
    padding-bottom: 180%; /* МАКСИМАЛЬНО вертикальный */
  }
}
</style>

<script>
// Показываем подсказку только на мобильных
if (window.innerWidth <= 768) {
  document.querySelector('.scroll-hint').style.display = 'block';
}
</script>