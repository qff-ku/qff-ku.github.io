export const eventContent = {
  ko: {
    lang: "ko",
    ogLocale: "ko_KR",
    title: "2026 QFF",
    description: "2026 QFF 행사 안내",
    heading: "행사 정보를 준비하고 있습니다.",
    body: "확정된 일정과 참가 안내를 순차적으로 공개합니다.",
  },
  en: {
    lang: "en",
    ogLocale: "en_US",
    title: "2026 QFF",
    description: "Information about 2026 QFF",
    heading: "Event details are coming soon.",
    body: "Confirmed schedule and registration details will be published here.",
  },
} as const;

export type EventContent = (typeof eventContent)[keyof typeof eventContent];
