export const uiTokens = {
  spacing: {
    sectionTight: "py-16 md:py-20",
    sectionBase: "py-20 md:py-24",
    sectionLoose: "py-24 md:py-28",
    stackXs: "gap-2",
    stackSm: "gap-3",
    stackMd: "gap-4",
    stackLg: "gap-6",
  },
  button: {
    size: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-sm",
    },
    radius: {
      control: "rounded-xl",
      pill: "rounded-full",
    },
  },
  card: {
    elevated: "rounded-2xl border shadow-sm",
    outline: "rounded-2xl border",
    dashed: "rounded-2xl border-2 border-dashed",
    padding: {
      sm: "p-4",
      md: "p-6",
    },
  },
  text: {
    label: "text-xs font-semibold uppercase tracking-wider",
    sectionTitle: "text-2xl md:text-3xl font-bold",
    body: "text-sm leading-relaxed",
    caption: "text-xs",
  },
} as const;

export type UiTokens = typeof uiTokens;
