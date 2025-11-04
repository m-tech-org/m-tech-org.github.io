/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,html,mdx}"
    ],
    darkMode: "class",
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                primary: {
                    background: "var(--primary-background)",
                    foreground: "var(--primary-foreground)",
                    light: "var(--primary-light)",
                    dark: "var(--primary-dark)"
                },
                secondary: {
                    background: "var(--secondary-background)",
                    foreground: "var(--secondary-foreground)",
                    light: "var(--secondary-light)",
                    dark: "var(--secondary-dark)"
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    muted: "var(--text-muted)",
                    light: "var(--text-light)",
                    white: "var(--text-white)"
                },
                background: {
                    main: "var(--bg-main)",
                    card: "var(--bg-card)",
                    overlay: "var(--bg-overlay)",
                    accent: "var(--bg-accent)"
                },
                border: {
                    primary: "var(--border-primary)",
                    secondary: "var(--border-secondary)",
                    accent: "var(--border-accent)",
                    danger: "var(--border-danger)",
                    light: "var(--border-light)"
                },
                header: {
                    background: "var(--secondary-background)"
                },
                footer: {
                    background: "var(--secondary-background)"
                },
                button: {
                    background: "var(--primary-background)",
                    foreground: "var(--primary-foreground)"
                }
            },
            fontSize: {
                'xs': 'var(--font-size-xs)',
                'sm': 'var(--font-size-sm)',
                'base': 'var(--font-size-base)',
                'lg': 'var(--font-size-lg)',
                'xl': 'var(--font-size-xl)',
                '2xl': 'var(--font-size-2xl)',
                '3xl': 'var(--font-size-3xl)',
                '4xl': 'var(--font-size-4xl)',
                '5xl': 'var(--font-size-5xl)'
            },
            fontWeight: {
                'normal': 'var(--font-weight-normal)',
                'medium': 'var(--font-weight-medium)',
                'bold': 'var(--font-weight-bold)',
                'black': 'var(--font-weight-black)'
            },
            lineHeight: {
                'tight': 'var(--line-height-tight)',
                'snug': 'var(--line-height-snug)',
                'normal': 'var(--line-height-normal)',
                'relaxed': 'var(--line-height-relaxed)',
                'loose': 'var(--line-height-loose)',
                'xl': 'var(--line-height-xl)',
                '2xl': 'var(--line-height-2xl)',
                '3xl': 'var(--line-height-3xl)'
            },
            letterSpacing: {
                'wide': 'var(--letter-spacing-wide)',
                'wider': 'var(--letter-spacing-wider)'
            },
            spacing: {
                'xs': 'var(--spacing-xs)',
                'sm': 'var(--spacing-sm)',
                'md': 'var(--spacing-md)',
                'lg': 'var(--spacing-lg)',
                'xl': 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
                '4xl': 'var(--spacing-4xl)',
                '5xl': 'var(--spacing-5xl)',
                '6xl': 'var(--spacing-6xl)',
                '7xl': 'var(--spacing-7xl)',
                '8xl': 'var(--spacing-8xl)',
                '9xl': 'var(--spacing-9xl)'
            },
            borderRadius: {
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'xl': 'var(--radius-xl)',
                'full': 'var(--radius-full)'
            },
            borderWidth: {
                'thin': 'var(--border-width-thin)',
                'thick': 'var(--border-width-thick)'
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
                'plus': ['Plus Jakarta Sans', 'sans-serif'],
                'roboto': ['Roboto', 'sans-serif']
            },
            keyframes: {
                'pulse-shine': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                    },
                    '50%': {
                        transform: 'scale(1.05)',
                    },
                },
                'typing': {
                    'from': {
                        width: '0'
                    },
                    'to': {
                        width: '100%'
                    }
                },
                'blink': {
                    '0%, 100%': {
                        borderColor: 'transparent'
                    },
                    '50%': {
                        borderColor: 'currentColor'
                    }
                },
                'logo-spin': {
                    'from': {
                        transform: 'rotate(0deg)',
                    },
                    'to': {
                        transform: 'rotate(360deg)',
                    }
                },
            },
            animation: {
                'pulse-shine': 'pulse-shine 2s infinite ease-in-out',
                'logo-spin': 'logo-spin infinite 20s linear',
                'typewriter': 'typing 3s steps(40, end), blink 0.75s step-end infinite',
                'off': 'none',
            },
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ]
}