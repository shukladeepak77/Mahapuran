import { puranas } from "@/content/puranas";
import HeroBanner from "@/components/HeroBanner";
import PuranaBubble from "@/components/PuranaBubble";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-14 pb-8 sm:px-6 sm:pt-20 sm:pb-12">
      <HeroBanner
        eyebrow="॥ हरि ॐ तत्सत् ॥"
        title="अठारह महापुराण"
        description="सनातन धर्म के अठारह महापुराणों का संक्षिप्त, प्रवचन-शैली परिचय — एक स्थान पर। श्रीमद्भागवत पुराण की अपनी पूर्ण, स्वतंत्र वेबसाइट पहले से है; शेष पुराण क्रमशः यहाँ जोड़े जा रहे हैं।"
      />

      <div className="mt-10 flex flex-col gap-4">
        {puranas.map((purana) => (
          <div key={purana.id} className="flex flex-col gap-1.5">
            <PuranaBubble purana={purana} />
            <p className="font-devanagari-ui px-1 text-xs leading-relaxed text-foreground/60 sm:text-sm">
              {purana.oneLine}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
