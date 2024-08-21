// بيانات JSON التي ترغب في رفعها
const drugData = [
    {
        "name": "MEGAFEN 30 TAB",
        "count": "0:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SANSO C PLUS 900MG 14 TAB",
        "count": "0:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "STREPSILS HONEY & LEMON 24 LOZENGES",
        "count": "0:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "EMETREX 50MG/ML 3AMP",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DAVALINDI 5000 I.U. 30 TABS.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DECLOPHEN S.R. 100MG 8 CAPS.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DOLPHIN K 50MG 20 TAB",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "EPIFENAC 25MG 20 TAB.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "FASTCURE 20MG 14 CAPS.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "IMMUNO-MASH 20 TABS.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "STOPADOL EXTRA 20 TAB",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "TELFAST 120MG 20 F.C. TABS.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ZURCAL 20 MG 14 TAB",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ZURCAL 40 MG 14 TAB 1 STRIP",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ZURCAL 40 MG 28 TAB 4 STRIP",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "EGY GROWTH 200GRAM SACHET",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ACTIVE HAIR CREAM 100 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ACTIVE HAIR OIL 120 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ACTIVE HAIR SHAMPOO 250ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "GIRLY HAIR CREAM 100 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "PANTHENOL HAIR SHAMPOO 120 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "بالمرز كريم شعر مغذى للشعر انبوبة 50 جم",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "بالمرز كريم شعر مغذى للشعر برطمان 150 جم",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "كازانوفا كريم شعر زجاج اصفر 150 مل",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "GUM-C 120ML MOUTH WASH",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "CALAMINE LOTION 120 ML B.P 93",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DERMA WHITE CREAM 30 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "FASTER GEL 80 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "JACKODAN GEL 60 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "PANTHENOL NOVEX PLUS 30GM  CREAM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SPECTRA PANTHENOL EXTRA CREAM 30 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "THROMBEXX DNA 1120 I.U/100GM GEL.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "NATRY SOAP 100 GM",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "BABETON SYRUP",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "BABETON SYRUP SUGAR FREE",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "BRONCHOTEC  SYRUP",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DURICEF 125 MG/5ML POWDER FOR ORAL SUSP.",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "IVYMAX",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "NORMASS SYRUP 120 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SANSOBABY WATER 100 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "CORSODEN MOUTH SOL. 200 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DERMA WHITE FACIAL WASH 200 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DG-WASH (FLOURIDE/MENTHOL) M.W 125ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ISIS CINNAMON 20 FILTER BAGS",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "MASH SUN BLOCK 95 SPF 125ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ORACIN M.WASH 120 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "POLYTAR HAIR SHAMPOO 150 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "TUSSISTOP 30MG/5ML 100 ML",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ايزيس شاي ريجيم 50 كيس",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "بلوب سيرم",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "كحول لتر",
        "count": "1:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "FLAMOTAL 400 MG 30 F.C. TAB.",
        "count": "1:02",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "RENNIE 24 CHEW. TAB.",
        "count": "1:03",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "CANDY ORANGE 12 LOZENGES",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "C-RETARD 500 MG 10 CAP",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "C-RETARD+ZINC 20 CAP",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DAVALINDI 1000 IU VIT D 3 100 TAB",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "FLAMOTAL 600 MG 20 F.C.TAB.",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ZYRTEC 10MG/ML ORAL DROPS",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SEKEM LAXATIVE 10 SACHETS",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DEXATOBRIN EYE DPS",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ORCHAZID 0.025% EYE DPS 10ML.",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "RHINEX ADULT NASAL DROPS",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "بالمرز كريم بالبرغموت لتكييف الشعر 150 ج",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "CARBAMIDE NOVEX CREAM 30GM",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "CITROPANTHEN CREAM 30 GM",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "GLYCERIN TRASPARENT SOAP 72 GM",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "BALSAM PED SYRUP",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "COUGH CUT 7.5 MG/5 ML SYRUP",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "FAST SYRUP 120 ML",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "IVY BRONCH SYRUP 120 ML",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "NITAZODE 100MG/5ML SUSP.",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "LIFE.V 120ML VAG.DOUSHE",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "NORMIFRIN (OXYMETAZOLINE-MUP) 0.5MG/ML N",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "PANTHENOL NOVEX 30GM",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SEKEM LACTAGOGUE FILTER BAG",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ايفا بي وايت تفتيح مناطق حساسه",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "جوانتي عمال XL",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "جوانتي عمال XXL",
        "count": "2:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "KETOROLIN AMPOULE",
        "count": "2:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "TUSSISTOP 60 MG 20TAB",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "MINI GUAVA DROPS",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "NEOPOL EYE/EAR DROPS",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "LAMIFEN 1%CREAM 15 GM",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "SENSODERM SOAP 80 GM",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "LEVOHISTAM 5MG/ML ORAL DROPS 20 ML",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "RHINOCALM SYRUP",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "BRONCHOLIN S 0.5% RESPIRATOR SOLN. 30 ML",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "كحول طبي 70%",
        "count": "3:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "LARYPRO  20 LOZENGES",
        "count": "3:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "MAFO 400 MG 30 TABS",
        "count": "3:01",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "IVYPRONT SYRUP 120 ML",
        "count": "4:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "TEMPORAL 250MG/5ML SUSP. 60 ML",
        "count": "4:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "برفان تيم بلية",
        "count": "4:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "MIOPAN 100ML SUSP.",
        "count": "5:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "DEXATROL EYE/EAR DROPS",
        "count": "6:00",
        "Location": "1",
        "Desc":"null"
    },
    {
        "name": "ABIMOL 20TAB",
        "count": "0:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "NORGESIC 20 TAB.",
        "count": "0:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 50MG 20 TAB.",
        "count": "0:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAL 1000MG 15 TABS.",
        "count": "0:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "COLDATREXY 30 TAB",
        "count": "0:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PANADOL MIGRAINE 30 TAB",
        "count": "0:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "RELAXON 30 CAPS.",
        "count": "0:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ABIMOL EXTRA 20TAB",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BI-PROFENID 150MG 20TABS.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRONCHICUM 20 LOZENGES",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN COLD 10 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN FLU 10 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CATAFLAM 25 MG 20 TAB",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "COLD CONTROL 20 TAB",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DECLOPHEN 50MG 20 TAB",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DOLO-D 20 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "EPICOTIL 20MG 10 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "IMIGRAN 50MG 2 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MYOFLEX 10 TAB",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PAROFEN 30 TABS",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PRONTO PLUS  20 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PYRAL 500MG 20 TAB.",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "VESTICOLD",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALERGOLIBER SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALVEOLIN SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALVEOLIN-P SYRUP 100 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CLARITINE 1MG/ML SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DELAREX 0.05G/100ML SYRUP 60 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DESA 2.5MG/5ML SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DOLO-D ORAL SUSP. 115 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "EPICOPHYLLINE PHENOBARBITONE SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "EVASTINE 5MG/5ML SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "FERNILAR  0.5MG/ML SYRUP 60 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "HISTAZINE-1 0.1% SYRUP 100ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ISILIN SYRUP 120 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "LEVCET SYRUP 120 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "LEVOHISTAM 5MG/10 ML SYRUP 120ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MEGALASE SYRUP 125ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MUCO 15MG/5ML SYRUP 120 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "OCTOVENT PLUS SYRUP 100 ML",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PYRAL 2.4G/100ML 125ML SYRUP",
        "count": "1:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ADWIFLAM 50MG E.R.20CAPS.",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ANTIFLAM 50MG 20 TAB.",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CATAFLAM 50MG 20 TAB",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAFEN PLUS 30 TAB.",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "FLECTOR 50 MG 30 CAPS.",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "KETOLAC 10MG 20 TAB.",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PANADOL COLD & FLU DAY 24 TAB",
        "count": "1:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAFEN 30 TAB.",
        "count": "1:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CATAFAST 50MG 9 SACHETS",
        "count": "1:06",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALLERGEX CAFFEINE 20 TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "AMIGRAINE 30 TAB",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN 200MG 30TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAL 500MG 20 TAB",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAL SINUS 20 CAP",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "COMTREX ACUTE HEAD COLD 20 TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DIMRA 20 F.C.TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MOBITIL 15MG 10 TABLET",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "NOFLU 20 TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PARAMOL 500MG 20 TAB.",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "FLASH ACT 5 SACHETS",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALLERGYL 2MG/5ML SYRUP 120 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BISOLVON 4MG/5ML SYRUP 115ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DOLO-D PLUS SUSP. 115 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "FOUR VENT  125ML  SYRUP",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "GUAFLEX-N SYRUP 120 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "GUAVA SYRUP 120 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "IVYROSPAN SYRUP",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MUCOSOL PED.125MG/5ML SYRUP 120ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PECTIPRO 0.3% SYRUP 100G=90ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PENTAMIX SURUP 120 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "RHINOPRO SYRUP 90 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PENTAFLU SYP. 100 ML",
        "count": "2:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "KETOFAN 50 MG 30 CAPS.",
        "count": "2:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "POWER CAPS 20 CAP",
        "count": "2:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN SR 100MG 20 TAB.",
        "count": "2:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN 600MG 30 TAB.",
        "count": "2:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAL COLD & FLU 20 CAP",
        "count": "3:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ALL-VENT SYRUP 120 ML",
        "count": "3:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "MUCOPHYLLINE SYRUP 125 ML",
        "count": "3:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PENTACOLD SYRUP 120 ML",
        "count": "3:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "1,2,3  20 TAB.",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN 400MG 30 TAB.",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BRUFEN COLD 20TAB",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CONGESTAL 20 TAB",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "FLUREST N 20 TAB",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "NOVALDOL 1GM  15 TAB.",
        "count": "3:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PANADOL EXTRA 48 TAB",
        "count": "4:02",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "123 EXTRA",
        "count": "5:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DOLO-D PLUS 20 TAB.",
        "count": "5:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "OPLEX-N SYRUP 125ML",
        "count": "5:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "BI-ALCOFAN 150MG 30 TAB.",
        "count": "5:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "PANADOL EXTRA 24 TAB",
        "count": "6:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "1.2.3 SYRUP",
        "count": "6:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "ANTIFLU 20 HARD GELATIN CAP.",
        "count": "9:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "COLD FREE 20 TAB.",
        "count": "9:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "DECANCIT S.R 20 F.C.TAB",
        "count": "14:01",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CETAL 250MG/5ML SUSP.",
        "count": "15:00",
        "Location": "2",
        "Desc":"null"
    },
    {
        "name": "CIPROCIN 750MG 10 TAB.",
        "count": "0:01",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CLARIKAN  500MG 14 S.R.F.C.TAB.",
        "count": "0:01",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "KLACID 500MG 14TAB.",
        "count": "0:01",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "EPICEPHIN 1GM I.M.VIAL",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FOXIME 500MG I.M./I.V.VIAL",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VANZAPRO 1 GM I.M/I.V. VIAL",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFALOTRIGENEX 200MG 8 F.C. TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEPOREX 1 GM 8 F.C.TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CIPRO 500MG 10 TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CIPROFAR 500MG 10 TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CIPROQUIN 500MG F.C. TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CLARITHRO 500MG F.C.TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CLAVIMOX 1 GM 12 F.C.TABS",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CLINDACINE 300MG 12 CAPS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CLINDAM 300 MG  HARD GELATIN CAPS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "DALACIN C 300MG CAPS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "DELZOSIN 500 MG 6 F.C.TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "DELZOSIN 600 MG 6 F.C.TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "DOXYMYCIN 100MG 10 CAPS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FLUROFLOX 400MG 10 TAB",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "INFECTOMYCIN 500MG 6 TAB",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "LEVANIC 750 MG 5 TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "LEVODEL 750MG 5 F.C. TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "LEVOTAVIN 750 MG 7 TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "MONOSHO 500MG F.C. TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SEPTRIN D.S 10 TAB",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SERVIFLOX 500MG 10 F.C.TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "TARIVID 200MG 10 F.C. TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "TAVACIN 750MG 5 TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "TAVANIC 500MG 5 TAB",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "TINIFLOXACIN 10 TAB.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZITHOTRAC 500 MG 3 TABS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZITHROKAN 500MG 3 CAPS.",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "RHINOTUS SYRUP",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SINAWET SYRUP 120 ML",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SINE-UP SYRUP 120 ML",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VENDEXINE SYRUP 125 ML",
        "count": "1:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "INFECTOCURE 500 MG 14 TABS.",
        "count": "1:01",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFAZONE PLUS 1.5 GM (I.V/I.M) INJ. VIAL",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFOTAX 2G VIAL I.M.\\I.V. EIPICO",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "EPICEPHIN 500MG I.M.VIAL",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FORTUM 1GM VIAL.",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FOXIME 1GM I.M.VIAL",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "MAXIPIME 0.5GM I.M./I.V. VIAL",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "NOVACTAM 750 MG VIAL",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "AUGMENTIN 1 GM 14 TABLET",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "AZROLID 500MG 3 TAB.",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "DOXYDOX 100MG  CAPS",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "LEVODEL 500MG 5 F.C. TABS.",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "MEPAFURAN 50MG CAPS.",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SALBOVENT 2MG/5ML SYRUP",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VENTOLIN 2MG/5ML SYRUP 125 ML",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZYRTEC 1MG/ML SYRUP 100 ML",
        "count": "2:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FLUMOX 500 MG 16 CAPS.",
        "count": "2:01",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VANZADIME 1 GM VIAL FOR I.V./I.M. INJ.",
        "count": "3:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "MEGAMOX 1GM 14 TAB.",
        "count": "3:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "TELFAST ORAL SUSP. 100 ML",
        "count": "3:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "FLUCAMOX 1GM VIAL",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SPECTRACEF 1 GM I.M/I.V VIAL",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ULTRACILLIN 1500MG VIAL",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VELOSEF 1GM I.M./I.V.VIAL",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "XORAXON 1 GM I.M. VIAL",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZISROCIN 500 MG 3 CAPS.",
        "count": "4:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFAXONE 1GM I.M. VIAL",
        "count": "5:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFOZON 1GM VIAL",
        "count": "5:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "VELOSEF 500MG I.M./I.V.VIAL",
        "count": "5:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "NOVACTAM 1500MG VIAL",
        "count": "6:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZINOL 500MG I.M./I.V. VIAL",
        "count": "6:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "ZINOL 1GM I.M./I.V.VIAL.",
        "count": "7:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "SEDATUSS 20MG/5ML 100 ML SUSP.",
        "count": "8:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "CEFOTAX 1GM  VIAL I.M.\\I.V. EIPICO",
        "count": "12:00",
        "Location": "3",
        "Desc":"null"
    },
    {
        "name": "LOVIR 800 MG 35 ORAL DISP. TABS.",
        "count": "0:04",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "صوابع جلد كومفورت",
        "count": "0:49",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "جوانتي لاتكس",
        "count": "0:57",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ALZENTAL 200MG 6 TABS",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "AMRIZOLE 250MG 20TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "CIPAZOLE FORTE 1G TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DIFLUCAN 150MG 1 CAPSULE",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "EPIMIRAFLU 75 MG 10 CAPS.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "FLUB 100MG 6 TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "FLUVER 100MG 6 TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "HIDRASEC 100 MG 10 CAP",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "LOVIR 400MG 10 DISP. TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "SECNIDAZOLE 500MG 4 TAB.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "TREFLUCAN 150MG 1 CAPS.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZITHROMAX 500MG 3TABS",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "AVEROZOLID 100MG  SUSP 60ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "AVEROZOLID 100MG SUSP 150ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DIAX 220MG/5ML SUSP.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "E-MOXCLAV 642.9MG/5ML SUSP. 75 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "INFECTOCURE 250 ML SUSP",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "MAXDINIR 250MG/5ML 60ML SUSP",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "RAME-ZITHRO 200MG/5ML SUSP. 15 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "SEPTAZOLE SUSP. 100 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "SUPRAX 100 MG/5 ML ORAL SUSP. 60ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "UNIZITHRIN 100MG/5ML SUSP. 30 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZISROCIN 100MG/5ML SUSP.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZITHRODOSE  900MG  45ML  SUSP",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZITHRODOSE 1200MG=60ML PD. FOR SUSP.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZITHROKAN 100MG/5ML 15 ML SUSP.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "CLINSO 200ML VAG.DOUSHE",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "GOLD CLEANSER 250 VAG DOUSH",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "GYNOCONAZOL 0.8% VAGINAL CREAM.",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "KLENVA VAG.DOUSHE 250 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "PEDRO VAGINAL DOUCH 250ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "SPLENDO VAG.DOUSHE 180 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "TOP VORTEX VAG.DOUSH 240ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VAGICLIND 2% VAGINAL CREAM",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "AZI-ONCE 200MG/5ML 15 ML POW. FOR ORAL S",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "BETADINE 0.1GM/1ML VAG. DOUCHE",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "MALVA VAG DOUCHE 120ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "RIGHT VAG.DOUCHE 120 ML",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZIENA V.DOUCH",
        "count": "1:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VIBRAMYCIN 100MG 10 CAPS.",
        "count": "1:01",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "NANAZOXID 500MG 18 TAB",
        "count": "1:02",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DIASMECT 3GM 10 SACHETS",
        "count": "1:02",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DIAX 200MG 12 CAPS.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ITRAPEX 100MG 15 HARD GELATIN CAPS.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "PROTOZOLE 500 MG 12 F.C. TABS.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VERMIN 6MG CAPS",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ANTINAL 220MG/5ML SUSP.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "BENDAX 100MG/5ML SUSP. 60ML",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "NANAZOXID 100MG/5ML PD. FOR ORAL SUSP.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "NIT CLEAN 100MG/5ML PD. FOR ORAL SUSP.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VERMIZOLE 200MG/5ML SUSP.",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VIRUSTAT 200MG/5ML ORAL SUSP. 120 ML",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZOVIRAX D.S 400MG/5ML SUSP. 100 ML",
        "count": "2:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "AMRIZOLE 500MG 20TAB.",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ANTINAL 200MG  24CAPS.",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VERMIZOL 200MG 6 TAB",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "XITHRONE 500MG 3 F.C.TAB",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "SUPRAX 100 MG/5 ML ORAL SUSP. 30ML",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "XITHRONE 200MG/5ML 15ML SUSP.",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ZITHROKAN 200MG/5ML 15 ML ORAL SUSP.",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DALACIN 2% VAGINAL 16.5GM CREAM",
        "count": "3:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "CURISAFE 500MG/5ML SUSP. 60ML",
        "count": "4:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "NEW-CLAV 642.9MG/5ML SUSP 100 ML",
        "count": "4:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "FLAGYL 500 MG 20 TAB.",
        "count": "4:01",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "ITRAPEX 100 MG 4 CAPS.",
        "count": "5:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "FLUB 20MG/ML SUSP.",
        "count": "6:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "DIOMACTE 20% SUSP. 60 ML",
        "count": "7:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "FLAGYL 125MG/5 ML 100ML SUSP.",
        "count": "7:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "STREPTOQUIN 20 TAB",
        "count": "13:01",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "VERM 1 500MG 1 TAB. (PER STRIP)",
        "count": "24:00:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "كمامة طبية قطاعي",
        "count": "32:00:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "بلاستر جروح مدور بالشريط",
        "count": "75:00:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "بلاستر جروح شرائط بالشريط",
        "count": "961:00:00",
        "Location": "4",
        "Desc":"null"
    },
    {
        "name": "GLYCERIN ADULT 10 SUPP. (GLAXO)",
        "count": "0:01",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "OPLEX-N SUPP",
        "count": "0:01",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GASTROTIDINE 20MG/2ML 3 AMP.",
        "count": "0:02",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "NEURORUBINE  6AMP",
        "count": "0:03",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "SYNTOCINON 10 I.U/ML I.M/I.V.AMP.",
        "count": "0:04",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ANTODINE 20MG/2ML 3 AMP",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "CAL-HEPARINE 5000I.U. 3AMP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "EPOETIN SEDICO 4000I.U./ML VIAL.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ALFACALCIDOL 2MCG/ML ORAL DROPS",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "CORNETEARS 10MG/G AQUEOUS EYE GEL",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GANVIR EYE GEL 10 GM",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ORCHADEXOLINE EYE DROPS.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "TWINZOL EYE DROPS 5 ML",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DECLOPHEN 100MG 5 SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DECLOPHEN 12.5MG 5 SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DECONGESTYL 12 SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GLYCERIN ADULT 5 SUPP. (PHARCO)",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GLYCERIN INFANTILE 10 SUPP. (GLAXO)",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GLYCERIN INFANTILE 5 SUPP. (PHARCO)",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "MARCOFEN 500MG SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "NAVOPROXIN 50MG 5 SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "PARAGESIC 500MG 5 SUPP",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "GYNOCONAZOLE 80MG VAG. SUPP.",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "PRONTOGEST 400MG 30 VAG. PESSARIES",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ايزي سويت عرض 3 قطعة",
        "count": "1:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "PRONTOGEST 100MG/2ML I.M. 10 AMP.",
        "count": "1:01",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DOLPHIN 25MG 10 SUPP.",
        "count": "1:01",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "EPIFASI 5000 I.U.AMP.",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "EPIGONAL 75I.U. AMP.",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "OFUSIDIC STERILE VISCOUS EYE DROPS",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "TOBREX 0.3% EYE DROPS",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "BABY RELIEF 25MG SUPP.",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "EPIFENAC 25MG 5 SUPP.",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "FAKTU 8 RECTAL SUPP.",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 25MG 5 SUPP",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ENTEROGERMINA 2 BILLION/5ML ORAL SUSP. 1",
        "count": "2:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ALBOTHYL 90MG 8 VAG.SUPP",
        "count": "2:01",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "ABIMOL 300MG  RECTAL 5 SUPP",
        "count": "3:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 100MG 10 SUPP.",
        "count": "4:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "سويت حرير",
        "count": "4:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "PARAMOL 125MG PAEDIATRIC SUPP.",
        "count": "5:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "CETAL 120MG INFANTILE 5 SUPP",
        "count": "7:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DOLPHIN 12.5MG 10 SUPP",
        "count": "7:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "SELGON 10MG INFANT 6 SUPP",
        "count": "12:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "DAKTACORT CREAM",
        "count": "15:00",
        "Location": "5",
        "Desc":"null"
    },
    {
        "name": "CUTE HAIR OIL 120 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "EMMYROSA HAIR LOTION 120 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "MAGIC HAIR OIL 60 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "MAGIC HAIR SHAMPOO 250ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "VIVIDOL HAIR CREAM 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CARE BY CARE CREAM 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "DERMOCALM TOPICAL LOTION 120 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "DODGE HAIR TONIC 120ML LOTION",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HIDERM CREAM 50 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HIDERM TOPICAL LOTION 100ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HIPANTHEN PLUS TOPICAL LOTION 120ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "LIT UP WHITENING CREAM 50 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "O.Z TOPICAL CREAM 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ORIENT-N CREAM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "REVI 2 CREAM 50GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "SENSODERM TOPICAL LOTION 120 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "THREE ZED LOTION 120 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ZINCODERM CREAM 50 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ZINCODERM LOTION 120ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ZINCOPANE CREAM 60 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ACNEVERA SOAP 80 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ADVANCE SOAP 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CLEARTY WHITENING SOAP 80 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "FUNGICARE SOAP 80 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "LIT UP SOAP 100 GRAM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "SYNOBAR-S SOAP 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "TRI TECT ACNE SOAP",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "TRI TECT ANTISEPTIC SOAP",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "VI SENSE SOAP 100 GM",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "صابون كبريت لورد 50 جم",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "BIOMEB LOTION SPRAY 30 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CORDO PLUS SPRAY 60 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "BETADINE ANTISEPTIC SOLU. 120ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CORPAL HP SHAMPOO 300ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "DANDIVERA HAIR SHAMPOO 180ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "DERMOTRACIN AEROSOL POWDER 150 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "INVESTA SERUM 130ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "KETORAL PLUS HAIR SHAMPOO 125ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "MASH SUN BLOCK 45 SPF 125ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "NIZAPEX 20MG/GM SHAMPOO 80 ML",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "NO ACNE SOAP 100G",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "SAVLO ALMASRIA",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "SETAVLON ANTISEPTIC SOLUTION",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ملح انجليزى",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ميكروكروم 3% أوميجا",
        "count": "1:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "FAYCID HAIR OIL 60ML",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ZINC OLIVE BABY CREAM 75 GM",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "FITT-BAR SOAP 100 GM",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HIDERM TRANSPARENT SOAP 75 GM",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "صابون كبريت خمس خمسات",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "AMIKACIN SPRAY 100ML.",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HEALOSOL 40MG/150ML TOPICAL SPRAY",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "زيت خروع بالموز",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "BETADINE ANTISEPTIC SOLU. 60 ML",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "BIVATRACIN AEROSOL POWDER 150 GM",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CORPAL ANTI-DANDRUFF HAIR SHAMPOO 300ML",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "PERFORMA EXTRA STRENGTH 5% TOPICAL SOLUT",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "SOLO SEPT FOAMING SKIN CLEANSER 200 ML",
        "count": "2:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "CALAMYL-D LOTION 120 ML",
        "count": "3:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "HIPANTHEN PLUS CREAM 60 GM",
        "count": "3:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "ماء اكسجين لونا 10",
        "count": "3:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "راسب ابيض",
        "count": "6:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "برمنجات بوتاسيوم",
        "count": "7:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "مس جنتيانا",
        "count": "9:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "خلات الرصاص",
        "count": "10:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "مرهم اكتيول اسود",
        "count": "11:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "صبغة جاوى",
        "count": "12:00",
        "Location": "6",
        "Desc":"null"
    },
    {
        "name": "FENISTIL 1MG/ML ORAL DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "KALOBIN ORAL  DROPS 20 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "CIPRO 3.5MG/ML EAR DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "CIPROCIN 0.3% EYE/EAR DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "CONJYCLEAR 0.1% OPHTHALMIC SOLUTION",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "CONJYCLEAR FORTE 0.2% EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "DEXAFLOX EYE DROPS 5 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "EPIDEXONE 0.05% EYE OINT.",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "EPIFENAC 0.1% EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "FLUCA OPHTHALMIC SUSP. 5 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "FORTYMOX PLUS EYE DROP 5 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "GATISTAR 3MG/ML OPHTHALMIC SOLN.",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "ISOPTO MAXITROL EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "LACRITEARS   15 ML  EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "MOXIFLOX EYE DROPS 5 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OCUMETHYL EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OPTIDEX -T EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "ORCHACIN 0.3% EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "PHARMASTIN 0.05% EYE DPS. 5 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "PLEGICA 1% EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "POLYFRESH 0.2% EYE DROPS 20 AMP",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "POLYFRESH 2MG/ML EYE DROP",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "RINOSIN NASAL GEL.",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "SOLOFRESH 0.2% EYE DROPS 10 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TEARS NATURALE EYE DROPS 15 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TOBRADEX EYE DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TRILLERG EYE DROPS 10 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "VIGAMOX 0.5% OPHTH. SOLUTION 5ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "GELINOSE DELICATE MOISTURUZING GEL 20 GM",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "BECLO-NASAL 50MCG/DOSE SPRAY",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NANODAM NASAL SPRAY 30 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NASACORT AQ 55MCG/DOSE N. SPRAY",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NASONEX NASAL SPRAY",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NODY NASAL SPRAY 30 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "AMBROXOL 7.5MG/ML ORAL DROPS",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NYSTATIN 100 000I.U./ML SUSP.",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "ALEAVIA",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "VAPOZOL SOL. FOR INH. 30 ML",
        "count": "1:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "DENTINOX 2.65%  INFANT COLIC DROPS",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "SIMETHICONE EMULSION 2G/100ML  ORAL DROP",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "BENOX 0.4% EYE DROPS",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "FORTYMOX 5MG/ML EYE DROP",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "LYSE 0.65% NASAL DROPS 15ML",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NASOSTOP 0.05% NASAL PAED DROPS",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NORMO-TEARS EYE DROPS.",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OTRIVIN BABY SALINE NASAL DROPS 15 ML",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OXYPOL EYE OINT.",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "REMOWAX 5 % EAR DROPS.",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TEARS GUARD 0.3% EYE DROPS 15ML",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TIMOLOL MALEATE 0.5% EYE DROP",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TOBRIN 0.3% EYE DROPS",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "FLIX 50 MCG/METERED SPRAY",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "FLIXONASE AQUEOUS 50 MCG/ METERED SPRAY",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "CO-AVAZIR OPHTHALMIC SUSP.",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "HISTAZINE-1 1GM/100ML ORAL DROPS",
        "count": "2:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OXYMET 0.05% ADULT NASAL DROPS",
        "count": "3:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "PICOLAX 0.75% DROPS 15ML",
        "count": "3:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "SIMETHICONE EMULSION 30 ML (MUP)",
        "count": "3:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "UNICETAMOL  DPS 15ML",
        "count": "3:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NASOSTOP 0.1% NASAL ADULT DROPS",
        "count": "5:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "NOSTAMINE EYE/NOSE DROPS 15ML",
        "count": "5:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OTRIVIN 0.05% PED. NASAL DROPS",
        "count": "5:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "TERRAMYCIN EYE OINT.",
        "count": "5:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "PRISOLINE  EYE & NASAL DROPS",
        "count": "6:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "RHINEX INFANTILE 0.05% NASAL DROPS",
        "count": "6:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "OTRIVIN 0.1% ADULT NASAL DROPS",
        "count": "8:00",
        "Location": "7",
        "Desc":"null"
    },
    {
        "name": "AGIOLAX 12 GRANULES",
        "count": "0:11",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "B-FRESH 0.05% MOUTHWASH 500ML",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ADAPALENE 0.1% GEL",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BABY CREAM 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "CALM SKIN CREAM 40 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "CANDICURE 1% TOP. CREAM 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "DEXPANTHENOL 5% TOPICAL CREAM 20 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "DOLPHIN 3% TOPICAL GEL 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ELECORTIN 0.1% CREAM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EPICOMB TOPICAL CREAM 15 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EUCAL GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EXTRAUMA DNA FORTE GEL 25 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EXTRAUMA DNA FORTE GEL 40 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "FAKTU OINT 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "FLECTOR TOPICAL GEL 25 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "FOOT SMART 60 GM CREAM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "J.B.C CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "JEITO GEL 60GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "JNCIVO CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MELOQUIN 4% CREAM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MIXDERM CREAM 15 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MOMENTA CREAM 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MONDO CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MOVY UP MASSAGE  CREAM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "MUPIRAX 2% OINT. 10 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "OLFEN 1% TOPICAL GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "RELAX MASSAGE CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "RELAX MASSAGE GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "REPAION-N GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "RX MASSAGE GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SALIBET OINT. 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SALICORTIDERM OINT. 15 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SATE CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SEDIPROCT CREAM. 20 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "TERBIN 1% CREAM 15 GRAM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "TRECZIMUS OINTMENT 20 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ULTRACAINE 5% GEL 30 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "UNIVERSAL MASSAGE GEL 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "VANO CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "VINOSIN CREAM 50 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 1% EMULGEL. 50G",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ZAROTEX 0.1% GEL 15 GM",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "OREX ORAL SPRAY 60 ML",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ORO.GUARD ORAL SPRAY 60 ML",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BETADINE 1% MTH. W & GARGLE",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "B-FRESH 0.05% RED M.WTH 250ML",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "OROVEX PIPERMINT M.W 250 ML",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SPEDA FINE",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "TERBINAFINE 1% TOPICAL AEROSOL POWDER.",
        "count": "1:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "PENTABURN 0.25GM/100GM TOP. CREAM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ACETYLCISTEIN 200MG  10 SACHETS",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BETADERM 0.1% CREAM 30 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BETAPRONATE PLUS CREAM 30 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BURNASORES 0.25% OINT . 15 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "DIPROSALIC OINT. 15 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ELICASAL TOPICAL OINTMENT  30GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EXTRAUMA DNA CREAM 25 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "PRIDOCAINE TOPICAL CREAM 30 GM",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "PROPAMETHONE TOP. CREAM.",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SPEDA GEL",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "SUCAIR KIDS MOUTH SPRAY 30ML",
        "count": "2:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ACYCLOVIR 5% TOPICAL CREAM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ALGESAL SURACTIVE 40G CREAM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BETADERM 0.1% CREAM 15 GM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "BETADERM 0.1% OINT. 15 GM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ELICA-M CREAM 30 GM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "QUADRIDERM CREAM 30 GM",
        "count": "3:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "TANTUM VERDE 0.15% MOUTH WASH",
        "count": "4:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "DERMOVATE 0.05 %W/W OINTMENT",
        "count": "4:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 1% EMULGEL. 25G",
        "count": "4:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "ZOVIRAX 5% TOPICAL CREAM 10 GM",
        "count": "4:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "DERMOVATE 0.05% CREAM 25 GM",
        "count": "5:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "TEXACORT 0.1% TOP. LIPOCREAM 20 GM",
        "count": "6:00",
        "Location": "8",
        "Desc":"null"
    },
    {
        "name": "EMEREST 4MG/2ML 5 AMP.",
        "count": "0:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "GLOMETHASONE 8MG/2ML IM/IV 3 AMP.",
        "count": "0:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "AMRI-K 10MG/ML 5 AMP.",
        "count": "0:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "CORTIPLEX B6 PEDIATRIC 3 AMP.",
        "count": "0:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DEXAMETHASONE 8MG/2ML 5 EPICO AMP",
        "count": "0:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ANTI-COX II 15MG/3ML 6 AMP",
        "count": "0:03",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "VISCERALGINE 5MG/2ML I.M / I.V 6 AMP",
        "count": "0:03",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "KETOLAC 5 AMP. I.M/I.V. INF.",
        "count": "0:04",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DOLPHIN K 75MG/3ML 6 I.M.AMP.",
        "count": "0:05",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "PRIMPERAN 10MG/2ML 12 AMP.",
        "count": "0:08",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "B-COM I.M./I.V. 6 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DANSET 4MG/2ML  3AMP",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DANSET 8MG/4ML 3  AMP",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DEXAMETHASONE 8MG/2ML 5 AMP (MUP)",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "EPINOSINE-B FORTE I.M. 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "HAEMOSTOP 250MG/2ML 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "LASIX 20MG/2ML 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "MEDEXAFLAM 15MG 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "NORFLEX 30MG/ML 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "SPASMOFREE 5MG/2ML I.V./I.M. 3 AMP.",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DURY 10 SACHET",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "HYDRO-SAFE SALTS 10 SACHETS",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "PROXIMOL COMPOUND EFF.GRANULES",
        "count": "1:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DEPOVIT B12-1000 5 AMP",
        "count": "1:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "GARAMYCIN 80MG/2ML 3 AMP.",
        "count": "1:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "NOVALGIN 500MG/ML 3 AMP FOR I.M./I.V.",
        "count": "1:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "G.C. MOL 6 SACHET",
        "count": "1:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "PHAROFEN 75MG 4 AMP.",
        "count": "1:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "CATAFLAM 75MG 6 AMP",
        "count": "1:03",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DISPERCAM  20 MG I.M. 6 AMPOULE",
        "count": "1:03",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "OLFEN 75MG/2ML 6 AMP.",
        "count": "1:04",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ADOLOR 30MG 3 AMP",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ADWIFLAM 75MG/3ML 6 AMP.",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DEXAMETHASONE 8MG/2ML 5 AMP (SIGMA)",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "EPIGENT 80MG/2ML I.M./I.V. 3 AMP.",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "FELDENE 20MG/ML I.M. 3 AMP.",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "MOBITIL 15MG/1.5ML 3 AMPOULE",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "RHEUMARENE 75MG/3ML 3 AMP.FOR I.M INJECT",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "TRI-B 6*2 I.M.AMP.",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ZURCAL 40MG VIAL FOR I.V. INJ.",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "HYDRAWELL 240ML SOLUTION",
        "count": "2:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "BETOLVEX 1MG/ML 2 PRE-FILLED SYRINGE I.M",
        "count": "2:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ZACAGLONE 75MG/3ML 3 AMP",
        "count": "2:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ADOLOR 15MG 3 AMP.",
        "count": "2:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "SPASMOFEN 3 AMP. FOR I.M. INJ.",
        "count": "2:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "TROZACHROME 3 I.M. AMPS.",
        "count": "2:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "AVIL 45.5MG/2ML 6 AMP",
        "count": "2:03",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "LOHYDRAN 10 SACHETS (ORS)",
        "count": "2:04",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "BIOVIT 12 DEPOT 2 AMP.",
        "count": "3:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "CYANOHEPTAN 6 I.M. AMP. 2 ML",
        "count": "3:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DEXAMETHASONE 8MG/2ML 3 AMP. AMRYIA",
        "count": "3:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "DECLOPHEN 75MG 3 AMP.",
        "count": "3:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "OMNEVORA 8 I.M. AMP. 2 ML",
        "count": "3:05",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "BETOLVEX 1MG/ML 2 AMP.",
        "count": "4:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ORS 10 SACHET",
        "count": "4:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "FAWAR FRUIT 6 SACHET",
        "count": "5:01",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "FELDENE 20MG/ML I.M. 6 AMP",
        "count": "6:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "LORNOXICAM 8MG I.M./I.V. 1 AMP.",
        "count": "6:00",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "VOLTAREN 75MG/3ML 3AMP.",
        "count": "6:02",
        "Location": "9",
        "Desc":"null"
    },
    {
        "name": "ADWITINE 60 MG 30 CAPS.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BACLOFEN 25MG 20 TAB.B.P.2011",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CANDALKAN PLUS 16/12.5 MG 14 TAB.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CORDARONE 200MG 30TAB.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ERASTAPEX TRIO 10/40/25MG 30 TAB",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EXFORGE 10MG/160MG 14 TAB.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "LORAZ 50/12.5MG20 TAB.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MULTI-RELAX 5MG 20 F.C. TAB.",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SELOKENZOC 50MG 28 TAB",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SPECTONE 100MG 20TAB",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SPECTONE 25MG 20TAB",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TENORMIN 100MG 28 TAB",
        "count": "0:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "AMIPRIDE 50MG 30 TAB.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BISOCARD 10MG 30 TAB",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CHOLEROSE 20MG 21 TABS.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONVENTIN XR 300 MG 30 TABS.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "DINITRA 10MG TAB.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "GRALIPENTIN XR 300 MG 30 TABS.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "INDERAL 10 MG  50TAB",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "LASILACTONE 100/20MG  30TAB.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MELATONIN 3 MG 30 CAPS",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MODURETIC 5/50MG 30 TAB.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MOODAPEX 50MG 30 TAB",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SLEEPEZ 3MG 30TABS.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "STIMULAN 800MG 30 TAB",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TRYPTIZOL 25MG 30 TAB.",
        "count": "0:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ACHTENON  2MG  20TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ADWITINE 30 MG 30 CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ALDOMET 250MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ALKAPRESS 5MG 20TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ALTIAZEM 60MG 40 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ANAFRONIL 25MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ANDOVIPAMIDE 100MG 30TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ANGIOBLOCK MONO 75MG 21TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATENO 50MG 20 F.C.TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATOR 10MG TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATOR 20MG F.C.TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATOREZA 10/10MG 14 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATOREZA 10/40 MG 28 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATORSTAT 40MG 14TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BACLOFEN 10MG 20 TAB.B.P.2011",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BELLACID 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BIPERIDEN 2MG 30 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BISTOL PLUS 5/12.5 MG 20 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CAPOTEN 25MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CARDIXIN 0.25MG 40 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CARVID 25MG TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CARVID 6.25MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONCOR COR 2.5 MG  30.TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CYMBATEX 60 MG 30 CAPS",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "DEPAKINE CHRONO 500MG 30 TABS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "DILATROL 6.25MG 30 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "DORMIVAL CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EPILAT RETARD 20MG SR. 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ERASTAPEX CO 5/20MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EXAMIDE 10MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EXAMIDE 20MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EZAPRIL 10 MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EZAPRIL 20 MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "GAPTIN 400 MG 30 CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "IPANTEN 100MG CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ISOPTIN 80 MG 30 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "LANOXIN 0.25MG 100 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "LASIX 40MG 24 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MONOMAK 20MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MONOMAK 40MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MONOMAK DEPOT 100MG 10 F.C.TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MOVEASY 5 MG 30 TABS",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MULTI-RELAX 10MG 20 F.C. TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "MYLOBAC 10MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "NATRILIX SR 1.5MG 30 SUST. REL. TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "NITROMAK RETARD 2.5MG 60 CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "PHENYTIN 100MG 50 CAPS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ROSITOR 10MG 14 TABS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SELOKENZOC 100MG 28 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SIRDALUD 2MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "STATUKAST 10MG 10 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TEGRETOL CR 200MG 20 TAB.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TENORMIN 50MG 28 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TORSAMOLEX 10MG 20 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TRITACE 5MG 14 TAB",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TRYPTIZOL 10 MG 20 TABS.",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "STIMULAN 200MG/ML 120ML SYRUP",
        "count": "1:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "ATORSTAT 20MG 14TAB.",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "BISTOL 5 MG 20 TAB",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CANDALKAN PLUS 32/12.5 MG 14 TAB",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CAPOTRIL 25MG 20 TAB.",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "GAPTIN 300 MG 30 CAPS.",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "LASILACTONE 50/20MG  30TAB",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "NIGHT CALM 3MG 30 TABS",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "SIRDALUD 4MG 20TAB",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TORSERETIC 10MG 30 TAB",
        "count": "1:01",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONCOR 10 PLUS 30.TAB",
        "count": "1:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "GAPTIN 100 MG 30 CAPS.",
        "count": "1:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONCOR 10 MG 30TAB",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONCOR 5 PLUS 30TAB",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONVENTIN 100 MG 30 CAPS.",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "EZAPRIL-CO 20/12.5MG 30 TAB",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TIRATAM 500MG 30 F.C TAB",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "TRIVASTAL RETARD 50MG 30 TAB.",
        "count": "2:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CONCOR 5 MG 30.TAB",
        "count": "3:02",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "CAPOTEN 50MG 10 TAB",
        "count": "4:00",
        "Location": "10",
        "Desc":"null"
    },
    {
        "name": "AGGREX 75MG 60 TAB",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALLERBAN S.R. 2MG 20 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMARYL 4 MG 30 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BRISTAFLAM 100 MG 20 F.C.TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DANTRELAX COMPOUND 30 CAP",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DIOSED-C 20 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DUPHASTON 10MG 60 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EUTHYROX 25MCG 50TAB",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FEWMIG 20 CAP",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "HAEMOSTOP 500MG 20 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LORNOX 8MG 30TAB",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MYOFEN 30 CAPS.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "NETLOOK 10MG SOFT GELATIN CAPS.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "NOLVADEX 10MG 30 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "OFLAM 50 MG 20 QUICKETAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PLAVIX 75MG 28 FILM COATED TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ROXOGESIC 60MG 20 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TRENTAL 400 SR 20 TAB",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TRIOCEPT 6*21 TAB.(TRIPHASIC)",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "VERSERC 24 MG 30 TAB.",
        "count": "0:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMARYL 2 MG 30 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ANTI-COX II 15MG 30 TAB",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CIDOPHAGE RETARD 850MG 60 TAB",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CLATEX 75 MG 30 F.C.TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CLOPEXAGREL 75MG F.C.TAB",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EPICOPRED 5 MG 30 TABS.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "GLUCOPHAGE 500MG 50 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "JUSPRIN 81 MG 60 TAB",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LEVOHISTAM 5MG 30 TAB",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "METHERGIN 0.125MG 30 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MOBIC 15 MG 30 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "STUGERON 25MG 30 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "VERSERC 16 MG 30 TAB.",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "UTROCARE 30 CAPS FOR ORAL OR VAGINAL USE",
        "count": "0:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "RIVO 320 MG 200 TAB",
        "count": "0:17",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERGAWAY 5 MG 20 ORAL DISINTEG. TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERID 10 MG 30 F.C.TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERTAM 120MG F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERTAM 180MG 10 F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALLERGYL 4MG 20  TABS",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMARYL 1 MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMARYL M 2/500MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ANOXICAM 20MG 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ARTHFREE 20MG 30 F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ARTHROFAST 150 MG 14 MR TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ARYTHREX 200MG CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BETALLERGE 0.25/2 MG 30 TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BETASERC 16MG 60 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BETASONE 0.5 MG 12 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BRONCHOPRO RETARD 75MG CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BRONCHO-VAXOM CHILDREN 3.5MG 10 CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CARBIMAZOLE 50 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CELEBREX 200MG 15 CAPS",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CIDOPHAGE 1000MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CLARITINE 10MG TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CORVIZIM 20 E.C.TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DAFLON 500MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DANTRELAX 25MG 30CAPS",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DELAREX 5MG 30 F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DESA 5MG 20 F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DEXAZONE 0.5 MG 60 TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DIAMICRON MR 30MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DICLAC 150 ID 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DICYNONE 500MG TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DIGLIFLOZ PLUS 5/1000MG 30 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DISPERCAM 20MG 10 DISP. TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DOSTINEX 0.5MG 2 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ELONDA 0.5 MG 2 TABS",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EPICOPRED 20 MG 20TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EUTHYROX 50MCG 50 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EZACARD 75MG 30 ENTERIC COATED TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FASTEL 180MG 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FASTEL120MG 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FELDENE 20MG 10 CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FENAC 100MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FEXON 180MG F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FLAZACOR 6MG 10 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "GESTRANIL 0.03/0.075MG 21 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "GLIPTUS PLUS 50/1000 MG 30 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "HISTAFREE 120MG TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ISOTRETINOIN 10MG SOFT GELATIN CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "KAPRON 500MG 20 F.C TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "KAST 10MG 10 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "KOKAST 10MG 10 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LACTODEL 2.5MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LEVCET 5MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LIMITLESS ALLZYME 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LORNOXICAM 8MG 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MAREVAN 3 MG 100 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MARK FAST 30 CAP",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MELOCAM 15MG 30 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MICROSERC 24MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "NOROCARMENA 21 F.C.TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "OLFEN 100MG S.R. 10 CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PONO FORTE 500MG  20CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "POTAFEN 50MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PROGEST 100MG 24 CAPS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "REPARIL 40MG 40 ENTERIC COATED TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "T4-THYRO 50MCG TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TECNOVULA 50MG 20 TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "VASCULAR 20MG 20 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "WINZOXIB 90 MG 20 F.C.TABS.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "XEFO RAPID 8MG 20 TAB",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "YASMIN 21 TAB.",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LELIPEL  4MG ORAL GRANULES 14 SACHETS",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALLERBAN SYRUP",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DEXAPHEN SYRUP 120ML",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "KROTA 120ML SYRUP",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "NEO-MINOPHYLLINE SYRUP",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PREDSOL FORTE 15MG/5ML SYRUP",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PROBRIC 5MG/5ML SYRUP 125 ML",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TUSSKAN SYRUP 100 ML",
        "count": "1:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERGOLIBER10MG 20 TABS",
        "count": "1:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DELTASONE 0.75MG 30 TAB",
        "count": "1:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "HISTAZINE-1 10 MG 20 TAB",
        "count": "1:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMARYL 3 MG 30 TAB.",
        "count": "1:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "OXYPROGEST   VIAL",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ASPIRIN PROTECT 100 GASTRO-RESISTANT 20",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CYCLO-PROGYNOVA 21 F.C. TAB.(BIPHASIC)",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "GLUCOPHAGE 1000MG 30 TAB.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "HYDROQUINE 200MG 20 TAB.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "LACTEVENOR 0.03MG 35 TAB.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "OVUNHIPITA 75 MCG 28 TABS",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PETRO 30  TAB",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "T4-THYRO 100MCG TAB.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TECHNOSPIRON 0.03/3MG 21 TAB.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "WINZOXIB 120 MG 7 F.C.TABS.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALERID 5MG/5ML SYRUP 100ML",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ANALLERGE 2MG/5ML SYRUP",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BAMBEDIL 1MG/ML SYRUP",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "BRONCHOPHANE SYRUP.",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CODILAR SYRUP 120 ML",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CONGESTAL SYRUP. 120ML",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "VENTOCOUGH SYRUP 125 ML",
        "count": "2:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ALPHINTERN 30 TAB.",
        "count": "2:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "AMBEZIM-G 30 TAB",
        "count": "2:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "RUTA C 60 - 20 TAB.",
        "count": "2:01",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DIAMICRON MR 60MG 30 TAB.",
        "count": "2:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "DICLAC 75MG ID 20 RETARD TAB.",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "EPIRIZINE 10MG TAB.",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "GLUCOPHAGE XR 1000MG 30 TAB",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "NORGESTADIOL 0.25/0.035 MG 21 TABS",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "STERONATE 5MG 20 TAB.",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "TUSSIVAN-N SYRUP 125 ML",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "XILONE 5MG/5ML SYRUP 100 ML",
        "count": "3:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "ASPOCID PAEDIATRIC 75MG 30 CHEW. TAB.",
        "count": "3:02",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "FEMOGESAL  0.03/0.075MG  21TAB",
        "count": "4:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "APIDONE SYRUP 125ML",
        "count": "4:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PHENADONE SYRUP 100 ML",
        "count": "4:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "PREDSOL 5MG/5ML SYRUP 50ML",
        "count": "4:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "CIDOPHAGE  500MG 10TAB.",
        "count": "7:00",
        "Location": "11",
        "Desc":"null"
    },
    {
        "name": "MUCO 75MG S.R. 20 CAPS",
        "count": "0:01",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "RHINOPRO S.R. 20 CAPS.",
        "count": "0:01",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "SALBOVENT 2MG 30 TAB.",
        "count": "0:02",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "PULMICORT 0.25MG/ML  20 AMP",
        "count": "0:18",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ATROVENT 500MCG/2ML UNIT DOSE VIAL.",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "SEDOKAST 10MG 10 F.C.TAB.",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "TELFAST DECONGESTANT 10 TABLET",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "THEOPHYLLINE 200MG S.R. 20 TAB.",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "STATUKAST 4MG 10 SACHETS",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ACNESCAVE 0.1% TOP. GEL 30 GM",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "AZADERM 20% CREAM 30 GM",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "CONTRACTUBEX GEL 20 GM",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "DIPROSALIC LOTION 30 ML",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "FASTUM 2.5% TOPICAL GEL 15G",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "FASTUM 2.5% TOPICAL GEL 60G",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "COLLOMAK TOP. SOUTION 10 ML",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "SERETIDE INHALER 125/25MCG 120 METERED D",
        "count": "1:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "SWABIVENT NEBULIZER SOLN. 20 AMP. 2.5ML",
        "count": "1:04",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "PULMICORT 0.5MG/ML  20 AMP",
        "count": "1:08",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ASMATROPIM 500MCG/2ML 20 NEBULIZER VIAL",
        "count": "1:09",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "EMO SOFT CREAM 15 GM",
        "count": "2:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "OCTOVENT 4MG C.R. 20 TAB.",
        "count": "2:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "VENTAL COMPOSITUM 200 DOSES SPRAY",
        "count": "2:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "VENTAL INHALER 100 MCG/DOSE 200 DOESES",
        "count": "2:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "TELFAST 180MG 20 F.C. TABS.",
        "count": "2:01",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ZYRTEC 10 MG 20 TAB",
        "count": "3:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ACRETIN 0.05% CREAM",
        "count": "3:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ALLERGEX 15G CREAM",
        "count": "3:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "SELGON 20MG 20 TAB.",
        "count": "3:01",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ACRETIN 0.025% CREAM 30 GM",
        "count": "4:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "FARCOLIN RESPIRATOR 0.5% SOLUTION",
        "count": "9:00",
        "Location": "12",
        "Desc":"null"
    },
    {
        "name": "ANTOPRAL 20 MG 14TAB.",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ANTOPRAL 40MG 14 TAB.",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOVERIN A 30 TAB.",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DIGESTOZYME 20 TAB",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ESMATAC 40MG 28CAP",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "EZOGAST 40MG 14 CAP",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "VISCERALGIN 50MG 20 TAB.",
        "count": "0:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOVERIN S.R. 200MG 30 CAPS.",
        "count": "0:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GLYCODAL 30 CHEW. TAB.",
        "count": "0:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ITOMASH 50MG 30 TAB.",
        "count": "0:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "STRINGAZOLE 40MG 21 TAB",
        "count": "0:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ONDALENZ 8MG 5 ORO. DISP. FILMS",
        "count": "0:03",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DOWNOPRAZOLE 20MG 7 SAHCHET",
        "count": "0:05",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MAALOX STOMACH PAIN ORAL SUSP 20 SACHETS",
        "count": "0:06",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SPASMOPYRALGIN-M 250 TAB",
        "count": "0:08",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "AFTER MEALS  20CAP",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOSALAZINE-EC 500MG ENTERIC COATED TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOVATIL 30 F.C. TABS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOVERIN D 30 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "CONTROLOC 20 MG 14 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "CONTROLOC 40 MG 14 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DIGEST EZE CAP",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DOWNOPRAZOL 40MG 14 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "EPIRAZOLE 20MG  14CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ESMOPUMP 40MG 14 TABS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "EVACULAX  20 CAP",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "FARCOTILIUM 10MG 24 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "FASTCURE 40MG 14 TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GANATON 50MG 30 F.C.TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GASTROLOC 40 MG 20 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GERDCARE 5 MG 30 F.C.TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "HEALSEC 20 MG  14CAP.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "LANTANON 30MG 10 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "LAXEOL PI 5MG 20TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "LEGALON 140MG 30 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MOSAPRIDE 5MG 30 TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MUCOSTA 100MG 20 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "NAPIZOLE 20MG 14 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "NAVOPROXIN PLUS 20 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "NEXICURE 40MG 20 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "OMEPAK 20MG 14 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "OMEZ 20MG 14 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PEPZOL 20 MG MR 14 CAP.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PEPZOL 40MG 14 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PEPZOL 40MG 7 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PERLOC 40MG 14 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PRIMPERAN 10MG 10TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PROTOFIX 40 MG 14 TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PRUCASOFT 2 MG  14TABS",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "RABEKYRL 20MG 20 TAB",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SPASMOCURE 60MG 20 TAB.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "TRIO-CLAR 42 CAPS",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "URSOFALK 20 CAPS.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "EPICOGEL SUSP. 200ML",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GAST-REG  24MG/5ML SUSP.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "HEPATICUM 1GM/100ML SUSP.",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SEDALAC 3.35GM/5ML SYRUP 120ML",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SIMEDILL EMULSION 120 ML",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SPASMOFREE 10MG/5ML SYRUP",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "FLUXOPRIDE 5MG 30 FAST-DISSOLVING IN MOU",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SIMETHICONE EMULSION 2GM/100ML",
        "count": "1:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOSPASMIN FORTE 135MG 20 SUGAR COATED",
        "count": "1:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "FLATIDYL 40 MG  30 CHEW. TAB.",
        "count": "1:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "OMEZ 40MG 20CAP",
        "count": "1:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "PANTOLOC 40MG 14 TAB.",
        "count": "1:01",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLONA 30 TAB.",
        "count": "1:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GAST-REG 200MG 30 TAB.",
        "count": "1:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ONDALENZ 4MG 5 ORO .DISP. FILMS",
        "count": "1:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "SPASMO DIGESTIN 30 TAB.",
        "count": "1:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "TRITONE 200MG 30 TAB",
        "count": "1:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "AZGOVANC 20MG  HARD GELATIN 7 CAPS.",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "AZGOVANC 40MG HARD GELATIN 7 CAPS.",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "COLOVERIN 135MG 30 TAB.",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DOWNOPRAZOL 20MG 14 CAPS.",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "FAMOTAK 20MG 20 F.C.TAB.",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "AQUA PLUS SYRUP",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DIASTOP SUSP. 60ML",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DUPHALAC 667GM/L SYRUP 200 ML",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GRIPE WATER  BAMBINO SYRUP",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MAALOX PLUS (LEMON FLAVOURED) SUSP. 180M",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "NONOO WATER  SYRUP",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DOWNOPRAZOL 40MG 7 SAHCHET",
        "count": "2:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "VOMIBREAK 30 TABS",
        "count": "2:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "LIBRAX 30 TAB.",
        "count": "3:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MOTINORM SUSP. 125 ML",
        "count": "3:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ENEMAX ENEMA 120 ML",
        "count": "3:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "EUCARBON 30 TAB.",
        "count": "3:02",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ANTODINE 40MG 30 TAB",
        "count": "4:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "قطن 250 جم",
        "count": "4:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "ROWACHOL 45 SOFT GELATIN CAP.",
        "count": "4:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "DIGENORM SYRUP 120ML",
        "count": "4:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "MINALAX 10 TAB.",
        "count": "7:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "قطن 100 جم",
        "count": "9:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "قطن 25 جم",
        "count": "11:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "قطن 50 جم",
        "count": "15:00",
        "Location": "13",
        "Desc":"null"
    },
    {
        "name": "GENUPHIL 50 F.C.TAB.",
        "count": "0:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "PEPON PLUS 20 CAP",
        "count": "0:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "SOFENACIN 10MG 20 TAB",
        "count": "0:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "VARDAPEX 10MG 4 TAB",
        "count": "0:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "ZYLORIC 300MG 30 TAB",
        "count": "0:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "ATROPINE SULPHATE 1MG 6 AMP.",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "CEREBROCETAM 1GM/5ML 6 AMP.",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "ANDOPOXETINE 60 MG 3 TAB.",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DIACEREIN 50MG  30CAP",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DOROFEN 30 CAPS.",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "SOFENACIN 5MG 30 TAB",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "VIAGRA 50 MG 4 TAB.",
        "count": "0:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "NO-URIC 100MG 50 TAB",
        "count": "0:03",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DAPOXTARD 60 MG 3 TABS",
        "count": "0:04",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "NAPIFIT 100MG 8 F.C.TAB.",
        "count": "0:04",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "SILDAVA 100MG 12 TAB",
        "count": "0:04",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "VIRECTA 100 MG 12 F.C.TABS.",
        "count": "0:07",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "FAROVIGA 100 MG 12 TAB",
        "count": "0:09",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "BECOZYME I.M./I.V. 12 AMP.",
        "count": "0:11",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "EREC 100MG 12 TAB",
        "count": "0:11",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DECAPRENO 200.000 AMP",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "LIOMETACIN 50MG/2ML LYOPHILIZED AMP.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "MESOCEPT 1ML 1 AMP.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "PENCITARD 1200000 I.U./VIAL",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "CYSTINOL 425MG HARD GELATIN CAPS.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DETRONIN 5MG TAB.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "ERECTALIS 20MG 2 TAB",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "PEPON 300MG 30CAPSULES",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "PROSTACURE 50MG 20 CAPS.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "TAMSULIN PLUS 20  MR FC TAB",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "URICONTROL 2MG 10 SCORED TAB.",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "GLUCOSE 5% 500 ML",
        "count": "1:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "TAMSULIN 0.4MG 28 CAPS.",
        "count": "1:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "JOYPOX 60 MG 6 TABS.",
        "count": "1:02",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "POWERECTA 20 MG 4 TAB",
        "count": "1:03",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "DEVAROL-S-200000 I.U SOL. FOR I.M 1",
        "count": "2:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "HALOPERIDOL RETARD 50MG/ML I.M.AMP.",
        "count": "2:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "LACTATED RINGERS INJECTION. 500ML",
        "count": "2:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "SILDEN 50MG 4 TAB",
        "count": "2:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "MICONAZ 2% ORAL GEL 20 GM",
        "count": "2:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "SILDEN 100MG 4 TAB",
        "count": "2:01",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "فياجرا الحنفي",
        "count": "3:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "NORMAL SALINE INJECTION 0.9 %",
        "count": "6:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "RINGER 500ML FOR I.V. INF.",
        "count": "17:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "WATER FOR INJECTION 5ML",
        "count": "24:00:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "LIDOCAINE HYDROCHLORIDE 5ML AMP",
        "count": "29:00:00",
        "Location": "14",
        "Desc":"null"
    },
    {
        "name": "AVOSOYA 30 CAPS.",
        "count": "0:01",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "E-YEAST 20 CAPS",
        "count": "0:01",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "BONE CARE 0.5MCG 30 CAP",
        "count": "0:02",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CALCINEX PLUS 10 PIECES",
        "count": "0:02",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CAL-MAG 30 TAB",
        "count": "0:02",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CARNIVITA FORTE 30 TAB.",
        "count": "0:02",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CHROMAX 60 CAP",
        "count": "0:04",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "BRAN 60 CAP (MEPACO)",
        "count": "0:05",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "ANTOX 30 TAB",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "APPLE-LITE 30 TAB.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "BONE CARE 1MCG 30 CAP",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CALCIMATE 500MG 12 CAPS.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CALDIN-C 30 TAB",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CAROGIX 30 TABS.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CEVAMOL EFF. TAB.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CEVITIL 1GM 12 EFF. TAB.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CHANCY 30TABS",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "DAVALINDI 10,000 IU 30 TAB",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "DELTAVIT B12 1MG SUBLINGUAL TAB.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CEMPION 14 SACHETS",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "APIFORTYL 30 SOFT GELATIN CAP.",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "SUTRA CANDOM",
        "count": "1:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CALCITRON 30 CAP",
        "count": "1:01",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CALTERA PLUS 30 TAB",
        "count": "2:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CHROMIUM 20 CAP",
        "count": "2:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "عازل فيستا",
        "count": "2:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "CEVAMOL 12 EFF. SACHETS",
        "count": "2:02",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "BABY CHECK بيبى تشيك",
        "count": "16:00",
        "Location": "15",
        "Desc":"null"
    },
    {
        "name": "FERROTRON 30 CAPS.",
        "count": "0:01",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FLORAX 24 PIECES",
        "count": "0:01",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FERROFOL 30 CAPS.",
        "count": "0:02",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FOLIC ACID (EL NILE) 5 MG 30 TAB.",
        "count": "0:02",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "HI-POTENCY FORMULA 30 TABS.",
        "count": "0:02",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "LACTEOL FORTE 6 SACHETS",
        "count": "0:04",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FARCOVIT B12 30CAPS.",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FEROGLOBIN 30  CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FOLIC ACID 500MCG (MEPACO) 20 TAB",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FOLICAP 2.5 MG 24 CAP.",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "GINKO PLUS 20 CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "GINKOFIT 30 CAPS.",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "HERBANA 30 CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "IMMULANT PLUS 20 CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "JANCA-Z TABLET 30 TAB.",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "L-CARNITINE 350 MG 20 CAPS.",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "MARCAL 30 TAB",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "MERTI 30 CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "METHYL FOLATE 30 CAP",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "MIXORA 20 TAB",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "NEUTRA FERITIN",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "ميثايلتكنو ب12 30 قطعه",
        "count": "1:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "LACTEOL FORTE 12 CAPS.",
        "count": "1:01",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "MILGA 40 TAB",
        "count": "1:01",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "MILGA  ADVANCE 30TAB",
        "count": "1:02",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "NEUROVIT 30 TAB.",
        "count": "1:02",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "FOLICAP 0.5 MG 24 CAP",
        "count": "2:00",
        "Location": "16",
        "Desc":"null"
    },
    {
        "name": "ORLY 60MG 30CAPS",
        "count": "0:01",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "TEBOFORTIN 80MG 30 TAB",
        "count": "0:01",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "OCUGUARD 30 CAP",
        "count": "0:02",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "THIOTACID 600 ORIGINAL 30 F.C.TABS.",
        "count": "0:02",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "THIOTEX 300MG 30 CAPS.",
        "count": "0:02",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "OCTATRON 30 CAP",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ORLISTAT 120MG 30 CAP",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "OXIFREE CHOCOLATE 20 PILLS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "PANTOGAR 90 CAPS.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "PHARA FERRO 27 - 20 TAB.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "REGIMAX 120MG 30 CAPS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "RONJA CAPSULE 30 CAP.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ROYAL JELLY 1000 12 CAP",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "SELENIUM-ACE 30 TABS.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "SYLVESTER 1  20 CAPS.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "TEBONINA FORTE 40MG 20 F.C.TAB.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "THIOTACID COMPOUND 600 MG 30 F.C.CAPLETS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "THIOTEX FORTE 600MG 20 CAPS.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "VITA HAIR F.C.TABS.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "VITACID CALCIUM 12 EFF. TAB.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "VITAMIN E FORTE  400MG 20 CAPS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "VITASTRESS 20 TAB.",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "YEAST 60 TAB (MEPACO)",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "PRAVOTIN 100MG 14 SACHETS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "AERO CHAMBER SPACER CHILDREN",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "TEMPO COOL 4 SHEETS",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ترمومتر ديجتال",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ماسك جلسات اطفال جرانزيا",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ماسك جلسات كبار",
        "count": "1:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "OMEGA-3 PLUS 30CAPS",
        "count": "1:02",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "VITAMAX PLUS 20 SOFT GELATIN CAPS",
        "count": "2:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ترمومتر شريط",
        "count": "2:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ماسك جلسات  اطفال",
        "count": "4:00",
        "Location": "17",
        "Desc":"null"
    },
    {
        "name": "ZINC ORIGIN 20MG 20TAB",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "ZINCTRON 30 CAP",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "GINKO 40MG/ML ORAL DROPS 30 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "HYDROFERRIN 5G/100ML ORAL DROPS",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "GROWTH FORMULA PREGNANT WOMAN 10 SACHETS",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "PRIMA GROWTH POWDER FOR CHILDREN 8 SACHE",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "BEBELAC 1 MILK 400 GM",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "NAN 1 MILK 400GM",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "ELBAVIT WITH IRON PINEAPPLE SYRUP 60 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "ENRICH  SYRUP 100 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "HI-CAL 1.2G/5ML SYRUP",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "IMMULANT SYRUP 120 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "OMEGA SEAS SYRUP 120 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "OSTEOCARE SYRUP 120 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "POTASSIUM M 3.3GM/100ML SYRUP 120 ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "SANSOVIT PLUS SYRUP 100ML",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "CERELAC 125GM 3فواكه وقمح ولبن",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "GROWTH FORMULA  WG ADULT 400GM",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "GROWTH FORMULA FOR KIDS CHOCOLATE400 GM",
        "count": "1:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "VITACID C 500MG EFF. GRAN. IN SACHETS",
        "count": "1:01",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "ENRICH  DROPS",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "PRIMA GROWTH POWDER 8 SACHETS",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "FEROGLOBIN B12 SYRUP 120ML",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "HAEMOJET 50MG/5ML SYRUP",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "MAXICAL D SYRUP 120 ML",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "CERELAC 125GM قمح مع لبن",
        "count": "2:00",
        "Location": "18",
        "Desc":"null"
    },
    {
        "name": "VIDROP ORAL DROPS 15ML",
        "count": "3:00",
        "Location": "18",
        "Desc":"null"
    }
    // أضف باقي البيانات هنا
  ];
  
  // تحويل البيانات إلى سلسلة JSON
  const drugDataString = JSON.stringify(drugData);
  
  // رفع البيانات إلى localStorage
  localStorage.setItem('productList', drugDataString);
  
  // للتحقق من رفع البيانات بنجاح يمكنك استخدام الكود التالي:
  console.log('Data uploaded to localStorage:', JSON.parse(localStorage.getItem('drugData')));
  