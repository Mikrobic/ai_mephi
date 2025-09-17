---
layout: page
permalink: /career/
---

## Календарь мероприятий

<div class="calendar-wrapper">
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

<style>
.calendar-wrapper {
  width: 100%;
  max-width: 1200px; /* Максимальная ширина для десктопа */
  margin: 2rem auto;
  display: block;
}

.calendar-container {
  position: relative;
  width: 100%;
  padding-bottom: 60%; /* Оптимальное соотношение для недельного календаря */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

/* Десктоп - календарь полностью помещается */
@media (min-width: 1025px) {
  .calendar-container {
    padding-bottom: 55%; /* Еще менее вертикальный для больших экранов */
  }
}

/* Планшет - адаптивная ширина */
@media (max-width: 1024px) and (min-width: 769px) {
  .calendar-wrapper {
    max-width: 90%; /* Уменьшаем максимальную ширину для планшетов */
    margin: 1.5rem auto;
  }
  
  .calendar-container {
    padding-bottom: 70%; /* Более вертикальный для планшетов */
  }
}

/* Мобильная адаптация - полная ширина и вертикальность */
@media (max-width: 768px) {
  .calendar-wrapper {
    max-width: 95%; /* Еще уже для мобильных */
    margin: 1rem auto;
    padding: 0 10px; /* Добавляем боковые отступы */
  }
  
  .calendar-container {
    padding-bottom: 100%; /* Квадратное соотношение */
    border-radius: 12px;
    width: 100%; /* Полная ширина доступного пространства */
  }
}

/* Маленькие мобильные устройства */
@media (max-width: 480px) {
  .calendar-wrapper {
    max-width: 100%; /* Полная ширина экрана */
    padding: 0 8px;
  }
  
  .calendar-container {
    padding-bottom: 120%; /* Более вертикальный */
    border-radius: 10px;
  }
  
  h2 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0 10px;
  }
}

/* Очень маленькие экраны */
@media (max-width: 320px) {
  .calendar-wrapper {
    padding: 0 5px;
  }
  
  .calendar-container {
    padding-bottom: 140%; /* Максимально вертикальный */
    border-radius: 8px;
  }
}

/* Ландшафтная ориентация на мобильных */
@media (max-width: 768px) and (orientation: landscape) {
  .calendar-container {
    padding-bottom: 70%; /* Менее вертикальный в альбомной ориентации */
  }
  
  .calendar-wrapper {
    max-width: 85%;
  }
}
</style>

<script>
// Дополнительная адаптация через JavaScript
function adaptCalendar() {
  const calendarWrapper = document.querySelector('.calendar-wrapper');
  const calendarContainer = document.querySelector('.calendar-container');
  
  if (window.innerWidth <= 768) {
    // Для мобильных делаем еще более адаптивным
    const viewportWidth = window.innerWidth;
    calendarWrapper.style.maxWidth = Math.min(viewportWidth - 20, 500) + 'px';
  }
}

// Запускаем при загрузке и изменении размера
window.addEventListener('load', adaptCalendar);
window.addEventListener('resize', adaptCalendar);
</script>