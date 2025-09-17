class SidebarMenu {
    constructor(selector = '.sidebar-nav-group') {
        this.menuGroups = document.querySelectorAll(selector);
        this.init();
    }

    init() {
        // Сначала закрываем всё меню
        this.closeAllMenus();
        
        // Затем восстанавливаем состояние из localStorage
        this.restoreMenuState();
        
        // Автораскрытие активного меню (после восстановления)
        this.autoExpandActiveMenus();

        // Инициализация кликов
        this.initClicks();
    }

    closeAllMenus() {
        // Закрываем все группы меню
        this.menuGroups.forEach(group => {
            group.classList.remove('active');
        });
        
        // Очищаем все сохраненные состояния (опционально)
        // или оставляем localStorage для восстановления
    }

    restoreMenuState() {
        document.querySelectorAll('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3').forEach(button => {
            const group = button.closest('.sidebar-nav-group');
            const menuId = button.dataset.menuId;
            
            if (menuId && localStorage.getItem(menuId) === 'open') {
                group.classList.add('active');
            }
        });
    }

    autoExpandActiveMenus() {
        const activeItems = document.querySelectorAll('.sidebar-nav-item.active');
        activeItems.forEach(item => {
            let parent = item.closest('.sidebar-nav-group');
            while (parent) {
                parent.classList.add('active');
                const toggleBtn = parent.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
                if (toggleBtn && toggleBtn.dataset.menuId) {
                    localStorage.setItem(toggleBtn.dataset.menuId, 'open');
                }
                parent = parent.parentElement?.closest('.sidebar-nav-group');
            }
        });
    }

    initClicks() {
        this.menuGroups.forEach(group => {
            const toggle = group.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleGroup(group, toggle);
                });
            }
        });
    }

    toggleGroup(group, toggle) {
        const isActive = group.classList.contains('active');
        
        // Закрываем только дочерние элементы текущей группы
        this.closeChildren(group);
        
        if (isActive) {
            group.classList.remove('active');
            this.updateLocalStorage(toggle, 'closed');
        } else {
            group.classList.add('active');
            this.updateLocalStorage(toggle, 'open');
        }
    }

    closeChildren(parentGroup) {
        const children = parentGroup.querySelectorAll('.sidebar-nav-group');
        children.forEach(child => {
            child.classList.remove('active');
            const childToggle = child.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
            if (childToggle && childToggle.dataset.menuId) {
                localStorage.setItem(childToggle.dataset.menuId, 'closed');
            }
        });
    }

    updateLocalStorage(toggle, state) {
        const menuId = toggle.dataset.menuId;
        if (menuId) {
            localStorage.setItem(menuId, state);
        }
    }

    // Метод для полного закрытия всех меню
    closeAll() {
        this.menuGroups.forEach(group => {
            group.classList.remove('active');
            const toggle = group.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
            if (toggle && toggle.dataset.menuId) {
                localStorage.setItem(toggle.dataset.menuId, 'closed');
            }
        });
    }

    // Методы для программного управления
    openGroup(selector) {
        const group = document.querySelector(selector);
        if (group) {
            group.classList.add('active');
            const toggle = group.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
            if (toggle) {
                this.updateLocalStorage(toggle, 'open');
            }
        }
    }

    closeGroup(selector) {
        const group = document.querySelector(selector);
        if (group) {
            group.classList.remove('active');
            const toggle = group.querySelector('.sidebar-nav-toggle, .sidebar-nav-toggle_2, .sidebar-nav-toggle_3');
            if (toggle) {
                this.updateLocalStorage(toggle, 'closed');
            }
        }
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    window.sidebarMenu = new SidebarMenu();
    
    // Дополнительно: закрыть всё меню при загрузке (на всякий случай)
    setTimeout(() => {
        window.sidebarMenu.closeAll();
    }, 100);
});