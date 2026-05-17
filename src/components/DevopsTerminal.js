import React, { useState, useRef, useEffect } from 'react';

const DevopsTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: '=== BIGUELL DEVOPS TERMINAL v1.0.0 (BETA) ===' },
    { type: 'output', text: 'Escribe "help" para ver la lista de comandos disponibles.' },
    { type: 'output', text: '' }
  ]);
  const terminalEndRef = useRef(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `guest@biguell-hub:~$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Comandos disponibles:' },
          { type: 'output', text: '  status    - Estado del clúster Rambo & Raspi en tiempo real.' },
          { type: 'output', text: '  neofetch  - Especificaciones del servidor y logo del sistema.' },
          { type: 'output', text: '  projects  - Listado de proyectos activos en formato terminal.' },
          { type: 'output', text: '  clear     - Limpia la pantalla de la consola.' },
          { type: 'output', text: '  help      - Muestra esta ayuda.' }
        );
        break;
      case 'status':
        newHistory.push(
          { type: 'output', text: '● HOST: Rambo (NAS & Core Services)' },
          { type: 'output', text: '  IP: 10.x.x.35     |  OS: Debian 12 (OMV 7)  |  STATUS: ONLINE' },
          { type: 'output', text: '  SERVICES: SSH [OK] BorgBackup [OK] fail2ban [OK] AIDE [OK]' },
          { type: 'output', text: '  CONTAINERS: Portainer, WireGuard, DuckDNS, Nginx Proxy Manager' },
          { type: 'output', text: '● HOST: Raspi (Application Server)' },
          { type: 'output', text: '  IP: 10.x.x.16     |  OS: PiOS Lite 64bit    |  STATUS: ONLINE' },
          { type: 'output', text: '  SERVICES: SSH [OK] fail2ban [OK] BorgClient [OK] SMB/CIFS [OK]' },
          { type: 'output', text: '  CONTAINERS: Home Assistant, Plex, ownCloud' },
          { type: 'output', text: '● NETWORK: WireGuard VPN tunnel active | 10.x.x.x/24' }
        );
        break;
      case 'neofetch':
        newHistory.push(
          { type: 'output', text: '       .---.        guest@biguell-hub' },
          { type: 'output', text: '      /     \\       -----------------' },
          { type: 'output', text: '      \\     /       OS: Biguell Hub OS v18.9.5' },
          { type: 'output', text: '       `---`        Kernel: Linux 6.1.0-rpi-devops' },
          { type: 'output', text: '      /     \\       Uptime: 3 days, 22 hours, 39 mins' },
          { type: 'output', text: '     |  (_)  |      Packages: apt-listbugs needrestart debsums' },
          { type: 'output', text: '      \\     /       Shell: bash 5.2.15' },
          { type: 'output', text: '       `---`        CPU: Broadcom BCM2712 (quad-core)' },
          { type: 'output', text: '                    Memory: 3.3GB / 7.9GB (42%)' }
        );
        break;
      case 'projects':
        newHistory.push(
          { type: 'output', text: 'PROYECTOS EN ARCHIVO:' },
          { type: 'output', text: '-------------------------------------------------------------' },
          { type: 'output', text: '► TurnoControlPro [v6.5.41]       - Gestión operativa de conductores.' },
          { type: 'output', text: '► Escoba Drivers [v16.0]         - PWA para gestión de turnos.' },
          { type: 'output', text: '► Alexa + Gemini [Asistente IA]   - Backend AWS Lambda en voz natural.' },
          { type: 'output', text: '► Gastium IA [Finanzas]          - Control de gastos con Gemini OCR.' },
          { type: 'output', text: '► Spectrode señales [Análisis 3D] - Visualización de trazas espectrales.' }
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push({
          type: 'output',
          text: `bash: command not found: '${cmd}'. Escribe "help" para ver los comandos válidos.`
        });
    }

    newHistory.push({ type: 'output', text: '' });
    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="terminal-container my-5 rounded-4 overflow-hidden border border-secondary border-opacity-25" style={{ background: '#020305', boxShadow: '0 20px 50px rgba(0, 210, 255, 0.05)' }}>
      {/* Header bar */}
      <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ background: '#05070a', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="d-flex align-items-center gap-2">
          <span className="rounded-circle" style={{ width: '12px', height: '12px', background: '#ff5f56' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', background: '#ffbd2e' }}></span>
          <span className="rounded-circle" style={{ width: '12px', height: '12px', background: '#27c93f' }}></span>
        </div>
        <div className="text-secondary small fw-semibold" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
          bash - guest@biguell-hub:~
        </div>
        <div className="d-flex align-items-center fw-bold" style={{ fontSize: '0.65rem', color: '#00ff88', fontFamily: 'monospace', letterSpacing: '0.5px', background: 'rgba(0, 255, 136, 0.05)', border: '1px solid rgba(0, 255, 136, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
          SECURE SANDBOX
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-3 overflow-y-auto" style={{ height: '320px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#a0a0a0', lineHeight: '1.5', textAlign: 'left' }}>
        {history.map((line, idx) => (
          <div
            key={idx}
            style={{
              color: line.type === 'input' ? '#00d2ff' : line.text.startsWith('bash:') ? '#ff5f56' : line.text.startsWith('===') ? '#00ff88' : '#a0a0a0',
              whiteSpace: 'pre-wrap'
            }}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input row */}
      <form onSubmit={handleCommand} className="d-flex align-items-center px-3 py-2" style={{ background: '#030508', borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <span className="text-primary me-2" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>guest@biguell-hub:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow-1 bg-transparent border-0 text-white p-0"
          style={{ outline: 'none', fontFamily: 'monospace', fontSize: '0.85rem', caretColor: '#00ff88' }}
          placeholder='Escribe un comando... (ej. "status", "neofetch")'
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
    </div>
  );
};

export default DevopsTerminal;
