// Performis hero backdrop — Paper MeshGradient (@paper-design/shaders-react via esm.sh)
customElements.define('performis-shader', class extends HTMLElement {
  async connectedCallback() {
    if (this._mounted) return; this._mounted = true;
    this.style.cssText = 'position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none;';
    try {
      const [R, RD, P] = await Promise.all([
        import('https://esm.sh/react@18.3.1'),
        import('https://esm.sh/react-dom@18.3.1/client'),
        import('https://esm.sh/@paper-design/shaders-react?deps=react@18.3.1'),
      ]);
      const React = R.default ?? R;
      const host = document.createElement('div');
      host.style.cssText = 'width:100%;height:100%;';
      this.appendChild(host);
      RD.createRoot(host).render(
        React.createElement(P.MeshGradient, {
          colors: ['#000000', '#000000', '#a9f750', '#000000'],
          distortion: 0.18,
          swirl: 0.5,
          grainMixer: 0,
          grainOverlay: 0.07,
          scale: 0.48,
          rotation: 32,
          offsetX: 0.28,
          speed: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.96,
          style: { width: '100%', height: '100%', display: 'block' },
        })
      );
    } catch (e) { console.warn('MeshGradient backdrop unavailable:', e); }
  }
});
