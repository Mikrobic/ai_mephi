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
  -webkit-overflow-scrolling: touch; /* Плавный скролл на iOS */
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

.calendar-container {
  position: relative;
  width: 800px; /* Фиксированная ширина для десктопной версии */
  min-width: 800px;
  padding-bottom: 120%; /* 16:9 соотношение */
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

</style>