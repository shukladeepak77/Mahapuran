export type Purana = {
  id: number;
  title: string;
  subtitle: string;
  oneLine: string;
  available: boolean;
  // Only Shreemad Bhagwat Puran (id 5) has this set — it already has its
  // own complete, independent site (shreemadbhagwat.com), so this entry
  // links OUT to it rather than to a local /purana/5 page. The bubble
  // component checks this field first, before `available`.
  externalUrl?: string;
};

// Traditional 18-Mahapurana list, in the commonly published canonical
// order (Brahma through Brahmanda). Each `oneLine` is a well-established,
// widely-documented fact about that Purana's defining focus — not a
// summary of its content (that belongs on the Purana's own page, once
// written) — so the catalog page stays accurate even for the 16 Puranas
// that have no page yet.
export const puranas: Purana[] = [
  {
    id: 1,
    title: "ब्रह्म पुराण",
    subtitle: "पुराण १",
    oneLine: "अठारह पुराणों में परम्परागत रूप से प्रथम — सृष्टि, पुरुषोत्तम क्षेत्र (जगन्नाथ पुरी) और गोदावरी-माहात्म्य का वर्णन।",
    available: true,
  },
  {
    id: 2,
    title: "पद्म पुराण",
    subtitle: "पुराण २",
    oneLine: "सबसे विशाल पुराणों में से एक — सृष्टि-वर्णन, विष्णु-भक्ति और विस्तृत तीर्थ-माहात्म्य इसकी विशेषता है।",
    available: true,
  },
  {
    id: 3,
    title: "विष्णु पुराण",
    subtitle: "पुराण ३",
    oneLine: "सबसे व्यवस्थित व दार्शनिक रूप से सुगठित पुराणों में से एक — सृष्टि, श्रीकृष्ण-चरित्र, राजवंशों का इतिहास और विष्णु के अवतार।",
    available: true,
  },
  {
    id: 4,
    title: "शिव पुराण",
    subtitle: "पुराण ४",
    oneLine: "भगवान शिव की महिमा, द्वादश ज्योतिर्लिंगों तथा शैव दर्शन व भक्ति पर केन्द्रित।",
    available: true,
  },
  {
    id: 5,
    title: "श्रीमद्भागवत पुराण",
    subtitle: "पुराण ५",
    oneLine: "सर्वाधिक लोकप्रिय पुराण — श्रीकृष्ण-चरित्र व भक्ति पर केन्द्रित। इसकी अपनी पूर्ण, स्वतंत्र वेबसाइट पहले से उपलब्ध है।",
    available: true,
    externalUrl: "https://www.shreemadbhagwat.com",
  },
  {
    id: 6,
    title: "नारद पुराण",
    subtitle: "पुराण ६",
    oneLine: "देवर्षि नारद द्वारा वर्णित — धर्म, व्रत, तीर्थ व भक्ति-साधना की मार्गदर्शिका के रूप में प्रसिद्ध।",
    available: true,
  },
  {
    id: 7,
    title: "मार्कण्डेय पुराण",
    subtitle: "पुराण ७",
    oneLine: "देवी उपासना के मूल ग्रन्थ देवी माहात्म्य (दुर्गा सप्तशती) का स्रोत — नवरात्रि पाठ हेतु सर्वाधिक प्रसिद्ध।",
    available: true,
  },
  {
    id: 8,
    title: "अग्नि पुराण",
    subtitle: "पुराण ८",
    oneLine: "एक विश्वकोशीय ग्रन्थ — पूजा-विधि, राजनीति, आयुर्वेद, व्याकरण व काव्यशास्त्र सहित अत्यंत विस्तृत विषयों का संकलन।",
    available: true,
  },
  {
    id: 9,
    title: "भविष्य पुराण",
    subtitle: "पुराण ९",
    oneLine: "भविष्य की घटनाओं के वर्णन के रूप में प्रस्तुत — व्रत व धर्म-विधानों का भी विस्तृत संकलन।",
    available: true,
  },
  {
    id: 10,
    title: "ब्रह्मवैवर्त पुराण",
    subtitle: "पुराण १०",
    oneLine: "श्रीकृष्ण-राधा तथा प्रकृति (दिव्य स्त्री-तत्त्व) की महिमा पर केन्द्रित।",
    available: true,
  },
  {
    id: 11,
    title: "लिङ्ग पुराण",
    subtitle: "पुराण ११",
    oneLine: "शिवलिङ्ग के माध्यम से भगवान शिव की उपासना, सृष्टि-विज्ञान व शैव दर्शन का वर्णन।",
    available: true,
  },
  {
    id: 12,
    title: "वराह पुराण",
    subtitle: "पुराण १२",
    oneLine: "भगवान विष्णु के वराह अवतार पर केन्द्रित — धर्म व तीर्थ-माहात्म्य का भी वर्णन।",
    available: true,
  },
  {
    id: 13,
    title: "स्कन्द पुराण",
    subtitle: "पुराण १३",
    oneLine: "समस्त पुराणों में सबसे विशाल — भगवान कार्तिकेय (स्कन्द) पर केन्द्रित, देशभर के तीर्थ-माहात्म्यों का विराट संकलन।",
    available: true,
  },
  {
    id: 14,
    title: "वामन पुराण",
    subtitle: "पुराण १४",
    oneLine: "भगवान विष्णु के वामन अवतार तथा राजा बलि की कथा पर केन्द्रित — शैव सामग्री भी सम्मिलित।",
    available: true,
  },
  {
    id: 15,
    title: "कूर्म पुराण",
    subtitle: "पुराण १५",
    oneLine: "भगवान विष्णु के कूर्म (कच्छप) अवतार पर केन्द्रित — सृष्टि-विज्ञान व धर्म का वर्णन।",
    available: true,
  },
  {
    id: 16,
    title: "मत्स्य पुराण",
    subtitle: "पुराण १६",
    oneLine: "सबसे प्राचीन पुराणों में से एक — मत्स्य अवतार व जलप्लावन की कथा, राजवंशावली और मन्दिर-शिल्पशास्त्र हेतु प्रसिद्ध।",
    available: true,
  },
  {
    id: 17,
    title: "गरुड़ पुराण",
    subtitle: "पुराण १७",
    oneLine: "मृत्यु, परलोक व अन्त्येष्टि-संस्कारों के विस्तृत वर्णन हेतु प्रसिद्ध — धर्म व आयुर्वेद का भी संकलन।",
    available: true,
  },
  {
    id: 18,
    title: "ब्रह्माण्ड पुराण",
    subtitle: "पुराण १८",
    oneLine: "ब्रह्माण्ड (कॉस्मिक अण्डे) की उत्पत्ति पर केन्द्रित — कुछ संस्करणों में ललिता सहस्रनाम व अध्यात्म रामायण भी सम्मिलित।",
    available: true,
  },
];

export function getPuranaById(id: number): Purana | undefined {
  return puranas.find((p) => p.id === id);
}
