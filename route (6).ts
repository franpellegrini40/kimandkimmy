@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-sand-50 text-stone-900 font-body antialiased;
  }

  h1, h2, h3, h4 {
    @apply font-display text-stone-900;
  }

  a, button {
    @apply outline-vivra-600;
  }

  :focus-visible {
    outline: 2px solid theme('colors.vivra.600');
    outline-offset: 3px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

.eyebrow {
  @apply text-xs uppercase tracking-[0.22em] text-vivra-700 font-medium;
}

.container-vivra {
  @apply mx-auto w-full max-w-content px-6 md:px-10 lg:px-16;
}
