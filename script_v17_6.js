document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginContainer = document.getElementById('loginContainer');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const activationContainer = document.getElementById('activationContainer');

    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const submitBtn = document.querySelector('.btn-primary');

    const newAccountLink = document.querySelector('.new-account');
    const backToLoginLink = document.querySelector('.back-to-login');
    const driverSelect = document.getElementById('driverSelect');

    const calcBtn = document.querySelector('.btn-danger'); // Calcular Siguiente button
    const addReinforcementBtn = document.querySelector('.btn-outline'); // Añadir Refuerzo button
    const currentEscobaEl = document.getElementById('currentEscoba');
    const reinforcementsListEl = document.getElementById('reinforcementsList');
    const addDriverBtn = document.getElementById('addDriverBtn'); // Nuevo Conductor button

    const openChangePasswordModalBtn = document.getElementById('openChangePasswordModalBtn');
    const changePasswordModal = document.getElementById('changePasswordModal');
    const closeChangePasswordModal = document.getElementById('closeChangePasswordModal');
    const changePasswordForm = document.getElementById('changePasswordForm');
    const currentPasswordInput = document.getElementById('currentPassword');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmNewPasswordInput = document.getElementById('confirmNewPassword');
    const changePasswordUsernameDisplay = document.getElementById('changePasswordUsernameDisplay'); // To display current user

    // History elements
    const historyBtn = document.getElementById('historyBtn');
    const historyModal = document.getElementById('historyModal');
    const closeHistoryModal = document.querySelector('.close-history-modal');
    const historyList = document.getElementById('historyList');

    // Stats elements
    const statsBtn = document.getElementById('statsBtn');
    const statsModal = document.getElementById('statsModal');
    const closeStatsModal = document.querySelector('.close-stats-modal');
    const ctx = document.getElementById('statsChart').getContext('2d');
    let myChart = null;

    // Notification elements
    const assignmentNotification = document.getElementById('assignmentNotification');
    const notificationTitle = document.getElementById('notificationTitle');
    const notificationMessage = document.getElementById('notificationMessage');
    const notificationCloseBtn = document.getElementById('notificationCloseBtn');


    window.currentUser = ''; // To store the logged-in user (Globally exposed)
    window.currentUserRole = 'driver'; // Default role exposed globally

    // Helper: Get Local ISO Date (YYYY-MM-DD)
    function getLocalISODate() {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const localISOTime = new Date(now - offset).toISOString().slice(0, 10);
        return localISOTime;
    }

    // ROBUST Helper: Calculate time since a date
    function timeSince(dateString) {
        if (!dateString || dateString === 'NUNCA') {
            return 'Nunca';
        }
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return 'Fecha inválida';
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        date.setHours(0, 0, 0, 0);

        const diffTime = today.getTime() - date.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Hoy';
        if (diffDays === 1) return 'Ayer';
        return `Hace ${diffDays} días`;
    }

    // Helper: Get Font Awesome icon based on status
    function getStatusIcon(status) {
        switch (status) {
            case 'Activo': return 'user-check'; // User Check
            case 'Baja': return 'user-injured';   // User Injured/Sick
            case 'Vacaciones': return 'plane-departure'; // Plane
            case 'Asuntos': return 'briefcase'; // Briefcase
            case 'DÍA LIBRE': return 'umbrella-beach';
            default: return 'circle-question'; // Default question mark
        }
    }

    // Helper: Get Color for Status (Visual Enhancement)
    function getStatusColor(status) {
        switch (status) {
            case 'Activo': return '#008000'; // High Contrast Green
            case 'Baja': return '#CC0000';   // High Contrast Red
            case 'Vacaciones': return '#E69500'; // High Contrast Amber/Gold (Darker for visibility on white)
            case 'Asuntos': return '#D35400'; // High Contrast Burnt Orange
            case 'DÍA LIBRE': return '#E69500'; // Match Vacaciones
            default: return '#444444'; // High Contrast Dark Grey
        }
    }

    // Data (Mock Database with Server-Side Persistence)
    const defaultDriversData = {
        history: [],
        drivers: [
            { name: 'JAVI', lastSeen: '2025-11-18', status: 'Activo', type: 'active', registrationDate: '2025-01-01', daysOff: ['Jueves', 'Viernes'], phone: '691310102' }
        ]
    };

    window.driversData = []; // Main drivers array
    window.driversHistory = []; // History array

    async function saveData() {
        try {
            const payload = {
                drivers: window.driversData,
                history: window.driversHistory
            };
            const response = await fetch('/api/drivers', {
                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error('Network response was not ok');
        } catch (error) {
            console.error('Error saving data:', error);
            alert('Error al guardar los datos en el servidor. Comprueba tu conexión.');
        }
    }
    // Expose globally for Calendar Logic outside this scope
    window.saveData = saveData;

    async function loadData() {
        try {
            const response = await fetch('/api/drivers');
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    if (Array.isArray(data)) { // Legacy format support
                        window.driversData = data;
                        window.driversHistory = [];
                        saveData(); // Convert to new format
                    } else {
                        window.driversData = data.drivers || [];
                        window.driversHistory = data.history || [];
                    }
                } else {
                    window.driversData = JSON.parse(JSON.stringify(defaultDriversData.drivers));
                    window.driversHistory = JSON.parse(JSON.stringify(defaultDriversData.history));
                    saveData();
                }
            } else { throw new Error('Server error'); }
        } catch (error) {
            console.error('Error loading data:', error);
            window.driversData = JSON.parse(JSON.stringify(defaultDriversData.drivers));
            window.driversHistory = JSON.parse(JSON.stringify(defaultDriversData.history));
        }
        if (!document.getElementById('dashboardContainer').classList.contains('hidden')) {
            renderDrivers();
            window.checkAutoCalculation();
        }
    }

    loadData();

    let currentSessionAssigned = [];

    const urlParams = new URLSearchParams(window.location.search);
    const urlEmail = urlParams.get('email');
    const urlPassword = urlParams.get('password');

    if (urlEmail && urlPassword) {
        handleLogin(urlEmail, urlPassword);
    }

    // History Modal Logic
    if (historyBtn) {
        historyBtn.addEventListener('click', () => {
            renderHistory();
            historyModal.classList.remove('hidden');
        });
    }

    if (closeHistoryModal) {
        closeHistoryModal.addEventListener('click', () => {
            historyModal.classList.add('hidden');
        });
    }

    // Stats Logic
    if (statsBtn) {
        statsBtn.addEventListener('click', async () => {
            statsModal.classList.remove('hidden');
            await loadAndRenderStats();
        });
    }
    if (closeStatsModal) {
        closeStatsModal.addEventListener('click', () => {
            statsModal.classList.add('hidden');
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === historyModal) {
            historyModal.classList.add('hidden');
        }
        if (e.target === statsModal) {
            statsModal.classList.add('hidden');
        }
    });

    function renderHistory() {
        if (!historyList) return;
        historyList.innerHTML = '';

        if (!window.driversHistory || window.driversHistory.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: #666;">No hay historial disponible.</p>';
            return;
        }

        window.driversHistory.forEach(item => {
            const div = document.createElement('div');
            const dateObj = new Date(item.date);
            const simpleDate = dateObj.toLocaleDateString('es-ES');

            div.style.padding = '12px 10px';
            div.style.borderBottom = '1px solid #eee';
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.innerHTML = `
                <div style="flex-grow: 1; display: flex; align-items: center; gap: 10px;">
                     <span style="font-size: 1.1em; font-weight: bold; color: #333;">${item.driverName || 'Desconocido'}</span>
                     <span style="font-size: 0.95em; color: #666;">(${simpleDate})</span>
                </div>
                <div style="color: #6366f1;">
                   <i class="fa-solid fa-broom"></i>
                </div>
            `;
            historyList.appendChild(div);
        });
    }

    async function loadAndRenderStats() {
        try {
            const response = await fetch('/api/stats');
            const stats = await response.json();

            // Prepare data for Chart.js
            // Sort by count descending
            const sortedDrivers = Object.keys(stats).sort((a, b) => stats[b] - stats[a]);
            const counts = sortedDrivers.map(driver => stats[driver]);

            if (myChart) myChart.destroy();

            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: sortedDrivers,
                    datasets: [{
                        label: 'Número de Escobas',
                        data: counts,
                        backgroundColor: 'rgba(99, 102, 241, 0.6)',
                        borderColor: 'rgba(99, 102, 241, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: { stepSize: 1 }
                        }
                    }
                }
            });

        } catch (e) {
            console.error("Error loading stats:", e);
        }
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            // Instant Feedback
            document.getElementById('dashboardContainer').classList.add('hidden');
            document.getElementById('loginContainer').classList.remove('hidden');
            document.body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';

            // Clear internal state
            currentUser = '';
            currentUserRole = 'driver';

            // Force Reload to clear any other state
            setTimeout(() => {
                window.location.reload();
            }, 50);
        });
    }

    if (newAccountLink) {
        newAccountLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginContainer.classList.add('hidden');
            activationContainer.classList.remove('hidden');
            document.body.style.background = '#f0f2f5';
            document.querySelector('.background-animation').style.display = 'none';
            populateDriverSelect();
            history.pushState({ view: 'activation' }, '', '#activation');
        });
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            history.back();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (history.state && history.state.view === 'dashboard') {
                history.back();
            } else { showLogin(); }
        });
    }

    if (openChangePasswordModalBtn) {
        openChangePasswordModalBtn.addEventListener('click', () => {
            if (currentUser) {
                changePasswordUsernameDisplay.textContent = currentUser;
                changePasswordModal.classList.remove('hidden');
            } else {
                alert('No se ha podido identificar al usuario actual.');
            }
        });
    }

    if (closeChangePasswordModal) {
        closeChangePasswordModal.addEventListener('click', () => {
            changePasswordModal.classList.add('hidden');
        });
    }

    const resetDataBtn = document.getElementById('resetDataBtn');
    if (resetDataBtn) {
        resetDataBtn.addEventListener('click', async () => {
            if (confirm('¿Estás seguro? Esto borrará todos los cambios y restaurará la lista original.')) {
                window.driversData = JSON.parse(JSON.stringify(defaultDriversData.drivers));
                window.driversHistory = JSON.parse(JSON.stringify(defaultDriversData.history));
                await saveData();
                renderDrivers();
                alert('Datos restablecidos correctamente.');
            }
        });
    }

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.view === 'dashboard') { showDashboard(); }
        else if (event.state && event.state.view === 'activation') {
            loginContainer.classList.add('hidden');
            activationContainer.classList.remove('hidden');
            document.body.style.background = '#f0f2f5';
            document.querySelector('.background-animation').style.display = 'none';
        } else { showLogin(); }
    });

    function showLogin() {
        dashboardContainer.classList.add('hidden');
        activationContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        document.body.style.background = '';
        document.querySelector('.background-animation').style.display = 'block';
        submitBtn.querySelector('span').innerText = 'Entrar';
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
        loginForm.reset();
    }

    function showDashboard() {
        loginContainer.classList.add('hidden');
        activationContainer.classList.add('hidden');
        dashboardContainer.classList.remove('hidden');
        document.body.style.background = '#f0f2f5';
        document.querySelector('.background-animation').style.display = 'none';
        initializeDashboard();
    }

    async function handleLogin(username, password) {
        const originalBtnText = submitBtn.querySelector('span').innerText;
        submitBtn.querySelector('span').innerText = 'Verificando...';
        submitBtn.style.opacity = '0.8';
        submitBtn.disabled = true;

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                window.currentUser = result.username || username; // Use canonical name from server
                window.currentUserRole = result.role || 'driver'; // Store role globally
                history.pushState({ view: 'dashboard' }, '', '#dashboard');
                showDashboard();
            } else {
                alert(result.message || 'Credenciales incorrectas.');
                submitBtn.querySelector('span').innerText = originalBtnText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Error de conexión: ' + error.message);
            submitBtn.querySelector('span').innerText = originalBtnText;
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
        }
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = emailInput.value.trim();
        const password = document.getElementById('password').value;
        handleLogin(username, password);
    });

    function populateDriverSelect() {
        if (driverSelect.options.length > 1) return;
        window.driversData.forEach(driver => {
            const option = document.createElement('option');
            option.value = driver.name;
            option.textContent = driver.name;
            driverSelect.appendChild(option);
        });
    }

    document.getElementById('activationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedDriver = driverSelect.value;
        const phone = document.getElementById('actPhone').value;
        const daysOff = Array.from(document.querySelectorAll('input[name="day"]:checked')).map(cb => cb.value);
        const driverIndex = window.driversData.findIndex(d => d.name === selectedDriver);
        if (driverIndex !== -1) {
            window.driversData[driverIndex].phone = phone;
            window.driversData[driverIndex].daysOff = daysOff;
            window.driversData[driverIndex].status = 'Activo';
            window.driversData[driverIndex].type = 'active';
            saveData();
        }
        alert(`Cuenta activada para ${selectedDriver}.\nTeléfono: ${phone}\nDías libres: ${daysOff.join(', ')}`);
        activationContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        document.body.style.background = '';
        document.querySelector('.background-animation').style.display = 'block';
    });

    function updateUIByRole() {
        const isAdmin = currentUserRole === 'admin';
        const adminElements = document.querySelectorAll('.admin-only');

        adminElements.forEach(el => {
            if (isAdmin) {
                el.classList.remove('hidden');
                el.style.display = '';
            } else {
                el.classList.add('hidden');
                el.style.display = 'none';
            }
        });

        const deleteButtons = document.querySelectorAll('.delete-reinforcement-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = isAdmin ? 'inline-block' : 'none';
        });
    }

    function initializeDashboard() {
        renderDrivers();
        updateUIByRole(); // Apply permissions AFTER rendering
        updateCurrentDate();
        const currentBroom = window.driversData.find(d => d.isBroom);
        if (currentBroom) {
            document.getElementById('currentEscoba').innerText = currentBroom.name;
            if (!currentSessionAssigned.includes(currentBroom.name)) {
                currentSessionAssigned.push(currentBroom.name);
            }
        } else {
            document.getElementById('currentEscoba').innerText = 'PENDIENTE';
            currentSessionAssigned = [];
        }
        renderReinforcements();
        if (openChangePasswordModalBtn) {
            openChangePasswordModalBtn.classList.remove('hidden');
        }
        updateUIByRole();
    }

    function updateCurrentDate() {
        const dateDisplay = document.getElementById('currentDateDisplay');
        if (dateDisplay) {
            const now = new Date();
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let dateStr = now.toLocaleDateString('es-ES', options);
            dateStr = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
            dateDisplay.textContent = `(${dateStr})`;
        }
    }

    function getNextDriver(excludeNames = []) {
        const today = new Date();
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = daysOfWeek[today.getDay()];
        console.log(`--- DEBUG CALCULATION ---`);
        console.log(`Today: ${dayName}, Exclude: ${excludeNames.join(', ')}`);
        const candidates = window.driversData.filter(driver => {
            if (driver.status !== 'Activo' || excludeNames.includes(driver.name)) return false;

            // Check daysOff (Robust for Mixed Types)
            if (driver.daysOff && driver.daysOff.length > 0) {
                const todayISODate = getLocalISODate(); // YYYY-MM-DD
                let isOff = false;

                for (let item of driver.daysOff) {
                    // 1. Legacy String or Weekly Object
                    if (typeof item === 'string') {
                        if (item === dayName) isOff = true;
                    } else if (item.type === 'weekly' && item.day === dayName) {
                        isOff = true;
                    }
                    // 2. Single Date Event
                    else if (item.type === 'single' && item.date === todayISODate) {
                        isOff = true;
                        console.log(`Excluding ${driver.name} due to event: ${item.reason}`);
                    }

                    if (isOff) break;
                }
                if (isOff) return false;
            }
            return true;
        });
        if (candidates.length === 0) {
            console.log('No candidates found!');
            return null;
        }
        candidates.sort((a, b) => {
            const aNever = a.lastSeen === 'NUNCA';
            const bNever = b.lastSeen === 'NUNCA';
            if (aNever && !bNever) return -1;
            if (!aNever && bNever) return 1;
            if (aNever && bNever) {
                return new Date(a.registrationDate) - new Date(b.registrationDate);
            }
            return new Date(a.lastSeen) - new Date(b.lastSeen);
        });
        console.log('Winner:', candidates[0].name);
        console.log('-------------------------');
        return candidates[0];
    }

    window.sendWhatsApp = function (name, phone) {
        if (!phone) {
            alert(`Se ha asignado a ${name}, pero no tiene teléfono registrado.`);
            return;
        }
        const message = `Hola ${name}. Hoy te toca ESCOBA.`;
        const url = `https://wa.me/${phone.replace(/\s+/g, '').replace('+', '')}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    if (calcBtn) {
        calcBtn.addEventListener('click', async () => {
            const todayStr = getLocalISODate();
            const currentBroom = window.driversData.find(d => d.isBroom && d.broomDate === todayStr);
            if (currentBroom) {
                if (!confirm(`Ya se ha asignado la escoba a ${currentBroom.name} hoy. ¿Estás seguro de que quieres recalcular?`)) {
                    return;
                }
            }
            const originalText = calcBtn.innerHTML;
            calcBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> CALCULANDO...';
            calcBtn.disabled = true;

            await window.calculateEscoba();

            calcBtn.innerHTML = originalText;
            calcBtn.disabled = false;
        });
    }

    window.calculateEscoba = async function (isAuto = false) {
        const todayStr = getLocalISODate();
        const currentBroom = window.driversData.find(d => d.isBroom);

        if (currentBroom) {
            const assignedDate = currentBroom.broomDate || currentBroom.lastSeen;
            if (assignedDate) {
                window.driversHistory.unshift({
                    date: assignedDate,
                    driverName: currentBroom.name,
                    timestamp: new Date().toISOString()
                });
                if (window.driversHistory.length > 50) window.driversHistory.pop();
            }
            if (assignedDate === todayStr) {
                currentBroom.isBroom = false;
                currentBroom.broomDate = null;
            } else {
                currentBroom.lastSeen = assignedDate;
                currentBroom.isBroom = false;
                currentBroom.broomDate = null;
            }
        }

        const winner = getNextDriver([]);
        if (!winner) {
            if (!isAuto) alert('No hay conductores disponibles.');
            return;
        }

        const winnerIndex = window.driversData.findIndex(d => d.name === winner.name);
        window.driversData[winnerIndex].isBroom = true;
        window.driversData[winnerIndex].broomDate = todayStr;
        window.driversData[winnerIndex].lastSeen = todayStr;
        currentSessionAssigned = [winner.name];

        showAssignmentNotification(winner);

        try {
            await saveData();
        } catch (err) {
            console.error('Error crítico guardando datos:', err);
            alert('¡ATENCIÓN! No se han podido guardar los datos. Comprueba tu conexión.');
        }

        initializeDashboard();
    }

    function showAssignmentNotification(winner) {
        if (!assignmentNotification) return;
        notificationTitle.innerText = '¡NUEVA ESCOBA ASIGNADA!';
        notificationMessage.innerHTML = `
            <div style="font-size: 3rem; margin: 20px 0;">🎉</div>
            <div style="font-size: 1.5rem; font-weight: bold; color: #28a745;">${winner.name}</div>
            <p style="margin-top: 10px; color: #666;">Fecha: ${getLocalISODate()}</p>
        `;
        assignmentNotification.classList.remove('hidden');
    }

    if (notificationCloseBtn) {
        notificationCloseBtn.addEventListener('click', () => {
            assignmentNotification.classList.add('hidden');
        });
    }

    window.checkAutoCalculation = function () {
        const todayStr = getLocalISODate();
        const currentBroom = window.driversData.find(d => d.isBroom);
        const isBroomAssignedToday = currentBroom && currentBroom.broomDate === todayStr;

        if (!isBroomAssignedToday) {
            console.log('Detectada nueva jornada. Calculando nueva escoba...');
            const oldReinforcements = window.driversData.filter(d => d.isReinforcement && d.broomDate !== todayStr);
            oldReinforcements.forEach(d => {
                if (d.broomDate) d.lastSeen = d.broomDate;
                d.isReinforcement = false;
                d.broomDate = null;
            });
            window.calculateEscoba(true);
        }
    }

    if (dashboardContainer && !dashboardContainer.classList.contains('hidden')) {
        window.checkAutoCalculation();
    }
    setInterval(window.checkAutoCalculation, 60000);

    function renderReinforcements() {
        if (!reinforcementsListEl) return;
        reinforcementsListEl.innerHTML = '';
        const reinforcements = window.driversData.filter(d => d.isReinforcement);
        reinforcements.forEach(d => {
            const reinforcementEl = document.createElement('div');
            reinforcementEl.className = 'reinforcement-item';
            reinforcementEl.innerHTML = `<span>${d.name}</span> <button class="delete-reinforcement-btn" onclick="removeReinforcement('${d.name}')">&times;</button>`;
            reinforcementsListEl.appendChild(reinforcementEl);
        });
        updateUIByRole();
    }

    if (addReinforcementBtn) {
        addReinforcementBtn.addEventListener('click', () => {
            if (currentSessionAssigned.length === 0) {
                alert('Primero debes calcular la Escoba del Día.');
                return;
            }
            const reinforcement = getNextDriver(currentSessionAssigned);
            if (!reinforcement) {
                alert('No hay más conductores disponibles para refuerzo.');
                return;
            }
            currentSessionAssigned.push(reinforcement.name);
            const rIndex = window.driversData.findIndex(d => d.name === reinforcement.name);
            if (rIndex !== -1) {
                window.driversData[rIndex].isReinforcement = true;
                window.driversData[rIndex].broomDate = getLocalISODate();
                saveData();
                renderDrivers();
                renderReinforcements();
            }
        });
    }

    window.removeReinforcement = function (driverName) {
        const driverIndex = window.driversData.findIndex(d => d.name === driverName);
        if (driverIndex !== -1) {
            window.driversData[driverIndex].isReinforcement = false;
        }
        currentSessionAssigned = currentSessionAssigned.filter(name => name !== driverName);
        saveData();
        renderDrivers();
        renderReinforcements();
    }

    const editModal = document.getElementById('editDriverModal');
    const closeModal = document.querySelector('.close-modal');
    const editForm = document.getElementById('editDriverForm');
    let isEditing = false;
    let editingOriginalName = '';

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            editModal.classList.add('hidden');
        });
    }
    window.addEventListener('click', (e) => {
        if (e.target === editModal) {
            editModal.classList.add('hidden');
        }
    });

    if (addDriverBtn) {
        addDriverBtn.addEventListener('click', () => {
            isEditing = false;
            editingOriginalName = '';
            document.getElementById('modalTitle').innerText = 'Nuevo Conductor';
            editForm.reset();
            document.getElementById('editStatus').value = 'Activo';
            editModal.classList.remove('hidden');
        });
    }

    if (openChangePasswordModalBtn) {
        openChangePasswordModalBtn.addEventListener('click', () => {
            if (currentUser) {
                changePasswordUsernameDisplay.textContent = currentUser;
                changePasswordModal.classList.remove('hidden');
            } else {
                alert('Inicia sesión para cambiar la contraseña.');
            }
        });
    }

    if (closeChangePasswordModal) {
        closeChangePasswordModal.addEventListener('click', () => {
            changePasswordModal.classList.add('hidden');
        });
    }

    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const currentPassword = currentPasswordInput.value;
            const newPassword = newPasswordInput.value;
            const confirmNewPassword = confirmNewPasswordInput.value;

            if (newPassword !== confirmNewPassword) {
                alert('Las nuevas contraseñas no coinciden.');
                return;
            }
            if (!newPassword || newPassword.length < 4) {
                alert('La nueva contraseña debe tener al menos 4 caracteres.');
                return;
            }

            try {
                const response = await fetch('/api/user/password', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: currentUser,
                        current_password: currentPassword,
                        new_password: newPassword
                    })
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    alert(result.message || 'Contraseña actualizada correctamente.');
                    changePasswordModal.classList.add('hidden');
                    changePasswordForm.reset();
                } else {
                    alert(result.message || 'Error al cambiar la contraseña.');
                }
            } catch (error) {
                console.error('Error changing password:', error);
                alert('Error de conexión al cambiar la contraseña.');
            }
        });
    }

    window.openEditModal = function (driverName) {
        const driver = window.driversData.find(d => d.name === driverName);
        if (!driver) return;
        isEditing = true;
        editingOriginalName = driver.name;
        document.getElementById('modalTitle').innerText = 'Editar Conductor';
        document.getElementById('editDriverOriginalName').value = driver.name;
        document.getElementById('editName').value = driver.name;
        document.getElementById('editPhone').value = driver.phone || '';
        document.getElementById('editLastSeen').value = driver.lastSeen === 'NUNCA' ? '' : driver.lastSeen;
        document.getElementById('editStatus').value = driver.status;
        document.querySelectorAll('input[name="editDay"]').forEach(cb => cb.checked = false);
        if (driver.daysOff) {
            driver.daysOff.forEach(day => {
                const cb = document.querySelector(`input[name="editDay"][value="${day}"]`);
                if (cb) cb.checked = true;
            });
        }
        editModal.classList.remove('hidden');
    };

    window.deleteDriver = function (driverName) {
        if (confirm(`¿Estás seguro de que quieres eliminar a ${driverName}?`)) {
            window.driversData = window.driversData.filter(d => d.name !== driverName);
            saveData();
            renderDrivers();
        }
    };

    if (editForm) {
        editForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const newName = document.getElementById('editName').value.toUpperCase();
            const newPhone = document.getElementById('editPhone').value;
            const newLastSeen = document.getElementById('editLastSeen').value || 'NUNCA';
            const newStatus = document.getElementById('editStatus').value;
            const newDaysOff = Array.from(document.querySelectorAll('input[name="editDay"]:checked')).map(cb => cb.value);
            const typeMap = {
                'Activo': 'active', 'Vacaciones': 'vacaciones', 'Baja': 'baja', 'Asuntos': 'asuntos'
            };
            const newType = typeMap[newStatus] || 'inactive';

            if (isEditing) {
                const driverIndex = window.driversData.findIndex(d => d.name === editingOriginalName);
                if (driverIndex !== -1) {
                    window.driversData[driverIndex].name = newName;
                    window.driversData[driverIndex].phone = newPhone;
                    window.driversData[driverIndex].lastSeen = newLastSeen;
                    window.driversData[driverIndex].daysOff = newDaysOff;
                    window.driversData[driverIndex].status = newStatus;
                    window.driversData[driverIndex].type = newType;
                }
            } else {
                window.driversData.push({
                    name: newName, lastSeen: newLastSeen, status: newStatus, type: newType,
                    registrationDate: new Date().toISOString().split('T')[0], daysOff: newDaysOff, phone: newPhone
                });
            }
            await saveData();
            alert('Cambios guardados correctamente.');
            editModal.classList.add('hidden');
            renderDrivers();
        });
    }

    function renderDrivers() {
        const grid = document.getElementById('driversGrid');
        if (!grid) return;

        const isAdmin = currentUserRole === 'admin';
        const today = new Date();
        const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const dayName = daysOfWeek[today.getDay()];

        // SORTING LOGIC: Broom first, then Alphabetical
        window.driversData.sort((a, b) => {
            if (a.isBroom && !b.isBroom) return -1;
            if (!a.isBroom && b.isBroom) return 1;
            return a.name.localeCompare(b.name);
        });

        grid.innerHTML = window.driversData.map(driver => {
            let status = driver.status;
            let statusColor = getStatusColor(status);
            let statusIcon = getStatusIcon(status);
            let statusClass = 'status-active';

            // Override for Day Off
            let isDayOff = false;
            if (status === 'Activo' && driver.daysOff && driver.daysOff.includes(dayName)) {
                isDayOff = true;
                status = 'DÍA LIBRE';
                statusColor = '#E69500'; // High contrast Amber
                statusIcon = 'umbrella-beach';
                statusClass = 'status-vacaciones'; // Re-use styling or create new
            }

            // Map status to CSS class suffix (active, baja, vacaciones, asuntos) logic update
            if (driver.status === 'Baja') statusClass = 'status-baja';
            else if (driver.status === 'Vacaciones') statusClass = 'status-vacaciones';
            else if (driver.status === 'Asuntos') statusClass = 'status-asuntos';
            if (isDayOff) statusClass = 'status-vacaciones'; // Force yellow/orange-ish

            // NEW: Add specific border class
            let borderClass = '';
            if (status === 'Activo') borderClass = 'border-active';
            else if (driver.status === 'Baja') borderClass = 'border-baja';
            else if (driver.status === 'Vacaciones') borderClass = 'border-vacaciones';
            else if (driver.status === 'Asuntos') borderClass = 'border-asuntos';

            if (isDayOff) borderClass = 'border-dayoff';

            const isBroom = (driver.isBroom === true);
            const isReinforcement = (driver.isReinforcement === true);

            const lastSeenText = driver.lastSeen === 'NUNCA' ? 'Nunca' : `${driver.lastSeen} (${timeSince(driver.lastSeen)})`;

            const phoneButton = driver.phone ? `
                <button class="btn-icon btn-whatsapp" onclick="window.sendWhatsApp('${driver.name}', '${driver.phone}')" title="Enviar WhatsApp" style="color: #25D366 !important;">
                    <i class="fa-brands fa-whatsapp"></i>
                </button>` : '';

            const editButton = isAdmin ? `
                <button class="btn-icon" onclick="window.openEditModal('${driver.name}')" title="Editar">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>` : '';

            const calendarButton = `
                 <button class="btn-icon" onclick="window.openCalendar('${driver.name}')" title="Ver Calendario">
                    <i class="fa-solid fa-calendar-days"></i>
                </button>`;

            // Card classes
            let cardClasses = `driver-card ${borderClass}`;
            if (isBroom) cardClasses += ' broom-assigned';
            if (isReinforcement) cardClasses += ' reinforcement-assigned';

            // Check for Pending Events
            const hasPendingRequests = driver.daysOff && driver.daysOff.some(
                d => typeof d === 'object' && d.type === 'single' && d.status === 'pending' && d.date >= getLocalISODate()
            );

            // Escoba Name Styling
            const nameStyle = isBroom ? 'font-weight: 900; font-size: 1.5rem; color: #CC0000;' : 'color: #000000;';

            return `
                <div class="${cardClasses}">
                    <div class="card-header-icons">
                        <span class="driver-name" style="${nameStyle}">${driver.name}</span>
                        <i class="fa-solid fa-${statusIcon} large-status-icon ${statusClass}"></i>
                    </div>
                    ${hasPendingRequests ? '<div class="pending-badge" title="Solicitudes Pendientes">!</div>' : ''}
                    ${isBroom ? '<div style="text-align:center; padding: 5px; margin-bottom:5px;"><span class="status-badge anim-slide" style="background:#fff; color:#FFC300; text-shadow: 0px 0px 1px #000; font-weight:900; font-size:1.1rem; padding:4px 15px; border: 3px solid #CC0000;"><i class="fa-solid fa-broom" style="color: #008000; font-size: 1.2rem;"></i> ESCOBA</span></div>' : ''}
                    ${isReinforcement ? '<div style="text-align:center; padding: 5px; margin-bottom:5px;"><span class="status-badge" style="background:#ffc107; color:black; font-size:1rem; padding:5px 15px;"><i class="fa-solid fa-life-ring"></i> REFUERZO</span></div>' : ''}
                    
                    <div class="card-body" style="flex-grow:1; display:flex; flex-direction:column; justify-content:center;">
                        <div class="driver-days-off" style="margin-bottom:2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            <i class="fa-solid fa-calendar-day" style="flex-shrink: 0;"></i>
                            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; display: inline-block; vertical-align: middle;">
                                Libre: ${driver.daysOff && driver.daysOff.length > 0 ? (driver.daysOff.join(', ').length > 22 ? driver.daysOff.join(', ').substring(0, 22) + '...' : driver.daysOff.join(', ')) : '-'}
                            </span>
                        </div>
                        <div class="driver-last-seen" style="margin-bottom:2px;">
                            <i class="fa-solid fa-clock-rotate-left"></i>
                            <span>${lastSeenText}</span>
                        </div>
                        <div class="driver-status-text" style="margin-top:5px; text-align:center;">
                             <span class="status-badge ${statusClass}" style="background-color:${statusColor}; color: ${statusColor === '#ffc107' || statusColor === '#fd7e14' ? 'black' : 'white'}; padding: 2px 8px; font-size: 0.8rem;">${status.toUpperCase()}</span>
                        </div>
                    </div>

                    <div class="card-actions" style="margin-top:8px; display:flex; justify-content:flex-end; gap:5px; padding-top:5px; border-top:1px solid #eee;">
                        ${phoneButton}
                        ${calendarButton}
                        ${editButton}
                    </div>
                </div>
            `;
        }).join('');
    }
    // Expose globally
    window.renderDrivers = renderDrivers;
});

// --- Calendar Logic ---
let calendarCurrentDate = new Date();
let calendarDriverName = null;

window.openCalendar = function (driverName) {
    calendarDriverName = driverName;
    calendarCurrentDate = new Date(); // Reset to today
    const modal = document.getElementById('calendarModal');
    modal.classList.remove('hidden');
    renderCalendar();
}

document.querySelector('.close-calendar-modal').addEventListener('click', () => {
    document.getElementById('calendarModal').classList.add('hidden');
    document.getElementById('eventForm').classList.add('hidden');
});

document.getElementById('prevMonth').addEventListener('click', () => {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('nextMonth').addEventListener('click', () => {
    calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + 1);
    renderCalendar();
});

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const title = document.getElementById('calendarTitle');
    const driver = window.driversData.find(d => d.name === calendarDriverName);
    const weeklySummaryEl = document.getElementById('calendarWeeklyDaysDisplay');

    if (!driver) return;

    // Parse daysOff (supports old ["Lunes"] and new [{type:..}] formats)
    let events = [];
    let weeklyDays = [];

    // Normalize daysOff data
    let daysOffData = driver.daysOff || [];
    // Convert string-only list (old format) to object structure on the fly for logic
    // But we keep original structure in memory until saved.

    // Extract Weekly Days for display
    if (Array.isArray(daysOffData)) {
        daysOffData.forEach(item => {
            if (typeof item === 'string') weeklyDays.push(item);
            else if (item.type === 'weekly') weeklyDays.push(item.day);
            else if (item.type === 'single') events.push(item);
        });
    }

    weeklySummaryEl.textContent = weeklyDays.join(', ') || 'Ninguno';

    const year = calendarCurrentDate.getFullYear();
    const month = calendarCurrentDate.getMonth();

    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    title.textContent = `${monthNames[month]} ${year}`;

    grid.innerHTML = '';

    // Headers (Monday Start)
    const days = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    days.forEach(day => {
        const div = document.createElement('div');
        div.className = 'day-header';
        div.textContent = day;
        grid.appendChild(div);
    });

    // Calculate First Day Offset (Monday=0 ... Sunday=6)
    let firstDayIndex = new Date(year, month, 1).getDay(); // Sun=0, Mon=1...
    firstDayIndex = (firstDayIndex === 0) ? 6 : firstDayIndex - 1; // Shift to Mon=0

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Emply slots
    for (let i = 0; i < firstDayIndex; i++) {
        const div = document.createElement('div');
        div.className = 'day-cell empty';
        grid.appendChild(div);
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
        const div = document.createElement('div');
        div.className = 'day-cell';
        div.textContent = i;
        div.dataset.isoDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        const currentDateStr = div.dataset.isoDate;
        const currentParamsDate = new Date(year, month, i);
        // Correct Day Name check for Weekly logic
        const dayNameFull = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][currentParamsDate.getDay()];

        // Check for events
        // 1. Weekly Check
        if (weeklyDays.includes(dayNameFull)) {
            div.classList.add('is-weekly-off');
            div.title = "Día libre semanal";
        }

        // 2. Single Event Check
        const event = events.find(e => e.date === currentDateStr);
        if (event) {
            div.classList.add(`has-event-${event.reason || 'Libre'}`);
            div.title = event.reason + (event.status === 'pending' ? ' (Pendiente)' : '');

            // Pending visual
            if (event.status === 'pending') {
                div.classList.add('event-pending');
            }
        }

        // Today highlight
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            div.classList.add('today');
        }

        // Click Event - Toggle Selection (Multi-select)
        // PERMISSION CHECK: Only Admin or Owner can select/edit
        // Ensure globals are defined and use case-insensitive comparison
        const currentRole = window.currentUserRole || 'driver';
        const currentUserName = (window.currentUser || '').toLowerCase();
        const targetDriverName = (calendarDriverName || '').toLowerCase();

        const canEdit = (currentRole === 'admin' || targetDriverName === currentUserName);

        if (canEdit) {
            div.style.cursor = 'pointer'; // Visual cue
            div.addEventListener('click', () => {
                div.classList.toggle('selected');

                // Show/Update Form context
                const selectedCells = document.querySelectorAll('.day-cell.selected');
                const selectedCount = selectedCells.length;
                const eventForm = document.getElementById('eventForm');
                const dateDisplay = document.getElementById('selectedDateDisplay');

                // Logic to determine if we are in "Validation Mode"
                // If Admin AND at least one selected cell is a Pending Event
                let showValidation = false;

                if (window.currentUserRole === 'admin' && selectedCount > 0) {
                    const hasPendingSelection = Array.from(selectedCells).some(cell => cell.classList.contains('event-pending'));
                    if (hasPendingSelection) showValidation = true;
                }

                const saveBtn = document.getElementById('saveEventBtn');
                const validationControls = document.getElementById('validationControls');
                const eventTypeSelect = document.getElementById('eventType');

                if (selectedCount > 0) {
                    eventForm.classList.remove('hidden');
                    dateDisplay.textContent = `${selectedCount} día(s) seleccionado(s)`;

                    if (showValidation) {
                        saveBtn.classList.add('hidden');
                        eventTypeSelect.disabled = true; // Disable changing type during validation
                        validationControls.classList.remove('hidden');
                        dateDisplay.textContent += " (Validar Solicitud)";
                    } else {
                        saveBtn.classList.remove('hidden');
                        eventTypeSelect.disabled = false;
                        validationControls.classList.add('hidden');
                    }

                    eventForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                } else {
                    eventForm.classList.add('hidden');
                }
            });
        } else {
            div.style.cursor = 'default'; // No interaction
        }

        grid.appendChild(div);
    }
}

// Logic to Save Event (Multi-Select Support)
// Logic to Save Event (Multi-Select Support)
document.getElementById('saveEventBtn').addEventListener('click', async () => {
    const selectedCells = document.querySelectorAll('.day-cell.selected');
    const type = document.getElementById('eventType').value;

    if (!calendarDriverName || selectedCells.length === 0) return;

    const driverIndex = window.driversData.findIndex(d => d.name === calendarDriverName);
    if (driverIndex === -1) return;

    let driver = window.driversData[driverIndex];
    if (!Array.isArray(driver.daysOff)) driver.daysOff = [];

    const selectedDates = Array.from(selectedCells).map(cell => cell.dataset.isoDate);

    // Process each selected date
    selectedDates.forEach(isoDate => {
        // Remove existing for this date
        driver.daysOff = driver.daysOff.filter(item => {
            if (typeof item !== 'object') return true;
            return item.date !== isoDate;
        });

        // Add new if not clearing ('none')
        if (type !== 'none') {
            // Determine initial status based on Role
            const initialStatus = (window.currentUserRole === 'admin') ? 'approved' : 'pending';

            driver.daysOff.push({
                type: 'single',
                date: isoDate,
                reason: type,
                status: initialStatus
            });
        }
    });

    // Save
    await window.saveData();
    renderCalendar(); // Re-render grid
    window.renderDrivers(); // Update main dashboard badges

    // Reset Form
    document.getElementById('eventForm').classList.add('hidden');
    selectedCells.forEach(cell => cell.classList.remove('selected'));
    alert('Cambios guardados correctamente.');
});

// --- Validation Handlers (Admin) ---
document.getElementById('approveBtn').addEventListener('click', async () => {
    await processValidation('approved');
});

document.getElementById('rejectBtn').addEventListener('click', async () => {
    await processValidation('rejected');
});

async function processValidation(action) {
    if (!calendarDriverName) return;
    const selectedCells = document.querySelectorAll('.day-cell.selected');
    if (selectedCells.length === 0) return;

    const driver = window.driversData.find(d => d.name === calendarDriverName);
    if (!driver) return;

    const selectedDates = Array.from(selectedCells).map(cell => cell.dataset.isoDate);

    if (action === 'rejected') {
        // Remove the pending events for these dates
        driver.daysOff = driver.daysOff.filter(item => {
            if (typeof item !== 'object') return true; // Keep weekly strings
            // Remove if date matches AND it was the one selected (assumed pending)
            return !selectedDates.includes(item.date);
        });
    } else if (action === 'approved') {
        // Update status to approved
        driver.daysOff.forEach(item => {
            if (typeof item === 'object' && selectedDates.includes(item.date)) {
                item.status = 'approved';
            }
        });
    }

    await window.saveData();
    renderCalendar();
    window.renderDrivers();

    // Reset UI
    document.getElementById('eventForm').classList.add('hidden');
    document.getElementById('validationControls').classList.add('hidden');
    document.getElementById('saveEventBtn').classList.remove('hidden'); // Restore default
    alert(action === 'approved' ? 'Solicitud aprobada.' : 'Solicitud rechazada.');
}