/* Vocabulario de movimiento del sitio (design.md § Motion), para Motion (`motion/react`).
 * Mismas curvas que los tokens CSS --ease-*; duraciones en segundos. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN = [0.7, 0, 0.84, 0] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const DUR = { micro: 0.12, short: 0.22, long: 0.42, lento: 0.9 } as const;

/** Resorte de los elementos que siguen al puntero o aparecen fijos (sin rebote visible). */
export const RESORTE = { type: "spring", stiffness: 260, damping: 32, mass: 0.6 } as const;

/** Lo que entra una sola vez al aparecer en pantalla. */
export const VISTA = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Cortina que se retira de una captura: arranca y frena suave (simétrica). */
export const EASE_CORTINA = [0.76, 0, 0.24, 1] as const;
