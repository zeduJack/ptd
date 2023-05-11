export interface Menu {
    abschnitte: Abschnitt[];
}

interface Abschnitt {
    titel: string;
    menus: MenuItem[];
}

interface MenuItem {
    id: string;
    titel: string;
    bild?: string;
    titelThai: string;
    beschreibung: string;
    preis?: Preis;
}

interface Preis {
    einheitspreis?: string;
    klein?: string;
    gross?: string;
    aufzaehlung?: string[]
}

const grosseAufzaehlung = [
    'Vegi 24.50',
    'mit Tofu 27.50',
    'mit Pouletfleisch 27.50',
    'mit Schweinefleisch 27.50',
    'mit Crevetten 28.50',
    'mit Rindfleisch 29.50',
    'mit Ente 29.50'
];

export const menu: Menu = {
    abschnitte: [
        {
            titel: 'Vorspeisen',
            menus: [
                {
                    id: '01',
                    titel: 'Peek Gai Tod',
                    titelThai: 'ปีกไก่ทอด',
                    beschreibung: 'Frittierte Pouletflüggeli mit Austern- und Sojasauce gewürtz.',
                    preis: {
                        klein: 'K. 4 Stk. 10.50',
                        gross: 'G. 8 Stk. 19.50'
                    }
                },
                {
                    id: '02',
                    titel: 'Gung Chup Pang Tod',
                    titelThai: 'กุ้งชุบแป้งทอด',
                    beschreibung: 'Frittierte Scampi in Knusper-Panade',
                    preis: {
                        klein: 'K. 4 Stk. 10.50',
                        gross: 'G. 8 Stk. 19.50'
                    }
                },
                {
                    id: '03',
                    titel: 'Frühlingsrollen',
                    titelThai: 'ปอเปี๊ยะทอด',
                    beschreibung: 'Frühlingsrollen / Mit Gemüse und Glasnudeln gefüllt.',
                    preis: {
                        klein: 'K. 4 Stk. 10.50',
                        gross: 'G. 8 Stk. 19.50'
                    }
                },
                {
                    id: '04',
                    titel: 'Triangoli Samoza',
                    titelThai: 'ซาโมซ่า',
                    beschreibung: 'Gefüllt mit Gartoffeln und gelbem Curry.',
                    preis: {
                        klein: 'K. 4 Stk. 10.50',
                        gross: 'G. 8 Stk. 19.50'
                    }
                },
                {
                    id: '05',
                    titel: 'Pouletspiessli',
                    titelThai: 'ไก่สะเต๊ะ',
                    beschreibung: 'Pouletspiessli / Mit Curry Paste und Thai Gewürzen.',
                    preis: {
                        klein: 'K. 4 Stk. 14.50',
                        gross: 'G. 8 Stk. 26.00'
                    }
                },
                {
                    id: '06',
                    titel: 'Toong Tong',
                    titelThai: 'ถุงทอง',
                    beschreibung: 'Traditionelle Thai Frühlingsrollen gefüllt mit Gemüse.',
                    preis: {
                        klein: 'K. 4 Stk. 14.50',
                        gross: 'G. 8 Stk. 26.00'
                    }
                },
                {
                    id: '07',
                    titel: 'Som Tam',
                    bild: '/images/CA1_5401.jpg',
                    titelThai: 'ส้มตำ',
                    beschreibung: 'Grüner Papaya Salat mit Karrotenstreifen, Erdnüssen, Chili und Limettensaft.',
                    preis: {
                        klein: 'K. 15.50',
                        gross: 'G. 27.00'
                    }
                },
                {
                    id: '08',
                    titel: 'Thai Samosa',
                    titelThai: 'ไทยซาโมซ่า',
                    beschreibung: 'Gefüllt mit Gartoffeln und gelbem Curry (mit Pouletfleisch und Gemüse).',
                    preis: {
                        klein: '14.50',
                        gross: '26.00'
                    }
                },
                {
                    id: '11',
                    titel: 'Vorspeisen Mix',
                    bild: '/images/CA1_5381.jpg',
                    titelThai: 'รวมมิตร',
                    beschreibung: 'Gemischter Vorspeiseteller.',
                    preis: {
                        klein: 'K. 21.50',
                        gross: 'G. 35.00'
                    }
                }
            ]
        },
        {
            titel: 'Salat (inklusive Reis)',
            menus: [
                {
                    id: '12',
                    titel: 'Pla Kung',
                    titelThai: 'พล่ากุ้ง',
                    beschreibung: 'Würzige Garnelen mit Zitronenblättern, Pfefferminze Chalotten, Chili und Zitronensaft.',
                    preis: {
                        einheitspreis: '28.50'
                    }
                },
                {
                    id: '13',
                    titel: 'Nam Tok',
                    titelThai: 'น้ำตก',
                    beschreibung: 'Grillierter Fleischsalat mit geröstetem Reis serviert mit Blattsalat.',
                    preis: {
                        aufzaehlung: [
                            'mit Schweinefleisch 27.50',
                            'mit Rindfleisch 29.50'
                        ]
                    }
                },
                {
                    id: '14',
                    titel: 'Laab',
                    titelThai: 'ลาบ',
                    beschreibung: 'Hackfleischsalat mit Zitronenblättern, Pfefferminze, Chalotten, Zitronensaft und Chili.',
                    preis: {
                        aufzaehlung: [
                            'mit Pouletfleisch 27.50',
                            'mit Schweinefleisch 27.50',
                            'mit Rindfleisch 29.50'
                        ]
                    }
                },
                {
                    id: '15',
                    titel: 'Yam Nuer',
                    titelThai: 'ยำเนื้อ',
                    beschreibung: 'Blattsalat mit Rindfleischstreifen, Gurken, Zwiebeln, Zitronensaft und Chili.',
                    preis: {
                        einheitspreis: '30.50'
                    }
                },
                {
                    id: '16',
                    titel: 'Yam Woonsen',
                    titelThai: 'ยำวุ้นเส้น',
                    beschreibung: 'Glasnudeln mit gehacktem Schweinefleisch, Pilzen, Zwiebeln, Tomaten, Erdnüssen, Koriander und Chili.',
                    preis: {
                        aufzaehlung: [
                            'mit Schweinefleisch 28.50',
                            'mit Seafood 30.50',
                        ]
                    }
                }
            ]
        },
        {
            titel: 'Hauptgang (inklusive Reis)',
            menus: [
                {
                    id: '17',
                    titel: 'Khao Pad',
                    titelThai: 'ข้าวผัด',
                    beschreibung: 'Gebratener Reis mit Karotten, Zwiebeln, Thaigemüse, Broccoli und Eier.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '18',
                    titel: 'Pad Phak Ruam',
                    titelThai: 'ผัดผักรวม',
                    beschreibung: 'Gebratenes Mischgemüse mit Sojasauce und Austernsauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '19',
                    titel: 'Pad Nam Man Hoi',
                    titelThai: 'ผัดน้ำมันหอย',
                    beschreibung: 'Gebratenes Rindfleisch mit Mischgemüse, Sojasauce und Austernsauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '20',
                    titel: 'Pad Med Ma Muang',
                    titelThai: 'ผัดเม็ดมะม่วง',
                    beschreibung: 'Gebratenes Gemüse mit Sellerie, Pilzen, Zwiebeln, Chili und Caschewnüssen.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '21',
                    titel: 'Pad Nam Prig Pao',
                    titelThai: 'ผัดน้ำพริกเผา',
                    beschreibung: 'Gebratenes Gemüse mit Chilipaste, Bohnen, Bamboossprossen, Zitronenblättern und Thaibasilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '22',
                    titel: 'Pad Priew Wan',
                    titelThai: 'ผัดเปรี้ยวหวาน',
                    beschreibung: 'Sweet and Sour Sauce mit Ananas, Zwiebeln, Tomaten, Karotten und Gurken.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '23',
                    titel: 'Pad Ka Prao',
                    titelThai: 'ผัดกะเพรา',
                    beschreibung: 'Gebratene Chili, Zwiebeln, Bohnen, Bamboossprossen und Thai Basilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '24',
                    titel: 'Pad Kung Sauce Makham',
                    titelThai: 'ผัดกุ้งซอสมะขาม',
                    beschreibung: 'Gebratenes Crevettenpaste mit Tamarinedsauce, Pak Choi und Karotten.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '25',
                    titel: 'Pad Pak Choi',
                    titelThai: 'ผัดบ๊อกซอย',
                    beschreibung: 'Gebratener Pak Choi mit Austernsauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '26',
                    titel: 'Pad Pak Kad Khao',
                    titelThai: 'ผัดผักกาดขาว',
                    beschreibung: 'Gebratener Chinakohl mit Austernsauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '27',
                    titel: 'Pad Khee Mao',
                    titelThai: 'ผัดขี้เมา',
                    beschreibung: 'Gebratene Eiernudeln mit Mischgemüse, Chili und Basilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '28',
                    titel: 'Pad Khing',
                    titelThai: 'ผัดขิง',
                    beschreibung: 'Gebratenes Mischgemüse mit Ingwerstreifen.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '29',
                    titel: 'Nua Dad Diew',
                    titelThai: 'เนื้อแดดเดียว',
                    beschreibung: 'Fritiertes Trockenleisch.',
                    preis: {
                        aufzaehlung: [
                            'Schweinefleisch 25.00',
                            'Rindfleisch 27.50'
                        ]
                    }
                }
            ]
        },
        {
            titel: 'Suppen (Vorspeisen)',
            menus: [
                {
                    id: '30',
                    titel: 'Tom Kha Suppe (klein)',
                    titelThai: 'ต้มข่า',
                    beschreibung: 'Traditionelle Thai Suppe / Pilze, Zwibeln, Tomaten, Zitronengrass, Galanga, Sellerie und Koriander.',
                    preis: {
                        aufzaehlung: [
                            'mit Puletfleisch 12.00',
                            'mit Crevetten 12.50'
                        ]
                    }
                },
                {
                    id: '31',
                    titel: 'Tom Yum Kung Suppe (klein)',
                    titelThai: 'ต้มยำกุ้ง',
                    beschreibung: 'Suppe mit Chillipaste, Pilzen, Zitronenblättern, Galanga, Tomaten, Zitronengrass, Zwibeln, Sellerie, Koreander und Zitronensaft.',
                    preis: {
                        aufzaehlung: [
                            'mit Puletfleisch 12.00',
                            'mit Crevetten 12.50'
                        ]
                    }
                }
            ]
        },
        {
            titel: 'Curry (inklusive Reis)',
            menus: [
                {
                    id: '32',
                    bild: '/images/CA1_5317.jpg',
                    titel: 'Gang Phed',
                    titelThai: 'แกงเผ็ด',
                    beschreibung: 'Rotes Thaicurry mit Kokosnussmilch, Kürbis, Zuchhetti, Bohnen Bambussprossen, Zitronenblättern und Basilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '33',
                    bild: '/images/CA1_5344.jpg',
                    titel: 'Gang Panaeng',
                    titelThai: 'พะแนง',
                    beschreibung: 'Panang mit Currypaste mit Kokosnussmilch, Kürbis und Zitonenblättern.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '34',
                    titel: 'Gang Kheaw Whan',
                    titelThai: 'แกงเขียวหวาน',
                    beschreibung: 'Grüne Currypaste mit Kokosnussmilch, Kürbis, Bohnen, Bambussprossen, Karotten, Zucchini und Basilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '35',
                    titel: 'Mussaman Curry',
                    titelThai: 'แกงมัสมั่น',
                    beschreibung: 'Massaman Curry/ Gelbe Currypaste mit Kartofeln, Kokosnussmilch und Erdnüssen.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                }
            ]
        },
        {
            titel: 'Nudeln',
            menus: [
                {
                    id: '36',
                    titel: 'Pad Thai',
                    bild: '/images/CA1_5368.jpg',
                    titelThai: 'ผัดไทย',
                    beschreibung: 'Gebratene Reisnudeln mit Karotten, Soyasprossen, Erdnüssen, Eier, Gemüse und Pad Thai Sauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '37',
                    titel: 'Pad Si Ewe',
                    titelThai: 'ผัดซีอิ๊ว',
                    beschreibung: 'Gebratende Reisnudeln mit Broccoli, Karotten, Soyasauce, Pak Choi und Eiern.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '38',
                    titel: 'Pad Mee Sua',
                    titelThai: 'ผัดหมี่ซั่ว',
                    beschreibung: 'Gebratende Reisnudeln mit Broccoli, Karotten, Soyasauce, Pak Choi und Eiern.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '39',
                    titel: 'Pad Khee Mao Nudeln',
                    titelThai: 'ผัดขี้เมา',
                    beschreibung: 'Gebratende Reisnudeln mit Mischgemüse, Chili und Basilikum.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '40',
                    titel: 'Rad Nha',
                    titelThai: 'ราดหน้า',
                    beschreibung: 'Gebratende Eiernudeln mit Broccoli und Eiern.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '41',
                    titel: 'Suki Yaki',
                    titelThai: 'สุกี้ยากี้',
                    beschreibung: 'Glasnudelsuppe mit Mischgemüse, Thai Sellerie, Koriander, Eiern und Suki Yakie Sauce.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                },
                {
                    id: '42',
                    bild: '/images/CA1_2812.jpg',
                    titel: 'Guay Tiew',
                    titelThai: 'ก๋วยเตี๋ยว',
                    beschreibung: 'Reisnudelsuppe mit Gemüse und Sojasprossen.',
                    preis: {
                        aufzaehlung: grosseAufzaehlung
                    }
                }
            ]
        },
        {
            titel: 'Ente',
            menus: [
                {
                    id: '43',
                    titel: 'Ped Yang',
                    titelThai: 'เป็ดย่าง',
                    beschreibung: 'Gebackene Ente.',
                    preis: {
                        aufzaehlung: [
                            'Halbe Ente 32.50',
                            'Ganze Ente 61.50'
                        ]
                    }
                },
                {
                    id: '44',
                    bild: '/images/CA1_5409.jpg',
                    titel: 'Ped Orange',
                    titelThai: 'เป็ดส้ม',
                    beschreibung: 'Knusprig grillierte Ente verfeinert mit Orangensauce.',
                    preis: {
                        einheitspreis: '32.50'
                    }
                },
                {
                    id: '45',
                    titel: 'Ped Toon',
                    titelThai: 'เป็ดตุ๋น',
                    beschreibung: 'Ente Suppe mit Chinesischen Kräutern.',
                    preis: {
                        einheitspreis: '32.50'
                    }
                }
            ]
        },
        {
            titel: 'Ganzer Fisch',
            menus: [
                {
                    id: '46',
                    titel: 'Pla Rad Prig',
                    titelThai: 'ปลาราดพริก',
                    beschreibung: 'Ganzer fritierter Fisch mit Gemüse und Chilisauce.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                },
                {
                    id: '47',
                    titel: 'Pla Tod Sa Moon Prai',
                    titelThai: 'ปลาทอดสมุนไพร',
                    beschreibung: 'Ganzer fritierter Fisch mit Chili, Ingwer, Sellerie, Karotten und Koriander.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                },
                {
                    id: '48',
                    titel: 'Pla Tod',
                    titelThai: 'ปลาทอด',
                    beschreibung: 'Ganzer fritierter Fisch.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                },
                {
                    id: '49',
                    titel: 'Chu Chee Pla',
                    titelThai: 'ฉู่ฉี่ปลา',
                    beschreibung: 'Ganzer fritierter Fisch mit rotem Curry und Zitronenblättern.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                },
                {
                    id: '50',
                    bild: '/images/CA1_5360.jpg',
                    titel: 'Pla Neung Ma Now',
                    titelThai: 'ปลานึ่งมะนาว',
                    beschreibung: 'Gedämpfter Fisch mit scharfer Limettensauce.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                },
                {
                    id: '51',
                    titel: 'Pla Neung See Ewe',
                    titelThai: 'ปลานึ่งซีอิ๊ว',
                    beschreibung: 'Gedämfter Fisch mit Sojasauce und Ingwer.',
                    preis: {
                        einheitspreis: '40.00'
                    }
                }
            ]
        },
        {
            titel: 'Suppe',
            menus: [
                {
                    id: '52',
                    titel: 'Tom Kha Suppe',
                    titelThai: 'ต้มข่า',
                    beschreibung: ' Thai Suppe mit Kokonussmilch, Pilzen, Zwiebeln, Tomaten, Zitronengras, Galangal, Sellerie und Koriander.',
                    preis: {
                        aufzaehlung: [
                            'mit Puletfleisch 27.50',
                            'mit Crevetten 28.50'
                        ]
                    }
                },
                {
                    id: '53',
                    titel: 'Tom Yam Suppe',
                    titelThai: 'ต้มยำ',
                    beschreibung: 'Suppe mit Chilipaste, Pilzen, Zitronengrass, Limettenblättern, Galangal, Tomaten, Zwiebeln und Koriander.',
                    preis: {
                        aufzaehlung: [
                            'mit Puletfleisch 27.50',
                            'mit Crevetten 28.50'
                        ]
                    }
                },
                {
                    id: '54',
                    titel: 'Tom Yam Poh Tak',
                    titelThai: 'ต้มยำโป๊ะแตก',
                    beschreibung: 'Suppe mit Chilipaste, Pilzen, Zitronengrass, Limettenblättern, Galangal, Tomaten, Zwiebeln, Sellerie, Basilikum und Koriander.',
                    preis: {
                        aufzaehlung: [
                            'mit Seafood 30.50'
                        ]
                    }
                },
            ]
        },
        {
            titel: 'Dessert',
            menus: [
                {
                    id: '55',
                    titel: 'Khaow Neaw Ma Muang',
                    titelThai: 'ข้าวเหนียวมะม่วง',
                    beschreibung: 'Süsser Klebereis mit Mango und Kokosnussmilch.',
                    preis: {
                        einheitspreis: '15.50'
                    }
                },
                {
                    id: '56',
                    titel: 'Klauy Kai Buat Chi',
                    titelThai: 'กล้วยไข่บวชชี',
                    beschreibung: 'Gedämfte Bananen in Kokosnussmich.',
                    preis: {
                        einheitspreis: '9.50'
                    }
                },
                {
                    id: '57',
                    titel: 'Bua Loi Puak',
                    titelThai: 'บัวลอยเผือก',
                    beschreibung: 'Tarobällchen in Kokosnusscreme.',
                    preis: {
                        einheitspreis: '9.50'
                    }
                }
            ]
        }
    ]
}